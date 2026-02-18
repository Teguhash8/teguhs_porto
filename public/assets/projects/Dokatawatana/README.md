# Sanggar Doka Tawa Tana Website

Website resmi untuk **Sanggar Doka Tawa Tana**, sebuah pusat pelestarian budaya dan desa wisata di Desa Umauta, Kabupaten Sikka, Nusa Tenggara Timur. Website ini dirancang dengan estetika "Luxury Minimalist" untuk mencerminkan nilai luhur tenun ikat dan kekayaan tradisi Sikka Krowe.

## 🌟 Fitur Utama

- **Multi-Page Application**: Struktur navigasi yang jelas (Beranda, Tentang Kami, Galeri, Kontak).
- **Desain Mewah & Minimalis**: Menggunakan tipografi *Playfair Display* dan *Pinyon Script* serta *white space* yang lega.
- **Galeri Interaktif**: Grid asimetris dengan efek *zoom* lambat dan *lightbox* detail untuk produk tenun.
- **Animasi Sinematik**: Transisi halaman dan elemen yang halus menggunakan `ScrollReveal`.
- **Informasi Budaya Mendalam**: Integrasi filosofi nama (Doka, Tawa, Tana), sejarah, dan teknik pewarnaan alam.
- **Koneksi Langsung**: Tombol WhatsApp dan Email untuk reservasi langsung.

## 🛠️ Teknologi

Project ini dibangun menggunakan:

- **Vite**: Build tool super cepat.
- **React**: Library UI Component.
- **TypeScript**: Type safety.
- **Tailwind CSS**: Utility-first CSS framework.
- **Shadcn UI**: Komponen UI yang dapat dikustomisasi (Dialog, dll).
- **React Router DOM**: Routing client-side.
- **Lucide React**: Ikon vektor ringan.

## 🚀 Cara Menjalankan

Ikuti langkah berikut untuk menjalankan project di komputer lokal Anda:

1.  **Clone Repository**
    ```bash
    git clone <repository_url>
    cd doka-tawa-tana-legacy
    ```

2.  **Install Dependencies**
    ```bash
    npm install
    ```

3.  **Jalankan Development Server**
    ```bash
    npm run dev
    ```
    Buka browser dan akses `http://localhost:5173` (atau port yang ditampilkan di terminal).

4.  **Build untuk Produksi**
    ```bash
    npm run build
    ```
    Hasil build akan ada di folder `dist`.

## 📂 Struktur Project

- `src/pages`: Halaman utama (`Home.tsx`, `About.tsx`, `Gallery.tsx`, `Contact.tsx`).
- `src/components`: Komponen reusable (`Navbar`, `ProductGallery`, `TimelineSection`, `ScrollReveal`).
- `src/assets`: Gambar dan aset statis.
- `public`: File publik (`robots.txt`, `sitemap.xml`).

## 🎨 Palet Warna & Tipografi

- **Primary Font**: *Playfair Display* (Serif - Headings)
- **Secondary Font**: *Source Sans 3* (Sans-serif - Body)
- **Accent Font**: *Pinyon Script* (Cursive - Decorative)
- **Colors**: Stone (Neutral), White, Black.

## 📝 Lisensi

Hak Cipta © Sanggar Doka Tawa Tana.
