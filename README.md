# RecipeHub - Recipe Discovery Web Application

## Deskripsi Project

RecipeHub adalah aplikasi web untuk menemukan dan menjelajahi resep makanan dari seluruh dunia. Aplikasi ini menggunakan TheMealDB API untuk menyediakan ribuan resep makanan dengan detail lengkap termasuk bahan-bahan, petunjuk memasak, dan link tutorial video.

## Output Project

### Fitur Utama:
- 🔍 **Search Functionality** - Cari resep berdasarkan nama atau kategori
- 📱 **Responsive Design** - Sempurna di mobile, tablet, dan desktop
- 🍽️ **Recipe Details** - Lihat detail lengkap resep dengan modal popup
- 📋 **Ingredient List** - Daftar bahan-bahan dengan ukuran yang jelas
- 🎥 **Video Tutorial** - Link langsung ke tutorial video YouTube
- 🌐 **Multiple Categories** - Jelajahi berbagai jenis masakan dari berbagai negara

### Screenshots:
- Halaman utama dengan hero section dan search bar
- Grid resep yang responsif
- Modal detail resep dengan informasi lengkap
- Footer dengan informasi sumber data

## Tech Stack & Framework

### Frontend Framework:
- **Vanilla JavaScript** - Tanpa framework untuk performa maksimal dan file size minimal

### CSS:
- **Custom CSS** - Styling manual dengan mobile-first approach
- CSS Variables untuk tema konsisten
- Flexbox dan CSS Grid untuk layout responsif
- Media queries untuk breakpoint mobile, tablet, dan desktop

### API:
- **TheMealDB API** - Public API gratis untuk data resep

## Alasan Penggunaan Tech Stack

### Mengapa Vanilla JavaScript?
1. **Performa** - Tidak ada overhead framework, loading lebih cepat
2. **Fleksibilitas** - Full control atas kode tanpa batasan framework
3. **Ukuran File** - Minimal dependencies, perfect untuk website ringan
4. **Learning Purpose** - Lebih baik untuk memahami fundamental JavaScript

### Mengapa Custom CSS?
1. **Full Control** - Dapat mengkustomisasi setiap detail desain
2. **Minimal CSS** - Tidak ada CSS yang tidak digunakan
3. **Performance** - Tidak ada overhead dari framework CSS
4. **Flexibility** - Mudah untuk mengubah dan mengoptimalkan

## API yang Digunakan

### TheMealDB API
- **Base URL:** `https://www.themealdb.com/api/json/v1/1`
- **Endpoints:**
  - `GET /search.php?s={meal_name}` - Cari resep berdasarkan nama
  - `GET /lookup.php?i={meal_id}` - Dapatkan detail resep
  - `GET /random.php` - Dapatkan resep random
  
- **Data yang Diambil:**
  - Nama resep
  - Gambar resep
  - Kategori makanan
  - Negara asal
  - Bahan-bahan dan ukurannya
  - Petunjuk memasak
  - Link YouTube tutorial
  - Source resep

## Cara Menjalankan Project

### Prerequisites:
- Browser modern (Chrome, Firefox, Safari, Edge)
- Koneksi internet (untuk akses TheMealDB API)

### Langkah-Langkah:

1. **Clone atau Download Repository**
   ```bash
   git clone <repository-url>
   cd recipehub
   ```

2. **Buka File HTML**
   - Buka file `index.html` langsung di browser
   - Atau gunakan Live Server dari VS Code:
     - Install "Live Server" extension di VS Code
     - Klik kanan pada `index.html`
     - Pilih "Open with Live Server"

3. **Gunakan Aplikasi**
   - Ketik nama resep di search bar (contoh: "Seafood", "Pasta", "Chicken")
   - Tekan Enter atau klik tombol Search
   - Klik pada resep untuk melihat detail lengkap
   - Klik "Watch Tutorial" untuk melihat video YouTube
   - Klik "View Source" untuk melihat sumber resep

### URL Deployment (Contoh):
- Live Preview: [Deploy di Vercel/Netlify nantinya]

## File Structure

```
recipehub/
├── index.html          # File HTML utama
├── styles.css          # File CSS styling
├── script.js           # File JavaScript logic
└── README.md           # File dokumentasi
```

## Fitur Responsif

### Mobile (≤ 640px)
- Navigation dropdown untuk mobile
- Single column layout untuk recipe cards
- Optimized touch interface

### Tablet (641px - 1024px)
- 2 column grid untuk recipe cards
- Horizontal navigation

### Desktop (≥ 1024px)
- 3-4 column grid untuk recipe cards
- Full navigation display
- Enhanced hover effects

## Clean Code Implementation

### Penamaan Konsisten:
- `searchMeals()` - Function untuk search
- `fetchMealById()` - Function untuk fetch detail
- `mealsContainer` - DOM element untuk menampilkan recipes
- `searchInput` - Input field untuk search

### Struktur Folder:
- Semua file utama di root directory
- Naming: camelCase untuk JavaScript, kebab-case untuk CSS

### Semantic HTML:
- `<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`
- `<article>` untuk meal cards
- ARIA labels untuk accessibility

### Hindari Duplikasi:
- Reusable functions (`createMealCard()`, `getIngredients()`)
- CSS variables untuk warna dan styling
- DRY principle dalam JavaScript

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Performance Optimization

- Lazy loading untuk images
- Minimal CSS/JS dependencies
- Efficient DOM manipulation
- Debounced search (optional enhancement)

## Future Enhancements

1. Add favorites/bookmarks functionality
2. Filter by cuisine category
3. Offline support dengan Service Workers
4. Dark mode toggle
5. Share recipe functionality
6. Print recipe feature

## Author

Front End Study Case - Cheva

## License

MIT License - Free to use for educational purposes

---

**Last Updated:** November 2025
