const MEW_CARD_DATA = [
  { num: 1, name: "Bulbasaur", rarity: "C", hasReverseHolo: true },
  { num: 2, name: "Ivysaur", rarity: "U", hasReverseHolo: true },
  { num: 3, name: "Venusaur ex", rarity: "RR", hasReverseHolo: false },
  { num: 4, name: "Charmander", rarity: "C", hasReverseHolo: true },
  { num: 5, name: "Charmeleon", rarity: "U", hasReverseHolo: true },
  { num: 6, name: "Charizard ex", rarity: "RR", hasReverseHolo: false },
  { num: 7, name: "Squirtle", rarity: "C", hasReverseHolo: true },
  { num: 8, name: "Wartortle", rarity: "U", hasReverseHolo: true },
  { num: 9, name: "Blastoise ex", rarity: "RR", hasReverseHolo: false },
  { num: 10, name: "Caterpie", rarity: "C", hasReverseHolo: true },
  { num: 11, name: "Metapod", rarity: "C", hasReverseHolo: true },
  { num: 12, name: "Butterfree", rarity: "R", hasReverseHolo: true },
  { num: 13, name: "Weedle", rarity: "C", hasReverseHolo: true },
  { num: 14, name: "Kakuna", rarity: "C", hasReverseHolo: true },
  { num: 15, name: "Beedrill", rarity: "R", hasReverseHolo: true },
  { num: 16, name: "Pidgey", rarity: "C", hasReverseHolo: true },
  { num: 17, name: "Pidgeotto", rarity: "U", hasReverseHolo: true },
  { num: 18, name: "Pidgeot", rarity: "R", hasReverseHolo: true },
  { num: 19, name: "Rattata", rarity: "C", hasReverseHolo: true },
  { num: 20, name: "Raticate", rarity: "C", hasReverseHolo: true },
  { num: 21, name: "Spearow", rarity: "C", hasReverseHolo: true },
  { num: 22, name: "Fearow", rarity: "U", hasReverseHolo: true },
  { num: 23, name: "Ekans", rarity: "C", hasReverseHolo: true },
  { num: 24, name: "Arbok ex", rarity: "RR", hasReverseHolo: false },
  { num: 25, name: "Pikachu", rarity: "C", hasReverseHolo: true },
  { num: 26, name: "Raichu", rarity: "R", hasReverseHolo: true },
  { num: 27, name: "Sandshrew", rarity: "C", hasReverseHolo: true },
  { num: 28, name: "Sandslash", rarity: "R", hasReverseHolo: true },
  { num: 29, name: "Nidoran♀", rarity: "C", hasReverseHolo: true },
  { num: 30, name: "Nidorina", rarity: "U", hasReverseHolo: true },
  { num: 31, name: "Nidoqueen", rarity: "R", hasReverseHolo: true },
  { num: 32, name: "Nidoran♂", rarity: "C", hasReverseHolo: true },
  { num: 33, name: "Nidorino", rarity: "U", hasReverseHolo: true },
  { num: 34, name: "Nidoking", rarity: "R", hasReverseHolo: true },
  { num: 35, name: "Clefairy", rarity: "C", hasReverseHolo: true },
  { num: 36, name: "Clefable", rarity: "R", hasReverseHolo: true },
  { num: 37, name: "Vulpix", rarity: "C", hasReverseHolo: true },
  { num: 38, name: "Ninetales ex", rarity: "RR", hasReverseHolo: false },
  { num: 39, name: "Jigglypuff", rarity: "C", hasReverseHolo: true },
  { num: 40, name: "Wigglytuff ex", rarity: "RR", hasReverseHolo: false },
  { num: 41, name: "Zubat", rarity: "C", hasReverseHolo: true },
  { num: 42, name: "Golbat", rarity: "U", hasReverseHolo: true },
  { num: 43, name: "Oddish", rarity: "C", hasReverseHolo: true },
  { num: 44, name: "Gloom", rarity: "U", hasReverseHolo: true },
  { num: 45, name: "Vileplume", rarity: "R", hasReverseHolo: true },
  { num: 46, name: "Paras", rarity: "C", hasReverseHolo: true },
  { num: 47, name: "Parasect", rarity: "U", hasReverseHolo: true },
  { num: 48, name: "Venonat", rarity: "C", hasReverseHolo: true },
  { num: 49, name: "Venomoth", rarity: "R", hasReverseHolo: true },
  { num: 50, name: "Diglett", rarity: "C", hasReverseHolo: true },
  { num: 51, name: "Dugtrio", rarity: "U", hasReverseHolo: true },
  { num: 52, name: "Meowth", rarity: "C", hasReverseHolo: true },
  { num: 53, name: "Persian", rarity: "R", hasReverseHolo: true },
  { num: 54, name: "Psyduck", rarity: "C", hasReverseHolo: true },
  { num: 55, name: "Golduck", rarity: "R", hasReverseHolo: true },
  { num: 56, name: "Mankey", rarity: "C", hasReverseHolo: true },
  { num: 57, name: "Primeape", rarity: "R", hasReverseHolo: true },
  { num: 58, name: "Growlithe", rarity: "C", hasReverseHolo: true },
  { num: 59, name: "Arcanine", rarity: "R", hasReverseHolo: true },
  { num: 60, name: "Poliwag", rarity: "C", hasReverseHolo: true },
  { num: 61, name: "Poliwhirl", rarity: "U", hasReverseHolo: true },
  { num: 62, name: "Poliwrath", rarity: "R", hasReverseHolo: true },
  { num: 63, name: "Abra", rarity: "C", hasReverseHolo: true },
  { num: 64, name: "Kadabra", rarity: "U", hasReverseHolo: true },
  { num: 65, name: "Alakazam ex", rarity: "RR", hasReverseHolo: false },
  { num: 66, name: "Machop", rarity: "C", hasReverseHolo: true },
  { num: 67, name: "Machoke", rarity: "U", hasReverseHolo: true },
  { num: 68, name: "Machamp", rarity: "R", hasReverseHolo: true },
  { num: 69, name: "Bellsprout", rarity: "C", hasReverseHolo: true },
  { num: 70, name: "Weepinbell", rarity: "U", hasReverseHolo: true },
  { num: 71, name: "Victreebel", rarity: "R", hasReverseHolo: true },
  { num: 72, name: "Tentacool", rarity: "C", hasReverseHolo: true },
  { num: 73, name: "Tentacruel", rarity: "R", hasReverseHolo: true },
  { num: 74, name: "Geodude", rarity: "C", hasReverseHolo: true },
  { num: 75, name: "Graveler", rarity: "U", hasReverseHolo: true },
  { num: 76, name: "Golem ex", rarity: "RR", hasReverseHolo: false },
  { num: 77, name: "Ponyta", rarity: "C", hasReverseHolo: true },
  { num: 78, name: "Rapidash", rarity: "U", hasReverseHolo: true },
  { num: 79, name: "Slowpoke", rarity: "C", hasReverseHolo: true },
  { num: 80, name: "Slowbro", rarity: "R", hasReverseHolo: true },
  { num: 81, name: "Magnemite", rarity: "C", hasReverseHolo: true },
  { num: 82, name: "Magneton", rarity: "U", hasReverseHolo: true },
  { num: 83, name: "Farfetch'd", rarity: "R", hasReverseHolo: true },
  { num: 84, name: "Doduo", rarity: "C", hasReverseHolo: true },
  { num: 85, name: "Dodrio", rarity: "U", hasReverseHolo: true },
  { num: 86, name: "Seel", rarity: "C", hasReverseHolo: true },
  { num: 87, name: "Dewgong", rarity: "R", hasReverseHolo: true },
  { num: 88, name: "Grimer", rarity: "C", hasReverseHolo: true },
  { num: 89, name: "Muk", rarity: "R", hasReverseHolo: true },
  { num: 90, name: "Shellder", rarity: "C", hasReverseHolo: true },
  { num: 91, name: "Cloyster", rarity: "R", hasReverseHolo: true },
  { num: 92, name: "Gastly", rarity: "C", hasReverseHolo: true },
  { num: 93, name: "Haunter", rarity: "U", hasReverseHolo: true },
  { num: 94, name: "Gengar", rarity: "R", hasReverseHolo: true },
  { num: 95, name: "Onix", rarity: "U", hasReverseHolo: true },
  { num: 96, name: "Drowzee", rarity: "C", hasReverseHolo: true },
  { num: 97, name: "Hypno", rarity: "R", hasReverseHolo: true },
  { num: 98, name: "Krabby", rarity: "C", hasReverseHolo: true },
  { num: 99, name: "Kingler", rarity: "R", hasReverseHolo: true },
  { num: 100, name: "Voltorb", rarity: "C", hasReverseHolo: true },
  { num: 101, name: "Electrode", rarity: "R", hasReverseHolo: true },
  { num: 102, name: "Exeggcute", rarity: "C", hasReverseHolo: true },
  { num: 103, name: "Exeggutor", rarity: "R", hasReverseHolo: true },
  { num: 104, name: "Cubone", rarity: "C", hasReverseHolo: true },
  { num: 105, name: "Marowak", rarity: "R", hasReverseHolo: true },
  { num: 106, name: "Hitmonlee", rarity: "R", hasReverseHolo: true },
  { num: 107, name: "Hitmonchan", rarity: "R", hasReverseHolo: true },
  { num: 108, name: "Lickitung", rarity: "U", hasReverseHolo: true },
  { num: 109, name: "Koffing", rarity: "C", hasReverseHolo: true },
  { num: 110, name: "Weezing", rarity: "R", hasReverseHolo: true },
  { num: 111, name: "Rhyhorn", rarity: "C", hasReverseHolo: true },
  { num: 112, name: "Rhydon", rarity: "R", hasReverseHolo: true },
  { num: 113, name: "Chansey", rarity: "R", hasReverseHolo: true },
  { num: 114, name: "Tangela", rarity: "C", hasReverseHolo: true },
  { num: 115, name: "Kangaskhan ex", rarity: "RR", hasReverseHolo: false },
  { num: 116, name: "Horsea", rarity: "C", hasReverseHolo: true },
  { num: 117, name: "Seadra", rarity: "U", hasReverseHolo: true },
  { num: 118, name: "Goldeen", rarity: "C", hasReverseHolo: true },
  { num: 119, name: "Seaking", rarity: "U", hasReverseHolo: true },
  { num: 120, name: "Staryu", rarity: "C", hasReverseHolo: true },
  { num: 121, name: "Starmie", rarity: "R", hasReverseHolo: true },
  { num: 122, name: "Mr. Mime", rarity: "R", hasReverseHolo: true },
  { num: 123, name: "Scyther", rarity: "U", hasReverseHolo: true },
  { num: 124, name: "Jynx ex", rarity: "RR", hasReverseHolo: false },
  { num: 125, name: "Electabuzz", rarity: "C", hasReverseHolo: true },
  { num: 126, name: "Magmar", rarity: "C", hasReverseHolo: true },
  { num: 127, name: "Pinsir", rarity: "U", hasReverseHolo: true },
  { num: 128, name: "Tauros", rarity: "R", hasReverseHolo: true },
  { num: 129, name: "Magikarp", rarity: "C", hasReverseHolo: true },
  { num: 130, name: "Gyarados", rarity: "R", hasReverseHolo: true },
  { num: 131, name: "Lapras", rarity: "U", hasReverseHolo: true },
  { num: 132, name: "Ditto", rarity: "R", hasReverseHolo: true },
  { num: 133, name: "Eevee", rarity: "C", hasReverseHolo: true },
  { num: 134, name: "Vaporeon", rarity: "R", hasReverseHolo: true },
  { num: 135, name: "Jolteon", rarity: "R", hasReverseHolo: true },
  { num: 136, name: "Flareon", rarity: "R", hasReverseHolo: true },
  { num: 137, name: "Porygon", rarity: "U", hasReverseHolo: true },
  { num: 138, name: "Omanyte", rarity: "C", hasReverseHolo: true },
  { num: 139, name: "Omastar", rarity: "R", hasReverseHolo: true },
  { num: 140, name: "Kabuto", rarity: "C", hasReverseHolo: true },
  { num: 141, name: "Kabutops", rarity: "R", hasReverseHolo: true },
  { num: 142, name: "Aerodactyl", rarity: "R", hasReverseHolo: true },
  { num: 143, name: "Snorlax", rarity: "R", hasReverseHolo: true },
  { num: 144, name: "Articuno", rarity: "R", hasReverseHolo: true },
  { num: 145, name: "Zapdos ex", rarity: "RR", hasReverseHolo: false },
  { num: 146, name: "Moltres", rarity: "R", hasReverseHolo: true },
  { num: 147, name: "Dratini", rarity: "C", hasReverseHolo: true },
  { num: 148, name: "Dragonair", rarity: "U", hasReverseHolo: true },
  { num: 149, name: "Dragonite", rarity: "R", hasReverseHolo: true },
  { num: 150, name: "Mewtwo", rarity: "R", hasReverseHolo: true },
  { num: 151, name: "Mew ex", rarity: "RR", hasReverseHolo: false },
  { num: 152, name: "Antique Dome Fossil", rarity: "C", hasReverseHolo: true },
  { num: 153, name: "Antique Helix Fossil", rarity: "C", hasReverseHolo: true },
  { num: 154, name: "Antique Old Amber", rarity: "C", hasReverseHolo: true },
  { num: 155, name: "Big Air Balloon", rarity: "U", hasReverseHolo: true },
  { num: 156, name: "Bill's Transfer", rarity: "U", hasReverseHolo: true },
  { num: 157, name: "Cycling Road", rarity: "U", hasReverseHolo: true },
  { num: 158, name: "Daisy's Help", rarity: "U", hasReverseHolo: true },
  { num: 159, name: "Energy Sticker", rarity: "U", hasReverseHolo: true },
  { num: 160, name: "Erika's Invitation", rarity: "U", hasReverseHolo: true },
  { num: 161, name: "Giovanni's Charisma", rarity: "U", hasReverseHolo: true },
  { num: 162, name: "Grabber", rarity: "U", hasReverseHolo: true },
  { num: 163, name: "Leftovers", rarity: "U", hasReverseHolo: true },
  { num: 164, name: "Protective Goggles", rarity: "U", hasReverseHolo: true },
  { num: 165, name: "Rigid Band", rarity: "U", hasReverseHolo: true },
  { num: 166, name: "Bulbasaur (IR)", rarity: "IR", hasReverseHolo: false },
  { num: 167, name: "Ivysaur (IR)", rarity: "IR", hasReverseHolo: false },
  { num: 168, name: "Charmander (IR)", rarity: "IR", hasReverseHolo: false },
  { num: 169, name: "Charmeleon (IR)", rarity: "IR", hasReverseHolo: false },
  { num: 170, name: "Squirtle (IR)", rarity: "IR", hasReverseHolo: false },
  { num: 171, name: "Wartortle (IR)", rarity: "IR", hasReverseHolo: false },
  { num: 172, name: "Caterpie (IR)", rarity: "IR", hasReverseHolo: false },
  { num: 173, name: "Pikachu (IR)", rarity: "IR", hasReverseHolo: false },
  { num: 174, name: "Nidoking (IR)", rarity: "IR", hasReverseHolo: false },
  { num: 175, name: "Psyduck (IR)", rarity: "IR", hasReverseHolo: false },
  { num: 176, name: "Poliwhirl (IR)", rarity: "IR", hasReverseHolo: false },
  { num: 177, name: "Machoke (IR)", rarity: "IR", hasReverseHolo: false },
  { num: 178, name: "Tangela (IR)", rarity: "IR", hasReverseHolo: false },
  { num: 179, name: "Mr. Mime (IR)", rarity: "IR", hasReverseHolo: false },
  { num: 180, name: "Omanyte (IR)", rarity: "IR", hasReverseHolo: false },
  { num: 181, name: "Dragonair (IR)", rarity: "IR", hasReverseHolo: false },
  { num: 182, name: "Venusaur ex (FA)", rarity: "UL", hasReverseHolo: false },
  { num: 183, name: "Charizard ex (FA)", rarity: "UL", hasReverseHolo: false },
  { num: 184, name: "Blastoise ex (FA)", rarity: "UL", hasReverseHolo: false },
  { num: 185, name: "Arbok ex (FA)", rarity: "UL", hasReverseHolo: false },
  { num: 186, name: "Ninetales ex (FA)", rarity: "UL", hasReverseHolo: false },
  { num: 187, name: "Wigglytuff ex (FA)", rarity: "UL", hasReverseHolo: false },
  { num: 188, name: "Alakazam ex (FA)", rarity: "UL", hasReverseHolo: false },
  { num: 189, name: "Golem ex (FA)", rarity: "UL", hasReverseHolo: false },
  { num: 190, name: "Kangaskhan ex (FA)", rarity: "UL", hasReverseHolo: false },
  { num: 191, name: "Jynx ex (FA)", rarity: "UL", hasReverseHolo: false },
  { num: 192, name: "Zapdos ex (FA)", rarity: "UL", hasReverseHolo: false },
  { num: 193, name: "Mew ex (FA)", rarity: "UL", hasReverseHolo: false },
  { num: 194, name: "Bill's Transfer (FA)", rarity: "UL", hasReverseHolo: false },
  { num: 195, name: "Daisy's Help (FA)", rarity: "UL", hasReverseHolo: false },
  { num: 196, name: "Erika's Invitation (FA)", rarity: "UL", hasReverseHolo: false },
  { num: 197, name: "Giovanni's Charisma (FA)", rarity: "UL", hasReverseHolo: false },
  { num: 198, name: "Venusaur ex (SIR)", rarity: "SIR", hasReverseHolo: false },
  { num: 199, name: "Charizard ex (SIR)", rarity: "SIR", hasReverseHolo: false },
  { num: 200, name: "Blastoise ex (SIR)", rarity: "SIR", hasReverseHolo: false },
  { num: 201, name: "Alakazam ex (SIR)", rarity: "SIR", hasReverseHolo: false },
  { num: 202, name: "Zapdos ex (SIR)", rarity: "SIR", hasReverseHolo: false },
  { num: 203, name: "Erika's Invitation (SIR)", rarity: "SIR", hasReverseHolo: false },
  { num: 204, name: "Giovanni's Charisma (SIR)", rarity: "SIR", hasReverseHolo: false },
  { num: 205, name: "Mew ex (Gold)", rarity: "Gold", hasReverseHolo: false },
  { num: 206, name: "Switch (Gold)", rarity: "Gold", hasReverseHolo: false },
  { num: 207, name: "Basic Psychic Energy (Gold)", rarity: "Gold", hasReverseHolo: false },
];

