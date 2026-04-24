const DR_CARD_DATA = [
  { num: 1, name: "Ethan's Pinsir", rarity: "C", hasReverseHolo: true },
  { num: 2, name: "Yanma", rarity: "C", hasReverseHolo: true },
  { num: 3, name: "Yanmega ex", rarity: "R", hasReverseHolo: false },
  { num: 4, name: "Pineco", rarity: "C", hasReverseHolo: true },
  { num: 5, name: "Shroomish", rarity: "C", hasReverseHolo: true },
  { num: 6, name: "Breloom", rarity: "U", hasReverseHolo: true },
  { num: 7, name: "Cynthia's Roselia", rarity: "C", hasReverseHolo: true },
  { num: 8, name: "Cynthia's Roserade", rarity: "U", hasReverseHolo: true },
  { num: 9, name: "Mow Rotom", rarity: "U", hasReverseHolo: true },
  { num: 10, name: "Shaymin", rarity: "R", hasReverseHolo: true },
  { num: 11, name: "Dwebble", rarity: "C", hasReverseHolo: true },
  { num: 12, name: "Crustle", rarity: "U", hasReverseHolo: true },
  { num: 13, name: "Fomantis", rarity: "C", hasReverseHolo: true },
  { num: 14, name: "Lurantis", rarity: "U", hasReverseHolo: true },
  { num: 15, name: "Team Rocket's Blipbug", rarity: "C", hasReverseHolo: true },
  { num: 16, name: "Applin", rarity: "C", hasReverseHolo: true },
  { num: 17, name: "Dipplin", rarity: "U", hasReverseHolo: true },
  { num: 18, name: "Hydrapple", rarity: "R", hasReverseHolo: true },
  { num: 19, name: "Team Rocket's Tarountula", rarity: "C", hasReverseHolo: true },
  { num: 20, name: "Team Rocket's Spidops", rarity: "U", hasReverseHolo: true },
  { num: 21, name: "Smoliv", rarity: "C", hasReverseHolo: true },
  { num: 22, name: "Dolliv", rarity: "C", hasReverseHolo: true },
  { num: 23, name: "Arboliva ex", rarity: "R", hasReverseHolo: false },
  { num: 24, name: "Rellor", rarity: "C", hasReverseHolo: true },
  { num: 25, name: "Rabsca ex", rarity: "R", hasReverseHolo: false },
  { num: 26, name: "Teal Mask Ogerpon", rarity: "R", hasReverseHolo: true },
  { num: 27, name: "Growlithe", rarity: "C", hasReverseHolo: true },
  { num: 28, name: "Arcanine", rarity: "U", hasReverseHolo: true },
  { num: 29, name: "Ponyta", rarity: "C", hasReverseHolo: true },
  { num: 30, name: "Rapidash", rarity: "U", hasReverseHolo: true },
  { num: 31, name: "Team Rocket's Moltres ex", rarity: "R", hasReverseHolo: false },
  { num: 32, name: "Ethan's Cyndaquil", rarity: "C", hasReverseHolo: true },
  { num: 33, name: "Ethan's Quilava", rarity: "C", hasReverseHolo: true },
  { num: 34, name: "Ethan's Typhlosion", rarity: "U", hasReverseHolo: true },
  { num: 35, name: "Ethan's Slugma", rarity: "C", hasReverseHolo: true },
  { num: 36, name: "Ethan's Magcargo", rarity: "U", hasReverseHolo: true },
  { num: 37, name: "Team Rocket's Houndour", rarity: "C", hasReverseHolo: true },
  { num: 38, name: "Team Rocket's Houndoom", rarity: "U", hasReverseHolo: true },
  { num: 39, name: "Ethan's Ho-Oh ex", rarity: "R", hasReverseHolo: false },
  { num: 40, name: "Torchic", rarity: "C", hasReverseHolo: true },
  { num: 41, name: "Combusken", rarity: "C", hasReverseHolo: true },
  { num: 42, name: "Blaziken", rarity: "U", hasReverseHolo: true },
  { num: 43, name: "Heat Rotom", rarity: "U", hasReverseHolo: true },
  { num: 44, name: "Hearthflame Mask Ogerpon", rarity: "R", hasReverseHolo: true },
  { num: 45, name: "Misty's Psyduck", rarity: "C", hasReverseHolo: true },
  { num: 46, name: "Misty's Staryu", rarity: "C", hasReverseHolo: true },
  { num: 47, name: "Misty's Starmie", rarity: "U", hasReverseHolo: true },
  { num: 48, name: "Misty's Magikarp", rarity: "C", hasReverseHolo: true },
  { num: 49, name: "Misty's Gyarados", rarity: "U", hasReverseHolo: true },
  { num: 50, name: "Misty's Lapras", rarity: "U", hasReverseHolo: true },
  { num: 51, name: "Team Rocket's Articuno", rarity: "R", hasReverseHolo: true },
  { num: 52, name: "Cynthia's Feebas", rarity: "C", hasReverseHolo: true },
  { num: 53, name: "Cynthia's Milotic", rarity: "U", hasReverseHolo: true },
  { num: 54, name: "Clamperl", rarity: "C", hasReverseHolo: true },
  { num: 55, name: "Huntail", rarity: "U", hasReverseHolo: true },
  { num: 56, name: "Gorebyss", rarity: "U", hasReverseHolo: true },
  { num: 57, name: "Buizel", rarity: "C", hasReverseHolo: true },
  { num: 58, name: "Floatzel", rarity: "U", hasReverseHolo: true },
  { num: 59, name: "Snover", rarity: "C", hasReverseHolo: true },
  { num: 60, name: "Abomasnow", rarity: "U", hasReverseHolo: true },
  { num: 61, name: "Wash Rotom", rarity: "U", hasReverseHolo: true },
  { num: 62, name: "Arrokuda", rarity: "C", hasReverseHolo: true },
  { num: 63, name: "Barraskewda", rarity: "U", hasReverseHolo: true },
  { num: 64, name: "Cetoddle", rarity: "C", hasReverseHolo: true },
  { num: 65, name: "Cetitan ex", rarity: "R", hasReverseHolo: false },
  { num: 66, name: "Dondozo ex", rarity: "R", hasReverseHolo: false },
  { num: 67, name: "Wellspring Mask Ogerpon", rarity: "R", hasReverseHolo: true },
  { num: 68, name: "Electabuzz", rarity: "C", hasReverseHolo: true },
  { num: 69, name: "Electivire ex", rarity: "R", hasReverseHolo: false },
  { num: 70, name: "Team Rocket's Zapdos", rarity: "R", hasReverseHolo: true },
  { num: 71, name: "Ethan's Pichu", rarity: "C", hasReverseHolo: true },
  { num: 72, name: "Team Rocket's Mareep", rarity: "C", hasReverseHolo: true },
  { num: 73, name: "Team Rocket's Flaaffy", rarity: "C", hasReverseHolo: true },
  { num: 74, name: "Team Rocket's Ampharos", rarity: "U", hasReverseHolo: true },
  { num: 75, name: "Electrike", rarity: "C", hasReverseHolo: true },
  { num: 76, name: "Manectric", rarity: "U", hasReverseHolo: true },
  { num: 77, name: "Rotom", rarity: "U", hasReverseHolo: true },
  { num: 78, name: "Zeraora", rarity: "U", hasReverseHolo: true },
  { num: 79, name: "Team Rocket's Drowzee", rarity: "C", hasReverseHolo: true },
  { num: 80, name: "Team Rocket's Hypno", rarity: "U", hasReverseHolo: true },
  { num: 81, name: "Team Rocket's Mewtwo ex", rarity: "R", hasReverseHolo: false },
  { num: 82, name: "Team Rocket's Wobbuffet", rarity: "U", hasReverseHolo: true },
  { num: 83, name: "Steven's Baltoy", rarity: "C", hasReverseHolo: true },
  { num: 84, name: "Steven's Claydol", rarity: "U", hasReverseHolo: true },
  { num: 85, name: "Team Rocket's Chingling", rarity: "C", hasReverseHolo: true },
  { num: 86, name: "Steven's Carbink", rarity: "C", hasReverseHolo: true },
  { num: 87, name: "Team Rocket's Mimikyu", rarity: "U", hasReverseHolo: true },
  { num: 88, name: "Team Rocket's Dottler", rarity: "C", hasReverseHolo: true },
  { num: 89, name: "Team Rocket's Orbeetle", rarity: "U", hasReverseHolo: true },
  { num: 90, name: "Mankey", rarity: "C", hasReverseHolo: true },
  { num: 91, name: "Primeape", rarity: "C", hasReverseHolo: true },
  { num: 92, name: "Annihilape", rarity: "U", hasReverseHolo: true },
  { num: 93, name: "Ethan's Sudowoodo", rarity: "C", hasReverseHolo: true },
  { num: 94, name: "Team Rocket's Larvitar", rarity: "C", hasReverseHolo: true },
  { num: 95, name: "Team Rocket's Pupitar", rarity: "C", hasReverseHolo: true },
  { num: 96, name: "Team Rocket's Tyranitar", rarity: "U", hasReverseHolo: true },
  { num: 97, name: "Nosepass", rarity: "C", hasReverseHolo: true },
  { num: 98, name: "Probopass", rarity: "U", hasReverseHolo: true },
  { num: 99, name: "Meditite", rarity: "C", hasReverseHolo: true },
  { num: 100, name: "Medicham", rarity: "U", hasReverseHolo: true },
  { num: 101, name: "Regirock ex", rarity: "R", hasReverseHolo: false },
  { num: 102, name: "Cynthia's Gible", rarity: "C", hasReverseHolo: true },
  { num: 103, name: "Cynthia's Gabite", rarity: "C", hasReverseHolo: true },
  { num: 104, name: "Cynthia's Garchomp ex", rarity: "R", hasReverseHolo: false },
  { num: 105, name: "Hippopotas", rarity: "C", hasReverseHolo: true },
  { num: 106, name: "Hippowdon", rarity: "U", hasReverseHolo: true },
  { num: 107, name: "Mudbray", rarity: "C", hasReverseHolo: true },
  { num: 108, name: "Mudsdale", rarity: "U", hasReverseHolo: true },
  { num: 109, name: "Arven's Toedscool", rarity: "C", hasReverseHolo: true },
  { num: 110, name: "Arven's Toedscruel", rarity: "U", hasReverseHolo: true },
  { num: 111, name: "Cornerstone Mask Ogerpon", rarity: "R", hasReverseHolo: true },
  { num: 112, name: "Team Rocket's Ekans", rarity: "C", hasReverseHolo: true },
  { num: 113, name: "Team Rocket's Arbok", rarity: "U", hasReverseHolo: true },
  { num: 114, name: "Team Rocket's Nidoran♀", rarity: "C", hasReverseHolo: true },
  { num: 115, name: "Team Rocket's Nidorina", rarity: "C", hasReverseHolo: true },
  { num: 116, name: "Team Rocket's Nidoqueen", rarity: "U", hasReverseHolo: true },
  { num: 117, name: "Team Rocket's Nidoran♂", rarity: "C", hasReverseHolo: true },
  { num: 118, name: "Team Rocket's Nidorino", rarity: "C", hasReverseHolo: true },
  { num: 119, name: "Team Rocket's Nidoking ex", rarity: "R", hasReverseHolo: false },
  { num: 120, name: "Team Rocket's Zubat", rarity: "C", hasReverseHolo: true },
  { num: 121, name: "Team Rocket's Golbat", rarity: "C", hasReverseHolo: true },
  { num: 122, name: "Team Rocket's Crobat ex", rarity: "R", hasReverseHolo: false },
  { num: 123, name: "Team Rocket's Grimer", rarity: "C", hasReverseHolo: true },
  { num: 124, name: "Team Rocket's Muk", rarity: "U", hasReverseHolo: true },
  { num: 125, name: "Team Rocket's Koffing", rarity: "C", hasReverseHolo: true },
  { num: 126, name: "Team Rocket's Weezing", rarity: "U", hasReverseHolo: true },
  { num: 127, name: "Team Rocket's Murkrow", rarity: "U", hasReverseHolo: true },
  { num: 128, name: "Team Rocket's Sneasel", rarity: "R", hasReverseHolo: true },
  { num: 129, name: "Cynthia's Spiritomb", rarity: "U", hasReverseHolo: true },
  { num: 130, name: "Marnie's Purrloin", rarity: "C", hasReverseHolo: true },
  { num: 131, name: "Marnie's Liepard", rarity: "U", hasReverseHolo: true },
  { num: 132, name: "Marnie's Scraggy", rarity: "C", hasReverseHolo: true },
  { num: 133, name: "Marnie's Scrafty", rarity: "U", hasReverseHolo: true },
  { num: 134, name: "Marnie's Impidimp", rarity: "C", hasReverseHolo: true },
  { num: 135, name: "Marnie's Morgrem", rarity: "U", hasReverseHolo: true },
  { num: 136, name: "Marnie's Grimmsnarl ex", rarity: "R", hasReverseHolo: false },
  { num: 137, name: "Marnie's Morpeko", rarity: "C", hasReverseHolo: true },
  { num: 138, name: "Arven's Maschiff", rarity: "C", hasReverseHolo: true },
  { num: 139, name: "Arven's Mabosstiff ex", rarity: "R", hasReverseHolo: false },
  { num: 140, name: "Forretress", rarity: "U", hasReverseHolo: true },
  { num: 141, name: "Skarmory", rarity: "C", hasReverseHolo: true },
  { num: 142, name: "Steven's Skarmory", rarity: "U", hasReverseHolo: true },
  { num: 143, name: "Steven's Beldum", rarity: "C", hasReverseHolo: true },
  { num: 144, name: "Steven's Metang", rarity: "U", hasReverseHolo: true },
  { num: 145, name: "Steven's Metagross ex", rarity: "R", hasReverseHolo: false },
  { num: 146, name: "Zamazenta", rarity: "U", hasReverseHolo: true },
  { num: 147, name: "Team Rocket's Rattata", rarity: "C", hasReverseHolo: true },
  { num: 148, name: "Team Rocket's Raticate", rarity: "U", hasReverseHolo: true },
  { num: 149, name: "Team Rocket's Meowth", rarity: "C", hasReverseHolo: true },
  { num: 150, name: "Team Rocket's Persian ex", rarity: "R", hasReverseHolo: false },
  { num: 151, name: "Kangaskhan", rarity: "C", hasReverseHolo: true },
  { num: 152, name: "Tauros", rarity: "U", hasReverseHolo: true },
  { num: 153, name: "Team Rocket's Porygon", rarity: "C", hasReverseHolo: true },
  { num: 154, name: "Team Rocket's Porygon2", rarity: "C", hasReverseHolo: true },
  { num: 155, name: "Team Rocket's Porygon-Z", rarity: "U", hasReverseHolo: true },
  { num: 156, name: "Taillow", rarity: "C", hasReverseHolo: true },
  { num: 157, name: "Swellow", rarity: "U", hasReverseHolo: true },
  { num: 158, name: "Arven's Skwovet", rarity: "C", hasReverseHolo: true },
  { num: 159, name: "Arven's Greedent", rarity: "U", hasReverseHolo: true },
  { num: 160, name: "Squawkabilly", rarity: "C", hasReverseHolo: true },
  { num: 161, name: "Arven's Sandwich", rarity: "U", hasReverseHolo: true },
  { num: 162, name: "Cynthia's Power Weight", rarity: "U", hasReverseHolo: true },
  { num: 163, name: "Emcee's Hype", rarity: "U", hasReverseHolo: true },
  { num: 164, name: "Energy Recycler", rarity: "U", hasReverseHolo: true },
  { num: 165, name: "Ethan's Adventure", rarity: "U", hasReverseHolo: true },
  { num: 166, name: "Granite Cave", rarity: "U", hasReverseHolo: true },
  { num: 167, name: "Judge", rarity: "U", hasReverseHolo: true },
  { num: 168, name: "Sacred Ash", rarity: "U", hasReverseHolo: true },
  { num: 169, name: "Spikemuth Gym", rarity: "U", hasReverseHolo: true },
  { num: 170, name: "Team Rocket's Archer", rarity: "U", hasReverseHolo: true },
  { num: 171, name: "Team Rocket's Ariana", rarity: "U", hasReverseHolo: true },
  { num: 172, name: "Team Rocket's Bother-Bot", rarity: "U", hasReverseHolo: true },
  { num: 173, name: "Team Rocket's Factory", rarity: "U", hasReverseHolo: true },
  { num: 174, name: "Team Rocket's Giovanni", rarity: "U", hasReverseHolo: true },
  { num: 175, name: "Team Rocket's Great Ball", rarity: "U", hasReverseHolo: true },
  { num: 176, name: "Team Rocket's Petrel", rarity: "U", hasReverseHolo: true },
  { num: 177, name: "Team Rocket's Proton", rarity: "U", hasReverseHolo: true },
  { num: 178, name: "Team Rocket's Transceiver", rarity: "U", hasReverseHolo: true },
  { num: 179, name: "Team Rocket's Venture Bomb", rarity: "U", hasReverseHolo: true },
  { num: 180, name: "Team Rocket's Watchtower", rarity: "U", hasReverseHolo: true },
  { num: 181, name: "TM Machine", rarity: "U", hasReverseHolo: true },
  { num: 182, name: "Team Rocket's Energy", rarity: "U", hasReverseHolo: true },
  { num: 183, name: "Yanma (IR)", rarity: "IR", hasReverseHolo: false },
  { num: 184, name: "Cynthia's Roserade (IR)", rarity: "IR", hasReverseHolo: false },
  { num: 185, name: "Shaymin (IR)", rarity: "IR", hasReverseHolo: false },
  { num: 186, name: "Crustle (IR)", rarity: "IR", hasReverseHolo: false },
  { num: 187, name: "Team Rocket's Spidops (IR)", rarity: "IR", hasReverseHolo: false },
  { num: 188, name: "Hydrapple (IR)", rarity: "IR", hasReverseHolo: false },
  { num: 189, name: "Rapidash (IR)", rarity: "IR", hasReverseHolo: false },
  { num: 190, name: "Ethan's Typhlosion (IR)", rarity: "IR", hasReverseHolo: false },
  { num: 191, name: "Team Rocket's Houndoom (IR)", rarity: "IR", hasReverseHolo: false },
  { num: 192, name: "Blaziken (IR)", rarity: "IR", hasReverseHolo: false },
  { num: 193, name: "Misty's Psyduck (IR)", rarity: "IR", hasReverseHolo: false },
  { num: 194, name: "Misty's Lapras (IR)", rarity: "IR", hasReverseHolo: false },
  { num: 195, name: "Clamperl (IR)", rarity: "IR", hasReverseHolo: false },
  { num: 196, name: "Electrike (IR)", rarity: "IR", hasReverseHolo: false },
  { num: 197, name: "Rotom (IR)", rarity: "IR", hasReverseHolo: false },
  { num: 198, name: "Team Rocket's Orbeetle (IR)", rarity: "IR", hasReverseHolo: false },
  { num: 199, name: "Team Rocket's Weezing (IR)", rarity: "IR", hasReverseHolo: false },
  { num: 200, name: "Team Rocket's Murkrow (IR)", rarity: "IR", hasReverseHolo: false },
  { num: 201, name: "Zamazenta (FA)", rarity: "FA", hasReverseHolo: false },
  { num: 202, name: "Team Rocket's Raticate (FA)", rarity: "FA", hasReverseHolo: false },
  { num: 203, name: "Team Rocket's Meowth (FA)", rarity: "FA", hasReverseHolo: false },
  { num: 204, name: "Kangaskhan (FA)", rarity: "FA", hasReverseHolo: false },
  { num: 205, name: "Arven's Greedent (FA)", rarity: "FA", hasReverseHolo: false },
  { num: 206, name: "Yanmega ex (FA)", rarity: "FA", hasReverseHolo: false },
  { num: 207, name: "Arboliva ex (FA)", rarity: "FA", hasReverseHolo: false },
  { num: 208, name: "Team Rocket's Moltres ex (FA)", rarity: "FA", hasReverseHolo: false },
  { num: 209, name: "Ethan's Ho-Oh ex (FA)", rarity: "FA", hasReverseHolo: false },
  { num: 210, name: "Cetitan ex (FA)", rarity: "FA", hasReverseHolo: false },
  { num: 211, name: "Dondozo ex (FA)", rarity: "FA", hasReverseHolo: false },
  { num: 212, name: "Electivire ex (FA)", rarity: "FA", hasReverseHolo: false },
  { num: 213, name: "Team Rocket's Mewtwo ex (FA)", rarity: "FA", hasReverseHolo: false },
  { num: 214, name: "Regirock ex (FA)", rarity: "FA", hasReverseHolo: false },
  { num: 215, name: "Cynthia's Garchomp ex (FA)", rarity: "FA", hasReverseHolo: false },
  { num: 216, name: "Team Rocket's Nidoking ex (FA)", rarity: "FA", hasReverseHolo: false },
  { num: 217, name: "Team Rocket's Crobat ex (FA)", rarity: "FA", hasReverseHolo: false },
  { num: 218, name: "Arven's Mabosstiff ex (FA)", rarity: "FA", hasReverseHolo: false },
  { num: 219, name: "Team Rocket's Persian ex (FA)", rarity: "FA", hasReverseHolo: false },
  { num: 220, name: "Emcee's Hype (FA)", rarity: "FA", hasReverseHolo: false },
  { num: 221, name: "Ethan's Adventure (FA)", rarity: "FA", hasReverseHolo: false },
  { num: 222, name: "Judge (FA)", rarity: "FA", hasReverseHolo: false },
  { num: 223, name: "Team Rocket's Archer (FA)", rarity: "FA", hasReverseHolo: false },
  { num: 224, name: "Team Rocket's Ariana (FA)", rarity: "FA", hasReverseHolo: false },
  { num: 225, name: "Team Rocket's Giovanni (SIR)", rarity: "SIR", hasReverseHolo: false },
  { num: 226, name: "Team Rocket's Petrel (SIR)", rarity: "SIR", hasReverseHolo: false },
  { num: 227, name: "Team Rocket's Proton (SIR)", rarity: "SIR", hasReverseHolo: false },
  { num: 228, name: "Yanmega ex (SIR)", rarity: "SIR", hasReverseHolo: false },
  { num: 229, name: "Team Rocket's Moltres ex (SIR)", rarity: "SIR", hasReverseHolo: false },
  { num: 230, name: "Ethan's Ho-Oh ex (SIR)", rarity: "SIR", hasReverseHolo: false },
  { num: 231, name: "Team Rocket's Mewtwo ex (SIR)", rarity: "SIR", hasReverseHolo: false },
  { num: 232, name: "Cynthia's Garchomp ex (SIR)", rarity: "SIR", hasReverseHolo: false },
  { num: 233, name: "Team Rocket's Nidoking ex (SIR)", rarity: "SIR", hasReverseHolo: false },
  { num: 234, name: "Team Rocket's Crobat ex (SIR)", rarity: "SIR", hasReverseHolo: false },
  { num: 235, name: "Arven's Mabosstiff ex (SIR)", rarity: "SIR", hasReverseHolo: false },
  { num: 236, name: "Ethan's Adventure (SIR)", rarity: "SIR", hasReverseHolo: false },
  { num: 237, name: "Team Rocket's Ariana (SIR)", rarity: "SIR", hasReverseHolo: false },
  { num: 238, name: "Team Rocket's Giovanni (SIR)", rarity: "SIR", hasReverseHolo: false },
  { num: 239, name: "Ethan's Ho-Oh ex (Gold)", rarity: "Gold", hasReverseHolo: false },
  { num: 240, name: "Team Rocket's Mewtwo ex (Gold)", rarity: "Gold", hasReverseHolo: false },
  { num: 241, name: "Cynthia's Garchomp ex (Gold)", rarity: "Gold", hasReverseHolo: false },
  { num: 242, name: "Team Rocket's Crobat ex (Gold)", rarity: "Gold", hasReverseHolo: false },
  { num: 243, name: "Jamming Tower (Gold)", rarity: "Gold", hasReverseHolo: false },
  { num: 244, name: "Lavencia (Gold)", rarity: "Gold", hasReverseHolo: false },
];

