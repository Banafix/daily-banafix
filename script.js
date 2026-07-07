const DRAW_TIME = 2 * 60 * 60 * 1000; // 2 godziny

const plushies = [

{
    name: "Classic Banafix",
    image: "images/Classic.png",
    rarity: "common",
    collection: "📦 general"
},

{
    name: "2 for 1 Banafix",
    image: "images/2for1.png",
    rarity: "common",
    collection: "📦 general"
},

{
    name: "Banafix v3",
    image: "images/v3.png",
    rarity: "common",
    collection: "📦 general"
},

{
    name: "negative Banafix",
    image: "images/negative.png",
    rarity: "common",
    collection: "📦 general"
},

{
    name: "Error Banafix",
    image: "images/error.png",
    rarity: "legendary",
    collection: "📦 general"
},

{
    name: "retro Banafix",
    image: "images/retro.png",
    rarity: "legendary",
    collection: "📦 general"
},

{
    name: "angel Banafix",
    image: "images/angel.png",
    rarity: "legendary",
    collection: "📦 general"
},

{
    name: "Suit Banafix",
    image: "images/suit.png",
    rarity: "rare",
    collection: "📦 general"
},

{
    name: "sweater Banafix",
    image: "images/sweater.png",
    rarity: "rare",
    collection: "📦 general"
},

{
    name: "camouflage Banafix",
    image: "images/camouflage.png",
    rarity: "rare",
    collection: "📦 general"
},

{
    name: "Milkman Banafix",
    image: "images/milman.png",
    rarity: "epic",
    collection: "📦 general"
},

{
    name: "spy Banafix",
    image: "images/spy.png",
    rarity: "epic",
    collection: "📦 general"
},

{
    name: "grass Banafix",
    image: "images/grass.png",
    rarity: "epic",
    collection: "📦 general"
},

{
    name: "cosmic Banafix",
    image: "images/cosmic.png",
    rarity: "epic",
    collection: "📦 general"
},

{
    name: "golden Banafix",
    image: "images/golden.png",
    rarity: "epic",
    collection: "📦 general"
},

{
    name: "Unknown Banafix",
    image: "images/unknown.png",
    rarity: "secret",
    collection: "📦 general"
},

{
    name: "67 Banafix",
    image: "images/67.png",
    rarity: "secret",
    collection: "📦 general"
},

{
    name: "-180 Banafix",
    image: "images/180.png",
    rarity: "common",
    collection: "📦 general"
},

{
    name: "nerd Banafix",
    image: "images/glasses.png",
    rarity: "rare",
    collection: "📦 general"
},

{
    name: "4k Banafix",
    image: "images/4k.png",
    rarity: "rare",
    collection: "📦 general"
},

{
    name: "colorless Banafix",
    image: "images/colorless.png",
    rarity: "common",
    collection: "📦 general"
},

{
    name: "alien Banafix",
    image: "images/alien.png",
    rarity: "epic",
    collection: "📦 general"
},

{
    name: "ghost Banafix",
    image: "images/ghost.png",
    rarity: "epic",
    collection: "📦 general"
},

{
    name: "faceless Banafix",
    image: "images/faceless.png",
    rarity: "common",
    collection: "📦 general"
},

{
    name: "Banafix v2",
    image: "images/v2.png",
    rarity: "common",
    collection: "📦 general"
},

{
    name: "angry Banafix",
    image: "images/angry.png",
    rarity: "common",
    collection: "📦 general"
},

{
    name: "tiny Banafix",
    image: "images/tiny.png",
    rarity: "legendary",
    collection: "📦 general"
},

{
    name: "Crayon Banafix",
    image: "images/crayon.png",
    rarity: "legendary",
    collection: "📦 general"
},

{
    name: "invisible Banafix",
    image: "images/invisible.png",
    rarity: "rare",
    collection: "📦 general"
},

{
    name: "achievement Banafix",
    image: "images/achievement.png",
    rarity: "rare",
    collection: "📦 general"
},

{
    name: "cake Banafix",
    image: "images/cake.png",
    rarity: "common",
    collection: "🍹 summer event"
},

{
    name: "beach Banafix",
    image: "images/beach.png",
    rarity: "rare",
    collection: "🍹 summer event"
},

{
    name: "orange juice Banafix",
    image: "images/orange.png",
    rarity: "epic",
    collection: "🍹 summer event"
},

{
    name: "monster Banafix",
    image: "images/monster.png",
    rarity: "epic",
    collection: "🍹 summer event"
},

{
    name: "swimsuit Banafix",
    image: "images/swimsuit.png",
    rarity: "rare",
    collection: "🍹 summer event"
},

{
    name: "Ben",
    image: "images/ben.png",
    rarity: "epic",
    collection: "👑 legends"
},

{
    name: "sus Banafix",
    image: "images/sus.png",
    rarity: "rare",
    collection: "👑 legends"
},

{
    name: "cring Banafix",
    image: "images/cry.png",
    rarity: "common",
    collection: "👑 legends"
},

{
    name: "portal Banafix",
    image: "images/portal.png",
    rarity: "legendary",
    collection: "👑 legends"
},

{
    name: "cubed Banafix",
    image: "images/cubed.png",
    rarity: "legendary",
    collection: "👑 legends"
},

{
    name: "ball Banafix",
    image: "images/ball.png",
    rarity: "epic",
    collection: "👑 legends"
},

{
    name: "neighbor Banafix",
    image: "images/neighbor.png",
    rarity: "secret",
    collection: "👑 legends"
},

];

