import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, Image, ActivityIndicator } from 'react-native';
import { useRouter } from 'expo-router';
import { useQuery } from 'convex/react';
import { api } from '../convex/_generated/api';
import { Ionicons } from '@expo/vector-icons';

export default function Favorilerim() {
    const router = useRouter();

    // Sadece favoriMi = true olanları çekiyoruz
    const favoriler = useQuery(api.formuller.favorileriGetir);

    if (favoriler === undefined) {
        return (
            <View style={styles.center}>
                <ActivityIndicator size="large" color="#4ECDC4" />
            </View>
        );
    }

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Favorilerim</Text>

            {favoriler.length === 0 ? (
                <View style={styles.emptyContainer}>
                    <Ionicons name="heart-dislike-outline" size={80} color="#e0e0e0" />
                    <Text style={styles.emptyText}>Henüz favorin yok.</Text>
                    <Text style={styles.subText}>Derslerin içindeki kalp butonuna basarak ekleyebilirsin.</Text>
                </View>
            ) : (
                <FlatList
                    data={favoriler}
                    keyExtractor={(item) => item._id}
                    contentContainerStyle={{ paddingBottom: 20 }}
                    renderItem={({ item }) => (
                        <TouchableOpacity
                            style={styles.card}
                            activeOpacity={0.7}
                            onPress={() => {
                                router.push({
                                    pathname: "/icerik/detay",
                                    params: { id: item._id }
                                });
                            }}
                        >
                            {item.resimKodu ? (
                                <Image source={item.resimKodu} style={styles.cardImage} resizeMode="cover" />
                            ) : (
                                <View style={[styles.cardImage, {backgroundColor:'#eee', justifyContent:'center', alignItems:'center'}]}>
                                    <Ionicons name="image-outline" size={24} color="#ccc"/>
                                </View>
                            )}

                            <View style={styles.info}>
                                <Text style={styles.title} numberOfLines={1}>{item.konuAdi}</Text>
                                <Text style={styles.subtitle}>{item.dersAdi}</Text>
                            </View>

                            <Ionicons name="chevron-forward" size={24} color="#ccc" />
                        </TouchableOpacity>
                    )}
                />
            )}
        </View>
    );
}
const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#F5F7FA', paddingTop: 50, paddingHorizontal: 20 },
    center: { flex: 1, justifyContent: 'center', alignItems: 'center' },
    header: { fontSize: 28, fontWeight: 'bold', color: '#333', marginBottom: 20 },
    emptyContainer: { flex: 1, justifyContent: 'center', alignItems: 'center', marginTop: -50 },
    emptyText: { fontSize: 20, fontWeight:'bold', color: '#666', marginTop: 15 },
    subText: { fontSize: 14, color: '#999', marginTop: 5, textAlign:'center', paddingHorizontal:40 },

    card: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
        padding: 10,
        borderRadius: 12,
        marginBottom: 12,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.05,
        shadowRadius: 2,
        elevation: 2
    },
    cardImage: {
        width: 60, height: 60, borderRadius: 10, marginRight: 15
    },
    info: { flex: 1 },
    title: { fontSize: 16, fontWeight: '600', color: '#333' },
    subtitle: { fontSize: 14, color: '#4ECDC4', marginTop: 2 }
});