// ===========================
// API CONFIGURATION
// ===========================
const API_BASE_URL = 'https://www.themealdb.com/api/json/v1/1';
const DEFAULT_SEARCH = 'Seafood';

// ===========================
// DOM ELEMENTS
// ===========================
const mealsContainer = document.getElementById('mealsContainer');
const searchInput = document.getElementById('searchInput');
const loadingSpinner = document.getElementById('loadingSpinner');
const errorMessage = document.getElementById('errorMessage');
const errorText = document.getElementById('errorText');
const emptyState = document.getElementById('emptyState');
const mealModal = document.getElementById('mealModal');
const modalBody = document.getElementById('modalBody');

// ===========================
// EVENT LISTENERS
// ===========================
document.addEventListener('DOMContentLoaded', initializeApp);
searchInput.addEventListener('keypress', handleSearchKeypress);

// ===========================
// INITIALIZATION
// ===========================
function initializeApp() {
    loadMealsBySearch(DEFAULT_SEARCH);
}

// ===========================
// API CALLS
// ===========================

/**
 * Fetch meals by search term
 * @param {string} query - Search query
 */
async function fetchMealsBySearch(query) {
    try {
        const response = await fetch(`${API_BASE_URL}/search.php?s=${encodeURIComponent(query)}`);
        if (!response.ok) throw new Error('Failed to fetch meals');
        const data = await response.json();
        return data.meals || [];
    } catch (error) {
        console.error('Fetch error:', error);
        showError('Failed to load recipes. Please try again.');
        return [];
    }
}

/**
 * Fetch meal details by ID
 * @param {string} id - Meal ID
 */
async function fetchMealById(id) {
    try {
        const response = await fetch(`${API_BASE_URL}/lookup.php?i=${id}`);
        if (!response.ok) throw new Error('Failed to fetch meal details');
        const data = await response.json();
        return data.meals ? data.meals[0] : null;
    } catch (error) {
        console.error('Fetch error:', error);
        showError('Failed to load meal details.');
        return null;
    }
}

/**
 * Fetch random meal
 */
async function fetchRandomMeal() {
    try {
        const response = await fetch(`${API_BASE_URL}/random.php`);
        if (!response.ok) throw new Error('Failed to fetch random meal');
        const data = await response.json();
        return data.meals ? data.meals[0] : null;
    } catch (error) {
        console.error('Fetch error:', error);
        return null;
    }
}

// ===========================
// UI UPDATES
// ===========================

/**
 * Load meals by search query
 */
function loadMealsBySearch(query) {
    if (!query.trim()) {
        showError('Please enter a search term.');
        return;
    }

    showLoading(true);
    clearMessages();

    fetchMealsBySearch(query).then(meals => {
        showLoading(false);

        if (meals.length === 0) {
            showEmpty();
            mealsContainer.innerHTML = '';
        } else {
            hideEmpty();
            renderMeals(meals);
        }
    });
}

/**
 * Render meals to DOM
 * @param {array} meals - Array of meal objects
 */
function renderMeals(meals) {
    mealsContainer.innerHTML = meals.map(meal => createMealCard(meal)).join('');
}

/**
 * Create meal card HTML
 * @param {object} meal - Meal object
 */
function createMealCard(meal) {
    return `
        <div class="meal-card" onclick="showMealDetails('${meal.idMeal}')">
            <img src="${meal.strMealThumb}" alt="${meal.strMeal}" class="meal-image">
            <div class="meal-info">
                <h3 class="meal-name">${meal.strMeal}</h3>
                <p class="meal-category">${meal.strCategory || 'Uncategorized'}</p>
                <p class="meal-description">${meal.strArea || 'International'} Cuisine</p>
                <button class="btn btn-secondary meal-button">View Recipe</button>
            </div>
        </div>
    `;
}

/**
 * Show meal details in modal
 */