let collection = loadCollection();
let rolling = false;
let freeCrateCount = loadFreeCrateCount();

// Rarity percentages (should sum to ~100)
const RARITY_PERCENTS = {
    common: 60,
    rare: 30,
    epic: 10,
    legendary: 3,
    secret: 0.5
};

const RARITY_XP = {
    common: 10,
    rare: 20,
    epic: 40,
    legendary: 100,
    secret: 200,
};

const VARIANT_CHANCES = {
    rainbow: 2,
    gold: 7
};

const LEVEL_BADGES = [
    { id: 'noob', minLevel: 0,   name: 'Noob Collector', emoji: '🐣' },
    { id: 'new', minLevel: 10,  name: 'New Collector', emoji: '🌱' },
    { id: 'rising', minLevel: 20, name: 'Rising Collector', emoji: '🚀' },
    { id: 'skilled', minLevel: 30, name: 'Skilled Collector', emoji: '🎯' },
    { id: 'veteran', minLevel: 40, name: 'Veteran Collector', emoji: '🛡️' },
    { id: 'expert', minLevel: 50, name: 'Expert Collector', emoji: '🧠' },
    { id: 'master', minLevel: 60, name: 'Master Collector', emoji: '🏆' },
    { id: 'elite', minLevel: 70, name: 'Elite Collector', emoji: '⚡' },
    { id: 'legendary', minLevel: 80, name: 'Legendary Collector', emoji: '👑' },
    { id: 'ultimate', minLevel: 90, name: 'Ultimate Collector', emoji: '🌟' },
    { id: 'supreme', minLevel: 100, name: 'Supreme Collector', emoji: '🔥' }
];

function getLevelBadge(level) {
    let badge = LEVEL_BADGES[0];
    for (const nextBadge of LEVEL_BADGES) {
        if (level >= nextBadge.minLevel) {
            badge = nextBadge;
        } else {
            break;
        }
    }
    return badge;
}

function xpForLevel(level) {
    return 10 * level * (level + 1);
}

function getLevelFromXp(totalXp) {
    let level = 0;
    while (totalXp >= xpForLevel(level + 1)) {
        level += 1;
    }
    return level;
}

function getXpProgress(totalXp) {
    const level = getLevelFromXp(totalXp);
    const currentLevelXp = totalXp - xpForLevel(level);
    const nextLevelXp = xpForLevel(level + 1) - xpForLevel(level);
    return { level, currentLevelXp, nextLevelXp };
}