const MEW_RARITY_CONFIG = {
  C:    { label: "Common",                   color: "#888",    bg: "#88888818" },
  U:    { label: "Uncommon",                 color: "#4488cc", bg: "#4488cc18" },
  R:    { label: "Rare",                     color: "#cc8800", bg: "#cc880018" },
  RR:   { label: "Double Rare",              color: "#cc0000", bg: "#cc000018" },
  UL:   { label: "Ultra Rare (FA)",          color: "#9944cc", bg: "#9944cc18" },
  IR:   { label: "Illustration Rare",        color: "#ee6600", bg: "#ee660018" },
  SIR:  { label: "Special Illustration Rare",color: "#cc0066", bg: "#cc006618" },
  Gold: { label: "Hyper Rare (Gold)",        color: "#bbaa00", bg: "#bbaa0018" },
};

const MEW_INITIAL_COLLECTION = {};

const MEW_STORAGE_KEY = 'mew151-collection';
const MEW_RECENT_KEY = 'mew151-recent';
const MEW_RARITY_KEYS = Object.keys(MEW_RARITY_CONFIG);

let MEW_collected = {};
let MEW_recentLog = [];
let MEW_showFilter = 'all';
let MEW_rarityFilter = 'all';

function MEW_loadCollection() {
  try {
    const saved = localStorage.getItem(MEW_STORAGE_KEY);
    MEW_collected = saved ? JSON.parse(saved) : Object.assign({}, MEW_INITIAL_COLLECTION);
    if (!saved) localStorage.setItem(MEW_STORAGE_KEY, JSON.stringify(MEW_collected));
  } catch(e) { MEW_collected = {}; }
  try {
    const savedRecent = localStorage.getItem(MEW_RECENT_KEY);
    MEW_recentLog = savedRecent ? JSON.parse(savedRecent) : [];
  } catch(e) { MEW_recentLog = []; }
}