const DR_RARITY_CONFIG = {
  C:    { label: "Common",                    color: "#888",    bg: "#2a2a2a" },
  U:    { label: "Uncommon",                  color: "#cc3333", bg: "#2a0a0a" },
  R:    { label: "Rare Holo",                 color: "#ff6644", bg: "#2a1a10" },
  IR:   { label: "Illustration Rare",         color: "#ff4444", bg: "#3a0a0a" },
  FA:   { label: "Full Art",                  color: "#ff8866", bg: "#2a1010" },
  SIR:  { label: "Special Illustration Rare", color: "#ffaa88", bg: "#3a1510" },
  Gold: { label: "Gold",                      color: "#fbbf24", bg: "#2a1a00" },
};

const DR_INITIAL_COLLECTION = {
  "1-normal": true,
  "1-rh": true,
  "2-normal": true,
  "2-rh": true,
  "3-normal": true,
  "4-normal": true,
  "4-rh": true,
  "5-normal": true,
  "5-rh": true,
  "6-normal": true,
  "6-rh": true,
  "7-normal": true,
  "8-normal": true,
  "8-rh": true,
  "9-normal": true,
  "9-rh": true,
  "10-normal": true,
  "10-rh": true,
  "11-normal": true,
  "12-normal": true,
  "13-normal": true,
  "13-rh": true,
  "14-normal": true,
  "15-normal": true,
  "15-rh": true,
  "16-normal": true,
  "16-rh": true,
  "17-normal": true,
  "18-normal": true,
  "19-normal": true,
  "19-rh": true,
  "20-normal": true,
  "21-normal": true,
  "21-rh": true,
  "22-normal": true,
  "22-rh": true,
  "23-normal": true,
  "24-normal": true,
  "24-rh": true,
  "26-normal": true,
  "27-normal": true,
  "27-rh": true,
  "28-normal": true,
  "29-normal": true,
  "29-rh": true,
  "30-normal": true,
  "31-normal": true,
  "32-normal": true,
  "32-rh": true,
  "33-normal": true,
  "34-normal": true,
  "34-rh": true,
  "35-normal": true,
  "35-rh": true,
  "36-normal": true,
  "37-normal": true,
  "37-rh": true,
  "38-normal": true,
  "38-rh": true,
  "39-normal": true,
  "40-normal": true,
  "41-normal": true,
  "42-normal": true,
  "42-rh": true,
  "43-normal": true,
  "43-rh": true,
  "44-normal": true,
  "45-normal": true,
  "46-normal": true,
  "46-rh": true,
  "47-normal": true,
  "48-normal": true,
  "49-normal": true,
  "49-rh": true,
  "50-normal": true,
  "51-normal": true,
  "52-normal": true,
  "53-normal": true,
  "54-normal": true,
  "55-normal": true,
  "56-normal": true,
  "57-normal": true,
  "57-rh": true,
  "58-normal": true,
  "58-rh": true,
  "59-normal": true,
  "59-rh": true,
  "60-normal": true,
  "60-rh": true,
  "61-normal": true,
  "62-normal": true,
  "62-rh": true,
  "63-normal": true,
  "63-rh": true,
  "64-normal": true,
  "67-normal": true,
  "70-normal": true,
  "70-rh": true,
  "71-normal": true,
  "71-rh": true,
  "72-normal": true,
  "72-rh": true,
  "73-normal": true,
  "73-rh": true,
  "74-normal": true,
  "74-rh": true,
  "75-normal": true,
  "75-rh": true,
  "76-normal": true,
  "77-normal": true,
  "77-rh": true,
  "78-normal": true,
  "79-normal": true,
  "80-normal": true,
  "81-normal": true,
  "82-normal": true,
  "82-rh": true,
  "83-normal": true,
  "83-rh": true,
  "84-normal": true,
  "85-normal": true,
  "85-rh": true,
  "86-normal": true,
  "86-rh": true,
  "87-normal": true,
  "87-rh": true,
  "88-normal": true,
  "88-rh": true,
  "89-normal": true,
  "89-rh": true,
  "90-normal": true,
  "90-rh": true,
  "91-normal": true,
  "91-rh": true,
  "92-normal": true,
  "93-normal": true,
  "93-rh": true,
  "95-normal": true,
  "95-rh": true,
  "96-normal": true,
  "96-rh": true,
  "97-normal": true,
  "97-rh": true,
  "98-normal": true,
  "99-normal": true,
  "99-rh": true,
  "100-normal": true,
  "100-rh": true,
  "102-normal": true,
  "102-rh": true,
  "103-normal": true,
  "103-rh": true,
  "105-normal": true,
  "105-rh": true,
  "106-normal": true,
  "108-normal": true,
  "108-rh": true,
  "109-normal": true,
  "109-rh": true,
  "110-normal": true,
  "110-rh": true,
  "112-normal": true,
  "113-normal": true,
  "113-rh": true,
  "116-normal": true,
  "118-normal": true,
  "120-normal": true,
  "120-rh": true,
  "122-normal": true,
  "123-normal": true,
  "123-rh": true,
  "124-normal": true,
  "124-rh": true,
  "125-normal": true,
  "125-rh": true,
  "126-normal": true,
  "126-rh": true,
  "127-normal": true,
  "128-normal": true,
  "128-rh": true,
  "129-normal": true,
  "129-rh": true,
  "130-normal": true,
  "132-normal": true,
  "132-rh": true,
  "133-normal": true,
  "134-normal": true,
  "135-normal": true,
  "136-normal": true,
  "138-normal": true,
  "139-normal": true,
  "140-normal": true,
  "141-normal": true,
  "141-rh": true,
  "142-normal": true,
  "142-rh": true,
  "143-normal": true,
  "143-rh": true,
  "144-normal": true,
  "144-rh": true,
  "145-normal": true,
  "146-normal": true,
  "147-normal": true,
  "147-rh": true,
  "148-normal": true,
  "148-rh": true,
  "149-normal": true,
  "149-rh": true,
  "150-normal": true,
  "151-normal": true,
  "152-rh": true,
  "153-normal": true,
  "153-rh": true,
  "154-normal": true,
  "154-rh": true,
  "155-normal": true,
  "155-rh": true,
  "156-normal": true,
  "156-rh": true,
  "157-normal": true,
  "157-rh": true,
  "158-normal": true,
  "159-normal": true,
  "159-rh": true,
  "160-normal": true,
  "160-rh": true,
  "161-normal": true,
  "161-rh": true,
  "163-normal": true,
  "163-rh": true,
  "164-normal": true,
  "164-rh": true,
  "165-normal": true,
  "165-rh": true,
  "166-normal": true,
  "166-rh": true,
  "167-normal": true,
  "167-rh": true,
  "168-normal": true,
  "168-rh": true,
  "169-normal": true,
  "169-rh": true,
  "172-normal": true,
  "173-normal": true,
  "173-rh": true,
  "174-normal": true,
  "175-normal": true,
  "175-rh": true,
  "176-normal": true,
  "176-rh": true,
  "177-normal": true,
  "178-normal": true,
  "178-rh": true,
  "179-normal": true,
  "179-rh": true,
  "180-normal": true,
  "180-rh": true,
  "181-normal": true,
  "190-normal": true,
  "192-normal": true,
  "194-normal": true,
  "198-normal": true,
  "199-normal": true,
  "201-normal": true,
  "202-normal": true,
  "206-normal": true,
  "207-normal": true,
  "209-normal": true,
  "210-normal": true,
  "212-normal": true,
  "221-normal": true,
  "223-normal": true,
  "225-normal": true,
  "14-rh": true,
  "40-rh": true,
  "52-rh": true,
  "55-rh": true,
  "56-rh": true,
  "66-normal": true,
  "68-normal": true,
  "94-normal": true,
  "98-rh": true,
  "107-normal": true,
  "111-normal": true,
  "114-normal": true,
  "115-normal": true,
  "117-normal": true,
  "121-normal": true,
  "131-normal": true,
  "134-rh": true,
  "135-rh": true,
  "138-rh": true,
  "140-rh": true,
  "151-rh": true,
  "158-rh": true,
  "162-normal": true,
  "170-normal": true,
  "171-normal": true,
  "182-normal": true,
  "196-normal": true,
};