function loadPlayerXp() {
    return Number(localStorage.getItem('playerXp')) || 0;
}

function savePlayerXp(xp) {
    localStorage.setItem('playerXp', xp);
}

function ensureLevelInfo() {
    let info = document.getElementById('levelInfo');
    if (info) return info;

    info = document.createElement('div');
    info.id = 'levelInfo';
    document.body.insertBefore(info, document.body.firstChild);
    return info;
}

function updateLevelInfo() {
    awardFreeCratesIfNeeded();
    const xp = loadPlayerXp();
    const { level, currentLevelXp, nextLevelXp } = getXpProgress(xp);
    const badge = getLevelBadge(level);
    const info = ensureLevelInfo();
    info.innerHTML = `
        <strong>Level ${level}</strong>
        <div class="level-badge badge-${badge.id}">${badge.emoji} ${badge.name}</div>
        XP: ${currentLevelXp}/${nextLevelXp}
        <div class="level-bar"><div class="level-progress" style="width:${Math.min(100, Math.round((currentLevelXp / nextLevelXp) * 100))}%"></div></div>
    `;
}

function refreshGameUi() {
    updateLevelInfo();
    updateTimer();
    refreshCrateState();
    showCollection();
}

function pickWeighted(items, weights){
    const total = weights.reduce((a,b)=>a+b,0);
    let r = Math.random()*total;
    for(let i=0;i<items.length;i++){
        if(r < weights[i]) return items[i];
        r -= weights[i];
    }
    return items[items.length-1];
}

function drawWeightedPlush(plushes){
    const counts = {};
    plushes.forEach(p => { counts[p.rarity] = (counts[p.rarity]||0)+1; });
    const weights = plushes.map(p => {
        const pct = RARITY_PERCENTS[p.rarity] || 0;
        const cnt = counts[p.rarity] || 1;
        return pct / cnt;
    });
    return pickWeighted(plushes, weights);
}

function loadCollection() {
    const raw = JSON.parse(localStorage.getItem('collection')) || [];
    return raw.map(item => ({
        name: item.name,
        image: item.image,
        rarity: item.rarity || 'common',
        count: item.count || 1,
        goldCount: item.goldCount || 0,
        rainbowCount: item.rainbowCount || 0
    }));
}

function saveCollection() {
    localStorage.setItem('collection', JSON.stringify(collection));
}

function loadFreeCrateCount() {
    return Number(localStorage.getItem('freeCrateCount')) || 0;
}

function saveFreeCrateCount(count) {
    localStorage.setItem('freeCrateCount', Math.max(0, count));
}

function awardFreeCratesIfNeeded() {
    const currentXp = loadPlayerXp();
    const currentLevel = getLevelFromXp(currentXp);
    const awardedLevel = Number(localStorage.getItem('lastAwardedLevel')) || 0;

    if (currentLevel > awardedLevel) {
        const cratesToAward = currentLevel - awardedLevel;
        freeCrateCount = loadFreeCrateCount() + cratesToAward;
        saveFreeCrateCount(freeCrateCount);
        localStorage.setItem('lastAwardedLevel', currentLevel);
        updateFreeCrateButton();
    }
}

function updateFreeCrateButton() {
    const btn = document.getElementById('freeCrateBtn');
    const countEl = document.getElementById('freeCrateCount');
    freeCrateCount = loadFreeCrateCount();

    if (countEl) {
        countEl.textContent = freeCrateCount;
    }

    if (btn) {
        btn.disabled = freeCrateCount <= 0;
        btn.title = freeCrateCount > 0
            ? `Masz ${freeCrateCount} darmowych crateów`
            : 'Brak darmowych crateów';
    }
}

function renderRarityLegend(){
    const el = document.getElementById('rarityLegend');
    if(!el) return;
    el.innerHTML = Object.keys(RARITY_PERCENTS).map(r=>{
        return `<span class="rarity ${r}">${r}: ${RARITY_PERCENTS[r]}%</span>`;
    }).join(' ');
}