function MEW_saveCollection() {
  try { localStorage.setItem(MEW_STORAGE_KEY, JSON.stringify(MEW_collected)); } catch(e) {}
}

function MEW_saveRecent() {
  try { localStorage.setItem(MEW_RECENT_KEY, JSON.stringify(MEW_recentLog)); } catch(e) {}
}

function MEW_toggle(key) {
  const adding = !MEW_collected[key];
  if (MEW_collected[key]) { delete MEW_collected[key]; } else { MEW_collected[key] = true; }
  MEW_saveCollection();
  if (adding) {
    MEW_recentLog = [{ key, ts: Date.now() }, ...MEW_recentLog.filter(e => e.key !== key)];
  } else {
    MEW_recentLog = MEW_recentLog.filter(e => e.key !== key);
  }
  MEW_saveRecent();
  MEW_updateStats();
  if (MEW_showFilter === 'recent') {
    MEW_render();
  } else {
    const numStr = key.split('-')[0];
    const card = MEW_CARD_DATA.find(c => c.num === parseInt(numStr));
    if (card) MEW_updateRow(card);
  }
}

function MEW_isCollected(card, type) { return !!MEW_collected[card.num + '-' + type]; }
function MEW_isComplete(card) { return MEW_isCollected(card,'normal') && (card.hasReverseHolo ? MEW_isCollected(card,'rh') : true); }

