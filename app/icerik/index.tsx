import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Image } from 'react-native';
import { router } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import Octicons from '@expo/vector-icons/Octicons';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Index() {
    const dersler = [
        { ad: 'Matematik', renk: '#FF6B6B', ikon: 'number', aile: 'Octicons' },
        { ad: 'Fizik', renk: '#4ECDC4', ikon: 'magnet-outline', aile: 'Ionicons' },
        { ad: 'Kimya', renk: '#A06CD5', ikon: 'flask-outline', aile: 'Ionicons' },
    ];

    const logoUrl = 'https://picsum.photos/id/64/200/200';
    return (

        <SafeAreaView style={styles.container} edges={['top', 'left', 'right']}>

            <View style={styles.headerArea}>

                <Image
                    source={require('../../proje_gorsel/uygulama_logo.jpg')}
                    style={styles.logoImage}
                />


                <Text style={styles.appTitle}>
                    Formül <Text style={styles.appTitleAccent}>B</Text>
                    <Text style={styles.appTitleAccent2}>u</Text>
                     <Text style={styles.appTitleAccent3}>l</Text>
                </Text>

            </View>


            <ScrollView contentContainerStyle={styles.scrollArea}>
                {dersler.map((ders) => (
                    <TouchableOpacity
                        key={ders.ad}
                        style={[styles.card, { backgroundColor: ders.renk }]}
                        onPress={() => {
                            router.push({
                                pathname: "/icerik/[ders]",
                                params: { ders: ders.ad }
                            });
                        }}
                        activeOpacity={0.8}
                    >
                        <View style={styles.iconContainer}>
                            {ders.aile === 'Octicons' ? (
                                <Octicons name={ders.ikon as any} size={32} color={ders.renk} />
                            ) : (
                                <Ionicons name={ders.ikon as any} size={32} color={ders.renk} />
                            )}
                        </View>
                        <View style={styles.textContainer}>
                            <Text style={styles.cardTitle}>{ders.ad}</Text>
                        </View>
                        <Ionicons name="chevron-forward" size={28} color="white" />
                    </TouchableOpacity>
                ))}
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#F5F7FA' },

    headerArea: {
        paddingHorizontal: 20,
        paddingTop: 15,
        paddingBottom: 25,
        flexDirection: 'row',
        alignItems: 'center',

    },
    appTitle: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#333',
        marginLeft: 15
    },
    appTitleAccent: {
        color: '#cd4e4e'
    },
    appTitleAccent2: {
        color: '#4ECDC4'
    },
    appTitleAccent3: {
        color: '#A06CD5'
    },
    logoImage: {
        width: 45,
        height: 45,
        borderRadius: 12,
        backgroundColor: '#ddd'
    },

    scrollArea: { paddingHorizontal: 20, paddingBottom: 20 },
    card: { flexDirection: 'row', alignItems: 'center', padding: 20, borderRadius: 16, marginBottom: 15, height: 100, shadowColor: "#000", shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.1, shadowRadius: 3, elevation: 3 },
    iconContainer: { backgroundColor: '#FFFFFF', padding: 12, borderRadius: 12, marginRight: 15, justifyContent: 'center', alignItems: 'center' },
    textContainer: { flex: 1 },
    cardTitle: { fontSize: 22, fontWeight: 'bold', color: 'white' }
});