function isSummerEventActive(date = new Date()) {
    const month = date.getMonth(); // 0 = January
    return month === 6 || month === 7; // July or August
}

function isLegendEventActive(date = new Date()) {
    return date.getDay() === 5; // Fridays only
}

function isGeneralCollection(plush) {
    return plush.collection && plush.collection.startsWith('📦');
}

function isEventCollection(plush) {
    return plush.collection && (plush.collection.startsWith('🍹') || plush.collection.startsWith('👑'));
}

function updateEventStatus() {
    const status = document.getElementById('eventStatus');
    const summer = isSummerEventActive();
    const legend = isLegendEventActive();
    if (!status) return;

    const available = [];
    if (summer) available.push('🍹 summer event');
    if (legend) available.push('👑 legends');

    status.textContent = available.length > 0
        ? `Available: ${available.join(' | ')}`
        : 'No event collections are available right now';
}

function getAvailablePlushes() {
    const summer = isSummerEventActive();
    const legend = isLegendEventActive();
    return plushies.filter(p =>
        isGeneralCollection(p)
        || (p.collection && p.collection.startsWith('🍹') && summer)
        || (p.collection && p.collection.startsWith('👑') && legend)
    );
}

function getDrawCrateImage() {
    const lastDraw = localStorage.getItem('lastDraw');
    if (!lastDraw) return 'images/crateopen.png';
    const diff = Date.now() - Number(lastDraw);
    if (diff < DRAW_TIME) return 'images/crateimage.png';
    return 'images/crateopen.png';
}

function renderCrateState() {
    const resultEl = document.getElementById('result');
    if (!resultEl) return;
    const crateImage = getDrawCrateImage();
    resultEl.innerHTML = `
        <div class="result-card">
            <img src="${crateImage}" alt="Crate" class="draw-crate" id="crateImage">
        </div>
    `;
    const crateImg = document.getElementById('crateImage');
    if (crateImg) {
        crateImg.addEventListener('click', drawPlush);
        crateImg.style.cursor = 'pointer';
    }
}

function refreshCrateState() {
    if (rolling) return;
    const resultEl = document.getElementById('result');
    if (!resultEl) return;
    const currentImage = resultEl.querySelector('img.draw-crate');
    if (!currentImage) {
        renderCrateState();
        return;
    }
    const nextImage = getDrawCrateImage();
    if (currentImage.getAttribute('src') !== nextImage) {
        currentImage.setAttribute('src', nextImage);
    }
}

