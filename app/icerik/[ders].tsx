import React from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity, ActivityIndicator, StatusBar } from 'react-native';
import { useLocalSearchParams, router } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import Octicons from '@expo/vector-icons/Octicons';
import { useQuery } from 'convex/react';
import { api } from '../../convex/_generated/api';


const DERS_CONFIG: Record<string, { renk: string, arkaplan: string, ikon: string, aile: 'Octicons' | 'Ionicons' }> = {
    'Matematik': {
        renk: '#FF6B6B',
        arkaplan: '#FFF0F0',
        ikon: 'number',
        aile: 'Octicons'
    },
    'Fizik': {
        renk: '#4ECDC4',
        arkaplan: '#E0F7FA',
        ikon: 'magnet-outline',
        aile: 'Ionicons'
    },
    'Kimya': {
        renk: '#A06CD5',
        arkaplan: '#F3E5F5',
        ikon: 'flask-outline',
        aile: 'Ionicons'
    },
};

export default function DersListesi() {
    const { ders } = useLocalSearchParams();
    const dersAdi = typeof ders === 'string' ? ders : "";

    const config = DERS_CONFIG[dersAdi] || {
        renk: '#555',
        arkaplan: '#f8f9fa',
        ikon: 'book-outline',
        aile: 'Ionicons'
    };

    const yaziRengi = '#fff';

    const formuller = useQuery(api.formuller.dersIcerikleriniGetir, { dersAdi: dersAdi });

    if (formuller === undefined) {
        return (
            <View style={[styles.center, { backgroundColor: config.arkaplan }]}>
                <ActivityIndicator size="large" color={config.renk} />
            </View>
        );
    }

    return (
        <View style={[styles.container, { backgroundColor: config.arkaplan }]}>
            <StatusBar barStyle="light-content" />


            <View style={[styles.header, { backgroundColor: config.renk }]}>
                <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
                    <Ionicons name="arrow-back" size={24} color={yaziRengi} />
                </TouchableOpacity>

                <View style={{ marginRight: 10 }}>
                    {config.aile === 'Octicons' ? (
                        <Octicons name={config.ikon as any} size={26} color={yaziRengi} />
                    ) :
                        (
                        <Ionicons name={config.ikon as any} size={26} color={yaziRengi} />
                    )}
                </View>

                <Text style={[styles.headerTitle, { color: yaziRengi }]}>{dersAdi}</Text>
            </View>

            {/* LİSTE */}
            <FlatList
                data={formuller}
                keyExtractor={(item) => item._id}
                contentContainerStyle={{ padding: 20 }}
                renderItem={({ item }) => (
                    <TouchableOpacity
                        style={styles.itemCard}
                        onPress={() => {
                            router.push({
                                pathname: "/icerik/detay",
                                params: { id: item._id }
                            });
                        }}
                    >



                        <View style={[styles.bulletPoint, { backgroundColor: config.renk }]} />

                        <Text style={styles.itemText}>
                            {item.konuAdi || item.baslik || "İsimsiz Konu"}
                        </Text>

                        <Ionicons name="chevron-forward" size={24} color="#ccc" />
                    </TouchableOpacity>
                )}
                ListEmptyComponent={
                    <View style={styles.center}>
                        <Text style={{textAlign:'center', marginTop:10, color:'gray'}}>
                            Liste Boş.
                        </Text>
                    </View>
                }
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1 },
    center: { flex: 1, justifyContent: 'center', alignItems: 'center', padding:20 },
    header: {
        paddingTop: 50,
        paddingBottom: 20,
        paddingHorizontal: 20,
        flexDirection: 'row',
        alignItems: 'center',
        elevation: 5,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
    },
    backButton: { marginRight: 10 },
    headerTitle: { fontSize: 24, fontWeight: 'bold' },

    itemCard: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 18, // Biraz daha ferah olsun
        backgroundColor: '#fff',
        borderRadius: 16,
        marginBottom: 12,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.05,
        shadowRadius: 3,
        elevation: 2
    },

    bulletPoint: {
        width: 10,
        height: 10,
        borderRadius: 4,
        marginRight: 12,
        opacity: 0.6
    },
    itemText: { fontSize: 17, color: '#333', fontWeight: '600', flex: 1 }
});