const DR_STORAGE_KEY = 'destined-rivals-collection';
const DR_RECENT_KEY = 'destined-rivals-recent';
const DR_RARITY_KEYS = Object.keys(DR_RARITY_CONFIG);

let DR_collected = {};
let DR_recentLog = []; // [{ key, ts }] most recent first
let DR_showFilter = 'all';
let DR_rarityFilter = 'all';

function DR_loadCollection() {
  try {
    const saved = localStorage.getItem(DR_STORAGE_KEY);
    DR_collected = saved ? JSON.parse(saved) : Object.assign({}, DR_INITIAL_COLLECTION);
    if (!saved) localStorage.setItem(DR_STORAGE_KEY, JSON.stringify(DR_collected));
  } catch(e) { DR_collected = Object.assign({}, DR_INITIAL_COLLECTION); }
  try {
    const savedRecent = localStorage.getItem(DR_RECENT_KEY);
    DR_recentLog = savedRecent ? JSON.parse(savedRecent) : [];
  } catch(e) { DR_recentLog = []; }
}

function DR_saveCollection() {
  try { localStorage.setItem(DR_STORAGE_KEY, JSON.stringify(DR_collected)); } catch(e) {}
}

function DR_saveRecent() {
  try { localStorage.setItem(DR_RECENT_KEY, JSON.stringify(DR_recentLog)); } catch(e) {}
}

