# RecipeHub - Recipe Discovery Web Application

## Deskripsi Project

RecipeHub adalah aplikasi web untuk menemukan dan menjelajahi resep makanan dari seluruh dunia. Aplikasi ini menggunakan TheMealDB API untuk menyediakan ribuan resep makanan dengan detail lengkap termasuk bahan-bahan, petunjuk memasak, dan link tutorial video.

# RecipeHub — quick README

This is a small front-end project that shows recipes fetched from TheMealDB.
Nothing fancy: just HTML, CSS and a bit of JS. It works offline only for static files (no server-side).

What it does
- Search meals by name
- Show results in a simple grid
- Open a modal with recipe details, ingredients, and a YouTube link if present

Tech
- Vanilla JavaScript (no frameworks)
- Plain CSS (mobile-first)
- Uses TheMealDB public API: `https://www.themealdb.com/api/json/v1/1`

How to run (super easy)
1. Open `index.html` in your browser. That's it.
2. If you prefer a local server, use VS Code Live Server or `python -m http.server`.

Live preview
- A deployed demo is available at: `https://beautiful-palmier-44097d.netlify.app`

Quick API notes
- Search: `GET /search.php?s={query}`
- Details: `GET /lookup.php?i={id}`

Files to look at
- `index.html` — markup
- `styles.css` — styling
- `script.js` — logic and API calls

If something breaks
- Refresh the page
- Check the console (F12)
- Make sure you have internet (the app calls TheMealDB)

Future ideas (not done)
- Favorites
- Caching results
- PWA/offline mode

Last updated: November 14, 2025
