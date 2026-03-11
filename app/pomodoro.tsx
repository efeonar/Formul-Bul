import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert, StatusBar } from 'react-native';

export default function Pomodoro() {
    const BASLANGIC_DAKIKA = 25;
    const BASLANGIC_SANIYE = 0;

    const [dakika, setDakika] = useState(BASLANGIC_DAKIKA);
    const [saniye, setSaniye] = useState(BASLANGIC_SANIYE);
    const [calisiyorMu, setCalisiyorMu] = useState(false);

    useEffect(() => {
        let zamanlayici: any = null;

        if (calisiyorMu) {
            zamanlayici = setInterval(() => {
                if (saniye === 0 && dakika === 0) {
                    setCalisiyorMu(false);
                    Alert.alert("Süre Bitti!", "Kısa bir mola ver.");
                    clearInterval(zamanlayici);
                } else if (saniye === 0) {
                    setDakika((d) => d - 1);
                    setSaniye(59);
                } else {
                    setSaniye((s) => s - 1);
                }
            }, 1000);
        }

        return () => {
            if (zamanlayici) clearInterval(zamanlayici);
        };
    }, [calisiyorMu, dakika, saniye]);

    const sifirla = () => {
        setCalisiyorMu(false);
        setDakika(BASLANGIC_DAKIKA);
        setSaniye(BASLANGIC_SANIYE);
    };

    const formatla = (sayi: number) => (sayi < 10 ? `0${sayi}` : sayi);

    return (
        <View style={styles.container}>
            <StatusBar barStyle="light-content" />

            <Text style={styles.baslik}>ODAKLAN</Text>

            <Text style={styles.sayac}>
                {formatla(dakika)}:{formatla(saniye)}
            </Text>

            <Text style={styles.durum}>

            </Text>

            <View style={styles.butonKutusu}>
                <TouchableOpacity
                    style={[styles.btn, styles.btnBaslat, calisiyorMu && styles.btnDurdur]}
                    onPress={() => setCalisiyorMu(!calisiyorMu)}
                >
                    <Text style={[styles.btnYazi, calisiyorMu && styles.btnYaziDurdur]}>
                        {calisiyorMu ? "DURDUR" : "BAŞLAT"}
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={[styles.btn, styles.btnSifirla]}
                    onPress={sifirla}
                >
                    <Text style={styles.btnYaziSifirla}>SIFIRLA</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#000000'
    },
    baslik: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 40,
        color: '#666',
        letterSpacing: 4
    },
    sayac: {
        fontSize: 90,
        fontWeight: '300',
        color: '#FFFFFF',
        fontVariant: ['tabular-nums']
    },
    durum: {
        fontSize: 16,
        marginTop: 10,
        marginBottom: 60,
        color: '#444'
    },
    butonKutusu: {
        flexDirection: 'row',
        gap: 20
    },
    btn: {
        width: 130,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 25,
        borderWidth: 1,
    },
    btnBaslat: {
        borderColor: '#fff',
    },
    btnDurdur: {
        borderColor: '#FFD700',
    },
    btnSifirla: {
        borderColor: '#ff4444',
    },
    btnYazi: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 14,
        letterSpacing: 1
    },
    btnYaziDurdur: {
        color: '#FFD700'
    },
    btnYaziSifirla: {
        color: '#ff4444'
    }
});