function DR_toggle(key) {
  const adding = !DR_collected[key];
  if (DR_collected[key]) { delete DR_collected[key]; } else { DR_collected[key] = true; }
  DR_saveCollection();
  if (adding) {
    DR_recentLog = [{ key, ts: Date.now() }, ...DR_recentLog.filter(e => e.key !== key)];
  } else {
    DR_recentLog = DR_recentLog.filter(e => e.key !== key);
  }
  DR_saveRecent();
  DR_updateStats();
  if (DR_showFilter === 'recent') {
    DR_render();
  } else {
    const numStr = key.split('-')[0];
    const card = DR_CARD_DATA.find(c => c.num === parseInt(numStr));
    if (card) DR_updateRow(card);
  }
}

function DR_isCollected(card, type) { return !!DR_collected[card.num + '-' + type]; }
function DR_isComplete(card) { return DR_isCollected(card,'normal') && (card.hasReverseHolo ? DR_isCollected(card,'rh') : true); }

function DR_timeAgo(ts) {
  const diff = Date.now() - ts;
  const mins = Math.floor(diff/60000);
  const hrs = Math.floor(diff/3600000);
  const days = Math.floor(diff/86400000);
  if (mins < 1) return 'just now';
  if (mins < 60) return mins + 'm ago';
  if (hrs < 24) return hrs + 'h ago';
  return days + 'd ago';
}

