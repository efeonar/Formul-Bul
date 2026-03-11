// data.js
// MEB Müfredatı: TYT ve AYT Kapsamlı Formül Listesi

export const data = {
    Matematik: [

        {
            id: 'mat_tyt_2',
            title: 'Köklü Sayılar',
            image: require('../proje_gorsel/koklu_sayilar.png'),
            description: "İşlem: ⁿ√a . ⁿ√b = ⁿ√(a.b) Üslü Yazım: ⁿ√xᵐ = x^(m/n) Kritik Kural: Çift dereceli kök dışarı mutlak değerle çıkar (√x² = |x|).\",",
            youtubeLink: "https://www.youtube.com/results?search_query=uslu+koklu+sayilar"
        },
        {
            id: 'mat_tyt_3',
            title: 'Mutlak Değer',
            image: require('../proje_gorsel/mutlak_deger.png'),
            description: "|x| < a ise -a < x < a\n|x.y| = |x|.|y|\nMutlak değer uzaklık belirtir, asla negatif çıkmaz.",
            youtubeLink: "https://www.youtube.com/results?search_query=mutlak+deger+tyt"
        },
        {
            id: 'mat_tyt_4',
            title: 'Fonksiyonlar',
            image: require('../proje_gorsel/fonksiyon.png'),
            description: "Birebir ve Örten Fonksiyonlar\nTers Fonksiyon: f(x)=y ise f⁻¹(y)=x\nBileşke: (fog)(x) = f(g(x))",
            youtubeLink: "https://www.youtube.com/results?search_query=fonksiyonlar+konu+anlatimi"
        },
        {
            id: 'mat_ayt_1',
            title: 'Polinomlar',
            image: require('../proje_gorsel/polinom.png'),
            description: "P(x) = ax^n + ... + a0\nP(x)'in (x-a) ile bölümünden kalan P(a)'dır.\nDerece işlemleri: der(P.Q) = der(P)+der(Q)",
            youtubeLink: "https://www.youtube.com/results?search_query=polinomlar+ayt"
        },
        {
            id: 'mat_ayt_2',
            title: '2. Dereceden Denklemler',
            image: require('../proje_gorsel/ikinci_dereceden.png'),
            description: "ax² + bx + c = 0\nDelta (Δ) = b² - 4ac\nKökler Toplamı: -b/a\nKökler Çarpımı: c/a",
            youtubeLink: "https://www.youtube.com/results?search_query=ikinci+dereceden+denklemler"
        },
        {
            id: 'mat_ayt_3',
            title: 'Trigonometri',
            image: require('../proje_gorsel/trigonometri.png'),
            description: "sin²x + cos²x = 1\nToplam-Fark: sin(a+b) = sina.cosb + cosa.sinb\nYarım Açı: sin2x = 2sinx.cosx",
            youtubeLink: "https://www.youtube.com/results?search_query=trigonometri+ayt"
        },
        {
            id: 'mat_ayt_4',
            title: 'Logaritma',
            image: require('../proje_gorsel/logaritma.png'),
            description: "a^x = y <=> x = log_a(y)\nlog(a.b) = log a + log b\nTaban Değiştirme Kuralı.",
            youtubeLink: "https://www.youtube.com/results?search_query=logaritma+ayt"
        },
        {
            id: 'mat_ayt_5',
            title: 'Diziler',
            image: require('../proje_gorsel/diziler.png'),
            description: "Aritmetik Dizi: an = a1 + (n-1)r\nGeometrik Dizi: an = a1 . r^(n-1)",
            youtubeLink: "https://www.youtube.com/results?search_query=diziler+ayt"
        },
        {
            id: 'mat_ayt_6',
            title: 'Limit',
            image: require('../proje_gorsel/limit.png'),
            description: "Soldan ve sağdan limit eşitse limit vardır.",
            youtubeLink: "https://www.youtube.com/results?search_query=limit+ayt"
        },
        {
            id: 'mat_ayt_7',
            title: 'Türev',
            image: require('../proje_gorsel/türev.png'),
            description: "Kuvvet Kuralı: (x^n)' = n.x^(n-1)\nÇarpım: f'.g + g'.f",
            youtubeLink: "https://www.youtube.com/results?search_query=turev+ayt"
        },
        {
            id: 'mat_ayt_8',
            title: 'İntegral',
            image: require('../proje_gorsel/integral.png'),
            description: "Belirsiz İntegral: ∫x^n dx = x^(n+1)/(n+1)+c",
            youtubeLink: "https://www.youtube.com/results?search_query=integral+ayt"
        }
    ],
    Fizik: [

        {
            id: 'fiz_optik_1',
            title: 'Aydınlanma ve Işık Akısı',
            image: require('../proje_gorsel/isik.akisi.png'),
            description: "Temel Kavramlar ve Formüller:\n\n• Işık Şiddeti (I): Kaynağın gücüdür (Candela).\n\n• Işık Akısı (Φ): Kaynaktan çıkan toplam ışık miktarıdır.\nFormül: Φ = 4.π.I\n\n• Aydınlanma Şiddeti (E): Birim yüzeye düşen akıdır.\nFormül: E = I / d² (Dik ise)\nE = (I / d²) . cos(α) (Eğik ise)",
            youtubeLink: "https://www.youtube.com/results?search_query=aydinlanma+isik+akisi+tyt"
        },
        {
            id: 'fiz_isi_sicaklik',
            title: 'Isı ve Sıcaklık',
            image: require('../proje_gorsel/q=mct.jpg'),
            description: "Kel Macit Formülü: Q = m . c . ΔT\n(Isı = Kütle x Özısı x Sıcaklık Değişimi)\n\nHal Değişimi: Q = m . L\nGenleşme: ΔL = L0 . λ . ΔT",
            youtubeLink: "https://www.youtube.com/results?search_query=isi+sicaklik+tyt"
        },


        {
            id: 'f1',
            title: 'Özkütle',
            image: require('../proje_gorsel/ozkutle.jpg'),
            description: "Esas Formül: d = m / V (Özkütle = Kütle / Hacim)\n\nSık Kullanılan Hacim (V) Formülleri:\n• Küre: 4/3 . π . r³\n• Silindir: π . r² . h\n• Prizma: a . b . c",
            youtubeLink: "https://www.youtube.com/results?search_query=ozkutle+madde+ve+ozellikleri"
        },
        {
            id: 'f2',
            title: 'Hareket ve Kuvvet',
            image: require('../proje_gorsel/netkuvvet-formul-1.png'),
            description: "Hız (v) = x / t\nİvme (a) = v / t\nNewton'un 2. Yasası: F = m . a\nSürtünme Kuvveti: Fs = k . N",
            youtubeLink: "https://www.youtube.com/results?search_query=tyt+fizik+hareket"
        },
        {
            id: 'f3',
            title: 'İş, Güç ve Enerji',
            image: require('../proje_gorsel/is_guc_enerji.png'),
            description: "İş (W) = F . x\nPotansiyel Enerji = m.g.h\nKinetik Enerji = 1/2 m.v²\nGüç (P) = W / t",
            youtubeLink: "https://www.youtube.com/results?search_query=is+guc+enerji"
        },
        {
            id: 'f4',
            title: 'Elektrik Devreleri',
            image: require('../proje_gorsel/Ekran görüntüsü 2025-12-13 005714.png'),
            description: "Ohm Yasası: V = I . R\nSeri Bağlama: R = R1 + R2\nParalel Bağlama: 1/R = 1/R1 + 1/R2\nHarcanan Güç: P = i² . R",
            youtubeLink: "https://www.youtube.com/results?search_query=elektrik+devreleri"
        },
        {
            id: 'f5',
            title: 'Optik',
            image: require ('../proje_gorsel/optik_formul.webp'),
            description: "Odak Uzaklığı Formülü:\n1/f = 1/Dc ± 1/Dg\n\nSnell Yasası (Kırılma):\nn1 . sin(i) = n2 . sin(r)",
            youtubeLink: "https://www.youtube.com/results?search_query=optik+aynalar+mercekler"
        },
        {
            id: 'f6',
            title: 'Atışlar',
            image: require('../proje_gorsel/atislar.png'),
            description: "Serbest Düşme Yüksekliği: h = 1/2 . g . t² (h=5t²)\nHız: V = g . t\nZamansız Hız Denklemi: V² = 2gh",
            youtubeLink: "https://www.youtube.com/results?search_query=atislar+fizik"
        },
        {
            id: 'f7',
            title: 'Çembersel Hareket',
            image:require('../proje_gorsel/cembersel.png'),
            description: "Açısal Hız: w = 2π / T\nMerkezcil Kuvvet: F = m . w² . r\nKaçış Hızı ve Kepler Yasaları.",
            youtubeLink: "https://www.youtube.com/results?search_query=cembersel+hareket"
        }
    ],
    Kimya: [

        {
            id: 'kim_tyt_1',
            title: 'Atom ve Periyodik Sistem',
            image: require('../proje_gorsel/periyodik_tablo.png'),
            description: "İzotop, İzoton, İzobar Atomlar\nPeriyodik Cetvel Özellikleri\nİyonlaşma Enerjisi",
            youtubeLink: "https://www.youtube.com/results?search_query=atom+ve+periyodik+sistem"
        },
        {
            id: 'kim_tyt_2',
            title: 'Kimyasal Türler Arası Etkileşimler',
            image: require('../proje_gorsel/kimyasal_turler_arasi_etkilesim.png'),
            description: "Güçlü Etkileşimler (İyonik, Kovalent, Metalik)\nZayıf Etkileşimler (Van der Waals, Hidrojen Bağı)",
            youtubeLink: "https://www.youtube.com/results?search_query=kimyasal+turler+arasi+etkilesimler"
        },
        {
            id: 'kim_tyt_3',
            title: 'Maddenin Halleri',
            image: require('../proje_gorsel/maddenin_halleri.png'),
            description: "Katılar, Sıvılar (Viskozite, Buhar Basıncı), Gazlar, Plazma.\nHal Değişim Grafikleri",
            youtubeLink: "https://www.youtube.com/results?search_query=maddenin+halleri+tyt"
        },
        {
            id: 'kim_ayt_1',
            title: 'Modern Atom Teorisi',
            image: require('../proje_gorsel/atom_modelleri.png'),
            description: "Kuantum Sayıları (n, l, ml, ms)\nElektron Dizilimleri (Aufbau, Pauli, Hund)\nPeriyodik Özellikler",
            youtubeLink: "https://www.youtube.com/results?search_query=modern+atom+teorisi"
        },
        {
            id: 'kim_ayt_2',
            title: 'Gazlar',
            image: require('../proje_gorsel/gazlar.png'),
            description: "İdeal Gaz Yasası: P.V = n.R.T\nKinetik Teori\nGaz Karışımları ve Kısmi Basınç",
            youtubeLink: "https://www.youtube.com/results?search_query=gazlar+ayt"
        },
        {
            id: 'kim_ayt_3',
            title: 'Sıvı Çözeltiler',
            image: require('../proje_gorsel/sivi_cozelti.png'),
            description: "Molarite ve Molalite\nKoligatif Özellikler (Kaynama Noktası Yükselmesi vb.)\nÇözünürlük",
            youtubeLink: "https://www.youtube.com/results?search_query=sivi+cozeltiler"
        },
        {
            id: 'kim_ayt_4',
            title: 'Kimyasal Tepkimelerde Enerji',
            image: require('../proje_gorsel/tepkime_enerjisi.png'),
            description: "Entalpi (ΔH)\nOluşum Entalpisi\nHess Yasası\nBağ Enerjileri",
            youtubeLink: "https://www.youtube.com/results?search_query=kimyasal+tepkimelerde+enerji"
        },
        {
            id: 'kim_ayt_5',
            title: 'Tepkime Hızı ve Denge',
            image: require('../proje_gorsel/tepkime_hiz.png'),
            description: "Hız Denklemi ve Mertebe\nDenge Sabiti (Kc, Kp)\nLe Chatelier İlkesi",
            youtubeLink: "https://www.youtube.com/results?search_query=kimyasal+denge"
        },
        {
            id: 'kim_ayt_6',
            title: 'Asitler ve Bazlar',
            image: require('../proje_gorsel/asitbaz.png') ,
            description: "pH ve pOH Kavramları\nZayıf Asit-Baz Dengesi\nTampon Çözeltiler ve Titrasyon",
            youtubeLink: "https://www.youtube.com/results?search_query=asitler+bazlar+ayt"
        },
        {
            id: 'kim_ayt_7',
            title: 'Elektrokimya',
            image: require('../proje_gorsel/elektrokimya.png'),
            description: "İndirgenme-Yükseltgenme (Redoks)\nGalvanik Piller\nElektroliz ve Faraday Yasaları",
            youtubeLink: "https://www.youtube.com/results?search_query=elektrokimya"
        },
        {
            id: 'kim_ayt_8',
            title: 'Organik Kimya',
            image: require('../proje_gorsel/organikKimya.png'),
            description: "Karbon Kimyasına Giriş (Hibritleşme)\nHidrokarbonlar (Alkan, Alken, Alkin)\nFonksiyonel Gruplar (Alkol, Eter, Aldehit, Keton...)",
            youtubeLink: "https://www.youtube.com/results?search_query=organik+kimya"
        }
    ],
};