function MEW_timeAgo(ts) {
  const diff = Date.now() - ts;
  const mins = Math.floor(diff/60000);
  const hrs = Math.floor(diff/3600000);
  const days = Math.floor(diff/86400000);
  if (mins < 1) return 'just now';
  if (mins < 60) return mins + 'm ago';
  if (hrs < 24) return hrs + 'h ago';
  return days + 'd ago';
}

function MEW_updateStats() {
  let total = 0, have = 0;
  MEW_CARD_DATA.forEach(c => {
    total++; if (MEW_isCollected(c,'normal')) have++;
    if (c.hasReverseHolo) { total++; if (MEW_isCollected(c,'rh')) have++; }
  });
  const pct = total ? Math.round(have/total*100) : 0;
  document.getElementById('mew-pct-display').textContent = pct + '%';
  document.getElementById('mew-count-display').textContent = have + ' / ' + total;
  document.getElementById('mew-progress-fill').style.width = pct + '%';
}

function MEW_updateRow(card) {
  const row = document.getElementById('mew-row-' + card.num);
  if (!row) return;
  const cfg = MEW_RARITY_CONFIG[card.rarity];
  const complete = MEW_isComplete(card);
  row.className = 'card-row' + (complete ? ' complete' : '');
  row.style.borderLeftColor = complete ? cfg.color : '#ddd';
  const normBtn = row.querySelector('.chk-btn');
  if (normBtn) {
    const nc = MEW_isCollected(card,'normal');
    normBtn.className = 'chk-btn' + (nc ? ' checked' : '');
    normBtn.style.background = nc ? cfg.color : 'transparent';
    normBtn.style.borderColor = nc ? cfg.color : '#ddd';
    normBtn.style.color = nc ? '#fff' : '#ddd';
    normBtn.textContent = nc ? '✓' : '';
  }
  const rhBtn = row.querySelector('.rh-btn');
  if (rhBtn) {
    const rc = MEW_isCollected(card,'rh');
    rhBtn.className = 'rh-btn' + (rc ? ' checked' : '');
    rhBtn.textContent = rc ? '✓' : 'RH';
  }
}