function DR_updateStats() {
  let total = 0, have = 0;
  DR_CARD_DATA.forEach(c => {
    total++; if (DR_isCollected(c,'normal')) have++;
    if (c.hasReverseHolo) { total++; if (DR_isCollected(c,'rh')) have++; }
  });
  const pct = total ? Math.round(have/total*100) : 0;
  document.getElementById('dr-pct-display').textContent = pct + '%';
  document.getElementById('dr-count-display').textContent = have + ' / ' + total;
  document.getElementById('dr-progress-fill').style.width = pct + '%';
}

function DR_updateRow(card) {
  const row = document.getElementById('dr-row-' + card.num);
  if (!row) return;
  const cfg = DR_RARITY_CONFIG[card.rarity];
  const complete = DR_isComplete(card);
  row.className = 'card-row' + (complete ? ' complete' : '');
  row.style.borderLeftColor = complete ? cfg.color : '#333';
  const normBtn = row.querySelector('.chk-btn');
  if (normBtn) {
    const nc = DR_isCollected(card,'normal');
    normBtn.className = 'chk-btn' + (nc ? ' checked' : '');
    normBtn.style.background = nc ? cfg.color : 'transparent';
    normBtn.style.borderColor = nc ? cfg.color : '#444';
    normBtn.style.color = nc ? '#000' : '#444';
    normBtn.textContent = nc ? '✓' : '';
  }
  const rhBtn = row.querySelector('.rh-btn');
  if (rhBtn) {
    const rc = DR_isCollected(card,'rh');
    rhBtn.className = 'rh-btn' + (rc ? ' checked' : '');
    rhBtn.textContent = rc ? '✓' : 'RH';
  }
}

