# RecipeHub - Project Structure & Architecture

## 📁 Directory Structure

```
📦 Front End Study Case Cheva/
├── 📄 index.html              # Main HTML file (11.23 KB)
├── 🎨 styles.css              # CSS styling (12.18 KB)
├── ⚙️  script.js              # JavaScript logic (8.63 KB)
├── 📖 README.md               # Full documentation
├── 🚀 QUICK_START.md          # Quick start guide
├── ✅ CHECKLIST.md            # Requirements checklist
├── 📋 ARCHITECTURE.md         # This file
└── 📄 req.txt                 # Original requirements
```

---

## 🏗️ Application Architecture

### Layer 1: HTML (DOM Structure)
```
index.html
├── Header
│   ├── Logo
│   └── Navigation
├── Main Content
│   ├── Hero Section
│   ├── Search Section
│   │   ├── Search Input
│   │   ├── Meals Grid Container
│   │   └── States (Loading/Error/Empty)
│   └── About Section
├── Footer
└── Modal
    └── Meal Details
```

### Layer 2: CSS (Styling & Layout)
```
styles.css
├── Global Variables (12 CSS variables)
├── Typography Styles
├── Component Styles
│   ├── Header & Navigation
│   ├── Hero Section
│   ├── Search Container
│   ├── Meal Cards
│   ├── Modal
│   └── Footer
├── State Styles (Loading, Error, Empty)
└── Responsive Design
    ├── Mobile (≤ 640px)
    ├── Tablet (641-1024px)
    └── Desktop (≥ 1024px)
```

### Layer 3: JavaScript (Logic & API)
```
script.js
├── Configuration
│   └── API_BASE_URL, DEFAULT_SEARCH
├── DOM References (8 elements)
├── Event Listeners (2 listeners)
├── Initialization (1 function)
├── API Layer
│   ├── fetchMealsBySearch()
│   ├── fetchMealById()
│   └── fetchRandomMeal()
├── UI Rendering
│   ├── renderMeals()
│   ├── createMealCard()
│   ├── showMealDetails()
│   └── getIngredients()
├── State Management
│   ├── showLoading()
│   ├── showError()
│   ├── showEmpty()
│   └── clearMessages()
└── Event Handlers
    ├── searchMeals()
    ├── closeMealModal()
    └── updateActiveNavLink()
```

---

## 🔄 Data Flow

```
User Input (Search)
    ↓
searchMeals() function triggered
    ↓
fetchMealsBySearch(query) called
    ↓
API Request → TheMealDB API
    ↓
JSON Response received
    ↓
renderMeals(meals) displayed
    ↓
User clicks meal card
    ↓
# Architecture (short, readable)

This is a tiny single-page front-end app. Nothing distributed, no backend.

Files
- `index.html` — page structure and where UI lives
- `styles.css` — styling and responsive rules
- `script.js` — API calls and DOM updates

How it works (high level)
1. User types a query and hits Enter.
2. `script.js` calls TheMealDB search API.
3. Results are rendered as cards.
4. Clicking a card triggers another call for details and opens a modal.

States handled
- loading, empty (no results), error

Deployment
- Static site. Just publish the repo root to any static host (Netlify, Vercel, GitHub Pages).

Notes for devs
- Keep API calls simple and handle failures gracefully.
- The app is intentionally minimal; add caching/favorites later if you want.

Last updated: November 14, 2025