function drawPlush(options = {}) {
    if (rolling) return;

    const { bypassCooldown = false } = options;
    const lastDraw = localStorage.getItem("lastDraw");

    if (!bypassCooldown && lastDraw) {
        const diff = Date.now() - Number(lastDraw);

        if (diff < DRAW_TIME) {
            alert("Dzisiaj już wylosowałeś Banafixa!");
            return;
        }
    }

    const availablePlushes = getAvailablePlushes();
    if (availablePlushes.length === 0) {
        alert('No Banafixes available to draw.');
        return;
    }

    rolling = true;
    const drawBtn = document.getElementById('drawBtn');
    const freeCrateBtn = document.getElementById('freeCrateBtn');
    if (drawBtn) drawBtn.disabled = true;
    if (freeCrateBtn) freeCrateBtn.disabled = true;

    const startTime = Date.now();
    const revealDuration = 2800;
    const rollDuration = 2200;
    const resultEl = document.getElementById('result');

    function easeOutCubic(t) {
        return 1 - Math.pow(1 - t, 3);
    }

    function showChestState() {
        renderCrateState();
    }

    function showCrateOpenState() {
        resultEl.innerHTML = `
            <div class="result-card">
                <img src="images/crateopen.png" alt="Crate open" class="draw-crate draw-crate-open" id="crateImage">
            </div>
        `;
        const crateImg = document.getElementById('crateImage');
        if (crateImg) {
            crateImg.addEventListener('click', drawPlush);
            crateImg.style.cursor = 'pointer';
        }
    }

    function animateOpening() {
        const elapsed = Date.now() - startTime;
        if (elapsed < 300) {
            showChestState();
            window.requestAnimationFrame(animateOpening);
            return;
        }

        animateRoll();
    }

    function animateRoll() {
        const rollStart = Date.now();
        let lastRollTime = 0;

        function stepRoll() {
            const elapsed = Date.now() - rollStart;
            const pct = Math.min(elapsed / rollDuration, 1);
            if (pct >= 1) {
                revealResult();
                return;
            }

            if (elapsed - lastRollTime >= 55) {
                const randomPlush = availablePlushes[Math.floor(Math.random() * availablePlushes.length)];
                resultEl.innerHTML = `
                    <div class="result-card">
                        <img src="${randomPlush.image}" onerror="this.onerror=null;this.src='images/Banafix.png'">
                        <h2>${randomPlush.name}</h2>
                    </div>
                `;
                lastRollTime = elapsed;
            }

            window.requestAnimationFrame(stepRoll);
        }

        showCrateOpenState();
        window.requestAnimationFrame(stepRoll);
    }

    function revealResult() {
        const plush = drawWeightedPlush(availablePlushes);
        const variant = rollPlushVariant();
        const variantBadge = variant === 'normal'
            ? ''
            : `<div class="variant-badge ${variant}">${variant === 'rainbow' ? '🌈 Rainbow' : '🥇 Gold'}</div>`;
        const variantCardClass = variant === 'rainbow' ? 'rainbow-card' : variant === 'gold' ? 'gold-card' : '';
        const flashClass = variant === 'rainbow' ? ' flash-rainbow' : variant === 'gold' ? ' flash-gold' : ' flash-reveal';

        resultEl.innerHTML = `
            <div class="result-card ${variantCardClass}${flashClass}">
                <img src="${plush.image}" onerror="this.onerror=null;this.src='images/Banafix.png'">
                ${variantBadge}
                <h2>${plush.name}</h2>
                <div class="rarity ${plush.rarity}">${plush.rarity} (${RARITY_PERCENTS[plush.rarity] || 0}%)</div>
            </div>
        `;

        const flashCard = resultEl.querySelector('.result-card');
        if (flashCard) {
            window.setTimeout(() => flashCard.classList.remove('flash-reveal', 'flash-gold', 'flash-rainbow'), 900);
        }

        const gainedXp = RARITY_XP[plush.rarity] || 0;
        const currentXp = loadPlayerXp();
        const newXp = currentXp + gainedXp;
        savePlayerXp(newXp);
        updateLevelInfo();

        const existing = collection.find(p => p.name === plush.name);
        if (existing) {
            existing.count = (existing.count || 1) + 1;
            if (variant === 'gold') {
                existing.goldCount = (existing.goldCount || 0) + 1;
            }
            if (variant === 'rainbow') {
                existing.rainbowCount = (existing.rainbowCount || 0) + 1;
            }
        } else {
            collection.push({
                ...plush,
                count: 1,
                goldCount: variant === 'gold' ? 1 : 0,
                rainbowCount: variant === 'rainbow' ? 1 : 0
            });
        }
        saveCollection();

        localStorage.setItem("lastDraw", Date.now());
        showCollection();

        window.setTimeout(() => {
            showCrateOpenState();
            rolling = false;
            const drawBtn = document.getElementById('drawBtn');
            const freeCrateBtn = document.getElementById('freeCrateBtn');
            if (drawBtn) drawBtn.disabled = false;
            if (freeCrateBtn) freeCrateBtn.disabled = false;
            updateFreeCrateButton();
        }, revealDuration);
    }

    animateOpening();
}