function DR_setShow(f) {
  DR_showFilter = f;
  document.querySelectorAll('#dr-screen .filter-btn').forEach(b => b.classList.remove('active'));
  document.getElementById('dr-btn-' + f).classList.add('active');
  DR_render();
}

function DR_setRarity(r) {
  DR_rarityFilter = r;
  document.querySelectorAll('#dr-screen .rarity-btn').forEach(b => b.classList.remove('active'));
  document.getElementById('dr-rbtn-' + r).classList.add('active');
  DR_render();
}

function DR_getFilteredCards() {
  if (DR_showFilter === 'recent') {
    const seen = new Set();
    return DR_recentLog
      .map(entry => { 
        const num = parseInt(entry.key.split('-')[0]);
        return { card: DR_CARD_DATA.find(c => c.num === num), ts: entry.ts };
      })
      .filter(item => item.card && !seen.has(item.card.num) && seen.add(item.card.num))
      .map(item => item.card);
  }
  const search = document.getElementById('dr-search').value.toLowerCase();
  return DR_CARD_DATA.filter(c => {
    if (DR_rarityFilter !== 'all' && c.rarity !== DR_rarityFilter) return false;
    if (search && !c.name.toLowerCase().includes(search)) return false;
    if (DR_showFilter === 'collected') return DR_isComplete(c);
    if (DR_showFilter === 'missing') return !DR_isCollected(c,'normal') || (c.hasReverseHolo && !DR_isCollected(c,'rh'));
    return true;
  });
}

