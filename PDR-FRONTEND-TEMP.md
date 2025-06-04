# 🎨 Frontend Özelleştirme PDR Template

> **Workshop Katılımcısı İçin Talimatlar:**
> Bu template'i kendi projeniz için özelleştirmek üzere aşağıdaki bölümleri doldurun.
> `[BURAYA_GİRİN: açıklama]` formatındaki alanları kendi proje bilgilerinizle değiştirin.

## 📋 **Proje Bilgileri**

### **Seçilen Sektör**: Astronomik Veri ve Telif Hakları

### **Platform Adı**: SkyData Token Marketplace

### **Ana Varlık Türü**: Teleskoplardan toplanan yüksek çözünürlüklü astronomik görüntüler, spektrum analiz dataları, AI ile işlenmiş gökyüzü katalogları, eğitimsel amaçlı interaktif veri setleri

### **Hedef Kitle**: Astrofizik Araştırmacıları, Teleskop Operatörleri, Eğitim Kurumları, Bilim İnsanları, Veri Analistleri

---

## 🎯 **Platform Vizyonu**

### **Ana Konsept**

Teleskoplardan toplanan astronomik verilerin tokenizasyonu ile araştırmacıların verilerini paylaşmadan önce lisanslama geliri elde etmelerini ve bilim insanlarının kaliteli verilere erken erişim sağlamalarını mümkün kılan platform. Skyfield-Astropy verileriyle zenginleştirilmiş interaktif veri setleri sunarak eğitim ve araştırma alanlarında köprü kuruyor.

### **Değer Önerisi**

- **Teleskop Operatörleri için**: Veri lisanslama geliri, global erişim, adil fiyatlandırma, telif hakları koruması
- **Araştırmacılar için**: Nadir verilere erişim, şeffaf sahiplik, kalite garantisi, işbirliği imkanları
- **Eğitim Kurumları için**: Astronomik veri havuzuna giriş, çeşitlendirilmiş içerik portföyü, uzman doğrulaması

---

## 🎨 **Görsel Kimlik Güncellemeleri**

### **Renk Paleti**

```css
/* Astronomik Veri Teması - Koyu Mavi-Açık Sarı-Beyaz */
--primary: #1e3a8a      /* Koyu Mavi - Derin uzay ve gece gökyüzü */
--secondary: #fbbf24    /* Açık Sarı - Yıldızlar ve nebula */
--accent: #ffffff       /* Beyaz - Galaksi ve stellar objeler */
--background: #0f172a   /* Çok koyu mavi - Uzay boşluğu */
--foreground: #f1f5f9   /* Açık gri-beyaz - Okunabilir metin */
```

### **İkonlar ve Emojiler**

- **Ana Tema**: 🌌 🔭 🌟 📡 🛰️ 💫
- **Alt Kategoriler**: 🌌 🌟 🌙 ☄️ 🪐 🌠
- **İşlemler**: 📊 💰 📈 🔍 ✅ 🚀

### **Tipografi**

- **Başlıklar**: Inter
- **İçerik**: System fonts
- **Ton**: Modern ve güvenilir, bilimsel ve premium
- **Ton**: Sâcak, güvenilir, profesyonel

---

## 📁 **Güncellenmesi Gereken Dosyalar**

### **🏠 Ana Sayfa (`app/page.tsx`)**

#### **Başlık ve Açıklama**

```typescript
// Güncellenmesi gereken içerik:
title: "SkyData Token Marketplace"; // Platformunuzun adı
description: "Astronomik verilerin tokenizasyonu ile araştırmacıların verilerini lisanslayarak gelir elde etmelerini sağlayan platform"; // Ana konseptinizin kısa açıklaması
```

#### **Dashboard Kartları**

```typescript
// Astronomik veri platformu için metrikler:

"Portfolio Değeri" → "Veri Portföyü Değeri"
"Toplam Yatırım" → "Toplam Lisans Yatırımı"
"Aktif Varlıklar" → "Aktif Veri Setleri"
"Compliance Status" → "Telif Hakları Durumu"
```

#### **Hızlı Eylemler**

