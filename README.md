# RecipeHub — README singkat

Deskripsi singkat
RecipeHub ini project front-end kecil yang buat nyari resep pake TheMealDB. Bukan aplikasi rumit, cuma HTML + CSS + JS.

Fitur utama
- Cari resep berdasarkan nama
- Tampilinnya berupa grid sederhana
- Klik card buat lihat detail di modal (ada bahan, instruksi, link YouTube kalau ada)

Teknologi
- Vanilla JavaScript (gak pake framework)
- CSS biasa (mobile-first)
- API: `https://www.themealdb.com/api/json/v1/1`

Cara jalanin
1. Buka `index.html` di browser.

Live preview
Demo yang dideploy ada di: `https://beautiful-palmier-44097d.netlify.app`

Catatan API
Search: `GET /search.php?s={query}`
Detail: `GET /lookup.php?i={id}`

File penting
`index.html` - struktur halaman
`styles.css` - styling
`script.js` - logic, fetch API, render

Last updated: November 14, 2025
