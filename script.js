const DRAW_TIME_ZONE = 'Europe/Warsaw';
const DRAW_DATE_TIME_FORMATTER = new Intl.DateTimeFormat('en-GB', {
    timeZone: DRAW_TIME_ZONE,
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hourCycle: 'h23'
});

function getWarsawDateTimeParts(timestamp = Date.now()) {
    const parts = new Map(DRAW_DATE_TIME_FORMATTER.formatToParts(new Date(timestamp)).map(part => [part.type, part.value]));
    return {
        year: Number(parts.get('year')),
        month: Number(parts.get('month')),
        day: Number(parts.get('day')),
        hour: Number(parts.get('hour')),
        minute: Number(parts.get('minute')),
        second: Number(parts.get('second'))
    };
}

function getWarsawDateKey(timestamp = Date.now()) {
    const { year, month, day } = getWarsawDateTimeParts(timestamp);
    return `${year}-${String(month).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
}

function hasDrawnOnWarsawDate(lastDraw = localStorage.getItem('lastDraw'), now = Date.now()) {
    const lastDrawTime = Number(lastDraw);
    return Number.isFinite(lastDrawTime)
        && lastDrawTime > 0
        && getWarsawDateKey(lastDrawTime) === getWarsawDateKey(now);
}

function getWarsawUtcOffset(timestamp) {
    const roundedTimestamp = Math.floor(timestamp / 1000) * 1000;
    const { year, month, day, hour, minute, second } = getWarsawDateTimeParts(roundedTimestamp);
    return Date.UTC(year, month - 1, day, hour, minute, second) - roundedTimestamp;
}

function getNextWarsawMidnight(timestamp = Date.now()) {
    const { year, month, day } = getWarsawDateTimeParts(timestamp);
    const nextDateAtUtc = Date.UTC(year, month - 1, day + 1);
    let midnight = nextDateAtUtc;

    for (let attempt = 0; attempt < 3; attempt += 1) {
        const adjustedMidnight = nextDateAtUtc - getWarsawUtcOffset(midnight);
        if (adjustedMidnight === midnight) break;
        midnight = adjustedMidnight;
    }

    return midnight;
}

const plushies = [

{
    name: "Classic Banafix",
    image: "images/Classic.png",
    rarity: "common",
    collection: "📦general"
},

{
    name: "2 for 1 Banafix",
    image: "images/2for1.png",
    rarity: "common",
    collection: "📦general"
},

{
    name: "Banafix v3",
    image: "images/v3.png",
    rarity: "common",
    collection: "📦general"
},

{
    name: "negative Banafix",
    image: "images/negative.png",
    rarity: "common",
    collection: "📦general"
},

{
    name: "Error Banafix",
    image: "images/error.png",
    rarity: "legendary",
    collection: "📦general"
},

{
    name: "retro Banafix",
    image: "images/retro.png",
    rarity: "legendary",
    collection: "📦general"
},

{
    name: "angel Banafix",
    image: "images/angel.png",
    rarity: "legendary",
    collection:  "📦general"
},

{
    name: "Suit Banafix",
    image: "images/suit.png",
    rarity: "rare",
    collection: "📦general"
},

{
    name: "sweater Banafix",
    image: "images/sweater.png",
    rarity: "rare",
    collection: "📦general"
},

{
    name: "camouflage Banafix",
    image: "images/camouflage.png",
    rarity: "rare",
    collection: "📦general"
},

{
    name: "Milkman Banafix",
    image: "images/milman.png",
    rarity: "epic",
    collection: "📦general"
},

{
    name: "spy Banafix",
    image: "images/spy.png",
    rarity: "epic",
    collection: "📦general"
},

{
    name: "grass Banafix",
    image: "images/grass.png",
    rarity: "epic",
    collection: "📦general"
},

{
    name: "cosmic Banafix",
    image: "images/cosmic.png",
    rarity: "epic",
    collection: "📦general"
},

{
    name: "golden Banafix",
    image: "images/golden.png",
    rarity: "epic",
    collection: "📦general"
},

{
    name: "Unknown Banafix",
    image: "images/unknown.png",
    rarity: "secret",
    collection: "📦general"
},

{
    name: "67 Banafix",
    image: "images/67.png",
    rarity: "secret",
    collection: "📦general"
},

{
    name: "-180 Banafix",
    image: "images/180.png",
    rarity: "common",
    collection: "📦general"
},

{
    name: "nerd Banafix",
    image: "images/glasses.png",
    rarity: "rare",
    collection: "📦general"
},

{
    name: "4k Banafix",
    image: "images/4k.png",
    rarity: "rare",
    collection: "📦general"
},

{
    name: "colorless Banafix",
    image: "images/colorless.png",
    rarity: "common",
    collection: "📦general"
},

{
    name: "alien Banafix",
    image: "images/alien.png",
    rarity: "epic",
    collection: "📦general"
},

{
    name: "ghost Banafix",
    image: "images/ghost.png",
    rarity: "epic",
    collection: "📦general"
},

{
    name: "faceless Banafix",
    image: "images/faceless.png",
    rarity: "common",
    collection: "📦general"
},

{
    name: "Banafix v2",
    image: "images/v2.png",
    rarity: "common",
    collection: "📦general"
},

{
    name: "angry Banafix",
    image: "images/angry.png",
    rarity: "common",
    collection: "📦general"
},

{
    name: "tiny Banafix",
    image: "images/tiny.png",
    rarity: "legendary",
    collection: "📦general"
},

{
    name: "Crayon Banafix",
    image: "images/crayon.png",
    rarity: "legendary",
    collection: "📦general"
},

{
    name: "invisible Banafix",
    image: "images/invisible.png",
    rarity: "rare",
    collection: "📦general"
},

{
    name: "achievement Banafix",
    image: "images/achievement.png",
    rarity: "rare",
    collection: "📦general"
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
    name: "stickman Banafix",
    image: "images/stickman.png",
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
    name: "fallout Banafix",
    image: "images/fallout.png",
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
    name: "7 minutes Banafix",
    image: "images/7.png",
    rarity: "epic",
    collection: "👑 legends"
},

{
    name: "neighbor Banafix",
    image: "images/neighbor.png",
    rarity: "secret",
    collection: "👑 legends"
},

{
    name: "sombrero Banafix",
    image: "images/sombrero.png",
    rarity: "rare",
    collection: "🌮 taco tuesday"
},

{
    name: "cactus Banafix",
    image: "images/cactus.png",
    rarity: "epic",
    collection: "🌮 taco tuesday"
},

{
    name: "pinata Banafix",
    image: "images/pinata.png",
    rarity: "epic",
    collection: "🌮 taco tuesday"
},

{
    name: "taco Banafix",
    image: "images/taco.png",
    rarity: "secret",
    collection: "🌮 taco tuesday"
},

{
    name: "lava Banafix",
    image: "images/lava.png",
    rarity: "legendary",
    collection: "🌮 taco tuesday"
},

{
    name: "mexican Banafix",
    image: "images/mexican.png",
    rarity: "common",
    collection: "🌮 taco tuesday"
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

const VARIANT_XP = {
    gold: 40,
    rainbow: 60,
    normal: 0
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

function getCrateRewardLabel(rewardCrates) {
    return `${rewardCrates} free crate${rewardCrates === 1 ? '' : 's'}`;
}

function createNamedAchievement({ id, title, description, icon, requiredNames, rewardCrates = 1, reward, detailTitle = 'Required Banafixes', category = 'Sets' }) {
    return {
        id,
        title,
        description,
        type: 'one-time',
        target: requiredNames.length,
        rewardCrates,
        reward: reward || getCrateRewardLabel(rewardCrates),
        icon,
        category,
        requirementType: 'named',
        detailTitle,
        requiredNames
    };
}

const ACHIEVEMENT_CATEGORIES = [
    { id: 'sets', title: 'Banafix Sets' }
];

const ACHIEVEMENTS = [
    createNamedAchievement({
        id: 'system-error',
        title: 'System Error',
        description: 'Collect the given Banafixes.',
        icon: 'images/System Error.png',
        rewardCrates: 4,
        category: 'sets',
        requiredNames: ['Error Banafix', 'retro Banafix', '4k Banafix', 'Unknown Banafix']
    }),
    createNamedAchievement({
        id: 'starter-set',
        title: 'Starter Set',
        description: 'Collect the given Banafixes.',
        icon: 'images/Starter Set.png',
        rewardCrates: 1,
        category: 'sets',
        requiredNames: ['Classic Banafix', '2 for 1 Banafix', 'Banafix v2', 'Banafix v3']
    }),
    createNamedAchievement({
        id: 'stealth-squad',
        title: 'Stealth Squad',
        description: 'Collect the given Banafixes.',
        icon: 'images/Stealth Squad.png',
        rewardCrates: 3,
        category: 'sets',
        requiredNames: ['spy Banafix', 'camouflage Banafix', 'invisible Banafix', 'neighbor Banafix']
    }),
    createNamedAchievement({
        id: 'fantastic-four',
        title: 'Fantastic Four',
        description: 'Collect the given Banafixes.',
        icon: 'images/Fantastic Four.png',
        rewardCrates: 2,
        category: 'sets',
        requiredNames: ['invisible Banafix', 'nerd Banafix', 'Ben', 'lava Banafix']
    }),
    createNamedAchievement({
        id: 'numberjacks',
        title: 'Numberjacks',
        description: 'Collect the given Banafixes.',
        icon: 'images/Numberjacks.png',
        rewardCrates: 3,
        category: 'sets',
        requiredNames: ['7 minutes Banafix', '2 for 1 Banafix', '-180 Banafix', '67 Banafix']
    }),
    createNamedAchievement({
        id: 'evil-vs-good',
        title: 'Evil vs Good',
        description: 'Collect the given Banafixes.',
        icon: 'images/Evil vs Good.png',
        rewardCrates: 2,
        category: 'sets',
        requiredNames: ['monster Banafix', 'angel Banafix']
    }),
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


function getAchievementProgress() {
    const ownedNames = new Set(collection.map(item => item.name));

    return ACHIEVEMENTS.map(achievement => {
        let progress = 0;
        let completed = false;

        if (achievement.requirementType === 'named') {
            const requiredNames = achievement.requiredNames || [];
            progress = requiredNames.filter(name => ownedNames.has(name)).length;
        }

        completed = progress >= achievement.target;

        return {
            ...achievement,
            current: Math.min(progress, achievement.target),
            completed
        };
    });
}

const expandedAchievements = new Set();

function renderAchievementDetails(achievement) {
    function renderPlushCard(name, owned, count = 0) {
        const plush = getPlushByName(name);
        const collectedItem = collection.find(item => item.name === name);
        const plushName = plush ? plush.name : name;
        const rarity = plush ? plush.rarity : 'common';
        const img = plush ? plush.image : 'images/Banafix.png';
        const variantClass = collectedItem && collectedItem.rainbowCount > 0 ? ' rainbow-card' : collectedItem && collectedItem.goldCount > 0 ? ' gold-card' : '';
        return `
            <div class="gallery-card achievement-gallery-card${variantClass}${owned ? '' : ' disabled-card missing'}">
                <img src="${img}" alt="${plushName}" onerror="this.onerror=null;this.src='images/Banafix.png'">
                <div class="gallery-name">${plushName}</div>
                <div class="rarity ${rarity}">${rarity}</div>
                <div class="gallery-meta">${owned ? 'Owned' : 'Needed for achievement'}</div>
            </div>
        `;
    }

    if (achievement.requirementType === 'named' && Array.isArray(achievement.requiredNames)) {
        return `
            <div class="achievement-detail">
                <div class="achievement-detail-title">${achievement.detailTitle || 'Required Banafixes'}</div>
                <div class="achievement-plush-grid">
                    ${achievement.requiredNames.map(name => {
                        const ownedItem = collection.find(item => item.name === name);
                        return renderPlushCard(name, Boolean(ownedItem), ownedItem ? ownedItem.count : 0);
                    }).join('')}
                </div>
            </div>
        `;
    }

    return '';
}

function toggleAchievementExpansion(id) {
    if (expandedAchievements.has(id)) {
        expandedAchievements.delete(id);
    } else {
        expandedAchievements.add(id);
    }
    renderAchievementsPanel();
}

function renderAchievementsPanel() {
    const panel = document.getElementById('achievementsPanel');
    const list = document.getElementById('achievementsList');
    if (!panel || !list) return;
    const progress = getAchievementProgress();
    const groupedAchievements = ACHIEVEMENT_CATEGORIES.map(category => ({
        ...category,
        achievements: progress.filter(achievement => achievement.category === category.id)
    })).filter(category => category.achievements.length > 0);

    function renderAchievementCard(achievement) {
        const percent = Math.round((achievement.current / achievement.target) * 100);
        const expanded = expandedAchievements.has(achievement.id);
        const canExpand = achievement.requirementType === 'named';
        const expandIndicator = canExpand
            ? `<div class="achievement-expand-indicator ${expanded ? 'expanded' : ''}"><span class="achievement-expand-text">Click to expand</span><span class="achievement-expand-arrow">▾</span></div>`
            : '';
        return `
            <div class="achievement-card ${achievement.completed ? 'achievement-completed' : ''} ${expanded ? 'expanded' : ''}">
                <div class="achievement-header${canExpand ? ' achievement-toggle' : ''}"${canExpand ? ` data-id="${achievement.id}"` : ''}>
                    <img class="achievement-icon" src="${achievement.icon}" alt="${achievement.title} icon" onerror="this.onerror=null;this.src='images/achievement.png'">
                    <div>
                        <strong>${achievement.title}</strong>
                        <div style="font-size:12px; color:inherit; opacity:0.8">${achievement.reward}</div>
                    </div>
                    ${expandIndicator}
                </div>
                <div class="achievement-description">${achievement.description}</div>
                <div class="achievement-progress">
                    <div class="achievement-progress-bar"><div class="achievement-progress-fill" style="width:${percent}%"></div></div>
                    <div>${achievement.current}/${achievement.target}</div>
                </div>
                <div class="achievement-status ${achievement.completed ? 'achievement-status-completed' : 'achievement-status-progress'}">${achievement.completed ? 'Completed!' : 'In progress'}</div>
                ${canExpand && expanded ? renderAchievementDetails(achievement) : ''}
            </div>
        `;
    }

    list.innerHTML = groupedAchievements.map(category => `
        <section class="achievement-category-section">
            <h4 class="achievement-category-title">${category.title}</h4>
            ${category.achievements.map(renderAchievementCard).join('')}
        </section>
    `).join('');

    list.querySelectorAll('.achievement-toggle').forEach(header => {
        header.addEventListener('click', () => {
            const id = header.getAttribute('data-id');
            if (id) toggleAchievementExpansion(id);
        });
    });
}

function ensureLevelInfo() {
    let info = document.getElementById('levelInfo');
    if (info) return info;

    info = document.createElement('button');
    info.id = 'levelInfo';
    info.className = 'level-indicator';
    info.type = 'button';
    info.setAttribute('aria-haspopup', 'dialog');
    info.setAttribute('aria-controls', 'levelProgressModal');
    info.setAttribute('aria-expanded', 'false');
    const drawControls = document.querySelector('.draw-controls');
    if (drawControls) {
        drawControls.insertBefore(info, drawControls.firstChild);
    } else {
        document.body.insertBefore(info, document.body.firstChild);
    }
    return info;
}

function updateLevelInfo() {
    awardFreeCratesIfNeeded();
    const xp = loadPlayerXp();
    const { level, currentLevelXp, nextLevelXp } = getXpProgress(xp);
    const badge = getLevelBadge(level);
    const info = ensureLevelInfo();
    const description = `Level ${level} · ${badge.name} · XP: ${currentLevelXp}/${nextLevelXp}`;
    info.textContent = badge.emoji;
    info.title = description;
    info.setAttribute('aria-label', description);
    info.className = `level-indicator badge-${badge.id}`;
}

function renderLevelProgressModal() {
    const xp = loadPlayerXp();
    const { level, currentLevelXp, nextLevelXp } = getXpProgress(xp);
    const badge = getLevelBadge(level);
    const percent = Math.min(100, Math.round((currentLevelXp / nextLevelXp) * 100));
    const badgeEl = document.getElementById('levelProgressBadge');
    const rankEl = document.getElementById('levelProgressRank');
    const levelEl = document.getElementById('levelProgressLevel');
    const progressTrack = document.querySelector('.level-progress-track');
    const progressFill = document.getElementById('levelProgressFill');
    const currentEl = document.getElementById('levelProgressCurrent');
    const remainingEl = document.getElementById('levelProgressRemaining');
    const rewardTitleEl = document.getElementById('levelRewardTitle');

    if (!badgeEl || !rankEl || !levelEl || !progressTrack || !progressFill || !currentEl || !remainingEl || !rewardTitleEl) return;

    badgeEl.textContent = badge.emoji;
    rankEl.textContent = badge.name;
    levelEl.textContent = `Level ${level}`;
    progressTrack.setAttribute('aria-valuenow', String(percent));
    progressFill.style.width = `${percent}%`;
    currentEl.textContent = `${currentLevelXp} / ${nextLevelXp} XP`;
    remainingEl.textContent = `${nextLevelXp - currentLevelXp} XP to next level`;
    rewardTitleEl.textContent = `Level ${level + 1} reward`;
}

function getAchievementProgress() {
    const ownedNames = new Set(collection.map(item => item.name));

    return ACHIEVEMENTS.map(achievement => {
        let progress = 0;
        if (achievement.requirementType === 'named') {
            const requiredNames = achievement.requiredNames || [];
            progress = requiredNames.filter(name => ownedNames.has(name)).length;
        }

        return {
            ...achievement,
            current: Math.min(progress, achievement.target),
            completed: progress >= achievement.target
        };
    });
}

function showToast(message, type='info', icon='') {
    const container = document.getElementById('toastContainer');
    if (!container) return;
    const toast = document.createElement('div');
    toast.className = `notification ${type}`;

    if (icon) {
        const content = document.createElement('div');
        content.className = 'notification-content';

        const iconImg = document.createElement('img');
        iconImg.className = 'notification-icon';
        iconImg.src = icon;
        iconImg.alt = 'Achievement icon';
        iconImg.onerror = () => {
            iconImg.onerror = null;
            iconImg.src = 'images/achievement.png';
        };

        const text = document.createElement('div');
        text.className = 'notification-message';
        text.textContent = message;

        content.appendChild(iconImg);
        content.appendChild(text);
        toast.appendChild(content);
    } else {
        toast.textContent = message;
    }

    container.appendChild(toast);
    window.setTimeout(() => {
        toast.classList.add('fade-out');
        window.setTimeout(() => toast.remove(), 350);
    }, 2600);
}

function refreshGameUi() {
    updateLevelInfo();
    awardAchievementIfNeeded();
    renderAchievementsPanel();
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

function getPlushDrawWeights(plushes) {
    const counts = {};
    plushes.forEach(p => { counts[p.rarity] = (counts[p.rarity]||0)+1; });
    return plushes.map(p => {
        const pct = RARITY_PERCENTS[p.rarity] || 0;
        const cnt = counts[p.rarity] || 1;
        return pct / cnt;
    });
}

function drawWeightedPlush(plushes){
    return pickWeighted(plushes, getPlushDrawWeights(plushes));
}

function getPlushDrawChance(plushName) {
    const availablePlushes = getAvailablePlushes();
    const plushIndex = availablePlushes.findIndex(plush => plush.name === plushName);
    if (plushIndex === -1) return null;

    const weights = getPlushDrawWeights(availablePlushes);
    const totalWeight = weights.reduce((sum, weight) => sum + weight, 0);
    return totalWeight > 0 ? (weights[plushIndex] / totalWeight) * 100 : 0;
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

const GAME_SAVE_KEYS = [
    'collection',
    'playerXp',
    'freeCrateCount',
    'lastAwardedLevel',
    'achievementsState',
    'lastDraw',
    'lastDrawResults'
];

function readGameSaveValue(key, fallback) {
    const raw = localStorage.getItem(key);
    if (raw === null) return fallback;
    return JSON.parse(raw);
}

function createGameSavePayload() {
    const data = {
        collection: readGameSaveValue('collection', []),
        playerXp: readGameSaveValue('playerXp', 0),
        freeCrateCount: readGameSaveValue('freeCrateCount', 0),
        lastAwardedLevel: readGameSaveValue('lastAwardedLevel', 0),
        achievementsState: readGameSaveValue('achievementsState', {}),
        lastDraw: readGameSaveValue('lastDraw', null),
        lastDrawResults: readGameSaveValue('lastDrawResults', null)
    };

    return {
        format: 'daily-banafix-save',
        version: 1,
        exportedAt: new Date().toISOString(),
        data
    };
}

function validateGameSavePayload(payload) {
    if (!payload || payload.format !== 'daily-banafix-save' || payload.version !== 1) {
        throw new Error('This is not a supported Daily Banafix save.');
    }

    const data = payload.data;
    if (!data || typeof data !== 'object' || Array.isArray(data)) {
        throw new Error('The save data is missing.');
    }
    if (!Array.isArray(data.collection) || !data.collection.every(item => item && typeof item.name === 'string')) {
        throw new Error('The collection data is invalid.');
    }
    if (!Number.isFinite(data.playerXp) || data.playerXp < 0) {
        throw new Error('The XP value is invalid.');
    }
    for (const key of ['freeCrateCount', 'lastAwardedLevel']) {
        if (!Number.isFinite(data[key]) || data[key] < 0) {
            throw new Error(`The ${key} value is invalid.`);
        }
    }
    if (!data.achievementsState || typeof data.achievementsState !== 'object' || Array.isArray(data.achievementsState)) {
        throw new Error('The achievements data is invalid.');
    }
    if (data.lastDraw !== null && !Number.isFinite(data.lastDraw)) {
        throw new Error('The draw timer data is invalid.');
    }
    if (data.lastDrawResults !== null && (
        !data.lastDrawResults
        || !Array.isArray(data.lastDrawResults.cards)
        || data.lastDrawResults.cards.length !== 3
        || !Number.isFinite(data.lastDrawResults.expiresAt)
    )) {
        throw new Error('The saved draw results are invalid.');
    }

    return data;
}

function applyGameSave(data) {
    GAME_SAVE_KEYS.forEach(key => {
        if (data[key] === null || data[key] === undefined) {
            localStorage.removeItem(key);
        } else {
            localStorage.setItem(key, JSON.stringify(data[key]));
        }
    });
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
        for (let level = awardedLevel + 1; level <= currentLevel; level += 1) {
            showToast(`Level up! Reached level ${level}! +1 free crate`, 'success');
        }
        updateFreeCrateButton();
    }
}

function loadAchievementsState() {
    return JSON.parse(localStorage.getItem('achievementsState')) || {};
}

function saveAchievementsState(state) {
    localStorage.setItem('achievementsState', JSON.stringify(state));
}

function awardAchievementIfNeeded() {
    const state = loadAchievementsState();
    const progress = getAchievementProgress();
    let updated = false;

    progress.forEach(achievement => {
        const previous = state[achievement.id] || { completed: false, progress: 0 };
        const previousProgress = previous.progress || 0;

        if (achievement.current > previousProgress) {
            state[achievement.id] = {
                ...previous,
                progress: achievement.current
            };
            updated = true;

            if (!achievement.completed) {
                showToast(`Progres: ${achievement.title} ${achievement.current}/${achievement.target}`, 'info', achievement.icon);
            }
        }

        if (!previous.completed && achievement.completed) {
            const rewardCrates = achievement.rewardCrates || 1;
            state[achievement.id] = {
                ...state[achievement.id],
                completed: true,
                completedAt: Date.now(),
                progress: achievement.target
            };
            updated = true;
            freeCrateCount = loadFreeCrateCount() + rewardCrates;
            saveFreeCrateCount(freeCrateCount);
            showToast(`Achievement unlocked: ${achievement.title}! +${rewardCrates} free crate${rewardCrates === 1 ? '' : 's'}`, 'success', achievement.icon);
        }
    });

    if (updated) {
        saveAchievementsState(state);
        updateFreeCrateButton();
        renderAchievementsPanel();
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
        btn.disabled = rolling || freeCrateCount <= 0;
        btn.title = freeCrateCount > 0
            ? `You have ${freeCrateCount} free crates`
            : 'no free crates';
    }
}

function toggleAchievementsPanel() {
    const modal = document.getElementById('achievementsModal');
    if (!modal) return;
    const isHidden = modal.classList.contains('hidden');

    if (isHidden) {
        renderAchievementsPanel();
        modal.classList.remove('hidden');
        modal.setAttribute('aria-hidden', 'false');
        document.body.classList.add('modal-open');
        return;
    }

    modal.classList.add('hidden');
    modal.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('modal-open');
}

function isSummerEventActive(date = new Date()) {
    const month = date.getMonth(); // 0 = January
    return month === 6 || month === 7; // July or August
}

function isLegendEventActive(date = new Date()) {
    return date.getDay() === 5; // Fridays only
}

function isTacoEventActive(date = new Date()) {
    return date.getDay() === 2; // Tuesdays only
}

function isGeneralCollection(plush) {
    return plush.collection && plush.collection.startsWith('📦');
}

function isEventCollection(plush) {
    return plush.collection && (plush.collection.startsWith('🍹') || plush.collection.startsWith('👑') || plush.collection.startsWith('🌮'));
}

function updateEventStatus() {
    const status = document.getElementById('eventStatus');
    const summer = isSummerEventActive();
    const legend = isLegendEventActive();
    const taco = isTacoEventActive();
    if (!status) return;

    const available = [];
    if (summer) available.push('🍹 summer event');
    if (legend) available.push('👑 legends');
    if (taco) available.push('🌮 taco tuesday');

    status.textContent = available.length > 0
        ? `Available: ${available.join(' | ')}`
        : 'No event collections are available right now';
}

function getAvailablePlushes() {
    const summer = isSummerEventActive();
    const legend = isLegendEventActive();
    const taco = isTacoEventActive();
    return plushies.filter(p =>
        isGeneralCollection(p)
        || (p.collection && p.collection.startsWith('🍹') && summer)
        || (p.collection && p.collection.startsWith('👑') && legend)
        || (p.collection && p.collection.startsWith('🌮') && taco)
    );
}

function getDrawCrateImage() {
    const lastDraw = localStorage.getItem('lastDraw');
    if (!lastDraw) return 'images/crateopen.png';
    if (hasDrawnOnWarsawDate(lastDraw)) return 'images/crateimage.png';
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

function loadSavedDrawResults() {
    const raw = localStorage.getItem('lastDrawResults');
    if (!raw) return null;

    let savedResults;
    try {
        savedResults = JSON.parse(raw);
    } catch {
        localStorage.removeItem('lastDrawResults');
        return null;
    }

    if (!Array.isArray(savedResults.cards) || Number(savedResults.expiresAt) <= Date.now()) {
        localStorage.removeItem('lastDrawResults');
        return null;
    }

    const drawnResults = savedResults.cards.map(savedCard => ({
        plush: plushies.find(plush => plush.name === savedCard.name),
        variant: ['normal', 'gold', 'rainbow'].includes(savedCard.variant) ? savedCard.variant : 'normal'
    })).filter(result => result.plush);

    if (drawnResults.length !== 3) {
        localStorage.removeItem('lastDrawResults');
        return null;
    }

    return drawnResults;
}

function renderDrawCards(resultEl, drawnResults, revealAll = false) {
    resultEl.innerHTML = `
        <div class="draw-cards-stage">
            ${drawnResults.map(({ plush, variant }, index) => {
                const variantCardClass = variant === 'rainbow' ? 'rainbow-card' : variant === 'gold' ? 'gold-card' : '';
                const flashVariant = variant === 'gold' || variant === 'rainbow' ? variant : 'normal';
                const variantBadge = variant === 'normal'
                    ? ''
                    : `<div class="variant-badge ${variant}">${variant === 'rainbow' ? '🌈 Rainbow' : '🥇 Gold'}</div>`;
                return `
                <div class="draw-flip-card${revealAll ? ' revealed' : ''}" data-card-index="${index}" role="img" aria-label="${revealAll ? `${plush.name}, ${plush.rarity}` : `Face-down Banafix card ${index + 1}`}" >
                    <div class="draw-flip-inner">
                        <div class="draw-card-side draw-card-back" aria-hidden="${revealAll ? 'true' : 'false'}">
                            <span class="draw-card-back-mark">?</span>
                            <span class="draw-card-back-label">Banafix</span>
                        </div>
                        <div class="draw-card-side draw-card-front gallery-card draw-result-card ${variantCardClass}" aria-hidden="${revealAll ? 'false' : 'true'}">
                            <img src="${plush.image}" alt="${plush.name}" onerror="this.onerror=null;this.src='images/Banafix.png'">
                            ${variantBadge}
                            <div class="gallery-name">${plush.name}</div>
                            <div class="rarity ${plush.rarity}">${plush.rarity}</div>
                            <span class="draw-card-flash ${flashVariant}" aria-hidden="true"></span>
                        </div>
                    </div>
                </div>
            `;
            }).join('')}
        </div>
    `;
}

function refreshCrateState() {
    if (rolling) return;
    const resultEl = document.getElementById('result');
    if (!resultEl) return;
    const savedResults = loadSavedDrawResults();
    if (savedResults) {
        if (!resultEl.querySelector('.draw-cards-stage')) {
            renderDrawCards(resultEl, savedResults, true);
        }
        return;
    }
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

    if (!bypassCooldown && hasDrawnOnWarsawDate(lastDraw)) {
        alert("Today you have already drawn Banafix!");
        return;
    }

    const availablePlushes = getAvailablePlushes();
    if (availablePlushes.length === 0) {
        alert('No Banafixes available to draw.');
        return;
    }
    const rollingPlushes = getGalleryOrderedPlushes(availablePlushes);

    rolling = true;
    const freeCrateBtn = document.getElementById('freeCrateBtn');
    if (freeCrateBtn) freeCrateBtn.disabled = true;

    const startTime = Date.now();
    const revealDuration = 3000;
    const drawCount = 3;
    const resultEl = document.getElementById('result');

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
        showCrateOpenState();
        const drawnResults = Array.from({ length: drawCount }, () => ({
            plush: drawWeightedPlush(availablePlushes),
            variant: rollPlushVariant()
        }));

        resultEl.innerHTML = `
            <div class="draw-cards-stage">
                ${drawnResults.map(({ plush, variant }, index) => {
                    const variantCardClass = variant === 'rainbow' ? 'rainbow-card' : variant === 'gold' ? 'gold-card' : '';
                    const flashVariant = variant === 'gold' || variant === 'rainbow' ? variant : 'normal';
                    const variantBadge = variant === 'normal'
                        ? ''
                        : `<div class="variant-badge ${variant}">${variant === 'rainbow' ? '🌈 Rainbow' : '🥇 Gold'}</div>`;
                    return `
                    <div class="draw-flip-card" data-card-index="${index}" role="img" aria-label="Face-down Banafix card ${index + 1}">
                        <div class="draw-flip-inner">
                            <div class="draw-card-side draw-card-back" aria-hidden="false">
                                <span class="draw-card-back-mark">?</span>
                                <span class="draw-card-back-label">Banafix</span>
                            </div>
                            <div class="draw-card-side draw-card-front gallery-card draw-result-card ${variantCardClass}" aria-hidden="true">
                                <img src="${plush.image}" alt="${plush.name}" onerror="this.onerror=null;this.src='images/Banafix.png'">
                                ${variantBadge}
                                <div class="gallery-name">${plush.name}</div>
                                <div class="rarity ${plush.rarity}">${plush.rarity}</div>
                                <span class="draw-card-flash ${flashVariant}" aria-hidden="true"></span>
                            </div>
                        </div>
                    </div>
                `;
                }).join('')}
            </div>
        `;

        const flipDuration = 850;
        const pauseAfterReveal = 2000;
        const flipDelay = flipDuration + pauseAfterReveal;
        drawnResults.forEach((drawResult, index) => {
            window.setTimeout(() => {
                const card = resultEl.querySelector(`[data-card-index="${index}"]`);
                if (!card) return;
                card.classList.add('revealed');
                card.setAttribute('aria-label', `${drawResult.plush.name}, ${drawResult.plush.rarity}`);
                card.querySelector('.draw-card-back')?.setAttribute('aria-hidden', 'true');
                card.querySelector('.draw-card-front')?.setAttribute('aria-hidden', 'false');
                window.setTimeout(() => card.querySelector('.draw-card-flash')?.classList.add('active'), flipDuration);

                if (index === drawnResults.length - 1) {
                    window.setTimeout(() => revealResults(drawnResults), flipDuration + pauseAfterReveal);
                }
            }, 120 + index * flipDelay);
        });
    }

    function revealResults(drawnResults) {
        let gainedXp = 0;
        drawnResults.forEach(({ plush, variant }) => {
            const baseXp = RARITY_XP[plush.rarity] || 0;
            const variantXp = VARIANT_XP[variant] || 0;
            gainedXp += baseXp + variantXp;

            const existing = collection.find(item => item.name === plush.name);
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
        });

        saveCollection();
        const currentXp = loadPlayerXp();
        savePlayerXp(currentXp + gainedXp);
        updateLevelInfo();
        showDrawXpToast(gainedXp);
        awardAchievementIfNeeded();

        let resultsExpireAt;
        if (!bypassCooldown) {
            const drawTime = Date.now();
            localStorage.setItem('lastDraw', drawTime);
        }
        resultsExpireAt = getNextWarsawMidnight();
        localStorage.setItem('lastDrawResults', JSON.stringify({
            cards: drawnResults.map(({ plush, variant }) => ({ name: plush.name, variant })),
            expiresAt: resultsExpireAt
        }));
        showCollection();

        window.setTimeout(() => {
            rolling = false;
            const freeCrateBtn = document.getElementById('freeCrateBtn');
            if (freeCrateBtn) freeCrateBtn.disabled = false;
            updateFreeCrateButton();
        }, revealDuration);
    }

    animateOpening();
}

function showDrawXpToast(gainedXp) {
    const toast = document.createElement('div');
    toast.className = 'draw-xp-toast';
    toast.setAttribute('role', 'status');
    toast.setAttribute('aria-live', 'polite');
    toast.textContent = `+${gainedXp} XP`;
    document.body.appendChild(toast);

    window.requestAnimationFrame(() => toast.classList.add('visible'));
    window.setTimeout(() => {
        toast.classList.remove('visible');
        toast.classList.add('fade-out');
        window.setTimeout(() => toast.remove(), 300);
    }, 1800);
}
function openFreeCrate() {
    if (rolling) return;

    const count = loadFreeCrateCount();
    if (count <= 0) {
        alert('You do not have any free crates.');
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

    const levelInfoBtn = document.getElementById('levelInfo');
    const levelProgressModal = document.getElementById('levelProgressModal');
    const closeLevelProgressModalBtn = document.getElementById('closeLevelProgressModal');

    function openLevelProgressModal() {
        if (!levelProgressModal) return;
        renderLevelProgressModal();
        levelProgressModal.classList.remove('hidden');
        levelProgressModal.setAttribute('aria-hidden', 'false');
        levelInfoBtn?.setAttribute('aria-expanded', 'true');
        document.body.classList.add('modal-open');
    }

    function closeLevelProgressModal() {
        if (!levelProgressModal) return;
        levelProgressModal.classList.add('hidden');
        levelProgressModal.setAttribute('aria-hidden', 'true');
        levelInfoBtn?.setAttribute('aria-expanded', 'false');
        document.body.classList.remove('modal-open');
    }

    const newsBtn = document.getElementById('newsBtn');
    const newsModal = document.getElementById('newsModal');
    const closeNewsModalBtn = document.getElementById('closeNewsModal');
    const saveBtn = document.getElementById('saveBtn');
    const saveModal = document.getElementById('saveModal');
    const closeSaveModalBtn = document.getElementById('closeSaveModal');
    const saveExportText = document.getElementById('saveExportText');
    const copySaveBtn = document.getElementById('copySaveBtn');
    const saveImportText = document.getElementById('saveImportText');
    const importSaveBtn = document.getElementById('importSaveBtn');
    const saveStatus = document.getElementById('saveStatus');
    const chancesBtn = document.getElementById('chancesBtn');
    const chancesModal = document.getElementById('chancesModal');
    const closeChancesModalBtn = document.getElementById('closeChancesModal');
    const chancesContent = document.getElementById('chancesContent');
    const catalogBtn = document.getElementById('catalogBtn');
    const catalogModal = document.getElementById('catalogModal');
    const closeCatalogModalBtn = document.getElementById('closeCatalogModal');

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

    function setSaveStatus(message, state = '') {
        if (!saveStatus) return;
        saveStatus.textContent = message;
        saveStatus.className = `save-status${state ? ` ${state}` : ''}`;
    }

    function openSaveModal() {
        if (!saveModal || !saveExportText) return;
        try {
            saveExportText.value = JSON.stringify(createGameSavePayload(), null, 2);
            setSaveStatus('');
        } catch {
            setSaveStatus('Could not create save data.', 'error');
        }
        saveModal.classList.remove('hidden');
        saveModal.setAttribute('aria-hidden', 'false');
        document.body.classList.add('modal-open');
    }

    function closeSaveModal() {
        if (!saveModal) return;
        saveModal.classList.add('hidden');
        saveModal.setAttribute('aria-hidden', 'true');
        document.body.classList.remove('modal-open');
    }

    async function copyGameSave() {
        if (!saveExportText) return;
        try {
            await navigator.clipboard.writeText(saveExportText.value);
            setSaveStatus('Save copied to clipboard.', 'success');
        } catch {
            saveExportText.focus();
            saveExportText.select();
            const copied = document.execCommand('copy');
            setSaveStatus(copied ? 'Save copied to clipboard.' : 'Select the text and copy it.', copied ? 'success' : 'error');
        }
    }

    function importGameSave() {
        if (!saveImportText) return;
        try {
            const payload = JSON.parse(saveImportText.value);
            const data = validateGameSavePayload(payload);
            applyGameSave(data);
            setSaveStatus('Save imported. Reloading game…', 'success');
            window.setTimeout(() => window.location.reload(), 500);
        } catch (error) {
            setSaveStatus(error instanceof SyntaxError ? 'The save text is not valid JSON.' : error.message, 'error');
        }
    }

    function openChancesModal() {
        if (!chancesModal || !chancesContent) return;
        const normalChance = 100 - VARIANT_CHANCES.gold - VARIANT_CHANCES.rainbow;
        chancesContent.innerHTML = `
            <section class="chances-section">
                <h3>Rarity chances</h3>
                <div class="chances-list">
                    ${Object.entries(RARITY_PERCENTS).map(([rarity, chance]) => `
                        <div class="chances-row">
                            <span class="rarity ${rarity}">${rarity}</span>
                            <strong>${chance}%</strong>
                        </div>
                    `).join('')}
                </div>
            </section>
            <section class="chances-section">
                <h3>Variant chances</h3>
                <div class="chances-list">
                    <div class="chances-row"><span>Normal</span><strong>${normalChance}%</strong></div>
                    <div class="chances-row"><span>🥇 Gold</span><strong>${VARIANT_CHANCES.gold}%</strong></div>
                    <div class="chances-row"><span>🌈 Rainbow</span><strong>${VARIANT_CHANCES.rainbow}%</strong></div>
                </div>
            </section>
            <section class="chances-section">
                <h3>XP rewards</h3>
                <p class="chances-note">Rarity XP plus variant bonus for each draw.</p>
                <div class="chances-list">
                    ${Object.entries(RARITY_XP).map(([rarity, xp]) => `
                        <div class="chances-row">
                            <span class="rarity ${rarity}">${rarity} base</span>
                            <strong>+${xp} XP</strong>
                        </div>
                    `).join('')}
                    ${Object.entries(VARIANT_XP).map(([variant, xp]) => `
                        <div class="chances-row">
                            <span>${variant === 'gold' ? '🥇 ' : variant === 'rainbow' ? '🌈 ' : ''}${variant} bonus</span>
                            <strong>+${xp} XP</strong>
                        </div>
                    `).join('')}
                </div>
            </section>
        `;
        chancesModal.classList.remove('hidden');
        chancesModal.setAttribute('aria-hidden', 'false');
        document.body.classList.add('modal-open');
    }

    function closeChancesModal() {
        if (!chancesModal) return;
        chancesModal.classList.add('hidden');
        chancesModal.setAttribute('aria-hidden', 'true');
        document.body.classList.remove('modal-open');
    }

    function openCatalogModal() {
        if (!catalogModal) return;
        renderGallery();
        catalogModal.classList.remove('hidden');
        catalogModal.setAttribute('aria-hidden', 'false');
        document.body.classList.add('modal-open');
    }

    function closeCatalogModal() {
        if (!catalogModal) return;
        catalogModal.classList.add('hidden');
        catalogModal.setAttribute('aria-hidden', 'true');
        document.body.classList.remove('modal-open');
    }

    const achievementsBtn = document.getElementById('achievementsBtn');
    const achievementsModal = document.getElementById('achievementsModal');
    const closeAchievementsModalBtn = document.getElementById('closeAchievementsModal');

    function closeAchievementsModal() {
        if (!achievementsModal) return;
        achievementsModal.classList.add('hidden');
        achievementsModal.setAttribute('aria-hidden', 'true');
        document.body.classList.remove('modal-open');
    }

    if (newsBtn) {
        newsBtn.addEventListener('click', openNewsModal);
    }

    if (saveBtn) {
        saveBtn.addEventListener('click', openSaveModal);
    }

    if (levelInfoBtn) {
        levelInfoBtn.addEventListener('click', openLevelProgressModal);
    }

    if (chancesBtn) {
        chancesBtn.addEventListener('click', openChancesModal);
    }

    if (catalogBtn) {
        catalogBtn.addEventListener('click', openCatalogModal);
    }

    if (achievementsBtn) {
        achievementsBtn.addEventListener('click', toggleAchievementsPanel);
    }

    if (closeAchievementsModalBtn) {
        closeAchievementsModalBtn.addEventListener('click', closeAchievementsModal);
    }

    if (closeNewsModalBtn) {
        closeNewsModalBtn.addEventListener('click', closeNewsModal);
    }

    if (closeSaveModalBtn) {
        closeSaveModalBtn.addEventListener('click', closeSaveModal);
    }

    if (copySaveBtn) {
        copySaveBtn.addEventListener('click', copyGameSave);
    }

    if (importSaveBtn) {
        importSaveBtn.addEventListener('click', importGameSave);
    }

    if (closeLevelProgressModalBtn) {
        closeLevelProgressModalBtn.addEventListener('click', closeLevelProgressModal);
    }

    if (closeChancesModalBtn) {
        closeChancesModalBtn.addEventListener('click', closeChancesModal);
    }

    if (closeCatalogModalBtn) {
        closeCatalogModalBtn.addEventListener('click', closeCatalogModal);
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

    if (saveModal) {
        saveModal.addEventListener('click', (event) => {
            if (event.target.classList.contains('news-modal-backdrop')) {
                closeSaveModal();
            }
        });
        document.addEventListener('keydown', (event) => {
            if (event.key === 'Escape' && !saveModal.classList.contains('hidden')) {
                closeSaveModal();
            }
        });
    }

    if (levelProgressModal) {
        levelProgressModal.addEventListener('click', (event) => {
            if (event.target.classList.contains('news-modal-backdrop')) {
                closeLevelProgressModal();
            }
        });
        document.addEventListener('keydown', (event) => {
            if (event.key === 'Escape' && !levelProgressModal.classList.contains('hidden')) {
                closeLevelProgressModal();
            }
        });
    }

    if (chancesModal) {
        chancesModal.addEventListener('click', (event) => {
            if (event.target.classList.contains('news-modal-backdrop')) {
                closeChancesModal();
            }
        });
        document.addEventListener('keydown', (event) => {
            if (event.key === 'Escape' && !chancesModal.classList.contains('hidden')) {
                closeChancesModal();
            }
        });
    }

    if (catalogModal) {
        catalogModal.addEventListener('click', (event) => {
            if (event.target.classList.contains('news-modal-backdrop')) {
                closeCatalogModal();
            }
        });
        document.addEventListener('keydown', (event) => {
            if (event.key === 'Escape' && !catalogModal.classList.contains('hidden')) {
                closeCatalogModal();
            }
        });
    }

    if (achievementsModal) {
        achievementsModal.addEventListener('click', (event) => {
            if (event.target.classList.contains('achievements-modal-backdrop')) {
                closeAchievementsModal();
            }
        });
        document.addEventListener('keydown', (event) => {
            if (event.key === 'Escape' && !achievementsModal.classList.contains('hidden')) {
                closeAchievementsModal();
            }
        });
    }

    if (achievementsModal) {
        achievementsModal.classList.add('hidden');
    }

    openNewsModal();

    const freeCrateBtn = document.getElementById('freeCrateBtn');
    if (freeCrateBtn) freeCrateBtn.addEventListener('click', openFreeCrate);

    updateEventStatus();
    updateLevelInfo();
    updateFreeCrateButton();
    renderGallery();
    showCollection();
}

function renderInitialCrate() {
    const initialResult = document.getElementById('result');
    if (!initialResult) return;
    const savedResults = loadSavedDrawResults();
    if (savedResults) {
        renderDrawCards(initialResult, savedResults, true);
    } else {
        renderCrateState();
    }
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initApp);
} else {
    initApp();
}

function sortGalleryPlushes(plushes) {
    const rarityOrder = { common: 1, rare: 2, epic: 3, legendary: 4, secret: 5 };
    return plushes.slice().sort((a, b) => {
        const rarityCompare = rarityOrder[a.rarity] - rarityOrder[b.rarity];
        if (rarityCompare !== 0) return rarityCompare;
        return a.name.localeCompare(b.name, 'pl', { sensitivity: 'base' });
    });
}

function getGalleryOrderedPlushes(plushes) {
    const general = sortGalleryPlushes(plushes.filter(isGeneralCollection));
    const eventPlushes = sortGalleryPlushes(plushes.filter(isEventCollection));
    const eventGroups = eventPlushes.reduce((groups, plush) => {
        const key = plush.collection;
        groups[key] = groups[key] || [];
        groups[key].push(plush);
        return groups;
    }, {});
    const orderedNames = new Set([...general, ...eventPlushes].map(plush => plush.name));
    const uncategorized = sortGalleryPlushes(plushes.filter(plush => !orderedNames.has(plush.name)));

    return [
        ...general,
        ...Object.keys(eventGroups).flatMap(group => eventGroups[group]),
        ...uncategorized
    ];
}

const collapsedGallerySections = new Set();

function renderGallery() {
    const gallery = document.getElementById('gallery');
    if (!gallery) return;
    const collectedNames = new Set(collection.map(item => item.name));
    const general = sortGalleryPlushes(plushies.filter(isGeneralCollection));
    const eventPlushes = sortGalleryPlushes(plushies.filter(isEventCollection));
    const summer = isSummerEventActive();
    const legend = isLegendEventActive();
    const taco = isTacoEventActive();
    const eventGroups = eventPlushes.reduce((groups, plush) => {
        const key = plush.collection;
        groups[key] = groups[key] || [];
        groups[key].push(plush);
        return groups;
    }, {});

    function renderGalleryCard(plush, hidden, extraClasses = '') {
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
        <div class="gallery-overview">Collected: ${totalItemsCollected} items · ${totalUniqueCollected}/${totalUnique} unique</div>
        <div class="gallery-section">
            <h4 class="gallery-section-heading">
                <button class="collection-toggle general-collection-title" type="button" data-collection-toggle data-collection-key="general" data-collection-label="General collection" aria-expanded="true" aria-label="Collapse General collection">
                    <img src="images/General.png" alt="General collection">
                    <span>${generalProgress.collected}/${generalProgress.total}</span>
                    <span class="collection-arrow" aria-hidden="true">▾</span>
                </button>
            </h4>
            <div class="gallery-section-content">
                <div class="event-note">General collection is always available in the gallery.</div>
                <div class="gallery-grid">
                    ${general.map(p => renderGalleryCard(p, !collectedNames.has(p.name))).join('')}
                </div>
            </div>
        </div>
        ${Object.keys(eventGroups).map((group, index) => {
            const sectionKey = `event-${index}`;
            const enabledGroup = group.startsWith('🍹') ? summer : group.startsWith('👑') ? legend :group.startsWith('🌮') ? taco : false;
            const groupPlushes = eventGroups[group];
            const progress = collectionProgress(groupPlushes);
            const note = group.startsWith('🍹')
                ? 'Summer event is available from July 1 to August 31.'
                : group.startsWith('👑')
                    ? 'Legends event is available on Fridays only.'
                    : group.startsWith('🌮')
                        ? 'Taco event is available on Tuesday only.'
                    : '';
            return `
            <div class="gallery-section">
                <h4 class="gallery-section-heading">
                    <button class="collection-toggle" type="button" data-collection-toggle data-collection-key="${sectionKey}" data-collection-label="${group}" aria-expanded="true" aria-label="Collapse ${group}">
                        <span>${group} ${enabledGroup ? '(available now)' : '(locked)'} (${progress.collected}/${progress.total})</span>
                        <span class="collection-arrow" aria-hidden="true">▾</span>
                    </button>
                </h4>
                <div class="gallery-section-content">
                    <div class="event-note">${note}</div>
                    <div class="gallery-grid ${enabledGroup ? '' : 'disabled'}">
                        ${groupPlushes.map(p => {
                            const hidden = !collectedNames.has(p.name);
                            const extraClasses = enabledGroup ? '' : 'disabled-card';
                            return renderGalleryCard(p, hidden, extraClasses);
                        }).join('')}
                    </div>
                </div>
            </div>
            `;
        }).join('')}
    `;

    gallery.querySelectorAll('[data-collection-toggle]').forEach(toggle => {
        const key = toggle.getAttribute('data-collection-key');
        const label = toggle.getAttribute('data-collection-label');
        const content = toggle.closest('.gallery-section')?.querySelector('.gallery-section-content');
        if (!content) return;

        const expanded = !collapsedGallerySections.has(key);
        toggle.setAttribute('aria-expanded', String(expanded));
        toggle.setAttribute('aria-label', `${expanded ? 'Collapse' : 'Expand'} ${label}`);
        content.hidden = !expanded;

        toggle.addEventListener('click', () => {
            const nextExpanded = toggle.getAttribute('aria-expanded') !== 'true';
            toggle.setAttribute('aria-expanded', String(nextExpanded));
            toggle.setAttribute('aria-label', `${nextExpanded ? 'Collapse' : 'Expand'} ${label}`);
            content.hidden = !nextExpanded;
            if (nextExpanded) {
                collapsedGallerySections.delete(key);
            } else {
                collapsedGallerySections.add(key);
            }
        });
    });
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
    const collectedItem = collection.find(item => item.name === plush.name);
    const collectedCount = collectedItem?.count || 0;
    const goldCount = collectedItem?.goldCount || 0;
    const rainbowCount = collectedItem?.rainbowCount || 0;
    const drawChance = getPlushDrawChance(plush.name);
    hideFullscreenPlush();

    const fullscreenVariantClass = rainbowCount > 0
        ? ' rainbow-border'
        : goldCount > 0
            ? ' gold-border'
            : '';
    const overlay = document.createElement('div');
    overlay.id = 'fullscreenOverlay';
    overlay.className = 'fullscreen-overlay';
    overlay.innerHTML = `
        <div class="fullscreen-card${fullscreenVariantClass}">
            <button class="fullscreen-close" aria-label="Close">×</button>
            <div class="fullscreen-layout">
                <div class="fullscreen-illustration">
                    <img src="${plush.image}" alt="${plush.name}" onerror="this.onerror=null;this.src='images/Banafix.png'">
                    <h2>${plush.name}</h2>
                    <div class="rarity ${plush.rarity}">${plush.rarity}</div>
                </div>
                <div class="fullscreen-stats">
                    <h3>Banafix stats</h3>
                    <div class="fullscreen-stat-list">
                        <div class="fullscreen-stat">
                            <span>Collected</span>
                            <strong>${collectedCount} pcs</strong>
                        </div>
                        <div class="fullscreen-stat${drawChance === null ? ' unavailable' : ''}">
                            <span>Chance per draw</span>
                            <strong>${drawChance === null ? 'Unavailable' : `${drawChance.toLocaleString(undefined, { maximumFractionDigits: 4 })}%`}</strong>
                        </div>
                        <div class="fullscreen-stat">
                            <span>Gold variants</span>
                            <strong>${goldCount}</strong>
                        </div>
                        <div class="fullscreen-stat">
                            <span>Rainbow variants</span>
                            <strong>${rainbowCount}</strong>
                        </div>
                    </div>
                </div>
            </div>
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

    if (!lastDraw || !hasDrawnOnWarsawDate(lastDraw)) {
        timer.innerHTML = "you can draw!";
        return;
    }

    const left = getNextWarsawMidnight() - Date.now();

    if (left <= 0) {
        timer.innerHTML = "you can draw!";
        return;
    }

    const h = Math.floor(left / 3600000);
    const m = Math.floor((left % 3600000) / 60000);
    const s = Math.floor((left % 60000) / 1000);

    timer.innerHTML = `next draw at 00:00 Poland time (in ${h}h ${m}m ${s}s)`;
}

setInterval(() => {
    updateTimer();
    refreshCrateState();
}, 1000);
updateTimer();
refreshCrateState();

showCollection();