function MEW_setShow(f) {
  MEW_showFilter = f;
  document.querySelectorAll('#mew-screen .filter-btn').forEach(b => b.classList.remove('active'));
  document.getElementById('mew-btn-' + f).classList.add('active');
  MEW_render();
}

function MEW_setRarity(r) {
  MEW_rarityFilter = r;
  document.querySelectorAll('#mew-screen .rarity-btn').forEach(b => b.classList.remove('active'));
  document.getElementById('mew-rbtn-' + r).classList.add('active');
  MEW_render();
}

function MEW_getFilteredCards() {
  if (MEW_showFilter === 'recent') {
    const seen = new Set();
    return MEW_recentLog
      .map(entry => ({ card: MEW_CARD_DATA.find(c => c.num === parseInt(entry.key.split('-')[0])), ts: entry.ts }))
      .filter(item => item.card && !seen.has(item.card.num) && seen.add(item.card.num))
      .map(item => item.card);
  }
  const search = document.getElementById('mew-search').value.toLowerCase();
  return MEW_CARD_DATA.filter(c => {
    if (MEW_rarityFilter !== 'all' && c.rarity !== MEW_rarityFilter) return false;
    if (search && !c.name.toLowerCase().includes(search)) return false;
    if (MEW_showFilter === 'collected') return MEW_isComplete(c);
    if (MEW_showFilter === 'missing') return !MEW_isCollected(c,'normal') || (c.hasReverseHolo && !MEW_isCollected(c,'rh'));
    return true;
  });
}