function openFreeCrate() {
    if (rolling) return;

    const count = loadFreeCrateCount();
    if (count <= 0) {
        alert('Nie masz żadnych darmowych crateów.');
        return;
    }

    freeCrateCount = count - 1;
    saveFreeCrateCount(freeCrateCount);
    updateFreeCrateButton();
    drawPlush({ bypassCooldown: true });
}

function rollPlushVariant() {
    const roll = Math.random() * 100;
    if (roll < VARIANT_CHANCES.rainbow) return 'rainbow';
    if (roll < VARIANT_CHANCES.rainbow + VARIANT_CHANCES.gold) return 'gold';
    return 'normal';
}

function getCollectionCategorySummary() {
    const plushByName = new Map(plushies.map(plush => [plush.name, plush]));
    const byCategory = {};

    plushies.forEach(plush => {
        const key = plush.collection || 'Uncategorized';
        if (!byCategory[key]) {
            byCategory[key] = { total: 0, collected: 0 };
        }
        byCategory[key].total += 1;
    });

    const collectedUniqueNames = new Set(collection.map(item => item.name));
    collectedUniqueNames.forEach(name => {
        const plush = plushByName.get(name);
        if (!plush) return;
        const key = plush.collection || 'Uncategorized';
        if (!byCategory[key]) {
            byCategory[key] = { total: 0, collected: 0 };
        }
        byCategory[key].collected += 1;
    });

    return Object.entries(byCategory)
        .sort(([a], [b]) => a.localeCompare(b, 'pl', { sensitivity: 'base' }))
        .map(([category, stats]) => ({ category, ...stats }));
}

function showCollection(){
    renderGallery();
}

function initApp() {
    updateLevelInfo();
    renderInitialCrate();

    const newsBtn = document.getElementById('newsBtn');
    const newsPanel = document.getElementById('newsPanel');
    const newsModal = document.getElementById('newsModal');
    const closeNewsModalBtn = document.getElementById('closeNewsModal');

    function openNewsModal() {
        if (!newsModal) return;
        newsModal.classList.remove('hidden');
        newsModal.setAttribute('aria-hidden', 'false');
        document.body.classList.add('modal-open');
    }

    function closeNewsModal() {
        if (!newsModal) return;
        newsModal.classList.add('hidden');
        newsModal.setAttribute('aria-hidden', 'true');
        document.body.classList.remove('modal-open');
    }

    if (newsBtn) {
        newsBtn.addEventListener('click', openNewsModal);
    }

    if (closeNewsModalBtn) {
        closeNewsModalBtn.addEventListener('click', closeNewsModal);
    }

    if (newsModal) {
        newsModal.addEventListener('click', (event) => {
            if (event.target.classList.contains('news-modal-backdrop')) {
                closeNewsModal();
            }
        });
        document.addEventListener('keydown', (event) => {
            if (event.key === 'Escape' && !newsModal.classList.contains('hidden')) {
                closeNewsModal();
            }
        });
    }

    if (newsPanel) {
        newsPanel.classList.add('hidden');
    }

    openNewsModal();

    const drawBtn = document.getElementById('drawBtn');
    const freeCrateBtn = document.getElementById('freeCrateBtn');
    if (drawBtn) drawBtn.addEventListener('click', () => drawPlush());
    if (freeCrateBtn) freeCrateBtn.addEventListener('click', openFreeCrate);

    setupDarkModeButton();
    renderRarityLegend();
    updateEventStatus();
    updateLevelInfo();
    updateFreeCrateButton();
    renderGallery();
    showCollection();
}

function renderInitialCrate() {
    const initialResult = document.getElementById('result');
    if (!initialResult) return;
    initialResult.innerHTML = `
        <div class="result-card">
            <img src="${getDrawCrateImage()}" alt="Crate" class="draw-crate" id="crateImage">
        </div>
    `;
    const crateImg = document.getElementById('crateImage');
    if (crateImg) {
        crateImg.addEventListener('click', drawPlush);
        crateImg.style.cursor = 'pointer';
    }
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initApp);
} else {
    initApp();
}

