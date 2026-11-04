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

function getPlushDisplayName(name) {
    return typeof name === 'string'
        ? name.replace(/\bBanafix\b/gi, '').replace(/\s+/g, ' ').trim()
        : name;
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
    collection: "🍹 Sunburst"
},

{
    name: "beach Banafix",
    image: "images/beach.png",
    rarity: "rare",
    collection: "🍹 Sunburst"
},

{
    name: "orange juice Banafix",
    image: "images/orange.png",
    rarity: "epic",
    collection: "🍹 Sunburst"
},

{
    name: "monster Banafix",
    image: "images/monster.png",
    rarity: "epic",
    collection: "🍹 Sunburst"
},

{
    name: "swimsuit Banafix",
    image: "images/swimsuit.png",
    rarity: "rare",
    collection: "🍹 Sunburst"
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

plushies.forEach(plush => {
    plush.name = getPlushDisplayName(plush.name);
});

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

const RARITY_BLINK_RANGES = {
    common: { min: 1, max: 4 },
    rare: { min: 5, max: 8 },
    epic: { min: 9, max: 20 },
    legendary: { min: 40, max: 70 },
    secret: { min: 100, max: 200 }
};

const FUSION_RARITY_ORDER = ['common', 'rare', 'epic', 'legendary', 'secret'];
const FUSION_VARIANT_BLINK_BONUS_PER_10 = 1;
const FUSION_MAX_VARIANT_BLINK_BONUS = 15;

const PLUSH_BLINK_VALUES = {
    Classic: 1,
    '2 for 1': 4,
    'v3': 3,
    negative: 2,
    Error: 40,
    retro: 54,
    angel: 68,
    Suit: 5,
    sweater: 8,
    camouflage: 7,
    Milkman: 9,
    spy: 16,
    grass: 11,
    cosmic: 18,
    golden: 13,
    Unknown: 100,
    '67': 150,
    '-180': 4,
    nerd: 6,
    '4k': 5,
    colorless: 3,
    alien: 20,
    ghost: 15,
    faceless: 2,
    'v2': 1,
    angry: 4,
    tiny: 52,
    Crayon: 66,
    invisible: 8,
    achievement: 7,
    cake: 3,
    beach: 6,
    'orange juice': 10,
    monster: 17,
    swimsuit: 5,
    Ben: 12,
    sus: 8,
    stickman: 7,
    cring: 2,
    fallout: 1,
    portal: 47,
    cubed: 61,
    ball: 19,
    '7 minutes': 14,
    neighbor: 200,
    sombrero: 6,
    cactus: 9,
    pinata: 16,
    taco: 175,
    lava: 40,
    mexican: 4
};

plushies.forEach(plush => {
    const range = RARITY_BLINK_RANGES[plush.rarity];
    const blinkValue = PLUSH_BLINK_VALUES[plush.name];
    if (!range || !Number.isInteger(blinkValue) || blinkValue < range.min || blinkValue > range.max) {
        throw new Error(`Invalid Blink value for ${plush.name}.`);
    }
    plush.blinkValue = blinkValue;
});

const LEVEL_BLINK_REWARD = 2;

const VARIANT_XP = {
    gold: 40,
    rainbow: 60,
    negative: 0,
    normal: 0
};

const VARIANT_CHANCES = {
    rainbow: 2,
    gold: 7
};

const COLLECTION_UPGRADE_CONFIG = {
    gold: { label: 'Gold chance', bonus: 2 },
    rainbow: { label: 'Rainbow chance', bonus: 0.5 },
    negative: { label: 'Negative chance', bonus: 0.5, cost: 100 }
};
const MAX_COLLECTION_UPGRADE_LEVEL = 3;
const COLLECTION_UPGRADE_BLINK_COST = { baseCost: 10, costStep: 8 };
const COLLECTION_XP_BOOST_PER_LEVEL = 5;
const COLLECTION_XP_BOOST_BLINK_COST = { baseCost: 12, costStep: 8 };

const COLLECTION_UPGRADE_DEFINITIONS = {
    'general-gold': {
        key: 'general-gold',
        collectionKey: 'general',
        variantKey: 'gold',
        label: 'General',
        icon: '📦',
        upgradeLabel: 'Gold chance'
    },
    'general-rainbow': {
        key: 'general-rainbow',
        collectionKey: 'general',
        variantKey: 'rainbow',
        label: 'General',
        icon: '📦',
        upgradeLabel: 'Rainbow chance'
    },
    'general-negative': {
        key: 'general-negative',
        collectionKey: 'general',
        variantKey: 'negative',
        label: 'General',
        icon: '📦',
        upgradeLabel: 'Negative chance'
    },
    'legends-gold': {
        key: 'legends-gold',
        collectionKey: 'legends',
        variantKey: 'gold',
        label: 'Legends',
        icon: '👑',
        upgradeLabel: 'Gold chance'
    },
    'legends-rainbow': {
        key: 'legends-rainbow',
        collectionKey: 'legends',
        variantKey: 'rainbow',
        label: 'Legends',
        icon: '👑',
        upgradeLabel: 'Rainbow chance'
    },
    'legends-negative': {
        key: 'legends-negative',
        collectionKey: 'legends',
        variantKey: 'negative',
        label: 'Legends',
        icon: '👑',
        upgradeLabel: 'Negative chance'
    },
    'summer-gold': {
        key: 'summer-gold',
        collectionKey: 'summer',
        variantKey: 'gold',
        label: 'Sunburst',
        icon: '🍹',
        upgradeLabel: 'Gold chance'
    },
    'summer-rainbow': {
        key: 'summer-rainbow',
        collectionKey: 'summer',
        variantKey: 'rainbow',
        label: 'Sunburst',
        icon: '🍹',
        upgradeLabel: 'Rainbow chance'
    },
    'summer-negative': {
        key: 'summer-negative',
        collectionKey: 'summer',
        variantKey: 'negative',
        label: 'Sunburst',
        icon: '🍹',
        upgradeLabel: 'Negative chance'
    },
    'taco-gold': {
        key: 'taco-gold',
        collectionKey: 'taco',
        variantKey: 'gold',
        label: 'Taco Tuesday',
        icon: '🌮',
        upgradeLabel: 'Gold chance'
    },
    'taco-rainbow': {
        key: 'taco-rainbow',
        collectionKey: 'taco',
        variantKey: 'rainbow',
        label: 'Taco Tuesday',
        icon: '🌮',
        upgradeLabel: 'Rainbow chance'
    },
    'taco-negative': {
        key: 'taco-negative',
        collectionKey: 'taco',
        variantKey: 'negative',
        label: 'Taco Tuesday',
        icon: '🌮',
        upgradeLabel: 'Negative chance'
    }
};

const COLLECTION_BADGE_IMAGES = {
    general: 'images/General.png',
    legends: 'images/Legends.png',
    summer: 'images/Sunburst.png',
    taco: 'images/TacoTuesday.png'
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
    return `${rewardCrates} free draw${rewardCrates === 1 ? '' : 's'}`;
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
        requiredNames: requiredNames.map(getPlushDisplayName)
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

function loadPlayerBlinks() {
    return Math.max(0, Number(localStorage.getItem('blinks')) || 0);
}

function savePlayerBlinks(blinks) {
    localStorage.setItem('blinks', Math.max(0, blinks));
}

function updateBlinkBalance() {
    const balance = loadPlayerBlinks().toLocaleString();
    document.querySelectorAll('[data-blink-count]').forEach(element => {
        element.textContent = balance;
    });
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
        const variantClass = collectedItem && collectedItem.negativeCount > 0
            ? ' negative-card'
            : collectedItem && collectedItem.rainbowCount > 0
                ? ' rainbow-card'
                : collectedItem && collectedItem.goldCount > 0
                    ? ' gold-card'
                    : '';
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
    const badgeIcon = info.querySelector('.game-menu-action-icon');
    if (badgeIcon) {
        badgeIcon.textContent = badge.emoji;
        info.className = `level-indicator game-menu-action badge-${badge.id}`;
    } else {
        info.textContent = badge.emoji;
        info.className = `level-indicator badge-${badge.id}`;
    }
    info.title = description;
    info.setAttribute('aria-label', description);
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
    const rewardDescriptionEl = document.getElementById('levelRewardDescription');

    if (!badgeEl || !rankEl || !levelEl || !progressTrack || !progressFill || !currentEl || !remainingEl || !rewardTitleEl || !rewardDescriptionEl) return;

    badgeEl.textContent = badge.emoji;
    rankEl.textContent = badge.name;
    levelEl.textContent = `Level ${level}`;
    progressTrack.setAttribute('aria-valuenow', String(percent));
    progressFill.style.width = `${percent}%`;
    currentEl.textContent = `${currentLevelXp} / ${nextLevelXp} XP`;
    remainingEl.textContent = `${nextLevelXp - currentLevelXp} XP to next level`;
    rewardTitleEl.textContent = `Level ${level + 1} reward`;
    rewardDescriptionEl.textContent = `+1 free draw · +${LEVEL_BLINK_REWARD} Blink`;
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

function getPlushVariantChance(plushName, variant) {
    const plush = plushies.find(item => item.name === plushName);
    if (!plush) return null;

    const baseChance = getPlushDrawChance(plushName);
    if (baseChance === null) return null;

    const collectionKey = getUpgradeCollectionKey(plush.collection || '');
    const chances = getCollectionVariantChanceInfo(collectionKey);
    const variantChance = variant === 'gold'
        ? chances.goldChance
        : variant === 'rainbow'
            ? chances.rainbowChance
            : variant === 'negative'
                ? chances.negativeChance
            : chances.normalChance;

    return (baseChance * variantChance) / 100;
}

function formatChanceAsOneIn(chance) {
    if (chance === null || !Number.isFinite(chance) || chance <= 0) return 'Impossible';
    if (chance >= 100) return 'Always';

    const reciprocal = 1 / (chance / 100);
    return `1 in ${Math.round(reciprocal)}`;
}

function loadCollection() {
    const raw = JSON.parse(localStorage.getItem('collection')) || [];
    const migrated = raw
        .filter(item => item && typeof item === 'object')
        .map(item => ({
            ...item,
            name: getPlushDisplayName(item.name),
            count: item.count === undefined || item.count === null ? 1 : Math.floor(Number(item.count))
        }))
        .filter(item => Number.isFinite(item.count) && item.count > 0);
    if (migrated.length !== raw.length || migrated.some((item, index) => (
        item.name !== raw[index].name || item.count !== (raw[index].count ?? 1)
    ))) {
        localStorage.setItem('collection', JSON.stringify(migrated));
    }
    return migrated.map(item => ({
        name: item.name,
        image: item.image,
        rarity: item.rarity || 'common',
        count: item.count,
        goldCount: item.goldCount || 0,
        rainbowCount: item.rainbowCount || 0,
        negativeCount: item.negativeCount || 0
    }));
}

function saveCollection() {
    localStorage.setItem('collection', JSON.stringify(collection));
}

const GAME_SAVE_KEYS = [
    'collection',
    'playerXp',
    'blinks',
    'freeCrateCount',
    'lastAwardedLevel',
    'achievementsState',
    'lastDraw',
    'lastDrawResults',
    'collectionUpgrades'
];

function readGameSaveValue(key, fallback) {
    const raw = localStorage.getItem(key);
    if (raw === null) return fallback;
    return JSON.parse(raw);
}

function encodeSavePayload(payload) {
    const data = payload && payload.data ? payload.data : payload;
    const compact = {
        f: 'daily-banafix-save',
        v: 4,
        d: [
            (data.collection || []).map(item => [item.name, item.image || '', item.rarity || 'common', item.count || 1, item.goldCount || 0, item.rainbowCount || 0, item.negativeCount || 0]),
            Number.isFinite(data.playerXp) ? data.playerXp : 0,
            Number.isFinite(data.freeCrateCount) ? data.freeCrateCount : 0,
            Number.isFinite(data.lastAwardedLevel) ? data.lastAwardedLevel : 0,
            Object.entries(data.achievementsState || {}),
            data.lastDraw ?? null,
            data.lastDrawResults ? [
                data.lastDrawResults.cards.map(card => [card.name, card.variant, Boolean(card.sold)]),
                data.lastDrawResults.drawnAt,
                data.lastDrawResults.expiresAt
            ] : null,
            data.collectionUpgrades && typeof data.collectionUpgrades === 'object'
                ? Object.entries(data.collectionUpgrades)
                : [],
            Number.isFinite(data.blinks) ? data.blinks : 0
        ]
    };
    return `dbs:${JSON.stringify(compact)}`;
}

function decodeSavePayload(value) {
    const trimmed = String(value || '').trim();
    if (!trimmed) {
        throw new Error('The save text is empty.');
    }
    if (trimmed.startsWith('{') || trimmed.startsWith('[')) {
        return JSON.parse(trimmed);
    }
    if (!trimmed.startsWith('dbs:')) {
        throw new Error('This is not a supported Daily Banafix save.');
    }

    const compact = JSON.parse(trimmed.slice(4));
    if (!compact || compact.f !== 'daily-banafix-save' || ![2, 3, 4].includes(compact.v) || !Array.isArray(compact.d) || compact.d.length < 7) {
        throw new Error('The save data is invalid.');
    }

    const [collection, playerXp, freeCrateCount, lastAwardedLevel, achievementsState, lastDraw, lastDrawResults, rawUpgrades, blinks] = compact.d;
    return {
        format: 'daily-banafix-save',
        version: 4,
        exportedAt: new Date().toISOString(),
        data: {
            collection: Array.isArray(collection)
                ? collection.map(([name, image, rarity, count, goldCount, rainbowCount, negativeCount]) => ({
                    name,
                    image,
                    rarity,
                    count,
                    goldCount,
                    rainbowCount,
                    negativeCount
                }))
                : [],
            playerXp: Number(playerXp) || 0,
            freeCrateCount: Number(freeCrateCount) || 0,
            lastAwardedLevel: Number(lastAwardedLevel) || 0,
            achievementsState: Array.isArray(achievementsState) ? Object.fromEntries(achievementsState) : {},
            lastDraw: lastDraw ?? null,
            lastDrawResults: lastDrawResults && Array.isArray(lastDrawResults)
                ? {
                    cards: lastDrawResults[0].map(([name, variant, sold]) => ({ name, variant, sold: sold === true })),
                    drawnAt: Number(lastDrawResults[1]) || 0,
                    expiresAt: Number(lastDrawResults[2]) || 0
                }
                : null,
            collectionUpgrades: Array.isArray(rawUpgrades)
                ? Object.fromEntries(rawUpgrades.map(([key, value]) => [key, Number(value) || 0]))
                : {},
            blinks: Number(blinks) || 0
        }
    };
}

function createGameSavePayload() {
    const data = {
        collection: readGameSaveValue('collection', []),
        playerXp: readGameSaveValue('playerXp', 0),
        blinks: readGameSaveValue('blinks', 0),
        freeCrateCount: readGameSaveValue('freeCrateCount', 0),
        lastAwardedLevel: readGameSaveValue('lastAwardedLevel', 0),
        achievementsState: readGameSaveValue('achievementsState', {}),
        lastDraw: readGameSaveValue('lastDraw', null),
        lastDrawResults: readGameSaveValue('lastDrawResults', null),
        collectionUpgrades: readGameSaveValue('collectionUpgrades', {})
    };

    return {
        format: 'daily-banafix-save',
        version: 4,
        exportedAt: new Date().toISOString(),
        data
    };
}

function validateGameSavePayload(payload) {
    if (!payload || payload.format !== 'daily-banafix-save' || ![1, 2, 3, 4].includes(payload.version)) {
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
    if (data.blinks === undefined) data.blinks = 0;
    if (!Number.isFinite(data.blinks) || data.blinks < 0) {
        throw new Error('The Blink value is invalid.');
    }
    for (const key of ['freeCrateCount', 'lastAwardedLevel']) {
        if (!Number.isFinite(data[key]) || data[key] < 0) {
            throw new Error(`The ${key} value is invalid.`);
        }
    }
    if (!data.achievementsState || typeof data.achievementsState !== 'object' || Array.isArray(data.achievementsState)) {
        throw new Error('The achievements data is invalid.');
    }
    if (!data.collectionUpgrades || typeof data.collectionUpgrades !== 'object' || Array.isArray(data.collectionUpgrades)) {
        throw new Error('The collection upgrades data is invalid.');
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
        savePlayerBlinks(loadPlayerBlinks() + (cratesToAward * LEVEL_BLINK_REWARD));
        updateBlinkBalance();
        localStorage.setItem('lastAwardedLevel', currentLevel);
        for (let level = awardedLevel + 1; level <= currentLevel; level += 1) {
            showToast(`Level up! Reached level ${level}! +1 free draw · +${LEVEL_BLINK_REWARD} Blink`, 'success');
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
            showToast(`Achievement unlocked: ${achievement.title}! +${rewardCrates} free draw${rewardCrates === 1 ? '' : 's'}`, 'success', achievement.icon);
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
    const dailyCrateAvailable = !hasDrawnOnWarsawDate();
    freeCrateCount = loadFreeCrateCount();

    if (countEl) {
        countEl.textContent = freeCrateCount;
        countEl.hidden = dailyCrateAvailable;
    }

    if (btn) {
        const label = dailyCrateAvailable ? 'Open daily draw ' : 'Open free draw ';
        if (btn.firstChild && btn.firstChild.textContent !== label) {
            btn.firstChild.textContent = label;
        }
        btn.disabled = rolling || (!dailyCrateAvailable && freeCrateCount <= 0);
        btn.title = dailyCrateAvailable
            ? 'Your daily draw is ready'
            : freeCrateCount > 0
                ? `You have ${freeCrateCount} free draws`
                : 'No free draws available';
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

function isSunburstEventActive(date = new Date()) {
    const month = date.getMonth(); // 0 = January
    return month === 6 || month === 7; // July or August
}

function isLegendEventActive(date = new Date()) {
    return date.getDay() === 5; // Fridays only
}

function isTacoEventActive(date = new Date()) {
    return date.getDay() === 2; // Tuesdays only
}

function getUpcomingWeeklyEvents(limit = 4, timestamp = Date.now()) {
    const { year, month, day } = getWarsawDateTimeParts(timestamp);
    const weekdayEvents = new Map([
        [2, { name: 'Taco Tuesday', icon: '🌮' }],
        [5, { name: 'Legends', icon: '👑' }]
    ]);
    const events = [];

    for (let dayOffset = 1; events.length < limit; dayOffset += 1) {
        const date = new Date(Date.UTC(year, month - 1, day + dayOffset));
        const scheduledEvent = weekdayEvents.get(date.getUTCDay());
        if (scheduledEvent) events.push({ ...scheduledEvent, date });
    }

    return events;
}

function getUpcomingSunburstSeasons(limit = 2, timestamp = Date.now()) {
    const { year, month, day } = getWarsawDateTimeParts(timestamp);
    const today = Date.UTC(year, month - 1, day);
    const nextStartYear = today < Date.UTC(year, 6, 1) ? year : year + 1;

    return Array.from({ length: limit }, (_, index) => {
        const seasonYear = nextStartYear + index;
        return {
            start: new Date(Date.UTC(seasonYear, 6, 1)),
            end: new Date(Date.UTC(seasonYear, 7, 31))
        };
    });
}

function formatCalendarDate(date, options) {
    return new Intl.DateTimeFormat('en-GB', { ...options, timeZone: 'UTC' }).format(date);
}

function renderCalendarContent() {
    const weeklyEvents = getUpcomingWeeklyEvents();
    const sunburstSeasons = getUpcomingSunburstSeasons();
    return `
        <section class="calendar-section">
            <h3>Next 4 events</h3>
            <div class="calendar-event-list">
                ${weeklyEvents.map(event => `
                    <div class="calendar-event-row">
                        <div class="calendar-event-label">
                            <span aria-hidden="true">${event.icon}</span>
                            <div><strong>${event.name}</strong><small>Weekly</small></div>
                        </div>
                        <time datetime="${event.date.toISOString().slice(0, 10)}">${formatCalendarDate(event.date, { weekday: 'short', day: 'numeric', month: 'short', year: 'numeric' })}</time>
                    </div>
                `).join('')}
            </div>
        </section>
        <section class="calendar-section">
            <h3>Next 2 yearly events</h3>
            <div class="calendar-event-list">
                ${sunburstSeasons.map(season => `
                    <div class="calendar-event-row">
                        <div class="calendar-event-label">
                            <span aria-hidden="true">🍹</span>
                            <div><strong>Sunburst</strong><small>Yearly</small></div>
                        </div>
                        <time datetime="${season.start.toISOString().slice(0, 10)}">${formatCalendarDate(season.start, { day: 'numeric', month: 'short' })} – ${formatCalendarDate(season.end, { day: 'numeric', month: 'short', year: 'numeric' })}</time>
                    </div>
                `).join('')}
            </div>
        </section>
    `;
}

function isGeneralCollection(plush) {
    return plush.collection && plush.collection.startsWith('📦');
}

function isEventCollection(plush) {
    return plush.collection && (plush.collection.startsWith('🍹') || plush.collection.startsWith('👑') || plush.collection.startsWith('🌮'));
}

function updateEventStatus() {
    const status = document.getElementById('eventStatus');
    const sunburst = isSunburstEventActive();
    const legend = isLegendEventActive();
    const taco = isTacoEventActive();
    if (!status) return;

    const available = [];
    if (sunburst) available.push('🍹 Sunburst');
    if (legend) available.push('👑 legends');
    if (taco) available.push('🌮 taco tuesday');

    status.textContent = available.length > 0
        ? `Available: ${available.join(' | ')}`
        : 'No event collections are available right now';
}

function getAvailablePlushes() {
    const sunburst = isSunburstEventActive();
    const legend = isLegendEventActive();
    const taco = isTacoEventActive();
    return plushies.filter(p =>
        isGeneralCollection(p)
        || (p.collection && p.collection.startsWith('🍹') && sunburst)
        || (p.collection && p.collection.startsWith('👑') && legend)
        || (p.collection && p.collection.startsWith('🌮') && taco)
    );
}

function openDrawCollectionPicker(bypassCooldown = false) {
    const modal = document.getElementById('drawCollectionModal');
    const options = document.getElementById('drawCollectionOptions');
    if (!modal || !options) return;

    const availableKeys = new Set(getAvailablePlushes().map(plush => getUpgradeCollectionKey(plush.collection || '')));
    const seenKeys = new Set();
    const availableGroups = Object.values(COLLECTION_UPGRADE_DEFINITIONS).filter(info => {
        if (seenKeys.has(info.collectionKey)) return false;
        seenKeys.add(info.collectionKey);
        return availableKeys.has(info.collectionKey);
    });

    options.innerHTML = `
        <div class="upgrade-collections draw-collection-options${availableGroups.length === 1 ? ' single' : ''}">
            ${availableGroups.map(info => `
                <button type="button" class="upgrade-collection-button" data-draw-collection="${info.collectionKey}" aria-label="Draw from ${info.label}">
                    <img class="collection-badge" src="${COLLECTION_BADGE_IMAGES[info.collectionKey]}" alt="${info.label} collection">
                </button>
            `).join('')}
        </div>
    `;
    modal.dataset.bypassCooldown = String(bypassCooldown);
    modal.classList.remove('hidden');
    modal.setAttribute('aria-hidden', 'false');
    document.body.classList.add('modal-open');
}

function closeDrawCollectionPicker() {
    const modal = document.getElementById('drawCollectionModal');
    if (!modal) return;
    modal.classList.add('hidden');
    modal.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('modal-open');
}

function selectDrawCollection(collectionKey) {
    const modal = document.getElementById('drawCollectionModal');
    const bypassCooldown = modal?.dataset.bypassCooldown === 'true';
    closeDrawCollectionPicker();
    drawPlush({ bypassCooldown, collectionKey });
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

    resultEl.innerHTML = `
        <div class="draw-cards-stage draw-preview-stage">
            ${Array.from({ length: 3 }, (_, index) => `
                <div class="draw-flip-card draw-preview-card" data-preview-index="${index}" role="button" tabindex="0" aria-label="Open Banafix card ${index + 1}">
                    <div class="draw-flip-inner">
                        <div class="draw-card-side draw-card-back">
                            <span class="draw-card-back-mark">?</span>
                            <span class="draw-card-back-label">Banafix</span>
                        </div>
                    </div>
                </div>
            `).join('')}
        </div>
    `;

    resultEl.querySelectorAll('.draw-preview-card').forEach(card => {
        const activate = () => drawPlush();
        card.addEventListener('click', activate);
        card.addEventListener('keydown', (event) => {
            if (event.key === 'Enter' || event.key === ' ') {
                event.preventDefault();
                activate();
            }
        });
    });
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

    const drawnAt = Number(savedResults.drawnAt);
    const isFromAnotherDay = Number.isFinite(drawnAt)
        && drawnAt > 0
        && getWarsawDateKey(drawnAt) !== getWarsawDateKey();
    if (!Array.isArray(savedResults.cards) || Number(savedResults.expiresAt) <= Date.now() || isFromAnotherDay) {
        localStorage.removeItem('lastDrawResults');
        return null;
    }

    const cards = savedResults.cards.map(savedCard => ({
        ...savedCard,
        name: getPlushDisplayName(savedCard.name)
    }));
    const drawnResults = cards.map(savedCard => ({
        plush: plushies.find(plush => plush.name === savedCard.name),
        variant: ['normal', 'gold', 'rainbow', 'negative'].includes(savedCard.variant) ? savedCard.variant : 'normal',
        sold: savedCard.sold === true
    })).filter(result => result.plush);

    if (drawnResults.length !== 3) {
        localStorage.removeItem('lastDrawResults');
        return null;
    }

    if (cards.some((card, index) => card.name !== savedResults.cards[index].name)) {
        localStorage.setItem('lastDrawResults', JSON.stringify({ ...savedResults, cards }));
    }

    return drawnResults;
}

function reconcileSavedDrawResults() {
    const drawnResults = loadSavedDrawResults();
    if (!drawnResults) return null;

    const availableByName = new Map(collection.map(item => [
        item.name,
        getCollectedVariantCounts(item)
    ]));
    let changed = false;
    drawnResults.forEach(result => {
        if (result.sold) return;
        const availableVariants = availableByName.get(result.plush.name);
        if (availableVariants && availableVariants[result.variant] > 0) {
            availableVariants[result.variant] -= 1;
        } else {
            result.sold = true;
            changed = true;
        }
    });

    if (changed) {
        const saved = JSON.parse(localStorage.getItem('lastDrawResults'));
        saved.cards = saved.cards.map((card, index) => ({
            ...card,
            sold: drawnResults[index].sold
        }));
        localStorage.setItem('lastDrawResults', JSON.stringify(saved));
    }

    return drawnResults;
}

function refreshSavedDrawResultButtons() {
    const resultEl = document.getElementById('result');
    const drawnResults = reconcileSavedDrawResults();
    if (resultEl && drawnResults) renderDrawCards(resultEl, drawnResults, true);
}

function getDrawRewards(plush, variant) {
    const collectionKey = getUpgradeCollectionKey(plush.collection || '');
    const xpBoost = getCollectionUpgradeLevel(collectionKey, 'xp') * COLLECTION_XP_BOOST_PER_LEVEL;
    return {
        xp: (RARITY_XP[plush.rarity] || 0) + (VARIANT_XP[variant] || 0) + xpBoost
    };
}

function getPlushSellValue(plush, variant = 'normal') {
    const variantMultiplier = variant === 'gold' ? 2 : variant === 'rainbow' ? 3 : variant === 'negative' ? 5 : 1;
    return (plush.blinkValue || 0) * variantMultiplier;
}

function getCollectedVariantCounts(item) {
    const total = Math.max(0, Math.floor(Number(item?.count) || 0));
    const gold = Math.min(total, Math.max(0, Math.floor(Number(item?.goldCount) || 0)));
    const rainbow = Math.min(total - gold, Math.max(0, Math.floor(Number(item?.rainbowCount) || 0)));
    const negative = Math.min(total - gold - rainbow, Math.max(0, Math.floor(Number(item?.negativeCount) || 0)));
    return {
        normal: total - gold - rainbow - negative,
        gold,
        rainbow,
        negative
    };
}

function getFusionInfo(selectedCopies) {
    if (selectedCopies.length !== 4) return null;

    const rarityRanks = selectedCopies.map(({ plush }) => FUSION_RARITY_ORDER.indexOf(plush.rarity));
    if (rarityRanks.some(rank => rank < 0)) return null;

    const averageRarityRank = rarityRanks.reduce((sum, rank) => sum + rank, 0) / rarityRanks.length;
    const totalBlink = selectedCopies.reduce(
        (sum, { plush, variant }) => sum + getPlushSellValue(plush, variant),
        0
    );
    const averageBlink = totalBlink / selectedCopies.length;

    return {
        chance: Math.round(25 + averageRarityRank * 10),
        totalBlink,
        minRewardBlink: totalBlink * 0.65,
        maxRewardBlink: totalBlink * 2,
        variantBlinkBonus: Math.min(
            FUSION_MAX_VARIANT_BLINK_BONUS,
            Math.floor(averageBlink / 10) * FUSION_VARIANT_BLINK_BONUS_PER_10
        )
    };
}

function getFusionRewardKey(outcome) {
    return encodeURIComponent(JSON.stringify([outcome.plush.name, outcome.variant]));
}

function getFusionRewardSuccessChance(fusionInfo, outcome) {
    if (!outcome || outcome.value <= 0) return 0;
    const rewardValueRatio = fusionInfo.totalBlink / outcome.value;
    return Math.min(95, fusionInfo.chance * rewardValueRatio ** 4);
}

function getFusionRewardOutcomes(fusionInfo) {
    const variants = ['normal', 'gold', 'rainbow', 'negative'];
    const outcomes = plushies.flatMap(plush => {
        const variantChances = getFusionVariantChanceInfo(plush.collection || 'general', fusionInfo.variantBlinkBonus);
        return variants
            .filter(variant => variantChances[`${variant}Chance`] > 0)
            .map(variant => ({
                plush,
                variant,
                value: getPlushSellValue(plush, variant),
                category: plush.collection || 'Uncategorized',
                weight: variantChances[`${variant}Chance`]
            }));
    });
    const inRange = outcomes.filter(outcome => (
        outcome.value >= fusionInfo.minRewardBlink && outcome.value <= fusionInfo.maxRewardBlink
    ));
    if (inRange.length > 0) return inRange;

    const closestDistance = Math.min(...outcomes.map(outcome => Math.abs(outcome.value - fusionInfo.totalBlink)));
    return outcomes.filter(outcome => Math.abs(outcome.value - fusionInfo.totalBlink) === closestDistance);
}

function getFusionRewardCategories(selectedCopies, rewardOutcomes) {
    const categories = new Map();
    selectedCopies.forEach(({ plush }) => {
        const category = plush.collection || 'Uncategorized';
        categories.set(category, (categories.get(category) || 0) + 1);
    });

    const eligibleCategories = [...categories.entries()]
        .map(([category, weight]) => ({
            category,
            weight,
            rewards: rewardOutcomes.filter(outcome => outcome.category === category)
        }))
        .filter(entry => entry.rewards.length > 0);

    if (eligibleCategories.length > 0) return eligibleCategories;

    const fallbackCategories = new Map();
    rewardOutcomes.forEach(outcome => {
        const category = outcome.category;
        if (!fallbackCategories.has(category)) fallbackCategories.set(category, []);
        fallbackCategories.get(category).push(outcome);
    });

    return [...fallbackCategories.entries()].map(([category, rewards]) => ({
        category,
        weight: 1,
        rewards
    }));
}

function getFusionVariantChanceInfo(collectionName, blinkBonus) {
    const chances = getCollectionVariantChanceInfo(getUpgradeCollectionKey(collectionName));
    const baseSpecialChance = chances.goldChance + chances.rainbowChance + chances.negativeChance;
    const addedChance = Math.min(blinkBonus, 100 - baseSpecialChance);
    const addedShare = baseSpecialChance > 0 ? addedChance / baseSpecialChance : 0;
    const goldChance = chances.goldChance * (1 + addedShare);
    const rainbowChance = chances.rainbowChance * (1 + addedShare);
    const negativeChance = chances.negativeChance * (1 + addedShare);

    return {
        goldChance,
        rainbowChance,
        negativeChance,
        normalChance: Math.max(0, 100 - goldChance - rainbowChance - negativeChance)
    };
}

function sellCollectedPlush(plushName, variant) {
    const plush = getPlushByName(plushName);
    const itemIndex = collection.findIndex(item => item.name === plushName);
    if (!plush || itemIndex === -1) return false;

    const item = collection[itemIndex];
    const variants = getCollectedVariantCounts(item);
    if (!Object.hasOwn(variants, variant) || variants[variant] <= 0) return false;

    item.count = Math.max(0, (Number(item.count) || 0) - 1);
    if (variant === 'gold') {
        item.goldCount = Math.max(0, (Number(item.goldCount) || 0) - 1);
    } else if (variant === 'rainbow') {
        item.rainbowCount = Math.max(0, (Number(item.rainbowCount) || 0) - 1);
    } else if (variant === 'negative') {
        item.negativeCount = Math.max(0, (Number(item.negativeCount) || 0) - 1);
    }

    if (item.count === 0) collection.splice(itemIndex, 1);

    const sellValue = getPlushSellValue(plush, variant);
    saveCollection();
    savePlayerBlinks(loadPlayerBlinks() + sellValue);
    updateBlinkBalance();
    return sellValue;
}

function buildDrawRewardMarkup(plush, variant, hidden = false) {
    const rewards = getDrawRewards(plush, variant);
    return `
        <div class="draw-card-rewards"${hidden ? ' hidden' : ''}>
            <span class="draw-card-reward xp">+${rewards.xp} XP</span>
        </div>
    `;
}

function buildDrawCardsMarkup(drawnResults, revealAll = false) {
    return `
        <div class="draw-cards-stage">
            ${drawnResults.map(({ plush, variant, sold = false }, index) => {
                const variantCardClass = variant === 'rainbow' ? 'rainbow-card' : variant === 'gold' ? 'gold-card' : variant === 'negative' ? 'negative-card' : '';
                const backVariantClass = variant === 'normal' ? '' : `${variant}-back`;
                const flashVariant = variant === 'gold' || variant === 'rainbow' || variant === 'negative' ? variant : 'normal';
                const variantBadge = variant === 'normal'
                    ? ''
                    : `<div class="variant-badge ${variant}">${variant === 'rainbow' ? '🌈 Rainbow' : variant === 'negative' ? '🖤 Negative' : '🥇 Gold'}</div>`;
                const rewards = getDrawRewards(plush, variant);
                return `
                <div class="draw-card-result-item">
                    <div class="draw-flip-card${revealAll ? ' revealed' : ''}" data-card-index="${index}" role="img" aria-label="${revealAll ? `${plush.name}, ${plush.rarity}, +${rewards.xp} XP` : `Face-down Banafix card ${index + 1}`}" >
                        <div class="draw-flip-inner">
                            <div class="draw-card-side draw-card-back ${backVariantClass}" aria-hidden="${revealAll ? 'true' : 'false'}">
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
                    <div class="draw-card-actions">
                        ${buildDrawRewardMarkup(plush, variant, !revealAll)}
                        ${revealAll ? `
                            <button class="draw-card-sell-button" type="button" data-draw-sell-index="${index}" ${sold ? 'disabled' : ''}>
                                ${sold ? 'Sold' : `Sell for ${getPlushSellValue(plush, variant)} Blink`}
                            </button>
                        ` : ''}
                    </div>
                </div>
            `;
            }).join('')}
        </div>
    `;
}

function renderDrawCards(resultEl, drawnResults, revealAll = false) {
    resultEl.innerHTML = buildDrawCardsMarkup(drawnResults, revealAll);
    if (!revealAll) return;

    resultEl.querySelectorAll('[data-draw-sell-index]').forEach(button => {
        button.addEventListener('click', () => {
            const index = Number(button.dataset.drawSellIndex);
            const savedResults = loadSavedDrawResults();
            const drawResult = savedResults?.[index];
            if (!drawResult || drawResult.sold) return;

            const sellValue = sellCollectedPlush(drawResult.plush.name, drawResult.variant);
            if (sellValue === false) {
                showToast('That Banafix copy is no longer available.', 'error');
                return;
            }

            drawResult.sold = true;
            const saved = JSON.parse(localStorage.getItem('lastDrawResults'));
            saved.cards[index].sold = true;
            localStorage.setItem('lastDrawResults', JSON.stringify(saved));
            refreshSavedDrawResultButtons();
            renderGallery();
            showToast(`${drawResult.plush.name} sold for ${sellValue} Blink.`, 'success');
        });
    });
}

function pushDrawHistorySet(drawnResults) {
    const previousSets = drawHistory.slice(-3);
    drawHistory = [...previousSets, drawnResults];
    if (drawHistory.length > 4) {
        drawHistory.shift();
    }
}

function refreshCrateState() {
    if (rolling) return;
    const resultEl = document.getElementById('result');
    if (!resultEl) return;
    const savedResults = reconcileSavedDrawResults();
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

    const { bypassCooldown = false, collectionKey } = options;
    const lastDraw = localStorage.getItem("lastDraw");

    if (!bypassCooldown && hasDrawnOnWarsawDate(lastDraw)) {
        alert("Today you have already drawn Banafix!");
        return;
    }

    if (!collectionKey) {
        openDrawCollectionPicker(bypassCooldown);
        return;
    }

    const availablePlushes = getAvailablePlushes().filter(plush =>
        getUpgradeCollectionKey(plush.collection || '') === collectionKey
    );
    if (availablePlushes.length === 0) {
        alert('This collection is not currently available to draw.');
        return;
    }

    if (bypassCooldown) {
        const count = loadFreeCrateCount();
        if (count <= 0) {
            alert('You do not have any free draws.');
            return;
        }
        freeCrateCount = count - 1;
        saveFreeCrateCount(freeCrateCount);
        updateFreeCrateButton();
    }

    const rollingPlushes = getGalleryOrderedPlushes(availablePlushes);

    rolling = true;
    const freeCrateBtn = document.getElementById('freeCrateBtn');
    if (freeCrateBtn) freeCrateBtn.disabled = true;

    const startTime = Date.now();
    const resultsExpireAt = getNextWarsawMidnight(startTime);
    const drawCount = 3;
    const openingDuration = 300;
    const firstFlipAt = 2000;
    const flipDuration = 1300;
    const pauseAfterReveal = 100;
    const flipDelay = flipDuration + pauseAfterReveal;
    const firstFlipDelay = Math.max(0, firstFlipAt - openingDuration);
    const revealDuration = firstFlipDelay + ((drawCount - 1) * flipDelay) + flipDuration + pauseAfterReveal;
    const resultEl = document.getElementById('result');

    function showChestState() {
        renderCrateState();
    }

    function showCrateOpenState() {
        resultEl.innerHTML = `
            <div class="draw-cards-stage draw-preview-stage">
                ${Array.from({ length: 3 }, (_, index) => `
                    <div class="draw-flip-card draw-preview-card is-opening" data-preview-index="${index}" role="button" tabindex="0" aria-label="Open Banafix card ${index + 1}">
                        <div class="draw-flip-inner">
                            <div class="draw-card-side draw-card-back">
                                <span class="draw-card-back-mark">?</span>
                                <span class="draw-card-back-label">Banafix</span>
                            </div>
                        </div>
                    </div>
                `).join('')}
            </div>
        `;
    }

    function animateOpening() {
        const elapsed = Date.now() - startTime;
        if (elapsed < openingDuration) {
            showChestState();
            window.requestAnimationFrame(animateOpening);
            return;
        }

        animateRoll();
    }

    function animateRoll() {
        showCrateOpenState();
        const drawnResults = Array.from({ length: drawCount }, () => {
            const plush = drawWeightedPlush(availablePlushes);
            return {
                plush,
                variant: rollPlushVariant(plush.collection)
            };
        });

        resultEl.innerHTML = `
            <div class="draw-cards-stage">
                ${drawnResults.map(({ plush, variant }, index) => {
                    const variantCardClass = variant === 'rainbow' ? 'rainbow-card' : variant === 'gold' ? 'gold-card' : variant === 'negative' ? 'negative-card' : '';
                    const backVariantClass = variant === 'normal' ? '' : `${variant}-back`;
                    const flashVariant = variant === 'gold' || variant === 'rainbow' || variant === 'negative' ? variant : 'normal';
                    const variantBadge = variant === 'normal'
                        ? ''
                        : `<div class="variant-badge ${variant}">${variant === 'rainbow' ? '🌈 Rainbow' : variant === 'negative' ? '🖤 Negative' : '🥇 Gold'}</div>`;
                    return `
                            <div class="draw-card-result-item draw-card-enter" style="--card-entry-index:${index};--card-entry-tilt:${index === 1 ? '4deg' : index === 0 ? '-5deg' : '3deg'}">
                                <div class="draw-flip-card" data-card-index="${index}" role="img" aria-label="Face-down Banafix card ${index + 1}">
                                    <div class="draw-flip-inner">
                                    <div class="draw-card-side draw-card-back ${backVariantClass}" aria-hidden="false">
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
                            <div class="draw-card-actions">
                                ${buildDrawRewardMarkup(plush, variant, true)}
                            </div>
                    </div>
                `;
                }).join('')}
            </div>
        `;

        drawnResults.forEach((drawResult, index) => {
            window.setTimeout(() => {
                const card = resultEl.querySelector(`[data-card-index="${index}"]`);
                if (!card) return;
                card.classList.add('revealed');
                const rewards = getDrawRewards(drawResult.plush, drawResult.variant);
                card.setAttribute('aria-label', `${drawResult.plush.name}, ${drawResult.plush.rarity}, +${rewards.xp} XP`);
                card.querySelector('.draw-card-back')?.setAttribute('aria-hidden', 'true');
                card.querySelector('.draw-card-front')?.setAttribute('aria-hidden', 'false');
                window.setTimeout(() => card.querySelector('.draw-card-flash')?.classList.add('active'), flipDuration);
            }, firstFlipDelay + index * flipDelay);
        });
        window.setTimeout(() => revealResults(drawnResults), revealDuration);
    }

    function revealResults(drawnResults) {
        let gainedXp = 0;
        drawnResults.forEach(({ plush, variant }) => {
            const rewards = getDrawRewards(plush, variant);
            gainedXp += rewards.xp;

            const existing = collection.find(item => item.name === plush.name);
            if (existing) {
                existing.count = (existing.count || 1) + 1;
                if (variant === 'gold') {
                    existing.goldCount = (existing.goldCount || 0) + 1;
                }
                if (variant === 'rainbow') {
                    existing.rainbowCount = (existing.rainbowCount || 0) + 1;
                }
                if (variant === 'negative') {
                    existing.negativeCount = (existing.negativeCount || 0) + 1;
                }
            } else {
                collection.push({
                    ...plush,
                    count: 1,
                    goldCount: variant === 'gold' ? 1 : 0,
                    rainbowCount: variant === 'rainbow' ? 1 : 0,
                    negativeCount: variant === 'negative' ? 1 : 0
                });
            }
        });

        saveCollection();
        const currentXp = loadPlayerXp();
        savePlayerXp(currentXp + gainedXp);
        updateLevelInfo();
        updateBlinkBalance();
        showDrawXpToast(gainedXp);
        awardAchievementIfNeeded();

        if (!bypassCooldown) {
            const drawTime = Date.now();
            localStorage.setItem('lastDraw', drawTime);
        }
        localStorage.setItem('lastDrawResults', JSON.stringify({
            cards: drawnResults.map(({ plush, variant }) => ({ name: plush.name, variant, sold: false })),
            drawnAt: startTime,
            expiresAt: resultsExpireAt
        }));
        renderDrawCards(resultEl, drawnResults, true);
        showCollection();

        rolling = false;
        const freeCrateBtn = document.getElementById('freeCrateBtn');
        if (freeCrateBtn) freeCrateBtn.disabled = false;
        updateFreeCrateButton();
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
        alert('You do not have any free draws.');
        return;
    }

    openDrawCollectionPicker(true);
}

function openAvailableCrate() {
    if (hasDrawnOnWarsawDate()) {
        openFreeCrate();
        return;
    }

    drawPlush();
}

function getUpgradeCollectionKey(collectionName = '') {
    if (collectionName.startsWith('👑')) return 'legends';
    if (collectionName.startsWith('🍹')) return 'summer';
    if (collectionName.startsWith('🌮')) return 'taco';
    return 'general';
}

function getCollectionUpgradeState() {
    try {
        const parsed = JSON.parse(localStorage.getItem('collectionUpgrades') || '{}');
        if (!parsed || typeof parsed !== 'object' || Array.isArray(parsed)) {
            return {};
        }

        const normalized = { ...parsed };
        Object.entries(COLLECTION_UPGRADE_DEFINITIONS).forEach(([key, info]) => {
            if (info.variantKey !== 'negative' && !normalized[key] && typeof normalized[info.collectionKey] === 'number') {
                normalized[key] = normalized[info.collectionKey];
            }
        });
        return normalized;
    } catch {
        return {};
    }
}

function saveCollectionUpgrades(state) {
    localStorage.setItem('collectionUpgrades', JSON.stringify(state));
}

function getCollectionUpgradeLevel(collectionKey, variantKey) {
    const state = getCollectionUpgradeState();
    const key = `${collectionKey}-${variantKey}`;
    const value = state[key] ?? 0;
    return Math.max(0, Math.min(MAX_COLLECTION_UPGRADE_LEVEL, Math.floor(Number(value) || 0)));
}

function getCollectionBlinkUpgradeCost(collectionKey) {
    const combinedLevel = Math.min(
        getCollectionUpgradeLevel(collectionKey, 'gold'),
        getCollectionUpgradeLevel(collectionKey, 'rainbow')
    );
    return COLLECTION_UPGRADE_BLINK_COST.baseCost + (combinedLevel * COLLECTION_UPGRADE_BLINK_COST.costStep);
}

function getCollectionXpBoostBlinkCost(collectionKey) {
    const level = getCollectionUpgradeLevel(collectionKey, 'xp');
    return COLLECTION_XP_BOOST_BLINK_COST.baseCost + (level * COLLECTION_XP_BOOST_BLINK_COST.costStep);
}

function getCollectionVariantChanceInfo(collectionKey = 'general') {
    const goldLevel = getCollectionUpgradeLevel(collectionKey, 'gold');
    const rainbowLevel = getCollectionUpgradeLevel(collectionKey, 'rainbow');
    const negativeChance = getCollectionUpgradeLevel(collectionKey, 'negative') > 0
        ? COLLECTION_UPGRADE_CONFIG.negative.bonus
        : 0;
    const goldChance = Math.min(100, VARIANT_CHANCES.gold + (goldLevel * COLLECTION_UPGRADE_CONFIG.gold.bonus));
    const rainbowChance = Math.min(100, VARIANT_CHANCES.rainbow + (rainbowLevel * COLLECTION_UPGRADE_CONFIG.rainbow.bonus));
    const normalChance = Math.max(0, 100 - goldChance - rainbowChance - negativeChance);
    return {
        goldChance,
        rainbowChance,
        negativeChance,
        normalChance,
        goldBonus: goldLevel * COLLECTION_UPGRADE_CONFIG.gold.bonus,
        rainbowBonus: rainbowLevel * COLLECTION_UPGRADE_CONFIG.rainbow.bonus
    };
}

function rollPlushVariant(collectionName = 'general') {
    const key = getUpgradeCollectionKey(collectionName);
    const { goldChance, rainbowChance, negativeChance } = getCollectionVariantChanceInfo(key);
    const roll = Math.random() * 100;
    if (roll < rainbowChance) return 'rainbow';
    if (roll < rainbowChance + goldChance) return 'gold';
    if (roll < rainbowChance + goldChance + negativeChance) return 'negative';
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
    updateBlinkBalance();
    renderInitialCrate();
    const homeCalendarContent = document.getElementById('homeCalendarContent');
    if (homeCalendarContent) {
        homeCalendarContent.innerHTML = renderCalendarContent();
    }

    const levelInfoBtn = document.getElementById('levelInfo');
    const levelProgressModal = document.getElementById('levelProgressModal');
    const closeLevelProgressModalBtn = document.getElementById('closeLevelProgressModal');
    const drawCollectionModal = document.getElementById('drawCollectionModal');
    const drawCollectionOptions = document.getElementById('drawCollectionOptions');
    const closeDrawCollectionModalBtn = document.getElementById('closeDrawCollectionModal');

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

    const gameMenuBtn = document.getElementById('gameMenuBtn');
    const gameMenuModal = document.getElementById('gameMenuModal');
    const closeGameMenuModalBtn = document.getElementById('closeGameMenuModal');

    function openGameMenu() {
        if (!gameMenuModal) return;
        gameMenuModal.classList.remove('hidden');
        gameMenuModal.setAttribute('aria-hidden', 'false');
        gameMenuBtn?.setAttribute('aria-expanded', 'true');
        document.body.classList.add('modal-open');
    }

    function closeGameMenu() {
        if (!gameMenuModal) return;
        gameMenuModal.classList.add('hidden');
        gameMenuModal.setAttribute('aria-hidden', 'true');
        gameMenuBtn?.setAttribute('aria-expanded', 'false');
        document.body.classList.remove('modal-open');
    }

    const newsBtn = document.getElementById('newsBtn');
    const newsModal = document.getElementById('newsModal');
    const closeNewsModalBtn = document.getElementById('closeNewsModal');
    const quickActionsBtn = document.getElementById('quickActionsBtn');
    const quickActionsMenu = document.getElementById('quickActionsMenu');
    const quickActionsHost = document.getElementById('topControls');
    const saveBtn = document.getElementById('saveBtn');
    const saveModal = document.getElementById('saveModal');
    const closeSaveModalBtn = document.getElementById('closeSaveModal');
    const saveExportText = document.getElementById('saveExportText');
    const copySaveBtn = document.getElementById('copySaveBtn');
    const upgradeBtn = document.getElementById('upgradeBtn');
    const upgradeModal = document.getElementById('upgradeModal');
    const closeUpgradeModalBtn = document.getElementById('closeUpgradeModal');
    const upgradeList = document.getElementById('upgradeList');
    const fusionBtn = document.getElementById('fusionBtn');
    const fusionModal = document.getElementById('fusionModal');
    const closeFusionModalBtn = document.getElementById('closeFusionModal');
    const fusionInventory = document.getElementById('fusionInventory');
    const fusionSummary = document.getElementById('fusionSummary');
    const fusionRewards = document.getElementById('fusionRewards');
    const fusionSubmit = document.getElementById('fusionSubmit');
    const fusionStatus = document.getElementById('fusionStatus');
    const fusionWheelSection = document.getElementById('fusionWheelSection');
    const fusionWheel = document.getElementById('fusionWheel');
    const fusionWheelCenter = document.querySelector('#fusionWheel .fusion-wheel-center');
    const fusionWheelChance = document.getElementById('fusionWheelChance');
    const selectedFusionCopyKeys = new Set();
    const visibleFusionRewardKeys = new Set();
    let selectedFusionRewardKey = null;
    let fusionRewardPoolSignature = '';
    let fusionSpinning = false;
    const saveImportText = document.getElementById('saveImportText');
    const importSaveBtn = document.getElementById('importSaveBtn');
    const saveStatus = document.getElementById('saveStatus');
    const chancesBtn = document.getElementById('chancesBtn');
    const chancesModal = document.getElementById('chancesModal');
    const closeChancesModalBtn = document.getElementById('closeChancesModal');
    const chancesContent = document.getElementById('chancesContent');
    const calendarBtn = document.getElementById('calendarBtn');
    const calendarModal = document.getElementById('calendarModal');
    const closeCalendarModalBtn = document.getElementById('closeCalendarModal');
    const calendarContent = document.getElementById('calendarContent');
    const catalogBtn = document.getElementById('catalogBtn');
    const catalogModal = document.getElementById('catalogModal');
    const closeCatalogModalBtn = document.getElementById('closeCatalogModal');
    const catalogCollectedFilter = document.getElementById('catalogCollectedFilter');
    const catalogQuickSellButton = document.getElementById('catalogQuickSell');

    function closeQuickActions() {
        if (!quickActionsMenu) return;
        quickActionsMenu.classList.add('hidden');
        quickActionsBtn?.setAttribute('aria-expanded', 'false');
    }

    function toggleQuickActions() {
        if (!quickActionsMenu) return;
        const isOpening = quickActionsMenu.classList.contains('hidden');
        quickActionsMenu.classList.toggle('hidden', !isOpening);
        quickActionsBtn?.setAttribute('aria-expanded', String(isOpening));
    }

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
            saveExportText.value = encodeSavePayload(createGameSavePayload());
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
            const payload = decodeSavePayload(saveImportText.value);
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
        const { normalChance, goldChance, rainbowChance, negativeChance } = getCollectionVariantChanceInfo('general');
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
                    <div class="chances-row"><span>🥇 Gold</span><strong>${goldChance}%</strong></div>
                    <div class="chances-row"><span>🌈 Rainbow</span><strong>${rainbowChance}%</strong></div>
                    <div class="chances-row"><span>🖤 Negative</span><strong>${negativeChance}%</strong></div>
                </div>
            </section>
            <section class="chances-section">
                <h3>Rewards</h3>
                <div class="chances-reward-columns">
                    <div class="chances-reward-column">
                        <h4 class="chances-subheading">XP rewards</h4>
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
                                    <span>${variant === 'gold' ? '🥇 ' : variant === 'rainbow' ? '🌈 ' : variant === 'negative' ? '🖤 ' : ''}${variant} bonus</span>
                                    <strong>+${xp} XP</strong>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                    <div class="chances-reward-column">
                        <h4 class="chances-subheading">Banafix sale values</h4>
                        <p class="chances-note">Each Banafix has its own Blink value based on rarity. Variant bonuses multiply its value. You also earn ${LEVEL_BLINK_REWARD} Blink per level.</p>
                        <div class="chances-list">
                            ${Object.entries(RARITY_BLINK_RANGES).map(([rarity, range]) => `
                                <div class="chances-row">
                                    <span class="rarity ${rarity}">${rarity}</span>
                                    <strong>${range.min}–${range.max} Blink</strong>
                                </div>
                            `).join('')}
                        </div>
                    </div>
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

    function openCalendarModal() {
        if (!calendarModal || !calendarContent) return;
        calendarContent.innerHTML = renderCalendarContent();
        calendarModal.classList.remove('hidden');
        calendarModal.setAttribute('aria-hidden', 'false');
        document.body.classList.add('modal-open');
    }

    function closeCalendarModal() {
        if (!calendarModal) return;
        calendarModal.classList.add('hidden');
        calendarModal.setAttribute('aria-hidden', 'true');
        document.body.classList.remove('modal-open');
    }

    let selectedUpgradeCollectionKey = null;

    function renderUpgradeModal() {
        if (!upgradeList) return;

        const groupedCollections = Object.values(COLLECTION_UPGRADE_DEFINITIONS).reduce((groups, info) => {
            if (!groups[info.collectionKey]) {
                groups[info.collectionKey] = {
                    icon: info.icon,
                    label: info.label,
                    badgeSrc: COLLECTION_BADGE_IMAGES[info.collectionKey] || '',
                    items: []
                };
            }
            groups[info.collectionKey].items.push(info);
            return groups;
        }, {});

        if (!selectedUpgradeCollectionKey) {
            upgradeList.innerHTML = `
                <div class="upgrade-collections">
                    ${Object.entries(groupedCollections).map(([collectionKey, group]) => `
                        <button type="button" class="upgrade-collection-button" data-upgrade-collection="${collectionKey}" aria-label="Show ${group.label} upgrades">
                            ${group.badgeSrc
                                ? `<img class="collection-badge" src="${group.badgeSrc}" alt="${group.label} collection">`
                                : `<span class="upgrade-collection-icon" aria-hidden="true">${group.icon}</span><span>${group.label}</span>`}
                        </button>
                    `).join('')}
                </div>
            `;
            upgradeList.querySelectorAll('[data-upgrade-collection]').forEach(button => {
                button.addEventListener('click', () => {
                    selectedUpgradeCollectionKey = button.getAttribute('data-upgrade-collection');
                    renderUpgradeModal();
                });
            });
            return;
        }

        const selectedGroup = groupedCollections[selectedUpgradeCollectionKey];
        if (!selectedGroup) {
            selectedUpgradeCollectionKey = null;
            renderUpgradeModal();
            return;
        }

        upgradeList.innerHTML = Object.entries(groupedCollections)
            .filter(([collectionKey]) => collectionKey === selectedUpgradeCollectionKey)
            .map(([collectionKey, group]) => {
            const goldInfo = group.items.find(info => info.variantKey === 'gold');
            const rainbowInfo = group.items.find(info => info.variantKey === 'rainbow');
            const goldLevel = getCollectionUpgradeLevel(collectionKey, 'gold');
            const rainbowLevel = getCollectionUpgradeLevel(collectionKey, 'rainbow');
            const negativeLevel = getCollectionUpgradeLevel(collectionKey, 'negative');
            const { goldChance, rainbowChance, negativeChance } = getCollectionVariantChanceInfo(collectionKey);
            const levelLabel = goldLevel === rainbowLevel
                ? `Lv. ${goldLevel}`
                : `🥇 ${goldLevel} · 🌈 ${rainbowLevel}`;
            const canUpgradeGold = goldLevel < MAX_COLLECTION_UPGRADE_LEVEL;
            const canUpgradeRainbow = rainbowLevel < MAX_COLLECTION_UPGRADE_LEVEL;
            const canUpgrade = canUpgradeGold || canUpgradeRainbow;
            const totalCost = canUpgrade ? getCollectionBlinkUpgradeCost(collectionKey) : 0;
            const canAfford = canUpgrade && loadPlayerBlinks() >= totalCost;
            const xpBoostLevel = getCollectionUpgradeLevel(collectionKey, 'xp');
            const canUpgradeXp = xpBoostLevel < MAX_COLLECTION_UPGRADE_LEVEL;
            const xpBoostCost = canUpgradeXp ? getCollectionXpBoostBlinkCost(collectionKey) : 0;
            const canAffordXp = canUpgradeXp && loadPlayerBlinks() >= xpBoostCost;
            const rows = `
                <div class="upgrade-row">
                    <div class="upgrade-copy">
                        <div class="upgrade-title">Gold + Rainbow chance</div>
                        <div class="upgrade-current-chances">
                            <span class="upgrade-current-label">Current chance</span>
                            <span class="upgrade-current-value gold">🥇 ${goldChance}%</span>
                            <span class="upgrade-current-value rainbow">🌈 ${rainbowChance}%</span>
                        </div>
                        <div class="upgrade-bonuses">
                            <span class="upgrade-bonus gold">${canUpgradeGold ? `🥇 Gold +${COLLECTION_UPGRADE_CONFIG.gold.bonus}% / level` : '🥇 Gold MAX'}</span>
                            <span class="upgrade-bonus rainbow">${canUpgradeRainbow ? `🌈 Rainbow +${COLLECTION_UPGRADE_CONFIG.rainbow.bonus}% / level` : '🌈 Rainbow MAX'}</span>
                        </div>
                    </div>
                    <div class="upgrade-meta">
                        <span class="upgrade-level">${levelLabel}</span>
                        <span class="upgrade-cost">${canUpgrade ? `${totalCost} Blink` : 'MAX'}</span>
                        <button type="button" class="upgrade-purchase" data-combined-upgrade="${collectionKey}" ${canAfford ? '' : 'disabled'}>${canUpgrade ? 'Upgrade' : 'Max level'}</button>
                    </div>
                </div>
                <div class="upgrade-row xp-boost-upgrade-row">
                    <div class="upgrade-copy">
                        <div class="upgrade-title">XP Boost</div>
                        <div class="upgrade-bonuses">
                            <span class="upgrade-bonus xp">+${COLLECTION_XP_BOOST_PER_LEVEL} XP / Banafix / level</span>
                        </div>
                    </div>
                    <div class="upgrade-meta">
                        <span class="upgrade-level">Lv. ${xpBoostLevel}</span>
                        <span class="upgrade-cost">${canUpgradeXp ? `${xpBoostCost} Blink` : 'MAX'}</span>
                        <button type="button" class="upgrade-purchase" data-xp-boost-upgrade="${collectionKey}" ${canAffordXp ? '' : 'disabled'}>${canUpgradeXp ? 'Upgrade' : 'Max level'}</button>
                    </div>
                </div>
                <div class="upgrade-row negative-variant-upgrade-row">
                    <div class="upgrade-copy">
                        <div class="upgrade-title">Negative Banafix</div>
                        <div class="upgrade-current-chances">
                            <span class="upgrade-current-label">Current chance</span>
                            <span class="upgrade-current-value negative">🖤 ${negativeChance}%</span>
                        </div>
                        <div class="upgrade-bonuses">
                            <span class="upgrade-bonus negative">Unlocks a 0.5% chance in this collection</span>
                        </div>
                    </div>
                    <div class="upgrade-meta">
                        <span class="upgrade-level">${negativeLevel > 0 ? 'Unlocked' : 'Locked'}</span>
                        <span class="upgrade-cost">${negativeLevel > 0 ? 'Purchased' : `${COLLECTION_UPGRADE_CONFIG.negative.cost} Blink`}</span>
                        <button type="button" class="upgrade-purchase" data-negative-upgrade="${collectionKey}" ${negativeLevel > 0 || loadPlayerBlinks() < COLLECTION_UPGRADE_CONFIG.negative.cost ? 'disabled' : ''}>
                            ${negativeLevel > 0 ? 'Unlocked' : 'Unlock'}
                        </button>
                    </div>
                </div>
            `;

            return `
                <section class="upgrade-group">
                    <button type="button" class="upgrade-back" data-upgrade-back>← Collections</button>
                    <div class="upgrade-group-header">
                        <span>${group.icon}</span>
                        <span>${group.label}</span>
                    </div>
                    <div class="upgrade-group-body">
                        ${rows}
                    </div>
                </section>
            `;
        }).join('');

        upgradeList.querySelector('[data-upgrade-back]')?.addEventListener('click', () => {
            selectedUpgradeCollectionKey = null;
            renderUpgradeModal();
        });

        upgradeList.querySelectorAll('[data-combined-upgrade]').forEach(button => {
            const collectionKey = button.getAttribute('data-combined-upgrade');
            if (!collectionKey) return;
            button.addEventListener('click', () => {
                const goldKey = `${collectionKey}-gold`;
                const rainbowKey = `${collectionKey}-rainbow`;
                const goldLevel = getCollectionUpgradeLevel(collectionKey, 'gold');
                const rainbowLevel = getCollectionUpgradeLevel(collectionKey, 'rainbow');
                const canUpgradeGold = goldLevel < MAX_COLLECTION_UPGRADE_LEVEL;
                const canUpgradeRainbow = rainbowLevel < MAX_COLLECTION_UPGRADE_LEVEL;
                if (!canUpgradeGold && !canUpgradeRainbow) return;
                const totalCost = getCollectionBlinkUpgradeCost(collectionKey);
                const currentBlinks = loadPlayerBlinks();
                if (currentBlinks < totalCost) {
                    showToast('Not enough Blink for this upgrade.', 'error');
                    return;
                }

                const state = getCollectionUpgradeState();
                if (canUpgradeGold) state[goldKey] = goldLevel + 1;
                if (canUpgradeRainbow) state[rainbowKey] = rainbowLevel + 1;
                saveCollectionUpgrades(state);
                savePlayerBlinks(currentBlinks - totalCost);
                updateBlinkBalance();
                renderUpgradeModal();
                showToast(`${selectedGroup.label} Gold + Rainbow chance upgraded.`, 'success');
            });
        });

        upgradeList.querySelectorAll('[data-xp-boost-upgrade]').forEach(button => {
            const collectionKey = button.getAttribute('data-xp-boost-upgrade');
            if (!collectionKey) return;
            button.addEventListener('click', () => {
                const level = getCollectionUpgradeLevel(collectionKey, 'xp');
                if (level >= MAX_COLLECTION_UPGRADE_LEVEL) return;
                const cost = getCollectionXpBoostBlinkCost(collectionKey);
                const currentBlinks = loadPlayerBlinks();
                if (currentBlinks < cost) {
                    showToast('Not enough Blink for this upgrade.', 'error');
                    return;
                }

                const state = getCollectionUpgradeState();
                state[`${collectionKey}-xp`] = level + 1;
                saveCollectionUpgrades(state);
                savePlayerBlinks(currentBlinks - cost);
                updateBlinkBalance();
                renderUpgradeModal();
                showToast(`${selectedGroup.label} XP Boost upgraded to Lv. ${level + 1}.`, 'success');
            });
        });

        upgradeList.querySelectorAll('[data-negative-upgrade]').forEach(button => {
            const collectionKey = button.getAttribute('data-negative-upgrade');
            if (!collectionKey) return;
            button.addEventListener('click', () => {
                if (getCollectionUpgradeLevel(collectionKey, 'negative') > 0) return;
                const cost = COLLECTION_UPGRADE_CONFIG.negative.cost;
                const currentBlinks = loadPlayerBlinks();
                if (currentBlinks < cost) {
                    showToast('Not enough Blink for this upgrade.', 'error');
                    return;
                }

                const state = getCollectionUpgradeState();
                state[`${collectionKey}-negative`] = 1;
                saveCollectionUpgrades(state);
                savePlayerBlinks(currentBlinks - cost);
                updateBlinkBalance();
                renderUpgradeModal();
                showToast(`${selectedGroup.label} Negative variant unlocked.`, 'success');
            });
        });
    }

    function openUpgradeModal() {
        if (!upgradeModal) return;
        selectedUpgradeCollectionKey = null;
        renderUpgradeModal();
        upgradeModal.classList.remove('hidden');
        upgradeModal.setAttribute('aria-hidden', 'false');
        document.body.classList.add('modal-open');
    }

    function closeUpgradeModal() {
        if (!upgradeModal) return;
        upgradeModal.classList.add('hidden');
        upgradeModal.setAttribute('aria-hidden', 'true');
        document.body.classList.remove('modal-open');
    }

    function getOwnedFusionCopies() {
        return collection.flatMap(item => {
            const plush = getPlushByName(item.name);
            if (!plush) return [];

            const counts = getCollectedVariantCounts(item);
            return Object.entries(counts).flatMap(([variant, count]) => (
                Array.from({ length: count }, (_, copyIndex) => ({
                    key: `${plush.name}|${variant}|${copyIndex}`,
                    plush,
                    variant
                }))
            ));
        });
    }

    function refreshFusionRewardChoices(outcomes) {
        const selectedOutcome = outcomes.find(outcome => getFusionRewardKey(outcome) === selectedFusionRewardKey);
        const availableOutcomes = outcomes.filter(outcome => getFusionRewardKey(outcome) !== selectedFusionRewardKey);
        const unseenOutcomes = availableOutcomes.filter(outcome => !visibleFusionRewardKeys.has(getFusionRewardKey(outcome)));
        const slotCount = Math.max(0, 5 - (selectedOutcome ? 1 : 0));
        const pool = unseenOutcomes.length >= slotCount ? unseenOutcomes : availableOutcomes;

        for (let index = pool.length - 1; index > 0; index--) {
            const swapIndex = Math.floor(Math.random() * (index + 1));
            [pool[index], pool[swapIndex]] = [pool[swapIndex], pool[index]];
        }

        visibleFusionRewardKeys.clear();
        if (selectedOutcome) visibleFusionRewardKeys.add(selectedFusionRewardKey);
        pool.slice(0, Math.max(0, 5 - visibleFusionRewardKeys.size))
            .forEach(outcome => visibleFusionRewardKeys.add(getFusionRewardKey(outcome)));
    }

    function renderFusionModal() {
        if (!fusionInventory || !fusionSummary || !fusionRewards || !fusionSubmit) return;

        const ownedCopies = getOwnedFusionCopies();
        const ownedKeys = new Set(ownedCopies.map(copy => copy.key));
        selectedFusionCopyKeys.forEach(key => {
            if (!ownedKeys.has(key)) selectedFusionCopyKeys.delete(key);
        });
        const selectedCopies = ownedCopies.filter(copy => selectedFusionCopyKeys.has(copy.key));
        const fusionInfo = getFusionInfo(selectedCopies);

        const rewardOutcomes = fusionInfo ? getFusionRewardOutcomes(fusionInfo) : [];
        const rewardCategories = rewardOutcomes.length
            ? getFusionRewardCategories(selectedCopies, rewardOutcomes)
            : [];
        const proposedOutcomes = rewardCategories.flatMap(entry => entry.rewards);
        const poolSignature = JSON.stringify(proposedOutcomes.map(outcome => [
            getFusionRewardKey(outcome),
            outcome.value,
            outcome.weight
        ]).sort());
        if (poolSignature !== fusionRewardPoolSignature) {
            fusionRewardPoolSignature = poolSignature;
            refreshFusionRewardChoices(proposedOutcomes);
        }
        const visibleRewardOutcomes = proposedOutcomes.filter(outcome => (
            visibleFusionRewardKeys.has(getFusionRewardKey(outcome))
        ));
        const selectedOutcome = proposedOutcomes.find(outcome => getFusionRewardKey(outcome) === selectedFusionRewardKey);
        const selectedRewardChance = selectedOutcome
            ? getFusionRewardSuccessChance(fusionInfo, selectedOutcome)
            : null;
        if (!proposedOutcomes.some(outcome => getFusionRewardKey(outcome) === selectedFusionRewardKey)) {
            selectedFusionRewardKey = null;
        }
        const hasSelectedReward = Boolean(selectedOutcome) && selectedCopies.length === 4;
        if (fusionWheelSection) fusionWheelSection.hidden = !hasSelectedReward;
        if (hasSelectedReward && fusionWheel && fusionWheelChance) {
            const successAngle = selectedRewardChance * 3.6;
            fusionWheel.style.background = `conic-gradient(from 0deg, #34d399 0deg ${successAngle}deg, #fb7185 ${successAngle}deg 360deg)`;
            if (!fusionSpinning) fusionWheel.style.transform = 'rotate(0deg)';
            fusionWheelChance.textContent = `${selectedRewardChance.toFixed(1)}%`;
            fusionWheel.setAttribute('aria-label', `Fusion success chance ${selectedRewardChance.toFixed(1)} percent`);
        }
        fusionSummary.textContent = selectedCopies.length < 4
            ? `Selected: ${selectedCopies.length}/4. Select four copies to see the Fusion odds.`
            : fusionInfo
                ? `Ingredient value: ${fusionInfo.totalBlink} Blink · Reward range: ${fusionInfo.minRewardBlink.toFixed(2)}–${fusionInfo.maxRewardBlink.toFixed(2)} Blink · Base chance: ${fusionInfo.chance}%${selectedRewardChance === null ? '' : ` · Chance for selected reward: ${selectedRewardChance.toFixed(1)}%`} · Variant bonus: +${fusionInfo.variantBlinkBonus}% · Choose one reward below.`
                : 'These ingredients cannot be fused.';
        fusionSubmit.disabled = fusionSpinning || selectedCopies.length !== 4 || !fusionInfo || rewardOutcomes.length === 0 || !selectedFusionRewardKey;
        fusionSubmit.textContent = selectedCopies.length !== 4
            ? `Choose 4 Banafixes (${selectedCopies.length}/4)`
            : fusionInfo && rewardOutcomes.length > 0 && selectedFusionRewardKey
                ? `Try Fusion · ${selectedRewardChance.toFixed(1)}% chance`
                : rewardOutcomes.length > 0
                    ? 'Choose a reward first'
                    : 'No reward available';

        const visibleRewardCategories = rewardCategories
            .map(({ category, rewards }) => ({
                category,
                rewards: rewards.filter(outcome => visibleFusionRewardKeys.has(getFusionRewardKey(outcome)))
            }))
            .filter(entry => entry.rewards.length > 0);
        fusionRewards.innerHTML = visibleRewardOutcomes.length
            ? `<div class="fusion-rewards-toolbar">
                    <h3 class="fusion-rewards-title">Choose one of 5 reward options worth ${fusionInfo.minRewardBlink.toFixed(2)}–${fusionInfo.maxRewardBlink.toFixed(2)} Blink (nearest available if none match)</h3>
                    <span class="fusion-rewards-count">Showing ${visibleRewardOutcomes.length} of ${proposedOutcomes.length}</span>
                </div>
                ${visibleRewardCategories.map(({ category, rewards }) => {
                    return `
                        <section class="fusion-reward-category">
                            <h4>${category}</h4>
                            <div class="fusion-reward-list">
                                ${rewards.map(outcome => `
                                    <button class="fusion-reward-card${outcome.variant === 'normal' ? '' : ` ${outcome.variant}-card`}" type="button" data-fusion-reward="${getFusionRewardKey(outcome)}" aria-pressed="${getFusionRewardKey(outcome) === selectedFusionRewardKey}" ${fusionSpinning ? 'disabled' : ''}>
                                        <img src="${outcome.plush.image}" alt="">
                                        <span class="fusion-reward-name">${outcome.plush.name}</span>
                                        <span class="fusion-reward-variant fusion-reward-variant-${outcome.variant}">${outcome.variant[0].toUpperCase() + outcome.variant.slice(1)}</span>
                                        <span class="fusion-reward-value">${outcome.value} Blink</span>
                                        <span class="fusion-reward-value">${getFusionRewardSuccessChance(fusionInfo, outcome).toFixed(1)}% success chance</span>
                                    </button>
                                `).join('')}
                            </div>
                        </section>
                    `;
                }).join('')}`
            : '';

        fusionInventory.innerHTML = ownedCopies.length
            ? ownedCopies.map(({ key, plush, variant }) => {
                const isSelected = selectedFusionCopyKeys.has(key);
                const variantLabel = variant === 'normal' ? 'Normal' : variant[0].toUpperCase() + variant.slice(1);
                const variantClass = variant === 'normal' ? '' : ` ${variant}-card`;
                return `
                    <button class="fusion-copy-card${variantClass}" type="button" data-fusion-copy="${key}" aria-pressed="${isSelected}" ${fusionSpinning || (selectedCopies.length >= 4 && !isSelected) ? 'disabled' : ''}>
                        <img src="${plush.image}" alt="">
                        <span class="fusion-copy-name">${plush.name}</span>
                        <span>${plush.rarity}</span>
                        <span class="fusion-copy-variant">${variantLabel}</span>
                        <span class="fusion-copy-value">${getPlushSellValue(plush, variant)} Blink</span>
                    </button>
                `;
            }).join('')
            : '<div class="catalog-empty-state">You have no Banafixes to use in Fusion.</div>';

        fusionRewards.querySelectorAll('[data-fusion-reward]').forEach(button => {
            button.addEventListener('click', () => {
                selectedFusionRewardKey = button.dataset.fusionReward;
                renderFusionModal();
            });
        });
        fusionInventory.querySelectorAll('[data-fusion-copy]').forEach(button => {
            button.addEventListener('click', () => {
                const key = button.dataset.fusionCopy;
                if (selectedFusionCopyKeys.has(key)) {
                    selectedFusionCopyKeys.delete(key);
                } else if (selectedFusionCopyKeys.size < 4) {
                    selectedFusionCopyKeys.add(key);
                }
                renderFusionModal();
            });
        });
    }

    function openFusionModal() {
        if (!fusionModal) return;
        if (fusionSpinning) return;
        selectedFusionCopyKeys.clear();
        visibleFusionRewardKeys.clear();
        selectedFusionRewardKey = null;
        fusionRewardPoolSignature = '';
        if (fusionStatus) fusionStatus.textContent = '';
        renderFusionModal();
        fusionModal.classList.remove('hidden');
        fusionModal.setAttribute('aria-hidden', 'false');
        document.body.classList.add('modal-open');
    }

    function closeFusionModal() {
        if (!fusionModal || fusionSpinning) return;
        fusionModal.classList.add('hidden');
        fusionModal.setAttribute('aria-hidden', 'true');
        document.body.classList.remove('modal-open');
    }

    function tryFusion() {
        if (fusionSpinning) return;
        const ownedCopies = getOwnedFusionCopies();
        const selectedCopies = ownedCopies.filter(copy => selectedFusionCopyKeys.has(copy.key));
        const fusionInfo = getFusionInfo(selectedCopies);
        if (selectedCopies.length !== 4 || !fusionInfo) return;
        const rewardOutcomes = getFusionRewardOutcomes(fusionInfo);
        const proposedOutcomes = getFusionRewardCategories(selectedCopies, rewardOutcomes)
            .flatMap(entry => entry.rewards);
        const selectedOutcome = proposedOutcomes.find(outcome => getFusionRewardKey(outcome) === selectedFusionRewardKey);
        if (!selectedOutcome) {
            if (fusionStatus) fusionStatus.textContent = 'Choose one of the proposed rewards before trying Fusion.';
            renderFusionModal();
            return;
        }

        const requiredCounts = new Map();
        selectedCopies.forEach(({ plush, variant }) => {
            const key = `${plush.name}|${variant}`;
            requiredCounts.set(key, (requiredCounts.get(key) || 0) + 1);
        });
        for (const [key, requiredCount] of requiredCounts) {
            const [plushName, variant] = key.split('|');
            const item = collection.find(entry => entry.name === plushName);
            if (!item || getCollectedVariantCounts(item)[variant] < requiredCount) {
                if (fusionStatus) fusionStatus.textContent = 'Your collection changed. Select the ingredients again.';
                renderFusionModal();
                return;
            }
        }

        const successChance = getFusionRewardSuccessChance(fusionInfo, selectedOutcome);
        const succeeded = Math.random() * 100 < successChance;
        const successAngle = successChance * 3.6;
        const wheelPosition = succeeded
            ? Math.random() * successAngle
            : successAngle + Math.random() * (360 - successAngle);
        const spinRotation = 5 * 360 + (360 - wheelPosition);

        fusionSpinning = true;
        if (fusionStatus) fusionStatus.textContent = 'The wheel is spinning...';
        if (fusionWheel) {
            fusionWheel.style.setProperty('--spin-rotation', `${spinRotation}deg`);
            fusionWheel.style.removeProperty('transform');
            fusionWheel.classList.remove('spinning');
            void fusionWheel.offsetWidth;
            fusionWheel.classList.add('spinning');
        }
        if (fusionWheelCenter) {
            fusionWheelCenter.style.setProperty('--counter-rotation', `${-spinRotation}deg`);
        }
        fusionSubmit.disabled = true;
        fusionSubmit.textContent = 'Spinning...';
        fusionInventory.querySelectorAll('button').forEach(button => { button.disabled = true; });
        fusionRewards.querySelectorAll('button').forEach(button => { button.disabled = true; });
        const spinDuration = window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 100 : 4200;
        window.setTimeout(() => {
            if (fusionWheel) {
                fusionWheel.style.transform = `rotate(${spinRotation}deg)`;
                fusionWheel.classList.remove('spinning');
            }
            completeFusion(selectedCopies, selectedOutcome, succeeded);
        }, spinDuration);
    }

    function completeFusion(selectedCopies, selectedOutcome, succeeded) {
        selectedCopies.forEach(({ plush, variant }) => {
            const itemIndex = collection.findIndex(item => item.name === plush.name);
            const item = collection[itemIndex];
            item.count = Math.max(0, item.count - 1);
            if (variant === 'gold') item.goldCount = Math.max(0, (Number(item.goldCount) || 0) - 1);
            if (variant === 'rainbow') item.rainbowCount = Math.max(0, (Number(item.rainbowCount) || 0) - 1);
            if (variant === 'negative') item.negativeCount = Math.max(0, (Number(item.negativeCount) || 0) - 1);
            if (item.count === 0) collection.splice(itemIndex, 1);
        });

        let reward = null;
        let rewardVariant = 'normal';
        if (succeeded) {
            reward = selectedOutcome.plush;
            rewardVariant = selectedOutcome.variant;
            const existing = collection.find(item => item.name === reward.name);
            if (existing) {
                existing.count = (Number(existing.count) || 0) + 1;
                if (rewardVariant === 'gold') existing.goldCount = (Number(existing.goldCount) || 0) + 1;
                if (rewardVariant === 'rainbow') existing.rainbowCount = (Number(existing.rainbowCount) || 0) + 1;
                if (rewardVariant === 'negative') existing.negativeCount = (Number(existing.negativeCount) || 0) + 1;
            } else {
                collection.push({
                    ...reward,
                    count: 1,
                    goldCount: rewardVariant === 'gold' ? 1 : 0,
                    rainbowCount: rewardVariant === 'rainbow' ? 1 : 0,
                    negativeCount: rewardVariant === 'negative' ? 1 : 0
                });
            }
        }

        saveCollection();
        fusionSpinning = false;
        selectedFusionCopyKeys.clear();
        selectedFusionRewardKey = null;
        if (fusionStatus) {
            fusionStatus.textContent = succeeded
                ? `Success! You got ${reward.name} (${reward.rarity}, ${rewardVariant}).`
                : `Fusion failed. The four ingredients were consumed.`;
        }
        showCollection();
        if (succeeded) awardAchievementIfNeeded();
        renderFusionModal();
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

    if (gameMenuBtn) {
        gameMenuBtn.addEventListener('click', openGameMenu);
    }

    if (closeGameMenuModalBtn) {
        closeGameMenuModalBtn.addEventListener('click', closeGameMenu);
    }

    if (gameMenuModal) {
        gameMenuModal.addEventListener('click', (event) => {
            if (event.target.classList.contains('news-modal-backdrop')) {
                closeGameMenu();
            } else if (event.target.closest('.game-menu-action')) {
                closeGameMenu();
            }
        }, true);
        document.addEventListener('keydown', (event) => {
            if (event.key === 'Escape' && !gameMenuModal.classList.contains('hidden')) {
                closeGameMenu();
            }
        });
    }

    if (newsBtn) {
        newsBtn.addEventListener('click', openNewsModal);
    }

    if (quickActionsBtn) {
        quickActionsBtn.addEventListener('click', toggleQuickActions);
    }

    if (quickActionsMenu) {
        quickActionsMenu.addEventListener('click', (event) => {
            if (event.target.closest('[role="menuitem"]')) closeQuickActions();
        }, true);
        document.addEventListener('click', (event) => {
            if (!quickActionsHost?.contains(event.target)) closeQuickActions();
        });
        document.addEventListener('keydown', (event) => {
            if (event.key === 'Escape') closeQuickActions();
        });
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

    if (calendarBtn) {
        calendarBtn.addEventListener('click', openCalendarModal);
    }

    if (catalogBtn) {
        catalogBtn.addEventListener('click', openCatalogModal);
    }

    if (catalogCollectedFilter) {
        catalogCollectedFilter.addEventListener('click', () => {
            showCollectedOnlyInCatalog = !showCollectedOnlyInCatalog;
            quickSellMode = false;
            selectedQuickSellCopies.clear();
            collectedCatalogPage = 0;
            renderGallery();
        });
    }

    if (catalogQuickSellButton) {
        catalogQuickSellButton.addEventListener('click', () => {
            if (!showCollectedOnlyInCatalog) return;
            quickSellMode = !quickSellMode;
            selectedQuickSellCopies.clear();
            renderGallery();
        });
    }

    if (upgradeBtn) {
        upgradeBtn.addEventListener('click', openUpgradeModal);
    }

    if (fusionBtn) {
        fusionBtn.addEventListener('click', openFusionModal);
    }

    if (closeFusionModalBtn) {
        closeFusionModalBtn.addEventListener('click', closeFusionModal);
    }

    if (fusionSubmit) {
        fusionSubmit.addEventListener('click', tryFusion);
    }

    if (fusionModal) {
        fusionModal.addEventListener('click', event => {
            if (event.target.classList.contains('news-modal-backdrop')) {
                closeFusionModal();
            }
        });
        document.addEventListener('keydown', event => {
            if (event.key === 'Escape' && !fusionModal.classList.contains('hidden')) {
                closeFusionModal();
            }
        });
    }

    if (closeUpgradeModalBtn) {
        closeUpgradeModalBtn.addEventListener('click', closeUpgradeModal);
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

    if (closeDrawCollectionModalBtn) {
        closeDrawCollectionModalBtn.addEventListener('click', closeDrawCollectionPicker);
    }

    if (drawCollectionOptions) {
        drawCollectionOptions.addEventListener('click', (event) => {
            const button = event.target.closest('[data-draw-collection]');
            if (button) selectDrawCollection(button.getAttribute('data-draw-collection'));
        });
    }

    if (drawCollectionModal) {
        drawCollectionModal.addEventListener('click', (event) => {
            if (event.target.classList.contains('news-modal-backdrop')) {
                closeDrawCollectionPicker();
            }
        });
        document.addEventListener('keydown', (event) => {
            if (event.key === 'Escape' && !drawCollectionModal.classList.contains('hidden')) {
                closeDrawCollectionPicker();
            }
        });
    }

    if (closeChancesModalBtn) {
        closeChancesModalBtn.addEventListener('click', closeChancesModal);
    }

    if (closeCalendarModalBtn) {
        closeCalendarModalBtn.addEventListener('click', closeCalendarModal);
    }

    if (closeCatalogModalBtn) {
        closeCatalogModalBtn.addEventListener('click', closeCatalogModal);
    }

    if (upgradeModal) {
        upgradeModal.addEventListener('click', (event) => {
            if (event.target.classList.contains('news-modal-backdrop')) {
                closeUpgradeModal();
            }
        });
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

    if (calendarModal) {
        calendarModal.addEventListener('click', (event) => {
            if (event.target.classList.contains('news-modal-backdrop')) {
                closeCalendarModal();
            }
        });
        document.addEventListener('keydown', (event) => {
            if (event.key === 'Escape' && !calendarModal.classList.contains('hidden')) {
                closeCalendarModal();
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
    if (freeCrateBtn) freeCrateBtn.addEventListener('click', openAvailableCrate);

    updateEventStatus();
    updateLevelInfo();
    updateFreeCrateButton();
    renderGallery();
    showCollection();
}

function renderInitialCrate() {
    const initialResult = document.getElementById('result');
    if (!initialResult) return;
    const savedResults = reconcileSavedDrawResults();
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
let showCollectedOnlyInCatalog = false;
let quickSellMode = false;
const selectedQuickSellCopies = new Set();
let collectedCatalogPage = 0;
const COLLECTED_CATALOG_PAGE_SIZE = 24;

function renderGallery() {
    const gallery = document.getElementById('gallery');
    if (!gallery) return;
    const collectedFilter = document.getElementById('catalogCollectedFilter');
    if (collectedFilter) {
        collectedFilter.textContent = showCollectedOnlyInCatalog ? 'Show all Banafixes' : 'Show collected only';
        collectedFilter.setAttribute('aria-pressed', String(showCollectedOnlyInCatalog));
    }
    const quickSellButton = document.getElementById('catalogQuickSell');
    if (quickSellButton) {
        quickSellButton.hidden = !showCollectedOnlyInCatalog;
        quickSellButton.textContent = quickSellMode ? 'Cancel quick sell' : 'Quick sell';
        quickSellButton.setAttribute('aria-pressed', String(quickSellMode));
    }
    const collectedNames = new Set(collection.map(item => item.name));
    const general = sortGalleryPlushes(plushies.filter(isGeneralCollection));
    const eventPlushes = sortGalleryPlushes(plushies.filter(isEventCollection));
    const sunburst = isSunburstEventActive();
    const legend = isLegendEventActive();
    const taco = isTacoEventActive();
    const eventGroups = eventPlushes.reduce((groups, plush) => {
        const key = plush.collection;
        groups[key] = groups[key] || [];
        groups[key].push(plush);
        return groups;
    }, {});
    const visibleGeneral = showCollectedOnlyInCatalog
        ? general.filter(plush => collectedNames.has(plush.name))
        : general;
    const visibleEventGroups = Object.fromEntries(
        Object.entries(eventGroups).map(([group, groupPlushes]) => [
            group,
            showCollectedOnlyInCatalog
                ? groupPlushes.filter(plush => collectedNames.has(plush.name))
                : groupPlushes
        ])
    );
    const totalCollectionValue = collection.reduce((total, item) => {
        const plush = getPlushByName(item.name);
        if (!plush) return total;

        const counts = getCollectedVariantCounts(item);
        return total
            + counts.normal * getPlushSellValue(plush, 'normal')
            + counts.gold * getPlushSellValue(plush, 'gold')
            + counts.rainbow * getPlushSellValue(plush, 'rainbow')
            + counts.negative * getPlushSellValue(plush, 'negative');
    }, 0);

    function renderGalleryCard(plush, hidden, extraClasses = '', variant = null, quickSellKey = null) {
        const collectedItem = collection.find(item => item.name === plush.name);
        const variantCounts = getCollectedVariantCounts(collectedItem);
        const cardVariant = variant || (variantCounts.normal > 0
            ? 'normal'
            : variantCounts.gold > 0
                ? 'gold'
                : variantCounts.rainbow > 0
                    ? 'rainbow'
                    : variantCounts.negative > 0
                        ? 'negative'
                        : null);
        const safeName = plush.name.replace(/'/g, "\\'");
        const quickSellSelected = quickSellMode && quickSellKey !== null && selectedQuickSellCopies.has(quickSellKey);
        const clickAttr = quickSellMode && quickSellKey !== null
            ? `data-quick-sell-key="${quickSellKey}" role="button" tabindex="0" aria-pressed="${quickSellSelected}"`
            : `onclick="showPlushFullscreen('${safeName}'${cardVariant ? `, '${cardVariant}'` : ''})"`;
        const variantClass = cardVariant === 'rainbow' ? ' rainbow-card' : cardVariant === 'gold' ? ' gold-card' : cardVariant === 'negative' ? ' negative-card' : '';
        const sellValueMarkup = showCollectedOnlyInCatalog
            ? `<div class="gallery-meta gallery-sell-value">Worth ${getPlushSellValue(plush, cardVariant || 'normal')} Blink</div>`
            : '';
        return `
            <div class="gallery-card${variantClass}${hidden ? ' hidden-card disabled-card' : ''}${extraClasses ? ' ' + extraClasses : ''}${quickSellMode && quickSellKey !== null ? ` quick-sell-selectable${quickSellSelected ? ' quick-sell-selected' : ''}` : ''}" ${clickAttr}>
                ${quickSellMode && quickSellKey !== null ? `<span class="quick-sell-selection-badge">${quickSellSelected ? 'Selected' : 'Select'}</span>` : ''}
                <img src="${plush.image}" alt="${plush.name}" onerror="this.onerror=null;this.src='images/Banafix.png'">
                <div class="gallery-name">${hidden ? '???' : plush.name}</div>
                <div class="rarity ${plush.rarity}">${hidden ? '' : plush.rarity}</div>
                ${hidden ? '' : sellValueMarkup}
            </div>
        `;
    }

    function renderGalleryCards(plushesToRender, extraClasses = '') {
        return plushesToRender.map(plush => {
            const collectedItem = collection.find(item => item.name === plush.name);
            const counts = getCollectedVariantCounts(collectedItem);
            const variants = [
                ...Array(counts.normal).fill('normal'),
                ...Array(counts.gold).fill('gold'),
                ...Array(counts.rainbow).fill('rainbow'),
                ...Array(counts.negative).fill('negative')
            ];
            return variants.map(variant => renderGalleryCard(plush, false, extraClasses, variant)).join('');
        }).join('');
    }

    if (showCollectedOnlyInCatalog) {
        const collectedPlushes = sortGalleryPlushes(plushies.filter(plush => collectedNames.has(plush.name)));
        const collectedCards = collectedPlushes.flatMap(plush => {
            const counts = getCollectedVariantCounts(collection.find(item => item.name === plush.name));
            return [
                ...Array(counts.normal).fill('normal'),
                ...Array(counts.gold).fill('gold'),
                ...Array(counts.rainbow).fill('rainbow'),
                ...Array(counts.negative).fill('negative')
            ].map((variant, copyIndex) => ({
                plush,
                variant,
                selectionKey: `${plush.name}-${variant}-${copyIndex}`
            }));
        });
        const selectedCards = collectedCards.filter(card => selectedQuickSellCopies.has(card.selectionKey));
        const selectedSellValue = selectedCards.reduce(
            (total, { plush, variant }) => total + getPlushSellValue(plush, variant),
            0
        );
        const pageCount = Math.max(1, Math.ceil(collectedCards.length / COLLECTED_CATALOG_PAGE_SIZE));
        collectedCatalogPage = Math.min(collectedCatalogPage, pageCount - 1);
        const pageStart = collectedCatalogPage * COLLECTED_CATALOG_PAGE_SIZE;
        const visibleCards = collectedCards.slice(pageStart, pageStart + COLLECTED_CATALOG_PAGE_SIZE);
        const pageButtons = Array.from({ length: pageCount }, (_, index) => `
            <button class="catalog-page-button${index === collectedCatalogPage ? ' active' : ''}" type="button" data-gallery-page="${index}" aria-label="Page ${index + 1}" aria-current="${index === collectedCatalogPage ? 'page' : 'false'}">${index + 1}</button>
        `).join('');
        const pagination = pageCount > 1 ? `
            <nav class="catalog-pagination" aria-label="Collected Banafix pages">
                <button class="catalog-page-button" type="button" data-gallery-page="${collectedCatalogPage - 1}" ${collectedCatalogPage === 0 ? 'disabled' : ''}>Previous</button>
                ${pageButtons}
                <button class="catalog-page-button" type="button" data-gallery-page="${collectedCatalogPage + 1}" ${collectedCatalogPage >= pageCount - 1 ? 'disabled' : ''}>Next</button>
            </nav>
        ` : '';
        const totalItemsCollected = collection.reduce((sum, item) => sum + (item.count || 0), 0);

        gallery.innerHTML = `
            <div class="gallery-overview">Collected: ${totalItemsCollected} items · ${collectedNames.size}/${plushies.length} unique · Collection value: ${totalCollectionValue} Blink</div>
            ${quickSellMode ? `<div class="quick-sell-toolbar">
                <span>${selectedCards.length} selected · ${selectedSellValue} Blink</span>
                <button class="quick-sell-action" type="button" data-quick-sell-action ${selectedCards.length ? '' : 'disabled'}>Sell selected</button>
            </div>` : ''}
            ${collectedCards.length
                ? `<div class="gallery-grid catalog-collected-grid">${visibleCards.map(({ plush, variant, selectionKey }) => renderGalleryCard(plush, false, '', variant, selectionKey)).join('')}</div>
                    <div class="catalog-page-summary">Page ${collectedCatalogPage + 1} of ${pageCount} · ${pageStart + 1}–${Math.min(pageStart + COLLECTED_CATALOG_PAGE_SIZE, collectedCards.length)} of ${collectedCards.length} Banafixes</div>
                    ${pagination}`
                : '<div class="catalog-empty-state">You have not collected any Banafixes yet.</div>'}
        `;

        gallery.querySelectorAll('[data-quick-sell-key]').forEach(card => {
            const toggleSelection = () => {
                const key = card.dataset.quickSellKey;
                if (selectedQuickSellCopies.has(key)) {
                    selectedQuickSellCopies.delete(key);
                } else {
                    selectedQuickSellCopies.add(key);
                }
                renderGallery();
            };
            card.addEventListener('click', toggleSelection);
            card.addEventListener('keydown', event => {
                if (event.key === 'Enter' || event.key === ' ') {
                    event.preventDefault();
                    toggleSelection();
                }
            });
        });

        const sellSelectedButton = gallery.querySelector('[data-quick-sell-action]');
        if (sellSelectedButton) {
            sellSelectedButton.addEventListener('click', () => {
                let soldCount = 0;
                let failedCount = 0;
                let earnedBlinks = 0;
                selectedCards.forEach(({ plush, variant }) => {
                    const sellValue = sellCollectedPlush(plush.name, variant);
                    if (sellValue !== false) {
                        soldCount += 1;
                        earnedBlinks += sellValue;
                    } else {
                        failedCount += 1;
                    }
                });
                selectedQuickSellCopies.clear();
                renderGallery();
                if (soldCount > 0 || failedCount > 0) {
                    const message = failedCount > 0
                        ? `${soldCount} Banafix${soldCount === 1 ? '' : 'es'} sold for ${earnedBlinks} Blink; ${failedCount} no longer available.`
                        : `${soldCount} Banafix${soldCount === 1 ? '' : 'es'} sold for ${earnedBlinks} Blink.`;
                    showToast(message, failedCount > 0 ? 'error' : 'success');
                }
            });
        }

        gallery.querySelectorAll('[data-gallery-page]').forEach(button => {
            button.addEventListener('click', () => {
                const nextPage = Number(button.dataset.galleryPage);
                if (!Number.isInteger(nextPage) || nextPage < 0 || nextPage >= pageCount || nextPage === collectedCatalogPage) return;
                collectedCatalogPage = nextPage;
                renderGallery();
            });
        });
        return;
    }

    function collectionProgress(groupPlushes) {
        const collected = groupPlushes.filter(p => collectedNames.has(p.name)).length;
        return { collected, total: groupPlushes.length };
    }

    const totalItemsCollected = collection.reduce((sum, item) => sum + (item.count || 0), 0);
    const totalUniqueCollected = collectedNames.size;
    const totalUnique = plushies.length;
    const generalProgress = collectionProgress(general);
    const hasVisibleBanafixes = visibleGeneral.length > 0
        || Object.values(visibleEventGroups).some(groupPlushes => groupPlushes.length > 0);

    gallery.innerHTML = `
        <div class="gallery-overview">Collected: ${totalItemsCollected} items · ${totalUniqueCollected}/${totalUnique} unique · Collection value: ${totalCollectionValue} Blink</div>
        ${visibleGeneral.length ? `<div class="gallery-section">
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
                    ${showCollectedOnlyInCatalog
                        ? renderGalleryCards(visibleGeneral)
                        : visibleGeneral.map(p => renderGalleryCard(p, !collectedNames.has(p.name))).join('')}
                </div>
            </div>
        </div>` : ''}
        ${Object.keys(eventGroups).map((group, index) => {
            const sectionKey = `event-${index}`;
            const enabledGroup = group.startsWith('🍹') ? sunburst : group.startsWith('👑') ? legend :group.startsWith('🌮') ? taco : false;
            const groupPlushes = visibleEventGroups[group];
            if (!groupPlushes.length) return '';
            const progress = collectionProgress(eventGroups[group]);
            const collectionBadge = group.startsWith('👑')
                ? { src: 'images/Legends.png', alt: 'Legends collection' }
                : group.startsWith('🍹')
                    ? { src: 'images/Sunburst.png', alt: 'Sunburst collection' }
                    : group.startsWith('🌮')
                        ? { src: 'images/TacoTuesday.png', alt: 'Taco Tuesday collection' }
                        : null;
            const note = group.startsWith('🍹')
                ? 'Sunburst event is available from July 1 to August 31.'
                : group.startsWith('👑')
                    ? 'Legends event is available on Fridays only.'
                    : group.startsWith('🌮')
                        ? 'Taco event is available on Tuesday only.'
                    : '';
                const headerContent = collectionBadge
                    ? `<img src="${collectionBadge.src}" alt="${collectionBadge.alt}"><span>${progress.collected}/${progress.total}</span><span class="collection-arrow" aria-hidden="true">▾</span>`
                : `<span>${group} ${enabledGroup ? '(available now)' : '(locked)'} (${progress.collected}/${progress.total})</span><span class="collection-arrow" aria-hidden="true">▾</span>`;
                const badgeHeaderClass = collectionBadge ? ' general-collection-title' : '';
            return `
            <div class="gallery-section">
                <h4 class="gallery-section-heading">
                        <button class="collection-toggle${badgeHeaderClass}" type="button" data-collection-toggle data-collection-key="${sectionKey}" data-collection-label="${group}" aria-expanded="true" aria-label="Collapse ${group}">
                        ${headerContent}
                    </button>
                </h4>
                <div class="gallery-section-content">
                    <div class="event-note">${note}</div>
                    <div class="gallery-grid ${enabledGroup ? '' : 'disabled'}">
                        ${showCollectedOnlyInCatalog
                            ? renderGalleryCards(groupPlushes, enabledGroup ? '' : 'disabled-card')
                            : groupPlushes.map(p => {
                                const hidden = !collectedNames.has(p.name);
                                const extraClasses = enabledGroup ? '' : 'disabled-card';
                                return renderGalleryCard(p, hidden, extraClasses);
                            }).join('')}
                    </div>
                </div>
            </div>
            `;
        }).join('')}
        ${hasVisibleBanafixes ? '' : '<div class="catalog-empty-state">You have not collected any Banafixes yet.</div>'}
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

function showPlushFullscreen(plushName, selectedVariant = null) {
    const plush = getPlushByName(plushName);
    if (!plush) return;
    const collectedItem = collection.find(item => item.name === plush.name);
    const collectedCount = collectedItem?.count || 0;
    const variantCounts = getCollectedVariantCounts(collectedItem);
    const goldCount = variantCounts.gold;
    const rainbowCount = variantCounts.rainbow;
    const negativeCount = variantCounts.negative;
    const availableVariants = Object.entries(variantCounts).filter(([, count]) => count > 0);
    const activeVariant = selectedVariant && variantCounts[selectedVariant] > 0
        ? selectedVariant
        : availableVariants[0]?.[0] || 'normal';
    const drawChance = getPlushVariantChance(plush.name, activeVariant);
    const sellValue = getPlushSellValue(plush, activeVariant);
    const chanceLabel = activeVariant === 'rainbow'
        ? 'Rainbow variant chance'
        : activeVariant === 'gold'
            ? 'Gold variant chance'
            : activeVariant === 'negative'
                ? 'Negative variant chance'
            : 'Normal variant chance';
    hideFullscreenPlush();

    const fullscreenVariantClass = activeVariant === 'negative'
        ? ' negative-border'
        : activeVariant === 'rainbow'
        ? ' rainbow-border'
        : activeVariant === 'gold'
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
                            <span>${chanceLabel}</span>
                            <strong>${drawChance === null ? 'Unavailable' : formatChanceAsOneIn(drawChance)}</strong>
                        </div>
                        <div class="fullscreen-stat">
                            <span>Gold variants</span>
                            <strong>${goldCount}</strong>
                        </div>
                        <div class="fullscreen-stat">
                            <span>Rainbow variants</span>
                            <strong>${rainbowCount}</strong>
                        </div>
                        <div class="fullscreen-stat">
                            <span>Negative variants</span>
                            <strong>${negativeCount}</strong>
                        </div>
                    </div>
                    ${collectedCount > 0 ? `
                        <div class="fullscreen-sell">
                            <label for="fullscreenSellVariant">Copy to sell</label>
                            <select id="fullscreenSellVariant">
                                ${availableVariants.map(([variant, count]) => `
                                    <option value="${variant}"${variant === activeVariant ? ' selected' : ''}>
                                        ${variant === 'gold' ? '🥇 Gold' : variant === 'rainbow' ? '🌈 Rainbow' : variant === 'negative' ? '🖤 Negative' : 'Normal'} (${count})
                                    </option>
                                `).join('')}
                            </select>
                            <div class="fullscreen-stat">
                                <span>Sell value</span>
                                <strong id="fullscreenSellValue">${sellValue} Blink</strong>
                            </div>
                            <button id="sellPlushBtn" class="sell-plush-button" type="button" data-plush-name="${plush.name}" data-sell-value="${sellValue}">
                                Sell for ${sellValue} Blink
                            </button>
                        </div>
                    ` : ''}
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
    const sellButton = overlay.querySelector('#sellPlushBtn');
    const sellVariantSelect = overlay.querySelector('#fullscreenSellVariant');
    if (sellButton && sellVariantSelect) {
        sellVariantSelect.addEventListener('change', () => {
            const variant = sellVariantSelect.value;
            const variantSellValue = getPlushSellValue(plush, variant);
            const variantClass = variant === 'rainbow' ? 'rainbow-border' : variant === 'gold' ? 'gold-border' : variant === 'negative' ? 'negative-border' : '';
            const fullscreenCard = overlay.querySelector('.fullscreen-card');
            fullscreenCard.classList.remove('rainbow-border', 'gold-border', 'negative-border');
            if (variantClass) fullscreenCard.classList.add(variantClass);
            overlay.querySelector('#fullscreenSellValue').textContent = `${variantSellValue} Blink`;
            sellButton.dataset.sellValue = String(variantSellValue);
            sellButton.textContent = `Sell for ${variantSellValue} Blink`;
        });
        sellButton.addEventListener('click', () => {
            const soldValue = sellCollectedPlush(plush.name, sellVariantSelect.value);
            if (soldValue === false) {
                showToast('That Banafix copy is no longer available.', 'error');
                return;
            }
            refreshSavedDrawResultButtons();
            renderGallery();
            hideFullscreenPlush();
            showToast(`${plush.name} sold for ${soldValue} Blink.`, 'success');
        });
    }
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
    updateFreeCrateButton();
}, 1000);

window.addEventListener('storage', event => {
    if (event.key === 'collection') {
        collection = loadCollection();
        refreshSavedDrawResultButtons();
        renderGallery();
    }

    if (event.key === 'lastDrawResults') {
        const resultEl = document.getElementById('result');
        const savedResults = reconcileSavedDrawResults();
        if (resultEl && savedResults) {
            renderDrawCards(resultEl, savedResults, true);
        } else {
            refreshCrateState();
        }
    }

    if (event.key === 'blinks') {
        updateBlinkBalance();
    }

    if (event.key === 'freeCrateCount') {
        freeCrateCount = loadFreeCrateCount();
        updateFreeCrateButton();
    }

    if (event.key === 'lastDraw') {
        updateTimer();
    }
});

updateTimer();
refreshCrateState();

showCollection();