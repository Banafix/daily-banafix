const DRAW_TIME = 2 * 60 * 60 * 1000; // 2 godziny

// In plushies you can set ability manually with the ability field.
// Allowed values: tank, bioTech, berserker, vampire, sniper, poisoner, finisher,
// overclock, guardian, gambler, breaker, swift, medic, protectorLink, rallyCall,
// angelicGrace, errorProtocol, portalShift, neighborWatch, tacoFrenzy, communitySpirit, executiveCommand.
const plushies = [

{
    name: "Classic Banafix",
    image: "images/Classic.png",
    rarity: "common",
    ability: "communitySpirit",
    collection: "📦general"
},

{
    name: "2 for 1 Banafix",
    image: "images/2for1.png",
    rarity: "common",
    ability: "gambler",
    collection: "📦general"
},

{
    name: "Banafix v3",
    image: "images/v3.png",
    rarity: "common",
    ability: "overclock",
    collection: "📦general"
},

{
    name: "negative Banafix",
    image: "images/negative.png",
    rarity: "common",
    ability: "poisoner",
    collection: "📦general"
},

{
    name: "Error Banafix",
    image: "images/error.png",
    rarity: "legendary",
    ability: "errorProtocol",
    collection: "📦general"
},

{
    name: "retro Banafix",
    image: "images/retro.png",
    rarity: "legendary",
    ability: "sniper",
    collection: "📦general"
},

{
    name: "angel Banafix",
    image: "images/angel.png",
    rarity: "legendary",
    ability: "angelicGrace",
    collection:  "📦general"
},

{
    name: "Suit Banafix",
    image: "images/suit.png",
    rarity: "rare",
    ability: "executiveCommand",
    collection: "📦general"
},

{
    name: "sweater Banafix",
    image: "images/sweater.png",
    rarity: "rare",
    ability: "protectorLink",
    collection: "📦general"
},

{
    name: "camouflage Banafix",
    image: "images/camouflage.png",
    rarity: "rare",
    ability: "swift",
    collection: "📦general"
},

{
    name: "Milkman Banafix",
    image: "images/milman.png",
    rarity: "epic",
    ability: "bioTech",
    collection: "📦general"
},

{
    name: "spy Banafix",
    image: "images/spy.png",
    rarity: "epic",
    ability: "sniper",
    collection: "📦general"
},

{
    name: "grass Banafix",
    image: "images/grass.png",
    rarity: "epic",
    ability: "poisoner",
    collection: "📦general"
},

{
    name: "cosmic Banafix",
    image: "images/cosmic.png",
    rarity: "epic",
    ability: "berserker",
    collection: "📦general"
},

{
    name: "golden Banafix",
    image: "images/golden.png",
    rarity: "epic",
    ability: "breaker",
    collection: "📦general"
},

{
    name: "Unknown Banafix",
    image: "images/unknown.png",
    rarity: "secret",
    ability: "finisher",
    collection: "📦general"
},

{
    name: "67 Banafix",
    image: "images/67.png",
    rarity: "secret",
    ability: "sniper",
    collection: "📦general"
},

{
    name: "-180 Banafix",
    image: "images/180.png",
    rarity: "common",
    ability: "berserker",
    collection: "📦general"
},

{
    name: "nerd Banafix",
    image: "images/glasses.png",
    rarity: "rare",
    ability: "sniper",
    collection: "📦general"
},

{
    name: "4k Banafix",
    image: "images/4k.png",
    rarity: "rare",
    ability: "overclock",
    collection: "📦general"
},

{
    name: "colorless Banafix",
    image: "images/colorless.png",
    rarity: "common",
    ability: "tank",
    collection: "📦general"
},

{
    name: "alien Banafix",
    image: "images/alien.png",
    rarity: "epic",
    ability: "poisoner",
    collection: "📦general"
},

{
    name: "ghost Banafix",
    image: "images/ghost.png",
    rarity: "epic",
    ability: "vampire",
    collection: "📦general"
},

{
    name: "faceless Banafix",
    image: "images/faceless.png",
    rarity: "common",
    ability: "finisher",
    collection: "📦general"
},

{
    name: "Banafix v2",
    image: "images/v2.png",
    rarity: "common",
    ability: "tank",
    collection: "📦general"
},

{
    name: "angry Banafix",
    image: "images/angry.png",
    rarity: "common",
    ability: "berserker",
    collection: "📦general"
},

{
    name: "tiny Banafix",
    image: "images/tiny.png",
    rarity: "legendary",
    ability: "finisher",
    collection: "📦general"
},

{
    name: "Crayon Banafix",
    image: "images/crayon.png",
    rarity: "legendary",
    ability: "poisoner",
    collection: "📦general"
},

{
    name: "invisible Banafix",
    image: "images/invisible.png",
    rarity: "rare",
    ability: "sniper",
    collection: "📦general"
},

{
    name: "achievement Banafix",
    image: "images/achievement.png",
    rarity: "rare",
    ability: "rallyCall",
    collection: "📦general"
},

{
    name: "cake Banafix",
    image: "images/cake.png",
    rarity: "common",
    ability: "bioTech",
    collection: "🍹 summer event"
},

{
    name: "beach Banafix",
    image: "images/beach.png",
    rarity: "rare",
    ability: "swift",
    collection: "🍹 summer event"
},

{
    name: "orange juice Banafix",
    image: "images/orange.png",
    rarity: "epic",
    ability: "bioTech",
    collection: "🍹 summer event"
},

{
    name: "monster Banafix",
    image: "images/monster.png",
    rarity: "epic",
    ability: "berserker",
    collection: "🍹 summer event"
},

{
    name: "swimsuit Banafix",
    image: "images/swimsuit.png",
    rarity: "rare",
    ability: "tank",
    collection: "🍹 summer event"
},

{
    name: "Ben",
    image: "images/ben.png",
    rarity: "epic",
    ability: "gambler",
    collection: "👑 legends"
},

{
    name: "sus Banafix",
    image: "images/sus.png",
    rarity: "rare",
    ability: "poisoner",
    collection: "👑 legends"
},

{
    name: "stickman Banafix",
    image: "images/stickman.png",
    rarity: "rare",
    ability: "sniper",
    collection: "👑 legends"
},

{
    name: "cring Banafix",
    image: "images/cry.png",
    rarity: "common",
    ability: "berserker",
    collection: "👑 legends"
},

{
    name: "fallout Banafix",
    image: "images/fallout.png",
    rarity: "common",
    ability: "poisoner",
    collection: "👑 legends"
},

{
    name: "portal Banafix",
    image: "images/portal.png",
    rarity: "legendary",
    ability: "portalShift",
    collection: "👑 legends"
},

{
    name: "cubed Banafix",
    image: "images/cubed.png",
    rarity: "legendary",
    ability: "tank",
    collection: "👑 legends"
},

{
    name: "ball Banafix",
    image: "images/ball.png",
    rarity: "epic",
    ability: "swift",
    collection: "👑 legends"
},

{
    name: "7 minutes Banafix",
    image: "images/7.png",
    rarity: "epic",
    ability: "vampire",
    collection: "👑 legends"
},

{
    name: "neighbor Banafix",
    image: "images/neighbor.png",
    rarity: "secret",
    ability: "neighborWatch",
    collection: "👑 legends"
},

{
    name: "sombrero Banafix",
    image: "images/sombrero.png",
    rarity: "rare",
    ability: "gambler",
    collection: "🌮 taco tuesday"
},

{
    name: "cactus Banafix",
    image: "images/cactus.png",
    rarity: "epic",
    ability: "poisoner",
    collection: "🌮 taco tuesday"
},

{
    name: "Pinata Banafix",
    image: "images/pinata.png",
    rarity: "epic",
    ability: "guardian",
    collection: "🌮 taco tuesday"
},

{
    name: "taco Banafix",
    image: "images/taco.png",
    rarity: "secret",
    ability: "tacoFrenzy",
    collection: "🌮 taco tuesday"
},

{
    name: "lava Banafix",
    image: "images/lava.png",
    rarity: "legendary",
    ability: "finisher",
    collection: "🌮 taco tuesday"
},

{
    name: "mexican Banafix",
    image: "images/mexican.png",
    rarity: "common",
    ability: "medic",
    collection: "🌮 taco tuesday"
},


];

let collection = loadCollection();
let rolling = false;
let freeCrateCount = loadFreeCrateCount();

const BATTLE_RARITY_STATS = {
    common: { hp: 60, atk: 12 },
    rare: { hp: 85, atk: 17 },
    epic: { hp: 115, atk: 23 },
    legendary: { hp: 145, atk: 30 },
    secret: { hp: 180, atk: 36 }
};