function DR_render() {
  const cards = DR_getFilteredCards();
  document.getElementById('dr-card-count').textContent = cards.length + ' card' + (cards.length !== 1 ? 's' : '') + ' shown';
  const list = document.getElementById('dr-card-list');
  list.innerHTML = '';
  cards.forEach(card => {
    const cfg = DR_RARITY_CONFIG[card.rarity];
    const complete = DR_isComplete(card);
    const nc = DR_isCollected(card,'normal');
    const rc = DR_isCollected(card,'rh');
    const recentEntry = DR_recentLog.find(e => parseInt(e.key.split('-')[0]) === card.num);
    const row = document.createElement('div');
    row.className = 'card-row' + (complete ? ' complete' : '');
    row.id = 'dr-row-' + card.num;
    row.style.borderLeftColor = complete ? cfg.color : '#333';
    row.innerHTML = `
      <div class="card-num">#${card.num}</div>
      <div class="card-name" onclick="DR_openModal(${card.num})" style="color:${complete?'#e2e2e2':'#888'}">${card.name}</div>
      ${DR_showFilter === 'recent' && recentEntry ? `<div class="recent-time">${DR_timeAgo(recentEntry.ts)}</div>` : ''}
      <div class="rarity-badge" style="background:${cfg.bg};color:${cfg.color};border:1px solid ${cfg.color}44">${card.rarity}</div>
      <div class="card-btns">
        <button class="chk-btn ${nc?'checked':''}"
          style="background:${nc?cfg.color:'transparent'};border-color:${nc?cfg.color:'#444'};color:${nc?'#000':'#444'}"
          onclick="DR_toggle('${card.num}-normal')">${nc?'✓':''}</button>
        ${card.hasReverseHolo ? `<button class="rh-btn ${rc?'checked':''}" onclick="DR_toggle('${card.num}-rh')">${rc?'✓':'RH'}</button>` : ''}
      </div>
    `;
    list.appendChild(row);
  });
  DR_updateStats();
}

let DR_currentModalNum = null;
let DR_modalTouchX = 0;