function setupDarkModeButton() {
    const btn = document.getElementById('darkModeBtn');
    const saved = JSON.parse(localStorage.getItem('darkMode')) || false;
    document.body.classList.toggle('dark', saved);
    if (!btn) return;
    btn.textContent = saved ? 'Light mode' : 'Dark mode';
    btn.addEventListener('click', () => {
        const enabled = !document.body.classList.toggle('dark');
        // toggle returns true if class present, but we want enabled = class present
        const isDark = document.body.classList.contains('dark');
        btn.textContent = isDark ? 'Light mode' : 'Dark mode';
        localStorage.setItem('darkMode', JSON.stringify(isDark));
    });
}

function sortGalleryPlushes(plushes) {
    const rarityOrder = { common: 1, rare: 2, epic: 3, legendary: 4, secret: 5 };
    return plushes.slice().sort((a, b) => {
        const rarityCompare = rarityOrder[a.rarity] - rarityOrder[b.rarity];
        if (rarityCompare !== 0) return rarityCompare;
        return a.name.localeCompare(b.name, 'pl', { sensitivity: 'base' });
    });
}

function renderGallery() {
    const gallery = document.getElementById('gallery');
    if (!gallery) return;
    const collectedNames = new Set(collection.map(item => item.name));
    const general = sortGalleryPlushes(plushies.filter(isGeneralCollection));
    const eventPlushes = sortGalleryPlushes(plushies.filter(isEventCollection));
    const summer = isSummerEventActive();
    const legend = isLegendEventActive();
    const eventGroups = eventPlushes.reduce((groups, plush) => {
        const key = plush.collection;
        groups[key] = groups[key] || [];
        groups[key].push(plush);
        return groups;
    }, {});

    function renderGalleryCard(plush, hidden, extraClasses = '') {
        const collectedCount = collection.find(item => item.name === plush.name)?.count || 0;
        const goldCount = collection.find(item => item.name === plush.name)?.goldCount || 0;
        const rainbowCount = collection.find(item => item.name === plush.name)?.rainbowCount || 0;
        const safeName = plush.name.replace(/'/g, "\\'");
        const clickAttr = hidden ? '' : `onclick="showPlushFullscreen('${safeName}')"`;
        const variantClass = rainbowCount > 0 ? ' rainbow-card' : goldCount > 0 ? ' gold-card' : '';
        return `
            <div class="gallery-card${variantClass}${hidden ? ' hidden-card disabled-card' : ''}${extraClasses ? ' ' + extraClasses : ''}" ${clickAttr}>
                <img src="${plush.image}" alt="${plush.name}" onerror="this.onerror=null;this.src='images/Banafix.png'">
                <div class="gallery-name">${hidden ? '???' : plush.name}</div>
                <div class="rarity ${plush.rarity}">${hidden ? '' : plush.rarity}</div>
                <div class="gallery-meta">Collected: ${collectedCount} pcs</div>
            </div>
        `;
    }

    function collectionProgress(groupPlushes) {
        const collected = groupPlushes.filter(p => collectedNames.has(p.name)).length;
        return { collected, total: groupPlushes.length };
    }

    const totalItemsCollected = collection.reduce((sum, item) => sum + (item.count || 0), 0);
    const totalUniqueCollected = collectedNames.size;
    const totalUnique = plushies.length;
    const generalProgress = collectionProgress(general);

    gallery.innerHTML = `
        <h3>Banafix Gallery</h3>
        <div class="gallery-overview">Collected: ${totalItemsCollected} items · ${totalUniqueCollected}/${totalUnique} unique</div>
        <div class="gallery-section">
            <h4>📦 General collection (${generalProgress.collected}/${generalProgress.total})</h4>
            <div class="event-note">General collection is always available in the gallery.</div>
            <div class="gallery-grid">
                ${general.map(p => renderGalleryCard(p, !collectedNames.has(p.name))).join('')}
            </div>
        </div>
        ${Object.keys(eventGroups).map(group => {
            const enabledGroup = group.startsWith('🍹') ? summer : group.startsWith('👑') ? legend : false;
            const groupPlushes = eventGroups[group];
            const progress = collectionProgress(groupPlushes);
            const note = group.startsWith('🍹')
                ? 'Summer event is available from July 1 to August 31.'
                : group.startsWith('👑')
                    ? 'Legends event is available on Fridays only.'
                    : '';
            return `
            <div class="gallery-section">
                <h4>${group} ${enabledGroup ? '(available now)' : '(locked)'} (${progress.collected}/${progress.total})</h4>
                <div class="event-note">${note}</div>
                <div class="gallery-grid ${enabledGroup ? '' : 'disabled'}">
                    ${groupPlushes.map(p => {
                        const hidden = !collectedNames.has(p.name);
                        const extraClasses = enabledGroup ? '' : 'disabled-card';
                        return renderGalleryCard(p, hidden, extraClasses);
                    }).join('')}
                </div>
            </div>
            `;
        }).join('')}
    `;
}

function getPlushByName(name) {
    return plushies.find(plush => plush.name === name);
}

function hideFullscreenPlush() {
    const overlay = document.getElementById('fullscreenOverlay');
    if (overlay) {
        overlay.remove();
    }
}

function showPlushFullscreen(plushName) {
    const plush = getPlushByName(plushName);
    if (!plush) return;
    const collectedCount = collection.find(item => item.name === plush.name)?.count || 0;
    const goldCount = collection.find(item => item.name === plush.name)?.goldCount || 0;
    const rainbowCount = collection.find(item => item.name === plush.name)?.rainbowCount || 0;
    hideFullscreenPlush();

    const fullscreenVariantClass = rainbowCount > 0 ? ' rainbow-border' : goldCount > 0 ? ' gold-border' : '';
    const variantLines = [];
    if (goldCount > 0) {
        variantLines.push(`<div class="gallery-meta gallery-meta-variant">🥇 Gold${goldCount > 1 ? ` (${goldCount})` : ''}</div>`);
    }
    if (rainbowCount > 0) {
        variantLines.push(`<div class="gallery-meta gallery-meta-variant rainbow">🌈 Rainbow${rainbowCount > 1 ? ` (${rainbowCount})` : ''}</div>`);
    }

    const overlay = document.createElement('div');
    overlay.id = 'fullscreenOverlay';
    overlay.className = 'fullscreen-overlay';
    overlay.innerHTML = `
        <div class="fullscreen-card${fullscreenVariantClass}">
            <button class="fullscreen-close" aria-label="Close">×</button>
            <img src="${plush.image}" alt="${plush.name}" onerror="this.onerror=null;this.src='images/Banafix.png'">
            ${variantLines.join('')}
            <h2>${plush.name}</h2>
            <div class="rarity ${plush.rarity}">${plush.rarity}</div>
            <div class="gallery-meta">Collected: ${collectedCount} pcs</div>
        </div>
    `;
    document.body.appendChild(overlay);
    overlay.addEventListener('click', event => {
        if (event.target === overlay || event.target.closest('.fullscreen-close')) {
            hideFullscreenPlush();
        }
    });
}

function updateTimer() {

    const timer = document.getElementById("timer");
    const lastDraw = localStorage.getItem("lastDraw");

    if (!lastDraw) {
        timer.innerHTML = "you can draw!";
        return;
    }

    const left = DRAW_TIME - (Date.now() - Number(lastDraw));

    if (left <= 0) {
        timer.innerHTML = "you can draw!";
        return;
    }

    const h = Math.floor(left / 3600000);
    const m = Math.floor((left % 3600000) / 60000);
    const s = Math.floor((left % 60000) / 1000);

    timer.innerHTML = `next draw in ${h}h ${m}m ${s}s`;
}

setInterval(() => {
    updateTimer();
    refreshCrateState();
}, 1000);
updateTimer();
refreshCrateState();

showCollection();