const BATTLE_MISS_CHANCE = 0.2;
const BATTLE_CRIT_CHANCE = 0.1;
const BATTLE_CRIT_MULTIPLIER = 2;
const DEFAULT_BATTLE_ABILITY = 'tank';
const BATTLE_ABILITIES = {
    tank: {
        name: 'Tank',
        description: 'This Banafix is steady at first, but every third attack becomes much stronger. Normal attacks get +3% crit chance. Every third attack cannot miss and gains +22% crit chance.'
    },
    bioTech: {
        name: 'Bio Tech',
        description: 'After every successful hit, this Banafix repairs itself and heals for 9% of its max HP. When it falls to 40% HP or lower, the heal becomes 12% of max HP and its attack deals 20% more damage.'
    },
    berserker: {
        name: 'Berserker',
        description: 'The more HP this Banafix has lost, the more damage it deals, up to 70% bonus damage at very low HP. When it falls to 35% HP or lower, it also gains +8% crit chance.'
    },
    vampire: {
        name: 'Vampire',
        description: 'This Banafix steals life from the enemy whenever it deals damage, healing itself for 30% of the damage dealt. It also deals 20% more damage to targets at 50% HP or lower.'
    },
    sniper: {
        name: 'Sniper',
        description: 'This Banafix is more accurate than normal, with 8% less miss chance and +3% crit chance. If it lands a critical hit, it gains Lock-On, making the next attack unable to miss and adding another +10% crit chance.'
    },
    poisoner: {
        name: 'Poisoner',
        description: 'This Banafix has a 30% chance to apply venom to the target. Venom can stack up to 3 times. A new stack deals bonus damage equal to about 6% to 15% of target max HP, and existing stacks also add extra chip damage on later hits.'
    },
    finisher: {
        name: 'Finisher',
        description: 'This Banafix is made for finishing weak enemies. The lower the target current HP is, the more bonus damage this attack gets, up to 60% extra damage.'
    },
    overclock: {
        name: 'Overclock',
        description: 'Each attack builds Heat. At Heat 1 and 2, this Banafix deals 12% more damage. At Heat 3, it unleashes a much stronger attack that deals 75% more damage, then the Heat resets to 0.'
    },
    guardian: {
        name: 'Guardian',
        description: 'After every successful hit, this Banafix heals itself for 6% of its max HP. If it falls to 40% HP or lower, the heal becomes 12% of max HP.'
    },
    medic: {
        name: 'Medic Pulse',
        description: 'After a successful hit, this Banafix heals the weakest ally for 14% of that ally max HP. It is a pure support ability that helps the team survive longer.'
    },
    protectorLink: {
        name: 'Protector Link',
        description: 'After a successful hit, this Banafix gives a shield to the weakest ally. The shield is worth 12% of this Banafix max HP and blocks incoming damage.'
    },
    rallyCall: {
        name: 'Rally Call',
        description: 'After a successful hit, this Banafix inspires the whole team. All allies gain Rally, which makes their next attack deal 16% more damage.'
    },
    gambler: {
        name: 'Gambler',
        description: 'Every attack is a gamble. There is a 12% chance to deal triple damage, a 20% chance to deal 70% more damage, a 30% chance to deal normal damage, a 23% chance to deal 35% less damage, and a 15% chance to fail completely, deal 0 damage, and lose 10% of max HP.'
    },
    breaker: {
        name: 'Breaker',
        description: 'This Banafix is best against tough enemies. It deals 15% more damage to targets with 140 or more max HP, has a 35% chance to apply Armor Break, and then deals 20% more damage to targets already marked by Armor Break.'
    },
    swift: {
        name: 'Swift',
        description: 'This Banafix is fast and precise. It has 5% less miss chance, +8% crit chance, and a 20% chance to follow up with an extra quick hit that deals 40% bonus damage.'
    },
    angelicGrace: {
        name: 'Angelic Grace',
        description: 'A signature support-and-survival ability. This Banafix gets +6% crit chance, heals 20% of its max HP after every hit, and when it falls to 35% HP or lower it also deals 30% more damage.'
    },
    errorProtocol: {
        name: 'Error Protocol',
        description: 'This signature ability is chaotic. It has a 12% chance to turn into a huge Glitch++ hit for 180% extra damage, a 12% chance to become Corrupted and lose 45% of its damage, and an 8% chance to create a Recursive extra hit worth 60% more damage. Otherwise it stays stable.'
    },
    portalShift: {
        name: 'Portal Shift',
        description: 'This signature ability has a 22% chance to create an Echo that adds bonus damage equal to 35% of the attack. If this Banafix current HP ratio is at least 20% lower than the target HP ratio, it also creates a Rift burst that deals bonus damage equal to 6% of the target max HP.'
    },
    neighborWatch: {
        name: 'Neighbor Watch',
        description: 'This signature ability is all about consistency. Miss chance is fixed at only 4%. It also gains +10% crit chance against targets above 50% HP and +6% crit chance against targets with higher max HP.'
    },
    tacoFrenzy: {
        name: 'Taco Frenzy',
        description: 'This signature ability can trigger a chain of spicy bonus hits. Each step in the chain has a 45% chance to continue, up to 3 extra hits, and every extra hit deals bonus damage equal to 8% of the target max HP.'
    },
    communitySpirit: {
        name: 'Community Spirit',
        description: 'This signature support ability helps the whole team at once. After every successful hit, all allies heal for 6% of their max HP, and the weakest ally gets Rally, which gives 20% more damage on its next attack.'
    },
    executiveCommand: {
        name: 'Executive Command',
        description: 'This signature team ability strengthens everyone. After every successful hit, all allies gain shields worth 8% of max HP and Rally, which gives 14% more damage on their next attack.'
    }
};
const UNIQUE_BATTLE_ABILITIES = new Set(['angelicGrace', 'errorProtocol', 'portalShift', 'neighborWatch', 'tacoFrenzy', 'communitySpirit', 'executiveCommand']);
const BATTLE_ABILITY_ROTATION = ['tank', 'bioTech', 'berserker', 'vampire', 'sniper', 'poisoner', 'finisher', 'overclock', 'guardian', 'medic', 'protectorLink', 'rallyCall', 'gambler', 'breaker', 'swift'];

function getDefaultBattleAbilityIdForBanafix(name = '') {
    const normalized = name.toLowerCase();
    const hash = normalized.split('').reduce((sum, char) => sum + char.charCodeAt(0), 0);
    return BATTLE_ABILITY_ROTATION[hash % BATTLE_ABILITY_ROTATION.length] || DEFAULT_BATTLE_ABILITY;
}

function applyAbilitiesToPlushies() {
    plushies.forEach(plush => {
        if (!plush.ability || !BATTLE_ABILITIES[plush.ability]) {
            plush.ability = getDefaultBattleAbilityIdForBanafix(plush.name);
        }
    });
}

applyAbilitiesToPlushies();

let battleGameState = null;
let battleSelection = [];
let battleCandidates = [];
const BATTLE_TURN_DELAY = 850;
const BATTLE_MAX_STAGE = 10;
const BATTLE_STAGE_TRANSITION_DELAY = 950;

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

function createArenaAchievement({ id, title, description, icon = 'images/achievement.png', statKey, target, rewardCrates = 1, reward, category = 'arena' }) {
    return {
        id,
        title,
        description,
        type: 'one-time',
        target,
        rewardCrates,
        reward: reward || getCrateRewardLabel(rewardCrates),
        icon,
        category,
        requirementType: 'arenaStat',
        statKey
    };
}

