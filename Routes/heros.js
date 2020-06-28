const express = require('express');
const router  = express.Router();
const fetch = require('node-fetch');


router.get('/', async (req, res) => {
    try {
    

            const data = [

            {
                "name": "antimage",
                "id": 1,
                "localized_name": "Anti-Mage",
                "image": "https://liquipedia.net/commons/images/7/70/Anti-Mage_Large.png"
            },
            {
                "name": "axe",
                "id": 2,
                "localized_name": "Axe",
                "image":"https://liquipedia.net/commons/images/a/a1/Axe_Large.png"
            },
            {
                "name": "bane",
                "id": 3,
                "localized_name": "Bane",
                "image": "https://liquipedia.net/commons/images/7/72/Bane_Large.png"
            },
            {
                "name": "bloodseeker",
                "id": 4,
                "localized_name": "Bloodseeker",
                "image": "https://liquipedia.net/commons/images/a/a6/Bloodseeker_Large.png"
            },
            {
                "name": "crystal_maiden",
                "id": 5,
                "localized_name": "Crystal Maiden",
                "image": "https://liquipedia.net/commons/images/d/dc/Crystal_Maiden_Large.png"
            },
            {
                "name": "drow_ranger",
                "id": 6,
                "localized_name": "Drow Ranger",
                "image": "https://liquipedia.net/commons/images/7/7e/Drow_Ranger_Large.png"
            },
            {
                "name": "earthshaker",
                "id": 7,
                "localized_name": "Earthshaker",
                "image": "https://liquipedia.net/commons/images/8/8f/Earthshaker_Large.png"
            },
            {
                "name": "juggernaut",
                "id": 8,
                "localized_name": "Juggernaut",
                "image": "https://liquipedia.net/commons/images/c/c8/Juggernaut_Large.png"
            },
            {
                "name": "mirana",
                "id": 9,
                "localized_name": "Mirana",
                "image": "https://liquipedia.net/commons/images/1/1f/Mirana_Large.png"
            },
            {
                "name": "morphling",
                "id": 10,
                "localized_name": "Morphling",
                "image": "https://liquipedia.net/commons/images/c/c7/Morphling_Large.png"
            },
            {
                "name": "nevermore",
                "id": 11,
                "localized_name": "Shadow Fiend",
                "image": "https://liquipedia.net/commons/images/6/60/Shadow_Fiend_Large.png"
            },
            {
                "name": "phantom_lancer",
                "id": 12,
                "localized_name": "Phantom Lancer",
                "image": "https://liquipedia.net/commons/images/1/1e/Phantom_Lancer_Large.png"
            },
            {
                "name": "puck",
                "id": 13,
                "localized_name": "Puck",
                "image": "https://liquipedia.net/commons/images/3/3a/Puck_Large.png"
            },
            {
                "name": "pudge",
                "id": 14,
                "localized_name": "Pudge",
                "image": "https://liquipedia.net/commons/images/d/dd/Pudge_Large.png"
            },
            {
                "name": "razor",
                "id": 15,
                "localized_name": "Razor",
                "image": "https://liquipedia.net/commons/images/3/30/Razor_Large.png"
            },
            {
                "name": "sand_king",
                "id": 16,
                "localized_name": "Sand King",
                "image": "https://liquipedia.net/commons/images/e/e5/Sand_King_Large.png"
            },
            {
                "name": "storm_spirit",
                "id": 17,
                "localized_name": "Storm Spirit",
                "image": "https://liquipedia.net/commons/images/0/0c/Storm_Spirit_Large.png"
            },
            {
                "name": "sven",
                "id": 18,
                "localized_name": "Sven",
                "image": "https://liquipedia.net/commons/images/f/f2/Sven_Large.png"
            },
            {
                "name": "tiny",
                "id": 19,
                "localized_name": "Tiny",
                "image": "https://liquipedia.net/commons/images/1/12/Tiny_Large.png"
            },
            {
                "name": "vengefulspirit",
                "id": 20,
                "localized_name": "Vengeful Spirit",
                "image": "https://liquipedia.net/commons/images/c/c9/Vengeful_Spirit_Large.png"
            },
            {
                "name": "windrunner",
                "id": 21,
                "localized_name": "Windranger",
                "image": "https://liquipedia.net/commons/images/0/02/Windranger_Large.png"
            },
            {
                "name": "zuus",
                "id": 22,
                "localized_name": "Zeus",
                "image": "https://liquipedia.net/commons/images/9/91/Zeus_Large.png"
            },
            {
                "name": "kunkka",
                "id": 23,
                "localized_name": "Kunkka",
                "image": "https://liquipedia.net/commons/images/d/d9/Kunkka_large.png"
            },
              {
                "name": "Empty Hero ID",
                "id":24,
                },
            {
                "name": "lina",
                "id": 25,
                "localized_name": "Lina",
                "image": "https://liquipedia.net/commons/images/4/46/Lina_Large.png"
            },
            {
                "name": "lion",
                "id": 26,
                "localized_name": "Lion",
                "image": "https://liquipedia.net/commons/images/8/8d/Lion_Large.png"
            },
            {
                "name": "shadow_shaman",
                "id": 27,
                "localized_name": "Shadow Shaman",
                "image": "https://liquipedia.net/commons/images/d/d8/Shadow_Shaman_Large.png"
            },
            {
                "name": "slardar",
                "id": 28,
                "localized_name": "Slardar",
                "image": "https://liquipedia.net/commons/images/4/41/Slardar_Large.png"
            },
            {
                "name": "tidehunter",
                "id": 29,
                "localized_name": "Tidehunter",
                "image": "https://liquipedia.net/commons/images/d/de/Tidehunter_Large.png"
            },
            {
                "name": "witch_doctor",
                "id": 30,
                "localized_name": "Witch Doctor",
                "image": "https://liquipedia.net/commons/images/b/b0/Witch_Doctor_Large.png"
            },
             {
                "name": "lich",
                "id": 31,
                "localized_name": "Lich",
                "image": "https://liquipedia.net/commons/images/3/35/Lich_Large.png"
            },
            {
                "name": "riki",
                "id": 32,
                "localized_name": "Riki",
                "image": "https://liquipedia.net/commons/images/a/a3/Riki_Large.png"
            },
            {
                "name": "enigma",
                "id": 33,
                "localized_name": "Enigma",
                "image": "https://liquipedia.net/commons/images/4/43/Enigma_Large.png"
            },
            {
                "name": "tinker",
                "id": 34,
                "localized_name": "Tinker",
                "image": "https://liquipedia.net/commons/images/c/c0/Tinker_Large.png"
            },
            {
                "name": "sniper",
                "id": 35,
                "localized_name": "Sniper",
                "image": "https://liquipedia.net/commons/images/a/a2/Sniper_Large.png"
            },
            {
                "name": "necrolyte",
                "id": 36,
                "localized_name": "Necrophos",
                "image": "https://liquipedia.net/commons/images/0/0e/Necrophos_Large.png"
            },
            {
                "name": "warlock",
                "id": 37,
                "localized_name": "Warlock",
                "image": "https://liquipedia.net/commons/images/b/b9/Warlock_Large.png"
            },
            {
                "name": "beastmaster",
                "id": 38,
                "localized_name": "Beastmaster",
                "image": "https://liquipedia.net/commons/images/1/19/Beastmaster_Large.png"
            },
            {
                "name": "queenofpain",
                "id": 39,
                "localized_name": "Queen of Pain",
                "image": "https://liquipedia.net/commons/images/6/62/Queen_of_Pain_Large.png"
            },
            {
                "name": "venomancer",
                "id": 40,
                "localized_name": "Venomancer",
                "image": "https://liquipedia.net/commons/images/3/39/Venomancer_Large.png"
            },
            {
                "name": "faceless_void",
                "id": 41,
                "localized_name": "Faceless Void",
                "image": "https://liquipedia.net/commons/images/f/fa/Faceless_Void_Large.png"
            },
            {
                "name": "skeleton_king",
                "id": 42,
                "localized_name": "Wraith King",
                "image": "https://liquipedia.net/commons/images/6/6e/Wraith_King_Large.png"
            },
            {
                "name": "death_prophet",
                "id": 43,
                "localized_name": "Death Prophet",
                "image": "https://liquipedia.net/commons/images/8/80/Death_Prophet_Large.png"
            },
            {
                "name": "phantom_assassin",
                "id": 44,
                "localized_name": "Phantom Assassin",
                "image": "https://gamepedia.cursecdn.com/dota2_gamepedia/8/8e/Phantom_Assassin_icon.png?version=fcf1444e78efa7c35c74f98e934c271d"
            },
            {
                "name": "pugna",
                "id": 45,
                "localized_name": "Pugna",
                "image": "https://liquipedia.net/commons/images/2/24/Pugna_Large.png"
            },
            {
                "name": "templar_assassin",
                "id": 46,
                "localized_name": "Templar Assassin",
                "image": "https://liquipedia.net/commons/images/5/50/Templar_Assassin_Large.png"
            },
            {
                "name": "viper",
                "id": 47,
                "localized_name": "Viper",
                "image": "https://liquipedia.net/commons/images/6/61/Viper_Large.png"
            },
            {
                "name": "luna",
                "id": 48,
                "localized_name": "Luna",
                "image": "https://liquipedia.net/commons/images/e/e2/Luna_Large.png"
            },
            {
                "name": "dragon_knight",
                "id": 49,
                "localized_name": "Dragon Knight",
                "image": "https://liquipedia.net/commons/images/d/da/Dragon_Knight_Large.png"
            },
            {
                "name": "dazzle",
                "id": 50,
                "localized_name": "Dazzle",
                "image": "https://liquipedia.net/commons/images/e/e3/Dazzle_Large.png"
            },
            {
                "name": "rattletrap",
                "id": 51,
                "localized_name": "Clockwerk",
                "image": "https://liquipedia.net/commons/images/b/b8/Clockwerk_Large.png"
            },
            {
                "name": "leshrac",
                "id": 52,
                "localized_name": "Leshrac",
                "image": "https://liquipedia.net/commons/images/f/f6/Leshrac_Large.png"
            },
            {
                "name": "furion",
                "id": 53,
                "localized_name": "Nature's Prophet",
                "image": "https://liquipedia.net/commons/images/1/16/Natures_Prophet_Large.png"
            },
            {
                "name": "life_stealer",
                "id": 54,
                "localized_name": "Lifestealer",
                "image": "https://liquipedia.net/commons/images/8/85/Lifestealer_Large.png"
            },
            {
                "name": "dark_seer",
                "id": 55,
                "localized_name": "Dark Seer",
                "image": "https://liquipedia.net/commons/images/6/6f/Dark_Seer_Large.png"
            },
            {
                "name": "clinkz",
                "id": 56,
                "localized_name": "Clinkz",
                "image": "https://liquipedia.net/commons/images/4/4d/Clinkz_Large.png"
            },
            {
                "name": "omniknight",
                "id": 57,
                "localized_name": "Omniknight",
                "image": "https://liquipedia.net/commons/images/1/12/Omniknight_Large.png"
            },
            {
                "name": "enchantress",
                "id": 58,
                "localized_name": "Enchantress",
                "image": "https://liquipedia.net/commons/images/5/57/Enchantress_Large.png"
            },
            {
                "name": "huskar",
                "id": 59,
                "localized_name": "Huskar",
                "image": "https://liquipedia.net/commons/images/f/f1/Huskar_Large.png"
            },
            {
                "name": "night_stalker",
                "id": 60,
                "localized_name": "Night Stalker",
                "image": "https://liquipedia.net/commons/images/c/c4/Night_Stalker_Large.png"
            },
            {
                "name": "broodmother",
                "id": 61,
                "localized_name": "Broodmother",
                "image": "https://liquipedia.net/commons/images/0/0c/Broodmother_Large.png"
            },
            {
                "name": "bounty_hunter",
                "id": 62,
                "localized_name": "Bounty Hunter",
                "image": "https://liquipedia.net/commons/images/8/86/Bounty_Hunter_Large.png"
            },
            {
                "name": "weaver",
                "id": 63,
                "localized_name": "Weaver",
                "image": "https://liquipedia.net/commons/images/5/59/Weaver_Large.png"
            },
            {
                "name": "jakiro",
                "id": 64,
                "localized_name": "Jakiro",
                "image": "https://liquipedia.net/commons/images/4/4d/Jakiro_Large.png"
            },
            {
                "name": "batrider",
                "id": 65,
                "localized_name": "Batrider",
                "image": "https://liquipedia.net/commons/images/c/c1/Batrider_Large.png"
            },
            {
                "name": "chen",
                "id": 66,
                "localized_name": "Chen",
                "image": "https://liquipedia.net/commons/images/7/7d/Chen_Large.png"
            },
            {
                "name": "spectre",
                "id": 67,
                "localized_name": "Spectre",
                "image": "https://liquipedia.net/commons/images/0/0a/Spectre_Large.png"
            },
           {
                "name": "ancient_apparition",
                "id": 68,
                "localized_name": "Ancient Apparition",
                "image": "https://liquipedia.net/commons/images/5/5d/Ancient_Apparition_Large.png"
            },
            {
                "name": "doom_bringer",
                "id": 69,
                "localized_name": "Doom",
                "image": "https://liquipedia.net/commons/images/1/19/Doom_Large.png"
            },
            
            {
                "name": "ursa",
                "id": 70,
                "localized_name": "Ursa",
                "image": "https://liquipedia.net/commons/images/2/27/Ursa_Large.png"
            },
            {
                "name": "spirit_breaker",
                "id": 71,
                "localized_name": "Spirit Breaker",
                "image": "https://liquipedia.net/commons/images/f/f6/Spirit_Breaker_Large.png"
            },
            {
                "name": "gyrocopter",
                "id": 72,
                "localized_name": "Gyrocopter",
                "image": "https://liquipedia.net/commons/images/e/e1/Gyrocopter_Large.png"
            },
            {
                "name": "alchemist",
                "id": 73,
                "localized_name": "Alchemist",
                "image": "https://liquipedia.net/commons/images/1/11/Alchemist_Large.png"
            },
            {
                "name": "invoker",
                "id": 74,
                "localized_name": "Invoker",
                "image": "https://liquipedia.net/commons/images/5/5b/Invoker_Large.png"
            },
            {
                "name": "silencer",
                "id": 75,
                "localized_name": "Silencer",
                "image": "https://liquipedia.net/commons/images/9/98/Silencer_Large.png"
            },
            {
                "name": "obsidian_destroyer",
                "id": 76,
                "localized_name": "Outworld Devourer",
                "image": "https://liquipedia.net/commons/images/e/e5/Outworld_Devourer_Large.png"
            },
            {
                "name": "lycan",
                "id": 77,
                "localized_name": "Lycanthrope",
                "image": "https://liquipedia.net/commons/images/c/ca/Lycan_Large.png"
            },
            {
                "name": "brewmaster",
                "id": 78,
                "localized_name": "Brewmaster",
                "image": "https://liquipedia.net/commons/images/0/0b/Brewmaster_Large.png"
            },
            {
                "name": "shadow_demon",
                "id": 79,
                "localized_name": "Shadow Demon",
                "image": "https://liquipedia.net/commons/images/7/79/Shadow_Demon_Large.png"
            },
            {
                "name": "lone_druid",
                "id": 80,
                "localized_name": "Lone Druid",
                "image": "https://liquipedia.net/commons/images/e/e2/Lone_Druid_Large.png"
            },
            {
                "name": "chaos_knight",
                "id": 81,
                "localized_name": "Chaos Knight",
                "image": "https://liquipedia.net/commons/images/4/46/Chaos_Knight_Large.png"
            },
            {
                "name": "meepo",
                "id": 82,
                "localized_name": "Meepo",
                "image": "https://liquipedia.net/commons/images/9/97/Meepo_Large.png"
            },
            {
                "name": "treant",
                "id": 83,
                "localized_name": "Treant Protector",
                "image": "https://liquipedia.net/commons/images/7/7a/Treant_Protector_Large.png"
            },
            {
                "name": "ogre_magi",
                "id": 84,
                "localized_name": "Ogre Magi",
                "image": "https://liquipedia.net/commons/images/3/30/Ogre_Magi_Large.png"
            },
            {
                "name": "undying",
                "id": 85,
                "localized_name": "Undying",
                "image": "https://liquipedia.net/commons/images/6/6b/Undying_Large.png"
            },
            {
                "name": "rubick",
                "id": 86,
                "localized_name": "Rubick",
                "image": "https://liquipedia.net/commons/images/5/57/Rubick_Large.png"
            },
            {
                "name": "disruptor",
                "id": 87,
                "localized_name": "Disruptor",
                "image": "https://liquipedia.net/commons/images/b/b7/Disruptor_Large.png"
            },
            {
                "name": "nyx_assassin",
                "id": 88,
                "localized_name": "Nyx Assassin",
                "image": "https://liquipedia.net/commons/images/c/c4/Nyx_Assassin_Large.png"
            },
            {
                "name": "naga_siren",
                "id": 89,
                "localized_name": "Naga Siren",
                "image": "https://liquipedia.net/commons/images/c/ca/Naga_Siren_Large.png"
            },
            {
                "name": "keeper_of_the_light",
                "id": 90,
                "localized_name": "Keeper of the Light",
                "image": "https://liquipedia.net/commons/images/b/bc/Keeper_of_the_Light_Large.png"
            },
            {
                "name": "wisp",
                "id": 91,
                "localized_name": "Wisp",
                "image": "https://liquipedia.net/commons/images/a/ad/Io_Large.png"
            },
            {
                "name": "visage",
                "id": 92,
                "localized_name": "Visage",
                "image": "https://liquipedia.net/commons/images/f/f8/Visage_Large.png"
            },
            {
                "name": "slark",
                "id": 93,
                "localized_name": "Slark",
                "image": "https://liquipedia.net/commons/images/f/fa/Slark_Large.png"
            },
            {
                "name": "medusa",
                "id": 94,
                "localized_name": "Medusa",
                "image": "https://liquipedia.net/commons/images/3/38/Medusa_Large.png"
            },
            {
                "name": "troll_warlord",
                "id": 95,
                "localized_name": "Troll Warlord",
                "image": "https://liquipedia.net/commons/images/0/02/Troll_Warlord_Large.png"
            },
            {
                "name": "centaur",
                "id": 96,
                "localized_name": "Centaur Warrunner",
                "image": "https://liquipedia.net/commons/images/5/54/Centaur_Warrunner_Large.png"
            },
            {
                "name": "magnataur",
                "id": 97,
                "localized_name": "Magnus",
                "image": "https://liquipedia.net/commons/images/6/67/Magnus_Large.png"
            },
            {
                "name": "shredder",
                "id": 98,
                "localized_name": "Timbersaw",
                "image": "https://liquipedia.net/commons/images/6/60/Timbersaw_Large.png"
            },
            {
                "name": "bristleback",
                "id": 99,
                "localized_name": "Bristleback",
                "image": "https://liquipedia.net/commons/images/f/f9/Bristleback_Large.png"
            },
            {
                "name": "tusk",
                "id": 100,
                "localized_name": "Tusk",
                "image": "https://liquipedia.net/commons/images/6/61/Tusk_Large.png"
            },
            {
                "name": "skywrath_mage",
                "id": 101,
                "localized_name": "Skywrath Mage",
                "image": "https://liquipedia.net/commons/images/5/54/Skywrath_Mage_Large.png"
            },
            {
                "name": "abaddon",
                "id": 102,
                "localized_name": "Abaddon",
                "image": "https://liquipedia.net/commons/images/f/fa/Abaddon_Large.png"
            },
            {
                "name": "elder_titan",
                "id": 103,
                "localized_name": "Elder Titan",
                "image": "https://liquipedia.net/commons/images/b/bc/Elder_Titan_Large.png"
            },
            {
                "name": "legion_commander",
                "id": 104,
                "localized_name": "Legion Commander",
                "image": "https://liquipedia.net/commons/images/0/0a/Legion_Commander_Large.png"
            },
            {
                "name": "techies",
                "id": 105,
                "localized_name": "Techies",
                "image": "https://liquipedia.net/commons/images/a/a7/Techies_Large.png"
            },
            {
                "name": "ember_spirit",
                "id": 106,
                "localized_name": "Ember Spirit",
                "image": "https://liquipedia.net/commons/images/9/98/Ember_Spirit_Large.png"
            },
            {
                "name": "earth_spirit",
                "id": 107,
                "localized_name": "Earth Spirit",
                "image": "https://liquipedia.net/commons/images/2/2b/Earth_Spirit_Large.png"
            },
            {
                "name": "abyssal_underlord",
                "id": 108,
                "localized_name": "Abyssal Underlord",
                "image": "https://liquipedia.net/commons/images/9/9e/Underlord_Large.png"
            },
            {
                "name": "terrorblade",
                "id": 109,
                "localized_name": "Terrorblade",
                "image": "https://liquipedia.net/commons/images/b/b5/Terrorblade_Large.png"
            },
            {
                "name": "phoenix",
                "id": 110,
                "localized_name": "Phoenix",
                "image": "https://liquipedia.net/commons/images/6/61/Phoenix_Large.png"
            },
            
            {
                "name": "oracle",
                "id": 111,
                "localized_name": "Oracle",
                "image": "https://liquipedia.net/commons/images/f/fc/Oracle_Large.png"
            },
            {
                "name": "winter_wyvern",
                "id": 112,
                "localized_name": "Winter Wyvern",
                "image": "https://liquipedia.net/commons/images/c/c7/Winter_Wyvern_Large.png"
            },
            {
                "name": "arc_warden",
                "id": 113,
                "localized_name": "Arc Warden",
                "image": "https://liquipedia.net/commons/images/6/60/Arc_Warden_Large.png"
            },
            {
                "name": "monkey_king",
                "id": 114,
                "localized_name": "Monkey King",
                "image": "https://liquipedia.net/commons/images/4/4e/Monkey_King_Large.png"
            },
            {
                "name": "Empty Hero ID",
                "id":115,
                },
                {
                "name": "Empty Hero ID",
                "id":116,
                },
                {
                "name": "Empty Hero ID",
                "id":117,
                },
                {
                "name": "Empty Hero ID",
                "id":118,
                },
            {
                "name": "dark_willow",
                "id": 119,
                "localized_name": "Dark Willow",
                "image": "https://liquipedia.net/commons/images/5/5e/Dark_Willow_Large.png"
            },
            {
                "name": "pangolier",
                "id": 120,
                "localized_name": "Pangolier",
                "image": "https://liquipedia.net/commons/images/a/a3/Pangolier_Large.png"
            },
            {
                "name": "grimstroke",
                "id": 121,
                "localized_name": "Grimstroke",
                "image": "https://liquipedia.net/commons/images/6/60/Grimstroke_Large.png"
            },
            {
                "name": "Empty Hero ID",
                "id":122,
                },
                {
                "name": "Empty Hero ID",
                "id":123,
                },
                {
                "name": "Empty Hero ID",
                "id":124,
                },
                {
                "name": "Empty Hero ID",
                "id":125,
                },
            {
                "name": "void_spirit",
                "id": 126,
                "localized_name": "Void Spirit",
                "image": "https://liquipedia.net/commons/images/1/16/Void_Spirit_Large.png"
            },
            {
                "name": "Empty Hero ID",
                "id":127,
                },
            {
                "name": "snapfire",
                "id": 128,
                "localized_name": "Snapfire",
                "image": "https://liquipedia.net/commons/images/a/a4/Snapfire_Large.png"
            },
            {
                "name": "mars",
                "id": 129,
                "localized_name": "Mars",
                "image": "https://liquipedia.net/commons/images/4/4e/Mars_Large.png"
            },
        ]

        
        res.json(data);

    } catch (err) {
        console.error(err);
        res.status(500).json({message: 'Server Error' })
    }
    
});


module.exports = router;