function MEW_render() {
  const cards = MEW_getFilteredCards();
  document.getElementById('mew-card-count').textContent = cards.length + ' card' + (cards.length !== 1 ? 's' : '') + ' shown';
  const list = document.getElementById('mew-card-list');
  list.innerHTML = '';
  cards.forEach(card => {
    const cfg = MEW_RARITY_CONFIG[card.rarity];
    const complete = MEW_isComplete(card);
    const nc = MEW_isCollected(card,'normal');
    const rc = MEW_isCollected(card,'rh');
    const recentEntry = MEW_recentLog.find(e => parseInt(e.key.split('-')[0]) === card.num);
    const row = document.createElement('div');
    row.className = 'card-row' + (complete ? ' complete' : '');
    row.id = 'mew-row-' + card.num;
    row.style.borderLeftColor = complete ? cfg.color : '#ddd';
    row.innerHTML = `
      <div class="card-num">#${card.num}</div>
      <div class="card-name" onclick="MEW_openModal(${card.num})" style="color:#000">${card.name}</div>
      ${MEW_showFilter === 'recent' && recentEntry ? `<div class="recent-time">${MEW_timeAgo(recentEntry.ts)}</div>` : ''}
      <div class="rarity-badge" style="background:${cfg.bg};color:${cfg.color};border:1px solid ${cfg.color}44">${card.rarity}</div>
      <div class="card-btns">
        <button class="chk-btn ${nc?'checked':''}"
          style="background:${nc?cfg.color:'transparent'};border-color:${nc?cfg.color:'#ddd'};color:${nc?'#fff':'#ddd'}"
          onclick="MEW_toggle('${card.num}-normal')">${nc?'✓':''}</button>
        ${card.hasReverseHolo ? `<button class="rh-btn ${rc?'checked':''}" onclick="MEW_toggle('${card.num}-rh')">${rc?'✓':'RH'}</button>` : ''}
      </div>
    `;
    list.appendChild(row);
  });
  MEW_updateStats();
}

