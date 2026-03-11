import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image, Linking, ActivityIndicator } from 'react-native';
import { useLocalSearchParams, router } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { useQuery, useMutation } from 'convex/react';
import { api } from '../../convex/_generated/api';
import { Id } from '../../convex/_generated/dataModel';

export default function DetaySayfasi() {
    const { id } = useLocalSearchParams();
    const konu = useQuery(api.formuller.konuDetayGetir, { id: id as Id<"konular"> });
    const favoriDegistir = useMutation(api.formuller.favoriYap);

    if (konu === undefined) return <ActivityIndicator size="large" color="#4ECDC4" style={styles.center} />;
    if (konu === null) return <View style={styles.center}><Text>Konu bulunamadı.</Text></View>;

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
                    <Ionicons name="arrow-back" size={28} color="#333" />
                </TouchableOpacity>
                <Text style={styles.headerTitle} numberOfLines={1}>{konu.konuAdi}</Text>

                <TouchableOpacity onPress={() => favoriDegistir({ id: konu._id, durum: !konu.favoriMi })}>
                    <Ionicons
                        name={konu.favoriMi ? "star" : "star-outline"}  // heart yerine star
                        size={28}
                        color={konu.favoriMi ? "#FFD700" : "#333"}      // Kırmızı yerine Altın Sarısı (#FFD700)
                    />
                </TouchableOpacity>

            </View>

            <ScrollView contentContainerStyle={styles.content}>
                {konu.resimKodu ? (
                    <Image source={konu.resimKodu} style={styles.image} resizeMode="contain" />
                ) : (
                    <View style={styles.placeholderImage}>
                        <Ionicons name="image-outline" size={50} color="#ccc" />
                        <Text style={{color:'#999'}}>Görsel Yok</Text>
                    </View>
                )}

                <View style={styles.card}>
                    <Text style={styles.sectionTitle}>Konu Özeti</Text>
                    <Text style={styles.description}>{konu.aciklama}</Text>
                </View>

                {konu.videoLink ? (
                    <TouchableOpacity
                        style={styles.videoButton}
                        onPress={() => Linking.openURL(konu.videoLink)}
                    >
                        <Ionicons name="logo-youtube" size={24} color="white" />
                        <Text style={styles.videoButtonText}>Konu Anlatımını İzle</Text>
                    </TouchableOpacity>
                ) : null}
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#F5F7FA' },
    center: { flex: 1, justifyContent: 'center', alignItems: 'center' },
    header: {
        paddingTop: 50, paddingBottom: 15, paddingHorizontal: 20,
        backgroundColor: '#fff', flexDirection: 'row', alignItems: 'center',
        justifyContent: 'space-between', elevation: 2
    },
    backButton: { padding: 5 },
    headerTitle: { fontSize: 20, fontWeight: 'bold', color: '#333', flex: 1, textAlign: 'center' },
    content: { padding: 20 },
    image: { width: '100%', height: 200, borderRadius: 12, backgroundColor: '#fff', marginBottom: 20 },
    placeholderImage: { width: '100%', height: 200, borderRadius: 12, backgroundColor: '#e0e0e0', justifyContent: 'center', alignItems: 'center', marginBottom: 20 },
    card: { backgroundColor: '#fff', padding: 20, borderRadius: 16, marginBottom: 20, elevation: 1 },
    sectionTitle: { fontSize: 18, fontWeight: 'bold', marginBottom: 10, color: '#4ECDC4' },
    description: { fontSize: 16, lineHeight: 24, color: '#555' },
    videoButton: {
        flexDirection: 'row', alignItems: 'center', justifyContent: 'center',
        backgroundColor: '#FF0000', padding: 15, borderRadius: 12, elevation: 3
    },
    videoButtonText: { color: 'white', fontSize: 16, fontWeight: 'bold', marginLeft: 10 }
});