```typescript
// Platform ana eylemlerinizi belirleyin:
"Varlık Keşfet" → "Veri Keşfet"
"Token Transfer" → "Lisans Transferi"
"Tokenize Et" → "Veriyi Tokenize Et"
```

### **🏪 Marketplace (`app/marketplace/page.tsx`)**

#### **Arama ve Filtreler**

```typescript
// Astronomik veri için filtreler:

asset_type: ["görüntü", "spektrum", "katalog", "eğitim_seti"];
location: ["hubble", "webb", "chandra", "ground_based"];
category: ["nebula", "galaksi", "yıldız", "gezegen"];
certification: [
  "nasa_onaylı",
  "peer_reviewed",
  "kalibrasyon_yapılmış",
  "ai_işlenmiş",
];
```

#### **Varlık Kartları**

```typescript
// Astronomik veri için örnek varlık kartı:
{
  name: "Andromeda Galaksisi HD",
  symbol: "ANDR-001",
  creator: "Mt. Wilson Observatory - California",
  date: "Gözlem: 2024-03-15",
  specs: "4K RGB, 120dk pozlama, H-alpha filtreli",
  price_per_token: "0.1 ETH",
  total_supply: 1000,
  sold_percentage: 45
}
```

#### **Metrikler**

```typescript
// Platform istatistikleri:
"Toplam Varlık Değeri" → "Toplam Veri Değeri"
"Aktif Yatırımcılar" → "Aktif Araştırmacılar"
"Tamamlanan İşlemler" → "Lisanslanan Veri Setleri"
```

### **🌱 Tokenization (`app/tokenize/page.tsx`)**

#### **5 Adımlı Süreç**

```typescript
// Veri tokenization süreci:

1. "Temel Bilgiler" → "Veri Bilgileri"
   - Veri türü, gözlem tarihi, kullanılan teleskop ve enstrümanlar

2. "Varlık Detayları" → "Teknik Detaylar"
   - Çözünürlük, spektral bantlar, kalibrasyon durumu, işleme teknikleri

3. "Yasal Belgeler" → "Telif & Lisans"
   - Gözlem hakları, veri sahipliği, kullanım izinleri

4. "Token Ekonomisi" → "Lisans Planı"
   - Fiyatlandırma modeli, erişim seviyeleri, gelir paylaşımı

5. "Yayınlama" → "Veri Yayınla"
   - Kalite kontrolü, metadata ekleme, marketplace'e ekleme
```

### **💸 Transfer (`app/transfer/page.tsx`)**

#### **Transfer Terminolojisi**

```typescript
// Transfer işlemlerinin terminolojisi:
"Token Transfer" → "Veri Lisansı Transferi"
"Alıcı Adresi" → "Yeni Lisans Sahibi"
"Transfer Miktarı" → "Lisans Payı"
"Compliance Check" → "Telif Hakları Kontrolü"
```

### **🎨 Layout (`app/layout.tsx`)**

#### **Metadata**

```typescript
export const metadata = {
  title: "SkyData Token Marketplace - Astronomik Veri Lisanslama Platformu",
  description:
    "Teleskop verilerinin tokenizasyonu ile araştırmacıların veri lisanslayarak gelir elde etmelerini sağlayan blockchain tabanlı platform",
  icons: {
    icon: "/telescope.ico", // Astronomik temalı favicon
  },
};
```

### **📱 Header (`components/layout/Header.tsx`)**

#### **Navigasyon Menüsü**

```typescript
// Menü öğeleri:
"Dashboard" → "Veri Paneli"
"Marketplace" → "Veri Marketi"
"Tokenize" → "Veriyi Listele"
"Transfer" → "Lisans Transferi"
```

---

## 🔧 **Teknik Güncellemeler**

### **Type Definitions (`lib/types.ts`)**