let MEW_currentModalNum = null;
let touchStartX = 0;

function MEW_renderModalChecks(card, cfg) {
  const el = document.getElementById('mew-modal-checks');
  const nc = MEW_isCollected(card, 'normal');
  let html = `<div class="modal-chk-wrap">
    <button class="modal-chk ${nc?'checked':''}"
      style="background:${nc?cfg.color:'transparent'};border-color:${nc?cfg.color:'#ddd'};color:${nc?'#fff':'#ddd'}"
      onclick="MEW_toggleFromModal('${card.num}-normal')">${nc?'✓':''}</button>
    <div class="modal-chk-label">NORM</div>
  </div>`;
  if (card.hasReverseHolo) {
    const rc = MEW_isCollected(card, 'rh');
    html += `<div class="modal-chk-wrap">
      <button class="modal-chk ${rc?'checked':''}"
        style="background:${rc?'#cc0000':'transparent'};border-color:${rc?'#cc0000':'#ddd'};color:${rc?'#fff':'#ddd'}"
        onclick="MEW_toggleFromModal('${card.num}-rh')">${rc?'✓':'RH'}</button>
      <div class="modal-chk-label">RH</div>
    </div>`;
  }
  el.innerHTML = html;
}

function MEW_toggleFromModal(key) {
  MEW_toggle(key);
  // Re-MEW_render checks in modal
  const num = parseInt(key.split('-')[0]);
  const card = MEW_CARD_DATA.find(c => c.num === num);
  if (card) {
    const cfg = MEW_RARITY_CONFIG[card.rarity];
    MEW_renderModalChecks(card, cfg);
  }
}

function MEW_openModal(num) {
  const card = MEW_CARD_DATA.find(c => c.num === num);
  if (!card) return;
  MEW_currentModalNum = num;
  const cfg = MEW_RARITY_CONFIG[card.rarity];
  document.getElementById('mew-modal-num').textContent = '#' + String(num).padStart(3,'0') + ' · ' + cfg.label;
  document.getElementById('mew-modal-name').textContent = card.name;
  MEW_renderModalChecks(card, cfg);
  document.getElementById('mew-modal-loading').style.display = 'block';
  document.getElementById('mew-modal-error').style.display = 'none';
  document.getElementById('mew-modal-img').style.display = 'none';
  document.getElementById('mew-modal-overlay').classList.add('open');
  document.getElementById('mew-modal-prev').style.display = 'flex';
  document.getElementById('mew-modal-next').style.display = 'flex';
  const img = document.getElementById('mew-modal-img');
  const embedded = MEW_CARD_IMAGES[num];
  if (embedded) {
    img.src = embedded;
    img.onload = () => { document.getElementById('mew-modal-loading').style.display = 'none'; img.style.display = 'block'; };
  } else {
    document.getElementById('mew-modal-loading').style.display = 'none';
    document.getElementById('mew-modal-error').style.display = 'block';
  }
}

