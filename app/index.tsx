import React from 'react';
import { View, Text, Button, Alert, ActivityIndicator, StyleSheet } from 'react-native';
import { Redirect } from 'expo-router';
import { useMutation, useQuery } from 'convex/react';
import { api } from '../convex/_generated/api';
import { data } from './data';


import { SafeAreaView } from 'react-native-safe-area-context';

export default function Index() {

    const veriVarMi = useQuery(api.formuller.veriKontrol);
    const yukle = useMutation(api.formuller.veriYukle);
    const [yukleniyor, setYukleniyor] = React.useState(false);

    if (veriVarMi === true) {
        return <Redirect href={"/icerik" as any} />;
    }
    if (veriVarMi === undefined) {
        return (
            <View style={styles.center}>
                <ActivityIndicator size="large" color="#4ECDC4" />
                <Text style={styles.loadingText}>Sistem Hazırlanıyor...</Text>
            </View>
        );
    }


    const kurulumuBaslat = async () => {
        setYukleniyor(true);
        try {
            if (data.Matematik) await yukle({ dersAdi: "Matematik", icerikler: data.Matematik });
            if (data.Fizik) await yukle({ dersAdi: "Fizik", icerikler: data.Fizik });
            if (data.Kimya) await yukle({ dersAdi: "Kimya", icerikler: data.Kimya });

            Alert.alert("Başarılı", "Kurulum tamamlandı! Giriş yapılıyor...");
        } catch (error: any) {
            console.error(error);
            Alert.alert("Hata", "Yükleme sırasında sorun oluştu: " + error.message);
        } finally {
            setYukleniyor(false);
        }
    };


    return (
        <SafeAreaView style={styles.container} edges={['top', 'bottom', 'left', 'right']}>
            <View style={{ alignItems: 'center' }}>
                <Text style={styles.title}>Hoş Geldin</Text>
                <Text style={styles.subText}>
                </Text>

                {yukleniyor ? (
                    <View style={{marginTop: 20}}>
                        <ActivityIndicator size="large" color="#0000ff" />
                        <Text style={{textAlign:'center', marginTop:10}}></Text>
                    </View>
                ) : (
                    <View style={styles.buttonContainer}>
                        <Button title="Kurulumu Başlat" onPress={kurulumuBaslat} />
                    </View>
                )}
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 30, backgroundColor: '#fff' },
    center: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff' },
    title: { fontSize: 28, marginBottom: 15, fontWeight:'bold', color: '#333' },
    subText: { textAlign: 'center', marginBottom: 30, color: '#666', fontSize: 16, lineHeight: 22 },
    loadingText: { marginTop: 15, color: 'gray', fontSize: 14 },
    buttonContainer: { width: '100%', paddingHorizontal: 20, marginTop: 20 }
});