```typescript
// Astronomik veri için tip tanımları:
export interface AstronomicalAsset {
  id: string;
  name: string;
  symbol: string;
  asset_type: "görüntü" | "spektrum" | "katalog" | "eğitim_seti";
  creator_info: {
    name: string;
    location: string;
    experience_years: number;
    certifications: string[];
  };
  asset_details: {
    resolution: string;
    exposure_time: number;
    filters_used: string[];
    calibration_status: boolean;
  };
  timeline_info: {
    creation_date: string;
    milestone_date: string;
    estimated_completion: string;
    quality_grade: "A" | "B" | "C";
  };
  financial: {
    funding_goal: number;
    current_funding: number;
    token_price: number;
    total_supply: number;
  };
}
```

### **Mock Data (`lib/contract.ts`)**

```typescript
// Astronomik veri için örnek veri yapısı:
const SAMPLE_ASTRONOMICAL = [
  {
    id: "ast-001",
    name: "Orion Nebula Deep Field",
    symbol: "ORION-HD",
    asset_type: "görüntü",
    creator_info: {
      name: "Palomar Observatory",
      location: "California, USA",
      experience_years: 75,
      certifications: ["NASA Partner", "IAU Member"],
    },
    // ... diğer detaylar
  },
];

// ... existing code ...
```

## 🎯 **Uygulama Özelleştirirken Agentın Dikkat Etmesini istediğimiz kısımlar**

### **Çiftçiler için UX**

- ✅ En basic ve bug çıkarmayacak şekilde projeyi özelleştir
- ✅ Yeni özellik ekleme sadece olan şeyleri pdr-frontend.md dosyasına ve verdiğim prompta uygun şekilde güncelle
- ✅ Uygulama Tamamen ingilizce olmalı
- ✅ Gereksiz yerleri güncellemene gerek yok sadece frontendde görünen kısımları güncelleyelim
- ✅ Rust kodlarını değiştirme sadece frontend kodları özelleştirilecek. <- ÖNEMLİ!
- ✅ Projeyi olabildiğince uzatmadan, basic ve hatasız şekilde geliştir

## 📝 **Implementasyon Checklist**

### \*\*Phase 1: Temel Özelleştirme

- [ ] Başlık ve açıklamaları güncelle
- [ ] Renk paletini değiştir
- [ ] İkonları ve emojiları adapte et
- [ ] Navigasyon menüsünü güncelle
- [ ] Mock data'yı sektöre uyarla

### \*\*Phase 2: Gelişmiş İçerik

- [ ] Dashboard widget'larını özelleştir
- [ ] Marketplace filtrelerini genişlet
- [ ] Type definitions'ları güncelle
- [ ] Tokenization flow'unu adapte et
- [ ] Transfer terminolojisini değiştir

---

## 💡 **Özelleştirme İpuçları**

### **Hızlı Başlangıç**

1. **Terminology First**: Önce tüm terminolojiyi listele
2. **Visual Identity**: Renk ve ikon paletini belirle
3. **User Journey**: Ana kullanıcı akışlarını çiz
4. **Content Strategy**: İçerik hiyerarşisini planla

### **Sık Yapılan Hatalar**

❌ **Kaçınılacaklar:**

- Çok fazla ve yeni özellikler eklemeye çalışma
- Projede sadece elimizdeki rwa-tempi özelleştireceksin yeni şeyler eklemeyeceksin
- Frontend dışında bir değişiklik yapma
- wallet ile bağlanma kısmıyla ilgili bir değişiklik yapma orası da çalışıyor

✅ **İstediklerimiz**

- Sade ve odaklı tasarım
- Sadece Frontend güncellenecek
- Yeni bir özellik eklenmeyecek olan şeyler projemize göre özelleştirilecek

---

<div align="center">

**🚀 [SEKTÖR_EMOJİSİ] [SEKTÖR_ADI] sektöründen blockchain'e köprü kuruyoruz! [SEKTÖR_EMOJİSİ]**

_"[SEKTÖREL_MOTTO - ilham verici bir cümle]"_

</div>

---

_Bu PDR template'i, workshop katılımcılarının kendi sektörlerinde RWA tokenization platformu oluşturmalarına rehberlik edecek şekilde tasarlanmıştır. Her sektör için özelleştirilebilir ve ölçeklenebilir bir yapı sunar._