function MEW_navigateModal(dir) {
  const cards = MEW_getFilteredCards();
  const idx = cards.findIndex(c => c.num === MEW_currentModalNum);
  if (idx === -1) return;
  const next = cards[idx + dir];
  if (next) MEW_openModal(next.num);
}

function MEW_closeModal() {
  document.getElementById('mew-modal-overlay').classList.remove('open');
  document.getElementById('mew-modal-prev').style.display = 'none';
  document.getElementById('mew-modal-next').style.display = 'none';
  MEW_currentModalNum = null;
}

// Swipe support
document.addEventListener('touchstart', e => {
  if (document.getElementById('mew-modal-overlay').classList.contains('open')) {
    touchStartX = e.touches[0].clientX;
  }
});
document.addEventListener('touchend', e => {
  if (!document.getElementById('mew-modal-overlay').classList.contains('open')) return;
  const diff = touchStartX - e.changedTouches[0].clientX;
  if (Math.abs(diff) > 50) MEW_navigateModal(diff > 0 ? 1 : -1);
});

// Keyboard support
document.addEventListener('keydown', e => {
  if (!document.getElementById('mew-modal-overlay').classList.contains('open')) return;
  if (e.key === 'ArrowRight') MEW_navigateModal(1);
  if (e.key === 'ArrowLeft') MEW_navigateModal(-1);
  if (e.key === 'Escape') MEW_closeModal();
});

function MEW_buildRarityButtons() {
  const row = document.getElementById('mew-rarity-row');
  const allBtn = document.createElement('button');
  allBtn.className = 'rarity-btn active'; allBtn.id = 'mew-rbtn-all';
  allBtn.textContent = 'ALL'; allBtn.onclick = () => MEW_setRarity('all');
  row.appendChild(allBtn);
  MEW_RARITY_KEYS.forEach(r => {
    const cfg = MEW_RARITY_CONFIG[r];
    const btn = document.createElement('button');
    btn.className = 'rarity-btn'; btn.id = 'mew-rbtn-' + r;
    btn.textContent = r;
    btn.style.setProperty('--rc', cfg.color);
    btn.style.setProperty('--rb', cfg.bg);
    btn.onclick = () => MEW_setRarity(r);
    row.appendChild(btn);
  });
}

function MEW_buildLegend() {
  const items = document.getElementById('mew-legend-items');
  MEW_RARITY_KEYS.forEach(r => {
    const cfg = MEW_RARITY_CONFIG[r];
    const div = document.createElement('div');
    div.className = 'legend-item';
    div.innerHTML = `<div class="legend-dot" style="background:${cfg.color}"></div> ${r} = ${cfg.label}`;
    items.appendChild(div);
  });
  const rhDiv = document.createElement('div');
  rhDiv.className = 'legend-item';
  rhDiv.innerHTML = `<span style="font-size:10px;color:#249EA9">RH</span> = Reverse Holo`;
  items.appendChild(rhDiv);
}


function MEW_exportCollection() {
  const data = JSON.stringify(MEW_collected, null, 2);
  const blob = new Blob([data], {type: 'application/json'});
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = '151-collection.json';
  a.click();
  URL.revokeObjectURL(url);
}

function MEW_importCollection() {
  const input = document.createElement('input');
  input.type = 'file';
  input.accept = '.json,.txt';
  input.onchange = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (ev) => {
      try {
        const data = JSON.parse(ev.target.result);
        MEW_collected = data;
        localStorage.setItem(MEW_STORAGE_KEY, JSON.stringify(MEW_collected));
        MEW_render();
        alert('Collection imported successfully!');
      } catch { alert('Invalid file — please use an exported collection file.'); }
    };
    reader.readAsText(file);
  };
  input.click();
}

window.MEW_init = function() { MEW_loadCollection(); MEW_buildRarityButtons(); MEW_buildLegend(); MEW_render(); };