const ACHIEVEMENT_CATEGORIES = [
    { id: 'sets', title: 'Banafix Sets' },
    { id: 'arena', title: 'Arena Banafix' }
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
    createArenaAchievement({
        id: 'arena-rookie',
        title: 'Press F to Start',
        description: 'Start 3 arena battles.',
        statKey: 'battlesStarted',
        target: 3,
        rewardCrates: 1
    }),
    createArenaAchievement({
        id: 'arena-hunter',
        title: 'First Blood Part XV',
        description: 'Defeat 15 enemies in arena.',
        statKey: 'enemiesDefeated',
        target: 15,
        rewardCrates: 2
    }),
    createArenaAchievement({
        id: 'arena-stage-runner',
        title: 'Speedrun Any%',
        description: 'Clear 8 arena stages.',
        statKey: 'stagesCleared',
        target: 8,
        rewardCrates: 2
    }),
    createArenaAchievement({
        id: 'arena-victor',
        title: 'May the Loot Be With You',
        description: 'Win 2 full arena runs.',
        statKey: 'battlesWon',
        target: 2,
        rewardCrates: 3
    }),
    createArenaAchievement({
        id: 'arena-climber',
        title: 'One Does Not Simply Stop at 5',
        description: 'Reach stage 6 in any run.',
        statKey: 'bestStage',
        target: 6,
        rewardCrates: 2
    }),
    createArenaAchievement({
        id: 'arena-champion',
        title: 'Banafix Endgame',
        description: 'Defeat 50 enemies in arena.',
        statKey: 'enemiesDefeated',
        target: 50,
        rewardCrates: 4
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

function loadAchievementsState() {
    return JSON.parse(localStorage.getItem('achievementsState')) || {};
}

function saveAchievementsState(state) {
    localStorage.setItem('achievementsState', JSON.stringify(state));
}

function loadArenaStats() {
    const raw = JSON.parse(localStorage.getItem('arenaStats')) || {};
    return {
        battlesStarted: Number(raw.battlesStarted) || 0,
        battlesWon: Number(raw.battlesWon) || 0,
        stagesCleared: Number(raw.stagesCleared) || 0,
        enemiesDefeated: Number(raw.enemiesDefeated) || 0,
        bestStage: Number(raw.bestStage) || 0
    };
}

function saveArenaStats(stats) {
    localStorage.setItem('arenaStats', JSON.stringify(stats));
}

function incrementArenaStat(statKey, amount = 1) {
    const stats = loadArenaStats();
    stats[statKey] = (Number(stats[statKey]) || 0) + amount;
    saveArenaStats(stats);
    awardAchievementIfNeeded();
}

function setArenaBestStage(stage) {
    const stats = loadArenaStats();
    if (stage > (Number(stats.bestStage) || 0)) {
        stats.bestStage = stage;
        saveArenaStats(stats);
        awardAchievementIfNeeded();
    }
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

function getAchievementProgress() {
    const ownedNames = new Set(collection.map(item => item.name));
    const arenaStats = loadArenaStats();

    return ACHIEVEMENTS.map(achievement => {
        let progress = 0;
        let completed = false;

        if (achievement.requirementType === 'named') {
            const requiredNames = achievement.requiredNames || [];
            progress = requiredNames.filter(name => ownedNames.has(name)).length;
        } else if (achievement.requirementType === 'arenaStat') {
            progress = Number(arenaStats[achievement.statKey]) || 0;
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
        for (let level = awardedLevel + 1; level <= currentLevel; level += 1) {
            showToast(`Level up! Reached level ${level}! +1 free crate`, 'success');
        }
        updateFreeCrateButton();
    }
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
        btn.disabled = freeCrateCount <= 0;
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
            alert("Today you have already drawn Banafix!");
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
    const revealDuration = 3000;
    const rollDuration = 2200;
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
        const baseXp = RARITY_XP[plush.rarity] || 0;
        const variantXp = VARIANT_XP[variant] || 0;
        const gainedXp = baseXp + variantXp;
        const variantBadge = variant === 'normal'
            ? ''
            : `<div class="variant-badge ${variant}">${variant === 'rainbow' ? '🌈 Rainbow' : '🥇 Gold'}</div>`;
        const variantCardClass = variant === 'rainbow' ? 'rainbow-card' : variant === 'gold' ? 'gold-card' : '';
        const flashClass = variant === 'rainbow' ? ' flash-rainbow' : variant === 'gold' ? ' flash-gold' : ' flash-reveal';
        const xpDetails = variantXp > 0
            ? `<div class="xp-detail">${baseXp} base + ${variantXp} variant bonus</div>`
            : `<div class="xp-detail">${baseXp} base XP</div>`;

        resultEl.innerHTML = `
            <div class="result-card ${variantCardClass}${flashClass}">
                <img src="${plush.image}" onerror="this.onerror=null;this.src='images/Banafix.png'">
                ${variantBadge}
                <h2>${plush.name}</h2>
                <div class="rarity ${plush.rarity}">${plush.rarity} (${RARITY_PERCENTS[plush.rarity] || 0}%)</div>
                <div class="xp-gain">+${gainedXp} XP</div>
                ${xpDetails}
            </div>
        `;

        const flashCard = resultEl.querySelector('.result-card');
        if (flashCard) {
            window.setTimeout(() => flashCard.classList.remove('flash-reveal', 'flash-gold', 'flash-rainbow'), 900);
        }

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
        awardAchievementIfNeeded();

        if (!bypassCooldown) {
            localStorage.setItem("lastDraw", Date.now());
        }
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
        alert('You do not have any free crates.');
        return;
    }

    freeCrateCount = count - 1;
    saveFreeCrateCount(freeCrateCount);
    updateFreeCrateButton();
    drawPlush({ bypassCooldown: true });
}

function getArenaUsageResetKey(now = new Date()) {
    const resetAnchor = new Date(now);
    if (now.getHours() < 1) {
        resetAnchor.setDate(resetAnchor.getDate() - 1);
    }
    resetAnchor.setHours(1, 0, 0, 0);
    return resetAnchor.toISOString();
}

function loadArenaUsageState() {
    const resetKey = getArenaUsageResetKey();
    const raw = JSON.parse(localStorage.getItem('arenaUsageState')) || {};
    if (raw.resetKey !== resetKey || !raw.usedCounts || typeof raw.usedCounts !== 'object') {
        const nextState = { resetKey, usedCounts: {} };
        localStorage.setItem('arenaUsageState', JSON.stringify(nextState));
        return nextState;
    }
    return raw;
}

function saveArenaUsageState(state) {
    localStorage.setItem('arenaUsageState', JSON.stringify(state));
}

function getArenaUsedCount(name = '') {
    const state = loadArenaUsageState();
    return Number(state.usedCounts[name]) || 0;
}

function getArenaRemainingCopies(name = '', totalCopies = 0) {
    return Math.max(0, (Number(totalCopies) || 0) - getArenaUsedCount(name));
}

function consumeArenaRunSelections(names = []) {
    if (!Array.isArray(names) || names.length === 0) return;
    const state = loadArenaUsageState();
    names.forEach(name => {
        state.usedCounts[name] = (Number(state.usedCounts[name]) || 0) + 1;
    });
    saveArenaUsageState(state);
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

function sortBattleCandidates(candidates) {
    const rarityOrder = { secret: 1, legendary: 2, epic: 3, rare: 4, common: 5 };

    return candidates.slice().sort((a, b) => {
        const abilityA = BATTLE_ABILITIES[a.abilityId]?.name || a.abilityId || 'zzz';
        const abilityB = BATTLE_ABILITIES[b.abilityId]?.name || b.abilityId || 'zzz';
        const abilityCompare = abilityA.localeCompare(abilityB, 'en', { sensitivity: 'base' });
        if (abilityCompare !== 0) return abilityCompare;

        const rarityCompare = (rarityOrder[a.rarity] || 999) - (rarityOrder[b.rarity] || 999);
        if (rarityCompare !== 0) return rarityCompare;

        return a.name.localeCompare(b.name, 'en', { sensitivity: 'base' });
    });
}

function getBattleCandidatesFromCollection() {
    const ownedByName = new Map(collection.map(item => [item.name, item]));
    const candidates = plushies.map(plush => {
        const owned = ownedByName.get(plush.name);
        const abilityId = plush.ability && BATTLE_ABILITIES[plush.ability]
            ? plush.ability
            : getDefaultBattleAbilityIdForBanafix(plush.name);
        const totalCopies = owned?.count || 0;
        const remainingCopies = getArenaRemainingCopies(plush.name, totalCopies);

        return {
            name: plush.name,
            rarity: plush.rarity || 'common',
            image: plush.image || 'images/Banafix.png',
            abilityId,
            count: totalCopies,
            remainingCopies,
            goldCount: owned?.goldCount || 0,
            rainbowCount: owned?.rainbowCount || 0,
            selectable: remainingCopies > 0
        };
    });

    return sortBattleCandidates(candidates);
}

function getBattleStatsForPlush(plush, collectedItem = null) {
    const rarity = plush?.rarity || 'common';
    const baseStats = BATTLE_RARITY_STATS[rarity] || BATTLE_RARITY_STATS.common;
    const count = collectedItem?.count || 1;
    const goldCount = collectedItem?.goldCount || 0;
    const rainbowCount = collectedItem?.rainbowCount || 0;
    const hpBonus = Math.min(35, count * 3) + (goldCount > 0 ? 6 : 0) + (rainbowCount > 0 ? 10 : 0);
    const atkBonus = Math.min(8, Math.floor(count / 2)) + (goldCount > 0 ? 2 : 0) + (rainbowCount > 0 ? 3 : 0);

    return {
        maxHp: baseStats.hp + hpBonus,
        atk: baseStats.atk + atkBonus
    };
}

function createBattleAlly(candidate, index) {
    const plush = getPlushByName(candidate.name);
    const stats = getBattleStatsForPlush(plush || candidate, candidate);
    const abilityId = getBattleAbilityIdForBanafix(candidate.name);
    const ability = BATTLE_ABILITIES[abilityId] || BATTLE_ABILITIES.tank;

    return {
        id: `ally-${index}-${candidate.name}`,
        name: candidate.name,
        image: candidate.image,
        rarity: candidate.rarity,
        maxHp: stats.maxHp,
        hp: stats.maxHp,
        atk: stats.atk,
        abilityId,
        ability,
        abilityState: abilityId === 'overclock' ? { heat: 0 } : {},
        abilityFx: null,
        guardShield: 0,
        rallyBoost: 0,
        effect: '',
        side: 'ally'
    };
}

function getBattleAbilityIdForBanafix(name = '') {
    const plush = getPlushByName(name);
    if (plush && plush.ability && BATTLE_ABILITIES[plush.ability]) {
        return plush.ability;
    }
    return getDefaultBattleAbilityIdForBanafix(name);
}

function isUniqueBattleAbility(abilityId = '') {
    return UNIQUE_BATTLE_ABILITIES.has(abilityId);
}

function getBattleEnemyRarityWeights(stage = 1) {
    if (stage <= 2) {
        return { common: 68, rare: 27, epic: 5, legendary: 0, secret: 0 };
    }
    if (stage <= 4) {
        return { common: 50, rare: 32, epic: 15, legendary: 3, secret: 0 };
    }
    if (stage <= 6) {
        return { common: 34, rare: 33, epic: 22, legendary: 10, secret: 1 };
    }
    if (stage <= 8) {
        return { common: 22, rare: 29, epic: 27, legendary: 18, secret: 4 };
    }
    return { common: 12, rare: 23, epic: 28, legendary: 27, secret: 10 };
}

function getWeightedBattleEnemyRarity(stage = 1) {
    const weights = getBattleEnemyRarityWeights(stage);
    const entries = Object.entries(weights);
    const totalWeight = entries.reduce((sum, [, weight]) => sum + weight, 0);
    let roll = Math.random() * totalWeight;

    for (const [rarity, weight] of entries) {
        roll -= weight;
        if (roll <= 0) {
            return rarity;
        }
    }

    return 'common';
}

function getEnemyPoolByStage(stage = 1) {
    const rarity = getWeightedBattleEnemyRarity(stage);
    const exactPool = plushies.filter(plush => (plush.rarity || 'common') === rarity);
    if (exactPool.length > 0) {
        return exactPool;
    }

    const fallbackOrder = ['secret', 'legendary', 'epic', 'rare', 'common'];
    const rarityIndex = fallbackOrder.indexOf(rarity);
    return plushies.filter(plush => fallbackOrder.indexOf(plush.rarity || 'common') >= rarityIndex);
}

function createBattleEnemy(index, stage = 1) {
    const enemyPool = getEnemyPoolByStage(stage);
    const enemy = enemyPool[Math.floor(Math.random() * enemyPool.length)] || plushies[0];
    const rarity = enemy.rarity || 'common';
    const baseStats = BATTLE_RARITY_STATS[rarity] || BATTLE_RARITY_STATS.common;
    const scaling = Math.floor(index / 2);
    const stageHpScaling = Math.max(0, stage - 1) * 6;
    const stageAtkScaling = Math.max(0, stage - 1);
    const maxHp = baseStats.hp + 4 + scaling * 4 + stageHpScaling;
    const atk = baseStats.atk + 1 + scaling + stageAtkScaling;
    const abilityId = getBattleAbilityIdForBanafix(enemy.name);
    const ability = BATTLE_ABILITIES[abilityId] || BATTLE_ABILITIES.tank;

    return {
        id: `enemy-${index}-${enemy.name}`,
        name: `Enemy: ${enemy.name}`,
        image: enemy.image || 'images/Banafix.png',
        rarity,
        maxHp,
        hp: maxHp,
        atk,
        abilityId,
        ability,
        abilityState: abilityId === 'overclock' ? { heat: 0 } : {},
        abilityFx: null,
        guardShield: 0,
        rallyBoost: 0,
        effect: '',
        side: 'enemy'
    };
}

function createEnemiesForStage(stage, aliveAlliesCount) {
    const roll = Math.random();
    let enemyCount = 3;

    if (stage <= 2) {
        enemyCount = roll < 0.4 ? 2 : roll < 0.97 ? 3 : 4;
    } else if (stage <= 5) {
        enemyCount = roll < 0.2 ? 2 : roll < 0.94 ? 3 : 4;
    } else {
        enemyCount = roll < 0.1 ? 2 : roll < 0.9 ? 3 : 4;
    }

    return Array.from({ length: enemyCount }, (_, idx) => createBattleEnemy(idx + 1, stage));
}

function setupBattleGame() {
    const battleBtn = document.getElementById('battleGameBtn');
    const battleModal = document.getElementById('battleGameModal');
    const closeBattleBtn = document.getElementById('closeBattleGameModal');
    const selectionStep = document.getElementById('battleSelectionStep');
    const fightStep = document.getElementById('battleFightStep');
    const selectionGrid = document.getElementById('battleSelectionGrid');
    const selectionCounter = document.getElementById('battleSelectionCounter');
    const startBattleBtn = document.getElementById('startBattleBtn');
    const nextTurnBtn = document.getElementById('battleNextTurnBtn');
    const resetBattleBtn = document.getElementById('battleResetBtn');
    const battleStatus = document.getElementById('battleStatus');
    const alliesEl = document.getElementById('battleAllies');
    const enemiesEl = document.getElementById('battleEnemies');
    const logEl = document.getElementById('battleLog');
    let battleAutoTimer = null;

    if (!battleBtn || !battleModal || !selectionStep || !fightStep || !selectionGrid || !selectionCounter || !startBattleBtn || !nextTurnBtn || !resetBattleBtn || !battleStatus || !alliesEl || !enemiesEl || !logEl) {
        return;
    }

    nextTurnBtn.classList.add('hidden');

    function finalizeArenaUsage(commitAbandonedRun = false) {
        if (!battleGameState || battleGameState.usageCommitted) {
            return;
        }

        consumeArenaRunSelections(battleGameState.selectedNames || []);
        battleGameState.usageCommitted = true;
        battleCandidates = getBattleCandidatesFromCollection();

        if (commitAbandonedRun) {
            showToast('Arena run abandoned. Selected Banafixes were still used for today.', 'info');
        }
    }

    function closeBattleModal() {
        stopAutoBattle();

        if (battleGameState && !battleGameState.finished) {
            finalizeArenaUsage(true);
        }

        battleModal.classList.add('hidden');
        battleModal.setAttribute('aria-hidden', 'true');
        document.body.classList.remove('modal-open');
    }

    function stopAutoBattle() {
        if (battleAutoTimer) {
            window.clearInterval(battleAutoTimer);
            battleAutoTimer = null;
        }
    }

    function startAutoBattle() {
        stopAutoBattle();
        battleAutoTimer = window.setInterval(() => {
            if (!battleGameState || battleGameState.finished || battleGameState.transitioning) {
                stopAutoBattle();
                return;
            }
            performBattleTurn();
        }, BATTLE_TURN_DELAY);
    }

    function resetToSelection() {
        stopAutoBattle();
        battleSelection = [];
        battleGameState = null;
        battleCandidates = getBattleCandidatesFromCollection();
        selectionStep.classList.remove('hidden');
        fightStep.classList.add('hidden');
        renderSelection();
    }

    function openBattleModal() {
        battleModal.classList.remove('hidden');
        battleModal.setAttribute('aria-hidden', 'false');
        document.body.classList.add('modal-open');
        resetToSelection();
    }

    function updateSelectionCounter() {
        selectionCounter.textContent = `Selected: ${battleSelection.length} / 4`;
        startBattleBtn.disabled = battleSelection.length < 1;
    }

    function toggleSelection(name) {
        const candidate = battleCandidates.find(item => item.name === name);
        if (!candidate) {
            return;
        }

        if (!candidate.selectable) {
            showToast(candidate.count > 0 ? 'No arena uses left for this Banafix today.' : 'You do not own this Banafix yet.', 'info');
            return;
        }

        if (battleSelection.includes(name)) {
            battleSelection = battleSelection.filter(selected => selected !== name);
            renderSelection();
            return;
        }

        if (battleSelection.length >= 4) {
            showToast('You can select up to 4 Banafixes.', 'info');
            return;
        }

        battleSelection.push(name);
        renderSelection();
    }

    function renderSelection() {
        if (battleCandidates.length === 0) {
            selectionGrid.classList.remove('sectioned');
            selectionGrid.innerHTML = '<div class="battle-empty">Draw Banafixes first to play the arena.</div>';
            updateSelectionCounter();
            return;
        }

        const selectedNames = new Set(battleSelection);

        const rarityOrder = { secret: 1, legendary: 2, epic: 3, rare: 4, common: 5 };

        const groupedByAbility = battleCandidates.reduce((groups, candidate, index) => {
            const selected = selectedNames.has(candidate.name);
            const abilityId = candidate.abilityId || getBattleAbilityIdForBanafix(candidate.name);
            const ability = BATTLE_ABILITIES[abilityId] || BATTLE_ABILITIES.tank;
            const isSignature = isUniqueBattleAbility(abilityId);
            const groupKey = isSignature ? 'Signature Abilities' : ability.name;
            const uniqueLabel = isUniqueBattleAbility(abilityId) ? ' <span class="battle-ability-unique">(Signature Ability)</span>' : '';
            const lockedClass = candidate.selectable ? '' : ' locked';
            const disabledAttr = candidate.selectable ? '' : ' disabled';
            const ownedLabel = candidate.count > 0
                ? `${candidate.remainingCopies}/${candidate.count}`
                : 'Not owned yet';

            const cardMarkup = `
                <button class="battle-select-card ${selected ? 'selected' : ''}${lockedClass}" data-index="${index}"${disabledAttr}>
                    <img src="${candidate.image}" alt="${candidate.name}" onerror="this.onerror=null;this.src='images/Banafix.png'">
                    <div class="battle-select-name">${candidate.name}</div>
                    <div class="rarity ${candidate.rarity}">${candidate.rarity}</div>
                    <div class="battle-select-meta">${ownedLabel}</div>
                    <div class="battle-select-stats">HP ${BATTLE_RARITY_STATS[candidate.rarity]?.hp || 60} | ATK ${BATTLE_RARITY_STATS[candidate.rarity]?.atk || 12}</div>
                    <div class="battle-select-ability">Ability: ${ability.name}${uniqueLabel}</div>
                    ${selected || !candidate.selectable ? `<div class="battle-select-ability-desc">${ability.description}</div>` : ''}
                </button>
            `;

            if (!groups[groupKey]) {
                groups[groupKey] = [];
            }
            groups[groupKey].push({
                markup: cardMarkup,
                name: candidate.name,
                rarity: candidate.rarity || 'common'
            });
            return groups;
        }, {});

        selectionGrid.classList.add('sectioned');
        const orderedGroups = Object.entries(groupedByAbility).sort(([a], [b]) => {
            if (a === 'Signature Abilities') return -1;
            if (b === 'Signature Abilities') return 1;
            return a.localeCompare(b, 'en', { sensitivity: 'base' });
        });

        selectionGrid.innerHTML = orderedGroups.map(([abilityName, items]) => {
            const sortedItems = items.slice().sort((a, b) => {
                const rarityCompare = (rarityOrder[a.rarity] || 999) - (rarityOrder[b.rarity] || 999);
                if (rarityCompare !== 0) return rarityCompare;
                return a.name.localeCompare(b.name, 'en', { sensitivity: 'base' });
            });
            const cards = sortedItems.map(item => item.markup).join('');
            return `
                <div class="battle-selection-section">
                    <div class="battle-selection-section-title">${abilityName}</div>
                    <div class="battle-selection-subgrid">${cards}</div>
                </div>
            `;
        }).join('');

        selectionGrid.querySelectorAll('.battle-select-card').forEach(card => {
            card.addEventListener('click', () => {
                const index = Number(card.getAttribute('data-index'));
                const candidate = battleCandidates[index];
                if (!candidate) return;
                toggleSelection(candidate.name);
            });
        });

        updateSelectionCounter();
    }

    function getAliveFighters(fighters) {
        return fighters.filter(fighter => fighter.hp > 0);
    }

    function getTeamBySide(side) {
        if (!battleGameState) return [];
        return side === 'ally' ? battleGameState.allies : battleGameState.enemies;
    }

    function getWeakestAliveFighter(fighters, excludeFighter = null) {
        const alive = fighters.filter(fighter => fighter.hp > 0 && fighter !== excludeFighter);
        if (alive.length === 0) {
            return null;
        }
        return alive.reduce((weakest, fighter) => {
            const weakestRatio = weakest.hp / weakest.maxHp;
            const fighterRatio = fighter.hp / fighter.maxHp;
            return fighterRatio < weakestRatio ? fighter : weakest;
        }, alive[0]);
    }

    function applySupportActions(attacker, supportActions = []) {
        if (!battleGameState || !supportActions || supportActions.length === 0) return;

        const team = getTeamBySide(attacker.side);
        const aliveTeam = getAliveFighters(team);

        supportActions.forEach(action => {
            if (action.type === 'healLowest') {
                const targetAlly = getWeakestAliveFighter(aliveTeam) || attacker;
                if (!targetAlly) return;
                const healAmount = Math.max(1, Math.round(targetAlly.maxHp * (action.ratio || 0.1)));
                const before = targetAlly.hp;
                targetAlly.hp = Math.min(targetAlly.maxHp, targetAlly.hp + healAmount);
                const realHeal = targetAlly.hp - before;
                if (realHeal > 0) {
                    addBattleLog(`${attacker.name} wspiera ${targetAlly.name}: +${realHeal} HP (${action.label || 'Support'}).`, 'heal');
                }
                return;
            }

            if (action.type === 'healAll') {
                let healedTotal = 0;
                aliveTeam.forEach(ally => {
                    const healAmount = Math.max(1, Math.round(ally.maxHp * (action.ratio || 0.05)));
                    const before = ally.hp;
                    ally.hp = Math.min(ally.maxHp, ally.hp + healAmount);
                    healedTotal += (ally.hp - before);
                });
                if (healedTotal > 0) {
                    addBattleLog(`${attacker.name} boosts the team: +${healedTotal} total HP (${action.label || 'Team Heal'}).`, 'heal');
                }
                return;
            }

            if (action.type === 'shieldLowest') {
                const targetAlly = getWeakestAliveFighter(aliveTeam) || attacker;
                if (!targetAlly) return;
                const shieldAmount = Math.max(1, Math.round(attacker.maxHp * (action.ratio || 0.1)));
                targetAlly.guardShield = (targetAlly.guardShield || 0) + shieldAmount;
                addBattleLog(`${attacker.name} grants a shield to ${targetAlly.name}: +${shieldAmount} shield (${action.label || 'Shield'}).`, 'ability');
                return;
            }

            if (action.type === 'shieldAll') {
                const shieldAmount = Math.max(1, Math.round(attacker.maxHp * (action.ratio || 0.06)));
                aliveTeam.forEach(ally => {
                    ally.guardShield = (ally.guardShield || 0) + shieldAmount;
                });
                addBattleLog(`${attacker.name} shields the whole team: +${shieldAmount} shield for everyone (${action.label || 'Team Shield'}).`, 'ability');
                return;
            }

            if (action.type === 'rallyLowest') {
                const targetAlly = getWeakestAliveFighter(aliveTeam, attacker) || getWeakestAliveFighter(aliveTeam);
                if (!targetAlly) return;
                const boost = action.boost || 0.15;
                targetAlly.rallyBoost = Math.max(targetAlly.rallyBoost || 0, boost);
                addBattleLog(`${attacker.name} motivates ${targetAlly.name}: next attack +${Math.round(boost * 100)}%.`, 'ability');
                return;
            }

            if (action.type === 'rallyAll') {
                const boost = action.boost || 0.12;
                aliveTeam.forEach(ally => {
                    ally.rallyBoost = Math.max(ally.rallyBoost || 0, boost);
                });
                addBattleLog(`${attacker.name} triggers Rally: the team gets +${Math.round(boost * 100)}% on the next attack.`, 'ability');
            }
        });
    }

    function pickNextAttacker(fighters, cursor) {
        for (let offset = 0; offset < fighters.length; offset += 1) {
            const index = (cursor + offset) % fighters.length;
            if (fighters[index].hp > 0) {
                return { fighter: fighters[index], nextCursor: (index + 1) % fighters.length };
            }
        }
        return null;
    }

    function addBattleLog(message, type = 'info') {
        if (!battleGameState) return;
        battleGameState.log.push({ message, type });
        if (battleGameState.log.length > 12) {
            battleGameState.log.shift();
        }
    }

    function resetFighterVisualState() {
        if (!battleGameState) return;
        battleGameState.allies.forEach(fighter => {
            fighter.effect = '';
            fighter.lastDamage = 0;
            fighter.lastDamageType = '';
            fighter.abilityFx = null;
        });
        battleGameState.enemies.forEach(fighter => {
            fighter.effect = '';
            fighter.lastDamage = 0;
            fighter.lastDamageType = '';
            fighter.abilityFx = null;
        });
    }

    function renderFighterCard(fighter) {
        const hpPercent = Math.max(0, Math.round((fighter.hp / fighter.maxHp) * 100));
        const downClass = fighter.hp <= 0 ? 'down' : '';
        const effectClass = fighter.effect ? ` effect-${fighter.effect}` : '';
        const visual = fighter.emoji
            ? `<div class="battle-fighter-emoji">${fighter.emoji}</div>`
            : `<img src="${fighter.image}" alt="${fighter.name}" onerror="this.onerror=null;this.src='images/Banafix.png'">`;
        const damageClass = fighter.lastDamageType === 'miss' ? ' miss' : fighter.lastDamageType === 'crit' ? ' crit' : '';
        const abilityLabel = fighter.ability ? `${fighter.ability.name}${isUniqueBattleAbility(fighter.abilityId) ? ' (Signature Ability)' : ''}: ${fighter.ability.description}` : 'No ability';
        const abilityStatusMarkup = getBattleAbilityStatusMarkup(fighter);
        return `
            <div class="battle-fighter-card ${downClass}${effectClass}" tabindex="0" title="HP: ${fighter.hp}/${fighter.maxHp} | ATK: ${fighter.atk}">
                <div class="battle-fighter-top">
                    <div class="battle-fighter-name">${fighter.name}</div>
                    <div class="battle-fighter-hp-text">HP ${fighter.hp}/${fighter.maxHp}</div>
                </div>
                <div class="battle-fighter-visual">${visual}</div>
                <div class="battle-hp-bar"><div class="battle-hp-fill" style="width:${hpPercent}%"></div></div>
                ${abilityStatusMarkup}
                ${fighter.lastDamage ? `<div class="battle-damage-float${damageClass}">${fighter.lastDamageType === 'miss' ? fighter.lastDamage : fighter.lastDamageType === 'crit' ? `CRIT -${fighter.lastDamage}` : `-${fighter.lastDamage}`}</div>` : ''}
                ${fighter.abilityFx ? `<div class="battle-ability-fx ${fighter.abilityFx.type}">${fighter.abilityFx.text}</div>` : ''}
                <div class="battle-hover-stats">
                    <div>HP: ${fighter.hp}/${fighter.maxHp}</div>
                    <div>ATK: ${fighter.atk}</div>
                    <div>Ability: ${abilityLabel}</div>
                </div>
            </div>
        `;
    }

    function getBattleAbilityStatusMarkup(fighter) {
        if (!fighter || fighter.hp <= 0) return '';
        const state = fighter.abilityState || {};
        const statusBlocks = [];

        function addStatusBlock(statusClass, label, valueText, percent) {
            const clamped = Math.max(0, Math.min(100, Math.round(percent)));
            statusBlocks.push(`
                <div class="battle-ability-status ${statusClass}">
                    <div class="battle-ability-status-head">
                        <span>${label}</span>
                        <span>${valueText}</span>
                    </div>
                    <div class="battle-ability-status-bar">
                        <div class="battle-ability-status-fill" style="width:${clamped}%"></div>
                    </div>
                </div>
            `);
        }

        if (fighter.abilityId === 'overclock') {
            const heat = Math.max(0, Math.min(3, state.heat || 0));
            const heatPercent = Math.round((heat / 3) * 100);
            addStatusBlock('overclock', 'Overclock Heat', `${heat}/3`, heatPercent);
        }

        if (fighter.abilityId === 'tank') {
            const charge = Math.max(0, (state.tankCount || 0) % 3);
            const readyNext = charge === 2;
            const chargePercent = Math.round((charge / 2) * 100);
            addStatusBlock('tank-charge', 'Heavy Hit Charge', readyNext ? 'READY NEXT' : `${charge}/2`, chargePercent);
        }

        if (fighter.abilityId === 'berserker') {
            const missingHpRatio = 1 - (fighter.hp / Math.max(1, fighter.maxHp));
            const bonusRatio = Math.min(0.7, missingHpRatio * 0.7);
            const bonusPercent = Math.round(bonusRatio * 100);
            const bonusFill = Math.round((bonusRatio / 0.7) * 100);
            addStatusBlock('berserker-bonus', 'Berserker Bonus', `+${bonusPercent}% ATK`, bonusFill);
        }

        if (fighter.abilityId === 'bioTech') {
            const emergency = fighter.hp <= fighter.maxHp * 0.4;
            addStatusBlock('biotech', 'Bio Tech', emergency ? 'Emergency ON' : 'Emergency OFF', emergency ? 100 : 0);
        }

        if (fighter.abilityId === 'guardian') {
            const highHeal = fighter.hp <= fighter.maxHp * 0.4;
            addStatusBlock('guardian', 'Guardian Heal', highHeal ? '12%' : '6%', highHeal ? 100 : 50);
        }

        if (fighter.abilityId === 'vampire') {
            addStatusBlock('vampire', 'Vampire Drain', '30% lifesteal', 30);
        }

        if (fighter.abilityId === 'breaker') {
            addStatusBlock('breaker-mark', 'Armor Break Proc', '35%', 35);
        }

        if (fighter.abilityId === 'gambler') {
            const lastRoll = state.gamblerLastLabel || 'No roll yet';
            const rollPower = typeof state.gamblerLastPower === 'number' ? state.gamblerLastPower : 50;
            addStatusBlock('gambler', 'Gambler Roll', lastRoll, rollPower);
        }

        if (fighter.abilityId === 'medic') {
            addStatusBlock('support', 'Medic Pulse', 'Heal lowest 14%', 14);
        }

        if (fighter.abilityId === 'protectorLink') {
            addStatusBlock('shield', 'Protector Link', 'Shield lowest 12%', 12);
        }

        if (fighter.abilityId === 'rallyCall') {
            addStatusBlock('rally', 'Rally Call', 'Team +16%', 53);
        }

        if (fighter.abilityId === 'angelicGrace') {
            const divine = fighter.hp <= fighter.maxHp * 0.35;
            addStatusBlock('angel', 'Angelic Grace', divine ? 'Divine ON' : 'Divine OFF', divine ? 100 : 0);
        }

        if (fighter.abilityId === 'errorProtocol') {
            const glitch = state.errorLastEvent || 'Waiting for glitch';
            const glitchPower = typeof state.errorLastPower === 'number' ? state.errorLastPower : 50;
            addStatusBlock('error', 'Error Protocol', glitch, glitchPower);
        }

        if (fighter.abilityId === 'portalShift') {
            const portal = state.portalLastEvent || 'Echo chance 22%';
            const portalPower = typeof state.portalLastPower === 'number' ? state.portalLastPower : 22;
            addStatusBlock('portal', 'Portal Shift', portal, portalPower);
        }

        if (fighter.abilityId === 'neighborWatch') {
            addStatusBlock('sniper', 'Neighbor Watch', 'Miss fixed at 4%', 96);
        }

        if (fighter.abilityId === 'tacoFrenzy') {
            const chain = Math.max(0, state.tacoLastChain || 0);
            addStatusBlock('taco', 'Taco Combo', chain > 0 ? `x${chain}` : 'Chain chance 45%', chain > 0 ? Math.min(100, chain * 34) : 45);
        }

        if (fighter.abilityId === 'sniper') {
            const lockOn = (state.sniperLock || 0) > 0;
            const lockPercent = lockOn ? 100 : 0;
            addStatusBlock('sniper', 'Sniper Lock-On', lockOn ? 'READY' : 'OFF', lockPercent);
        }

        if (fighter.abilityId === 'swift') {
            const procActive = state.swiftLastProc === true;
            addStatusBlock('swift', 'Swift Follow-Up', procActive ? 'PROC!' : '20%', procActive ? 100 : 20);
        }

        if (fighter.abilityId === 'poisoner') {
            const lastStack = Math.max(0, Math.min(3, state.lastVenomStacks || 0));
            addStatusBlock('poisoner', 'Poison Proc', `30% | last ${lastStack}/3`, 30);
        }

        if ((fighter.venomStacks || 0) > 0) {
            const venomStacks = Math.max(0, Math.min(3, fighter.venomStacks || 0));
            const venomPercent = Math.round((venomStacks / 3) * 100);
            addStatusBlock('poisoner', 'Venom Stacks', `${venomStacks}/3`, venomPercent);
        }

        if ((fighter.breakMark || 0) > 0) {
            const breakStacks = Math.max(0, Math.min(2, fighter.breakMark || 0));
            const breakPercent = Math.round((breakStacks / 2) * 100);
            addStatusBlock('breaker-mark', 'Armor Break', `${breakStacks}/2`, breakPercent);
        }

        if ((fighter.guardShield || 0) > 0) {
            const shieldValue = Math.max(0, Math.round(fighter.guardShield || 0));
            const shieldPercent = Math.min(100, Math.round((shieldValue / Math.max(1, fighter.maxHp)) * 100));
            addStatusBlock('shield', 'Shield', `${shieldValue}`, shieldPercent);
        }

        if ((fighter.rallyBoost || 0) > 0) {
            const rallyValue = Math.max(0, fighter.rallyBoost || 0);
            const rallyPercent = Math.min(100, Math.round((rallyValue / 0.3) * 100));
            addStatusBlock('rally', 'Rally Boost', `+${Math.round(rallyValue * 100)}%`, rallyPercent);
        }

        if (statusBlocks.length === 0) {
            return '';
        }

        return `<div class="battle-ability-status-stack">${statusBlocks.join('')}</div>`;
    }

    function applyAbilityAttack(attacker, target) {
        const abilityId = attacker.abilityId || '';
        let missChance = BATTLE_MISS_CHANCE;
        let critChance = BATTLE_CRIT_CHANCE;
        const notes = [];
        let abilityFx = null;
        const state = attacker.abilityState || (attacker.abilityState = {});
        let selfDamage = 0;
        let forceHit = false;
        const supportActions = [];

        function triggerAbilityFx(text, type) {
            if (!abilityFx) {
                abilityFx = { text, type };
            }
        }

        if (abilityId === 'tank') {
            state.tankCount = (state.tankCount || 0) + 1;
            if (state.tankCount % 3 === 0) {
                forceHit = true;
                critChance += 0.22;
                notes.push('Tank unstoppable strike');
                triggerAbilityFx('AEGIS', 'tank');
            } else {
                critChance += 0.03;
            }
        }

        if (abilityId === 'sniper') {
            missChance = Math.max(0.01, missChance - 0.08);
            critChance += 0.03;
            if (state.sniperLock && state.sniperLock > 0) {
                state.sniperLock -= 1;
                forceHit = true;
                critChance += 0.1;
                notes.push('Lock-On shot');
                triggerAbilityFx('LOCK-ON', 'sniper');
            }
        }

        if (abilityId === 'swift') {
            state.swiftLastProc = false;
            missChance = Math.max(0.01, missChance - 0.05);
            critChance += 0.08;
        }

        if (abilityId === 'neighborWatch') {
            missChance = 0.04;
            if (target.hp > target.maxHp * 0.5) {
                critChance += 0.1;
                notes.push('Neighbor Watch crit boost');
            }
            if (target.maxHp > attacker.maxHp) {
                critChance += 0.06;
                notes.push('Threat response');
            }
        }

        if (abilityId === 'angelicGrace') {
            critChance += 0.06;
        }

        const attackMissed = forceHit ? false : Math.random() < missChance;
        if (attackMissed) {
            return {
                missed: true,
                damage: 0,
                crit: false,
                notes
            };
        }

        let damage = attacker.atk;

        if (attacker.rallyBoost && attacker.rallyBoost > 0) {
            damage *= (1 + attacker.rallyBoost);
            notes.push(`Rally +${Math.round(attacker.rallyBoost * 100)}%`);
            triggerAbilityFx('RALLY', 'support');
            attacker.rallyBoost = 0;
        }

        if (abilityId === 'overclock') {
            state.heat = (state.heat || 0) + 1;
            if (state.heat >= 3) {
                damage *= 1.75;
                state.heat = 0;
                notes.push('Overclock meltdown shot');
                triggerAbilityFx('MELTDOWN', 'overclock');
            } else {
                damage *= 1.12;
                notes.push(`Overclock heat ${state.heat}/3`);
                triggerAbilityFx('OVERCLOCK', 'overclock');
            }
        }

        if (abilityId === 'berserker') {
            const missingHpRatio = 1 - (attacker.hp / attacker.maxHp);
            const berserkMult = 1 + Math.min(0.7, missingHpRatio * 0.7);
            damage *= berserkMult;
            if (attacker.hp <= attacker.maxHp * 0.35) {
                critChance += 0.08;
            }
            if (missingHpRatio > 0.2) {
                notes.push('Berserker rage scaling');
                triggerAbilityFx('BERSERK', 'berserker');
            }
        }

        if (abilityId === 'finisher') {
            const missingTargetRatio = 1 - (target.hp / target.maxHp);
            const finisherMult = 1 + Math.min(0.6, missingTargetRatio * 0.6);
            damage *= finisherMult;
            if (missingTargetRatio >= 0.3) {
                notes.push('Execution scaling');
                triggerAbilityFx('FINISHER', 'finisher');
            }
        }

        if (abilityId === 'breaker' && target.maxHp >= 140) {
            damage *= 1.15;
            notes.push('Breaker boost');
            triggerAbilityFx('BREAKER', 'breaker');
        }

        if (abilityId === 'breaker' && target.breakMark && target.breakMark > 0) {
            damage *= 1.2;
            notes.push('Armor Break exploit');
        }

        if (abilityId === 'gambler') {
            const gambleRoll = Math.random();
            if (gambleRoll < 0.12) {
                damage *= 3;
                notes.push('Gambler mega jackpot');
                state.gamblerLastLabel = 'Mega jackpot';
                state.gamblerLastPower = 100;
                triggerAbilityFx('MEGA JACKPOT', 'gambler-good');
            } else if (gambleRoll < 0.32) {
                damage *= 1.7;
                notes.push('Gambler good roll');
                state.gamblerLastLabel = 'Good roll';
                state.gamblerLastPower = 78;
                triggerAbilityFx('JACKPOT', 'gambler-good');
            } else if (gambleRoll < 0.62) {
                notes.push('Gambler neutral roll');
                state.gamblerLastLabel = 'Neutral roll';
                state.gamblerLastPower = 50;
            } else if (gambleRoll < 0.85) {
                damage *= 0.65;
                notes.push('Gambler low roll');
                state.gamblerLastLabel = 'Low roll';
                state.gamblerLastPower = 25;
                triggerAbilityFx('LOW ROLL', 'gambler-bad');
            } else {
                damage = 0;
                selfDamage = Math.max(1, Math.round(attacker.maxHp * 0.1));
                notes.push(`Gambler bust -${selfDamage} HP`);
                state.gamblerLastLabel = 'Bust';
                state.gamblerLastPower = 0;
                triggerAbilityFx('BUST', 'gambler-bad');
            }
        }

        if (abilityId === 'bioTech' && attacker.hp <= attacker.maxHp * 0.4) {
            damage *= 1.2;
            notes.push('Emergency mode');
            triggerAbilityFx('EMERGENCY', 'heal');
        }

        if (abilityId === 'vampire' && target.hp <= target.maxHp * 0.5) {
            damage *= 1.2;
            notes.push('Blood scent');
            triggerAbilityFx('BLOODLUST', 'vampire');
        }

        if (abilityId === 'angelicGrace' && attacker.hp <= attacker.maxHp * 0.35) {
            damage *= 1.3;
            notes.push('Divine burst');
            triggerAbilityFx('DIVINE', 'angel');
        }

        if (abilityId === 'medic') {
            supportActions.push({ type: 'healLowest', ratio: 0.14, label: 'Medic Pulse' });
            triggerAbilityFx('AID', 'support');
        }

        if (abilityId === 'protectorLink') {
            supportActions.push({ type: 'shieldLowest', ratio: 0.12, label: 'Protector Link' });
            triggerAbilityFx('SHIELD', 'support');
        }

        if (abilityId === 'rallyCall') {
            supportActions.push({ type: 'rallyAll', boost: 0.16, label: 'Rally Call' });
            triggerAbilityFx('RALLY', 'support');
        }

        if (abilityId === 'communitySpirit') {
            supportActions.push({ type: 'healAll', ratio: 0.06, label: 'Community Spirit' });
            supportActions.push({ type: 'rallyLowest', boost: 0.2, label: 'Community Spirit' });
            triggerAbilityFx('UNITY', 'support');
        }

        if (abilityId === 'executiveCommand') {
            supportActions.push({ type: 'shieldAll', ratio: 0.08, label: 'Executive Command' });
            supportActions.push({ type: 'rallyAll', boost: 0.14, label: 'Executive Command' });
            triggerAbilityFx('ORDER', 'support');
        }

        const isCrit = Math.random() < critChance;
        if (isCrit) {
            damage *= BATTLE_CRIT_MULTIPLIER;
            if (abilityId === 'sniper') {
                state.sniperLock = 1;
            }
        }

        if (abilityId === 'errorProtocol') {
            const glitchRoll = Math.random();
            if (glitchRoll < 0.12) {
                damage *= 2.8;
                notes.push('Glitch Strike++');
                state.errorLastEvent = 'Glitch++';
                state.errorLastPower = 100;
                triggerAbilityFx('GLITCH++', 'error');
            } else if (glitchRoll < 0.24) {
                damage *= 0.55;
                notes.push('Corrupted packet');
                state.errorLastEvent = 'Corrupted';
                state.errorLastPower = 22;
                triggerAbilityFx('CORRUPT', 'error');
            } else if (glitchRoll < 0.32) {
                const recursive = Math.max(1, Math.round(damage * 0.6));
                damage += recursive;
                notes.push(`Recursive hit +${recursive}`);
                state.errorLastEvent = 'Recursive';
                state.errorLastPower = 68;
                triggerAbilityFx('RECURSE', 'error');
            } else {
                state.errorLastEvent = 'Stable packet';
                state.errorLastPower = 45;
            }
        }

        damage = Math.max(1, Math.round(damage));

        let extraDamage = 0;
        if (abilityId === 'poisoner') {
            const existingStacks = Math.max(0, target.venomStacks || 0);
            state.lastVenomStacks = existingStacks;
            if (existingStacks > 0) {
                const stackChip = Math.max(1, Math.round(target.maxHp * (0.02 * existingStacks)));
                extraDamage += stackChip;
                notes.push(`Venom chip +${stackChip}`);
            }
            if (Math.random() < 0.3) {
                target.venomStacks = Math.min(3, existingStacks + 1);
                const poisonBurst = Math.max(1, Math.round(target.maxHp * (0.06 + target.venomStacks * 0.03)));
                extraDamage += poisonBurst;
                notes.push(`Poison stack ${target.venomStacks} +${poisonBurst}`);
                triggerAbilityFx('VENOM', 'poison');
                state.lastVenomStacks = target.venomStacks;
            }
        }

        if (abilityId === 'tacoFrenzy') {
            let chainHits = 0;
            while (chainHits < 3 && Math.random() < 0.45) {
                chainHits += 1;
                const spicy = Math.max(1, Math.round(target.maxHp * 0.08));
                extraDamage += spicy;
            }
            state.tacoLastChain = chainHits;
            if (chainHits > 0) {
                notes.push(`Taco combo x${chainHits}`);
                triggerAbilityFx(chainHits >= 3 ? 'FIESTA!' : 'SPICY', 'taco');
            }
        }

        if (abilityId === 'portalShift') {
            state.portalLastEvent = 'No trigger';
            state.portalLastPower = 20;
            if (Math.random() < 0.22) {
                const echo = Math.max(1, Math.round(damage * 0.35));
                extraDamage += echo;
                notes.push(`Echo +${echo}`);
                state.portalLastEvent = 'Echo';
                state.portalLastPower = 68;
                triggerAbilityFx('ECHO', 'portal');
            }

            const hpGap = (target.hp / target.maxHp) - (attacker.hp / attacker.maxHp);
            if (hpGap > 0.2) {
                const riftBurst = Math.max(1, Math.round(target.maxHp * 0.06));
                extraDamage += riftBurst;
                notes.push(`Rift burst +${riftBurst}`);
                state.portalLastEvent = state.portalLastEvent === 'Echo' ? 'Echo + Rift' : 'Rift';
                state.portalLastPower = 88;
                triggerAbilityFx('RIFT', 'portal');
            }
        }

        if (abilityId === 'swift' && Math.random() < 0.2) {
            const followUp = Math.max(1, Math.round(damage * 0.4));
            extraDamage += followUp;
            state.swiftLastProc = true;
            notes.push(`Quick follow-up +${followUp}`);
            triggerAbilityFx('DOUBLE TAP', 'swift');
        }

        if (abilityId === 'breaker' && Math.random() < 0.35) {
            target.breakMark = 2;
            notes.push('Armor Break applied');
            triggerAbilityFx('ARMOR BREAK', 'breaker');
        } else if (target.breakMark && target.breakMark > 0) {
            target.breakMark -= 1;
        }

        const totalDamage = damage + extraDamage;

        let heal = 0;
        if (abilityId === 'bioTech') {
            heal += Math.max(1, Math.round(attacker.maxHp * (attacker.hp <= attacker.maxHp * 0.4 ? 0.12 : 0.09)));
            notes.push('Bio Tech heal');
            triggerAbilityFx('REPAIR', 'heal');
        }
        if (abilityId === 'vampire') {
            heal += Math.max(1, Math.round(totalDamage * 0.3));
            notes.push('Vampire drain');
            triggerAbilityFx('DRAIN', 'vampire');
        }
        if (abilityId === 'guardian') {
            heal += Math.max(1, Math.round(attacker.maxHp * (attacker.hp <= attacker.maxHp * 0.4 ? 0.12 : 0.06)));
            notes.push('Guardian heal');
            triggerAbilityFx('GUARD', 'guardian');
        }
        if (abilityId === 'angelicGrace') {
            heal += Math.max(1, Math.round(attacker.maxHp * 0.2));
            notes.push('Angelic Grace heal');
            triggerAbilityFx('GRACE', 'angel');
        }

        return {
            missed: false,
            damage: totalDamage,
            crit: isCrit,
            heal,
            selfDamage,
            supportActions,
            notes,
            abilityFx
        };
    }

    function renderBattleState() {
        if (!battleGameState) return;

        alliesEl.innerHTML = battleGameState.allies.map(renderFighterCard).join('');
        enemiesEl.innerHTML = battleGameState.enemies.map(renderFighterCard).join('');
        logEl.innerHTML = battleGameState.log.map(entry => {
            if (typeof entry === 'string') {
                return `<div class="battle-log-line battle-log-info">${entry}</div>`;
            }
            return `<div class="battle-log-line battle-log-${entry.type || 'info'}">${entry.message || ''}</div>`;
        }).join('');

        if (battleGameState.finished) {
            const aliveAllies = getAliveFighters(battleGameState.allies).length;
            const aliveEnemies = getAliveFighters(battleGameState.enemies).length;
            battleStatus.textContent = battleGameState.winner === 'ally'
                ? `Victory! All enemies defeated. Surviving allies: ${aliveAllies}`
                : `Defeat! Enemies survived: ${aliveEnemies}`;
            nextTurnBtn.disabled = true;
            return;
        }

        nextTurnBtn.disabled = true;
        nextTurnBtn.textContent = 'Auto battle in progress...';
        const aliveAllies = getAliveFighters(battleGameState.allies).length;
        battleStatus.textContent = battleGameState.turn === 'ally'
            ? `Stage ${battleGameState.stage}/${BATTLE_MAX_STAGE} | Turn ${battleGameState.round} | Your team attacks | Alive allies: ${aliveAllies}`
            : `Stage ${battleGameState.stage}/${BATTLE_MAX_STAGE} | Turn ${battleGameState.round} | Enemies attack | Alive allies: ${aliveAllies}`;
    }

    function finishBattle(winner) {
        if (!battleGameState) return;

        finalizeArenaUsage(false);

        battleGameState.finished = true;
        battleGameState.winner = winner;
        battleGameState.transitioning = false;
        stopAutoBattle();
        resetBattleBtn.disabled = false;

        setArenaBestStage(battleGameState.stage || 1);

        if (winner === 'ally') {
            incrementArenaStat('battlesWon', 1);
            const finalBonusXp = 50 * BATTLE_MAX_STAGE;
            const currentXp = loadPlayerXp();
            savePlayerXp(currentXp + finalBonusXp);
            updateLevelInfo();
            addBattleLog(`Final stage bonus: +${finalBonusXp} XP.`, 'reward');
            addBattleLog('Battle ended: all enemies were defeated.', 'info');
            showToast(`Arena complete! Final bonus +${finalBonusXp} XP`, 'success');
        } else {
            const survivedEnemies = getAliveFighters(battleGameState.enemies).length;
            addBattleLog(`Battle ended: ${survivedEnemies} enemies survived.`, 'info');
            showToast(`Arena ended at stage ${battleGameState.stage}.`, 'info');
        }
    }

    function startNextStage() {
        if (!battleGameState || battleGameState.finished) return;
        const aliveAllies = getAliveFighters(battleGameState.allies);

        if (aliveAllies.length === 0) {
            finishBattle('enemy');
            renderBattleState();
            return;
        }

        battleGameState.allies = aliveAllies;

        if (battleGameState.stage >= BATTLE_MAX_STAGE) {
            finishBattle('ally');
            renderBattleState();
            return;
        }

        battleGameState.stage += 1;
        battleGameState.round = 1;
        battleGameState.turn = 'ally';
        battleGameState.transitioning = false;
        battleGameState.allyCursor = 0;
        battleGameState.enemyCursor = 0;
        battleGameState.allies.forEach(ally => {
            ally.hp = ally.maxHp;
        });
        battleGameState.enemies = createEnemiesForStage(battleGameState.stage, aliveAllies.length);
        resetFighterVisualState();

        addBattleLog(`Stage ${battleGameState.stage} starts: ${battleGameState.enemies.length} enemies incoming. Allies restored to full HP.`, 'info');
        renderBattleState();
    }

    function performBattleTurn() {
        if (!battleGameState || battleGameState.finished) return;

        resetFighterVisualState();

        const attackerSide = battleGameState.turn;
        const attackers = attackerSide === 'ally' ? battleGameState.allies : battleGameState.enemies;
        const defenders = attackerSide === 'ally' ? battleGameState.enemies : battleGameState.allies;
        const cursorKey = attackerSide === 'ally' ? 'allyCursor' : 'enemyCursor';

        const attackerPick = pickNextAttacker(attackers, battleGameState[cursorKey]);
        if (!attackerPick) {
            finishBattle(attackerSide === 'ally' ? 'enemy' : 'ally');
            renderBattleState();
            return;
        }
        battleGameState[cursorKey] = attackerPick.nextCursor;

        const aliveDefenders = getAliveFighters(defenders);
        if (aliveDefenders.length === 0) {
            finishBattle(attackerSide);
            renderBattleState();
            return;
        }

        const target = aliveDefenders[Math.floor(Math.random() * aliveDefenders.length)];
        attackerPick.fighter.effect = 'attack';
        const attackResult = applyAbilityAttack(attackerPick.fighter, target);

        if (attackResult.missed) {
            target.lastDamage = 'MISS';
            target.lastDamageType = 'miss';
            target.effect = 'hit';
            addBattleLog(`${attackerPick.fighter.name} misses the attack on ${target.name}.`, 'miss');
        } else {
            attackerPick.fighter.abilityFx = attackResult.abilityFx || null;
            let effectiveDamage = attackResult.damage;
            if (target.guardShield && target.guardShield > 0 && effectiveDamage > 0) {
                const absorbed = Math.min(target.guardShield, effectiveDamage);
                target.guardShield -= absorbed;
                effectiveDamage -= absorbed;
                addBattleLog(`${target.name} blocks ${absorbed} damage with a shield.`, 'ability');
            }

            target.hp = Math.max(0, target.hp - effectiveDamage);
            target.lastDamage = effectiveDamage;
            target.lastDamageType = attackResult.crit ? 'crit' : 'damage';
            target.effect = target.hp <= 0 ? 'death' : 'hit';

            if (attackResult.selfDamage && attackResult.selfDamage > 0) {
                attackerPick.fighter.hp = Math.max(0, attackerPick.fighter.hp - attackResult.selfDamage);
                addBattleLog(`${attackerPick.fighter.name} loses ${attackResult.selfDamage} HP from ability recoil.`, 'ability');
                if (attackerPick.fighter.hp <= 0) {
                    attackerPick.fighter.effect = 'death';
                    addBattleLog(`${attackerPick.fighter.name} is defeated by their own ability chaos.`, 'kill');
                }
            }

            if (attackResult.heal && attackResult.heal > 0) {
                attackerPick.fighter.hp = Math.min(attackerPick.fighter.maxHp, attackerPick.fighter.hp + attackResult.heal);
                addBattleLog(`${attackerPick.fighter.name} heals for ${attackResult.heal} HP.`, 'heal');
            }

            if (attackResult.supportActions && attackResult.supportActions.length > 0) {
                applySupportActions(attackerPick.fighter, attackResult.supportActions);
            }

            if (attackResult.notes.length > 0) {
                addBattleLog(`${attackerPick.fighter.name} uses ability: ${attackResult.notes.join(', ')}.`, 'ability');
            }

            addBattleLog(`${attackerPick.fighter.name} ${attackResult.crit ? 'deals CRITICAL' : 'deals'} ${effectiveDamage} damage -> ${target.name}`, attackResult.crit ? 'crit' : 'hit');
            if (target.hp <= 0) {
                incrementArenaStat('enemiesDefeated', 1);
                addBattleLog(`${target.name} is defeated.`, 'kill');
            }
        }

        if (getAliveFighters(defenders).length === 0) {
            if (attackerSide === 'ally') {
                incrementArenaStat('stagesCleared', 1);
                const stageRewardXp = 12 * battleGameState.stage * battleGameState.enemies.length;
                const currentXp = loadPlayerXp();
                savePlayerXp(currentXp + stageRewardXp);
                updateLevelInfo();
                addBattleLog(`Stage ${battleGameState.stage} cleared! +${stageRewardXp} XP`, 'reward');
                addBattleLog(`All enemies in stage ${battleGameState.stage} were defeated.`, 'kill');
                showToast(`Stage ${battleGameState.stage} clear: +${stageRewardXp} XP`, 'success');
                battleGameState.transitioning = true;
                renderBattleState();
                window.setTimeout(() => {
                    if (!battleGameState || battleGameState.finished) return;
                    startNextStage();
                    startAutoBattle();
                }, BATTLE_STAGE_TRANSITION_DELAY);
            } else {
                finishBattle('enemy');
                renderBattleState();
            }
        } else {
            battleGameState.turn = attackerSide === 'ally' ? 'enemy' : 'ally';
            if (battleGameState.turn === 'ally') {
                battleGameState.round += 1;
            }
            renderBattleState();
        }
    }

    function startBattle() {
        const selected = battleCandidates
            .filter(candidate => battleSelection.includes(candidate.name) && candidate.selectable)
            .slice(0, 4);
        if (selected.length < 1) {
            showToast('Select at least 1 Banafix.', 'info');
            return;
        }

        incrementArenaStat('battlesStarted', 1);

        const allies = selected.map((candidate, index) => createBattleAlly(candidate, index + 1));
        const initialStage = 1;
        const enemies = createEnemiesForStage(initialStage, allies.length);

        battleGameState = {
            allies,
            enemies,
            selectedNames: selected.map(candidate => candidate.name),
            usageCommitted: false,
            stage: initialStage,
            turn: 'ally',
            allyCursor: 0,
            enemyCursor: 0,
            round: 1,
            transitioning: false,
            finished: false,
            winner: null,
            log: []
        };

        resetFighterVisualState();
        addBattleLog(`Stage 1 starts: ${allies.length} Banafix vs ${enemies.length} enemies.`, 'info');

        selectionStep.classList.add('hidden');
        fightStep.classList.remove('hidden');
        resetBattleBtn.disabled = true;
        nextTurnBtn.disabled = true;
        nextTurnBtn.textContent = 'Auto battle in progress...';
        renderBattleState();
        startAutoBattle();
    }

    battleBtn.addEventListener('click', openBattleModal);
    startBattleBtn.addEventListener('click', startBattle);
    resetBattleBtn.addEventListener('click', resetToSelection);

    if (closeBattleBtn) {
        closeBattleBtn.addEventListener('click', closeBattleModal);
    }

    battleModal.addEventListener('click', event => {
        if (event.target.classList.contains('battle-modal-backdrop')) {
            closeBattleModal();
        }
    });

    document.addEventListener('keydown', event => {
        if (event.key === 'Escape' && !battleModal.classList.contains('hidden')) {
            closeBattleModal();
        }
    });

    window.addEventListener('pagehide', () => {
        if (battleGameState && !battleGameState.finished) {
            finalizeArenaUsage(false);
        }
    });

    battleModal.classList.add('hidden');
}

function initApp() {
    updateLevelInfo();
    renderInitialCrate();

    const newsBtn = document.getElementById('newsBtn');
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

    if (achievementsBtn) {
        achievementsBtn.addEventListener('click', toggleAchievementsPanel);
    }

    if (closeAchievementsModalBtn) {
        closeAchievementsModalBtn.addEventListener('click', closeAchievementsModal);
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

    const drawBtn = document.getElementById('drawBtn');
    const freeCrateBtn = document.getElementById('freeCrateBtn');
    if (drawBtn) drawBtn.addEventListener('click', () => drawPlush());
    if (freeCrateBtn) freeCrateBtn.addEventListener('click', openFreeCrate);

    setupBattleGame();
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
    const taco = isTacoEventActive();
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
        const abilityId = plush.ability && BATTLE_ABILITIES[plush.ability]
            ? plush.ability
            : getDefaultBattleAbilityIdForBanafix(plush.name);
        const ability = BATTLE_ABILITIES[abilityId] || BATTLE_ABILITIES.tank;
        const safeName = plush.name.replace(/'/g, "\\'");
        const clickAttr = hidden ? '' : `onclick="showPlushFullscreen('${safeName}')"`;
        const variantClass = rainbowCount > 0 ? ' rainbow-card' : goldCount > 0 ? ' gold-card' : '';
        return `
            <div class="gallery-card${variantClass}${hidden ? ' hidden-card disabled-card' : ''}${extraClasses ? ' ' + extraClasses : ''}" ${clickAttr}>
                <img src="${plush.image}" alt="${plush.name}" onerror="this.onerror=null;this.src='images/Banafix.png'">
                <div class="gallery-name">${hidden ? '???' : plush.name}</div>
                <div class="rarity ${plush.rarity}">${hidden ? '' : plush.rarity}</div>
                <div class="gallery-meta gallery-ability">Ability: ${hidden ? '???' : ability.name}</div>
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
    const collectedItem = collection.find(item => item.name === plush.name);
    const collectedCount = collectedItem?.count || 0;
    const goldCount = collectedItem?.goldCount || 0;
    const rainbowCount = collectedItem?.rainbowCount || 0;
    const battleStats = getBattleStatsForPlush(plush, collectedItem);
    const abilityId = getBattleAbilityIdForBanafix(plush.name);
    const ability = BATTLE_ABILITIES[abilityId] || BATTLE_ABILITIES.tank;
    const uniqueAbilityLabel = isUniqueBattleAbility(abilityId) ? ' <span class="battle-ability-unique">(Signature Ability)</span>' : '';
    hideFullscreenPlush();

    const fullscreenVariantClass = rainbowCount > 0
        ? ' rainbow-border'
        : goldCount > 0
            ? ' gold-border'
            : '';
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
            <h2>${plush.name}</h2>
            <div class="fullscreen-rarity-row">
                <div class="rarity ${plush.rarity}">${plush.rarity}</div>
                <div class="fullscreen-owned-pill">Collected: ${collectedCount} pcs</div>
            </div>
            ${variantLines.length > 0 ? `<div class="fullscreen-variant-row">${variantLines.join('')}</div>` : ''}
            <div class="fullscreen-info-grid">
                <div class="fullscreen-info-card">
                    <div class="fullscreen-info-label">HP</div>
                    <div class="fullscreen-info-value">${battleStats.maxHp}</div>
                </div>
                <div class="fullscreen-info-card">
                    <div class="fullscreen-info-label">ATK</div>
                    <div class="fullscreen-info-value">${battleStats.atk}</div>
                </div>
            </div>
            <div class="fullscreen-ability-card">
                <div class="fullscreen-ability-title">Ability: ${ability.name}${uniqueAbilityLabel}</div>
                <div class="fullscreen-ability-desc">${ability.description}</div>
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