async function showMealDetails(mealId) {
    showLoading(true);
    const meal = await fetchMealById(mealId);
    showLoading(false);

    if (meal) {
        const ingredients = getIngredients(meal);
        const modalHTML = `
            <img src="${meal.strMealThumb}" alt="${meal.strMeal}" class="meal-detail-image">
            <h2 class="meal-detail-name">${meal.strMeal}</h2>
            <p class="meal-detail-category">
                <strong>${meal.strCategory}</strong> • ${meal.strArea}
            </p>

            <div class="meal-detail-section">
                <h3>Ingredients</h3>
                <ul class="ingredients-list">
                    ${ingredients.map(ing => `<li>${ing}</li>`).join('')}
                </ul>
            </div>

            <div class="meal-detail-section">
                <h3>Instructions</h3>
                <p class="instructions">${meal.strInstructions}</p>
            </div>

            <div class="meal-links">
                ${meal.strYoutube ? `<a href="${meal.strYoutube}" target="_blank">▶ Watch Tutorial</a>` : ''}
                ${meal.strSource ? `<a href="${meal.strSource}" target="_blank">📖 View Source</a>` : ''}
            </div>
        `;

        modalBody.innerHTML = modalHTML;
        mealModal.classList.remove('hidden');
    }
}

/**
 * Extract ingredients from meal object
 */
function getIngredients(meal) {
    const ingredients = [];
    for (let i = 1; i <= 20; i++) {
        const ingredient = meal[`strIngredient${i}`];
        const measure = meal[`strMeasure${i}`];
        if (ingredient && ingredient.trim()) {
            ingredients.push(`${measure || ''} ${ingredient}`.trim());
        }
    }
    return ingredients;
}

// ===========================
// MODAL CONTROLS
// ===========================

/**
 * Close meal modal
 */
function closeMealModal() {
    mealModal.classList.add('hidden');
}

/**
 * Close modal on outside click
 */
mealModal.addEventListener('click', (e) => {
    if (e.target === mealModal) {
        closeMealModal();
    }
});

/**
 * Close modal on Escape key
 */
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !mealModal.classList.contains('hidden')) {
        closeMealModal();
    }
});

// ===========================
// SEARCH CONTROLS
// ===========================

/**
 * Handle search button click
 */
function searchMeals() {
    const query = searchInput.value.trim();
    if (query) {
        loadMealsBySearch(query);
    }
}

/**
 * Handle Enter key in search input
 */
function handleSearchKeypress(e) {
    if (e.key === 'Enter') {
        searchMeals();
    }
}

// ===========================
// MESSAGE HANDLERS
// ===========================

/**
 * Show loading spinner
 */
function showLoading(show) {
    if (show) {
        loadingSpinner.classList.remove('hidden');
    } else {
        loadingSpinner.classList.add('hidden');
    }
}

/**
 * Show error message
 */
function showError(message) {
    errorText.textContent = message;
    errorMessage.classList.remove('hidden');
}

/**
 * Show empty state
 */
function showEmpty() {
    emptyState.classList.remove('hidden');
}

/**
 * Hide empty state
 */
function hideEmpty() {
    emptyState.classList.add('hidden');
}

/**
 * Clear all messages
 */
function clearMessages() {
    errorMessage.classList.add('hidden');
    hideEmpty();
}

// ===========================
// UTILITY FUNCTIONS
// ===========================

/**
 * Scroll to menu section
 */
function scrollToMenu() {
    const menuSection = document.getElementById('menu');
    menuSection.scrollIntoView({ behavior: 'smooth' });
}

/**
 * Update active nav link
 */
window.addEventListener('scroll', updateActiveNavLink);

function updateActiveNavLink() {
    const sections = ['home', 'menu', 'about'];
    const navLinks = document.querySelectorAll('.nav-link');

    sections.forEach((sectionId, index) => {
        const section = document.getElementById(sectionId);
        const navLink = navLinks[index];

        if (section) {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;

            if (window.scrollY >= sectionTop - 100 && window.scrollY < sectionTop + sectionHeight - 100) {
                navLinks.forEach(link => link.classList.remove('active'));
                navLink.classList.add('active');
            }
        }
    });
}