function DR_renderModalChecks(card, cfg) {
  const el = document.getElementById('dr-modal-checks');
  const nc = !!DR_collected[card.num + '-normal'];
  let html = `<div class="modal-chk-wrap">
    <button class="modal-chk" style="background:${nc?cfg.color:'transparent'};border-color:${nc?cfg.color:'#555'};color:${nc?'#000':'#555'}"
      onclick="DR_toggleFromModal('${card.num}-normal')">${nc?'✓':''}</button>
    <div class="modal-chk-label">NORM</div></div>`;
  if (card.hasReverseHolo) {
    const rc = !!DR_collected[card.num + '-rh'];
    html += `<div class="modal-chk-wrap">
      <button class="modal-chk" style="background:${rc?'#ff4444':'transparent'};border-color:${rc?'#ff4444':'#555'};color:${rc?'#000':'#555'}"
        onclick="DR_toggleFromModal('${card.num}-rh')">${rc?'✓':'RH'}</button>
      <div class="modal-chk-label">RH</div></div>`;
  }
  el.innerHTML = html;
}

function DR_toggleFromModal(key) {
  DR_toggle(key);
  const num = parseInt(key.split('-')[0]);
  const card = DR_CARD_DATA.find(c => c.num === num);
  if (card) DR_renderModalChecks(card, DR_RARITY_CONFIG[card.rarity]);
}

function DR_openModal(num) {
  const card = DR_CARD_DATA.find(c => c.num === num);
  if (!card) return;
  DR_currentModalNum = num;
  const cfg = DR_RARITY_CONFIG[card.rarity];
  document.getElementById('dr-modal-num').textContent = '#' + String(num).padStart(3,'0') + ' · ' + cfg.label;
  document.getElementById('dr-modal-name').textContent = card.name;
  document.getElementById('dr-modal-loading').style.display = 'block';
  document.getElementById('dr-modal-error').style.display = 'none';
  document.getElementById('dr-modal-img').style.display = 'none';
  document.getElementById('dr-modal-overlay').classList.add('open');
  document.getElementById('dr-modal-prev').style.display = 'flex';
  document.getElementById('dr-modal-next').style.display = 'flex';
  DR_renderModalChecks(card, cfg);
  const img = document.getElementById('dr-modal-img');
  const embedded = DR_CARD_IMAGES[num];
  if (embedded) {
    img.src = embedded;
    img.onload = () => { document.getElementById('dr-modal-loading').style.display = 'none'; img.style.display = 'block'; };
  } else {
    document.getElementById('dr-modal-loading').style.display = 'none';
    document.getElementById('dr-modal-error').style.display = 'block';
  }
}

function DR_navigateModal(dir) {
  const cards = DR_getFilteredCards();
  const idx = cards.findIndex(c => c.num === DR_currentModalNum);
  if (idx === -1) return;
  const next = cards[idx + dir];
  if (next) DR_openModal(next.num);
}

function DR_closeModal() {
  document.getElementById('dr-modal-overlay').classList.remove('open');
  document.getElementById('dr-modal-prev').style.display = 'none';
  document.getElementById('dr-modal-next').style.display = 'none';
  DR_currentModalNum = null;
}

function DR_modalTouchStart(e) { DR_modalTouchX = e.touches[0].clientX; }
function DR_modalTouchEnd(e) {
  const diff = DR_modalTouchX - e.changedTouches[0].clientX;
  if (Math.abs(diff) > 50) { e.stopPropagation(); DR_navigateModal(diff > 0 ? 1 : -1); }
}

document.addEventListener('keydown', e => {
  if (!document.getElementById('dr-modal-overlay').classList.contains('open')) return;
  if (e.key === 'ArrowRight') DR_navigateModal(1);
  if (e.key === 'ArrowLeft') DR_navigateModal(-1);
  if (e.key === 'Escape') DR_closeModal();
});

function DR_buildRarityButtons() {
  const row = document.getElementById('dr-rarity-row');
  const allBtn = document.createElement('button');
  allBtn.className = 'rarity-btn active'; allBtn.id = 'dr-rbtn-all';
  allBtn.textContent = 'ALL'; allBtn.onclick = () => DR_setRarity('all');
  row.appendChild(allBtn);
  DR_RARITY_KEYS.forEach(r => {
    const cfg = DR_RARITY_CONFIG[r];
    const btn = document.createElement('button');
    btn.className = 'rarity-btn'; btn.id = 'dr-rbtn-' + r;
    btn.textContent = r;
    btn.style.setProperty('--rc', cfg.color);
    btn.style.setProperty('--rb', cfg.bg);
    btn.onclick = () => DR_setRarity(r);
    row.appendChild(btn);
  });
}

function DR_buildLegend() {
  const items = document.getElementById('dr-legend-items');
  DR_RARITY_KEYS.forEach(r => {
    const cfg = DR_RARITY_CONFIG[r];
    const div = document.createElement('div');
    div.className = 'legend-item';
    div.innerHTML = `<div class="legend-dot" style="background:${cfg.color}"></div> ${r} = ${cfg.label}`;
    items.appendChild(div);
  });
  const rhDiv = document.createElement('div');
  rhDiv.className = 'legend-item';
  rhDiv.innerHTML = `<span style="font-size:10px;color:#ff4444">RH</span> = Reverse Holo`;
  items.appendChild(rhDiv);
}


function DR_exportCollection() {
  const data = JSON.stringify(DR_collected, null, 2);
  const blob = new Blob([data], {type: 'application/json'});
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'destined-rivals-collection.json';
  a.click();
  URL.revokeObjectURL(url);
}

function DR_importCollection() {
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
        DR_collected = data;
        localStorage.setItem(DR_STORAGE_KEY, JSON.stringify(DR_collected));
        DR_render();
        alert('Collection imported successfully!');
      } catch { alert('Invalid file — please use an exported collection file.'); }
    };
    reader.readAsText(file);
  };
  input.click();
}

window.DR_init = function() { DR_loadCollection(); DR_buildRarityButtons(); DR_buildLegend(); DR_render(); };
