var cards_summary = [
    // Trusted/Marked cards
    {
        "Type": "Trusted",
        "Character": "Sid",
    },
    {
        "Type": "Trusted",
        "Character": "Decibel",
    },
    {
        "Type": "Trusted",
        "Character": "Riggs",
    },
    {
        "Type": "Trusted",
        "Character": "Riff",
    },
    {
        "Type": "Trusted",
        "Character": "Nova",
    },
    {
        "Type": "Trusted",
        "Character": "Penn",
    },
    {
        "Type": "Trusted",
        "Character": "Quinn",
    },
    {
        "Type": "Trusted",
        "Character": "Vantage",
    },
    {
        "Type": "Marked",
        "Character": "Sid",
    },
    {
        "Type": "Marked",
        "Character": "Decibel",
    },
    {
        "Type": "Marked",
        "Character": "Riggs",
    },
    {
        "Type": "Marked",
        "Character": "Riff",
    },
    {
        "Type": "Marked",
        "Character": "Nova",
    },
    {
        "Type": "Marked",
        "Character": "Penn",
    },
    {
        "Type": "Marked",
        "Character": "Quinn",
    },
    {
        "Type": "Marked",
        "Character": "Vantage",
    },
    /*

    // Loyalty cards
    {
        "Type": "Encounter",
        "Encounter": "Loyal crew",
        "Repeat": 6,
        "Rank": 35,
    },
    {
        "Type": "Encounter",
        "Encounter": "Betrayer",
        "Repeat": 6,
        "Rank": 34,
    },

    // Core encounter cards
    // 2+
    {
        "Type": "Encounter",
        "Encounter": "Artifact",
        "Player count": "2+",
        "Repeat": 4,
        "Rank start": 73,
    },
    {
        "Type": "Encounter",
        "Encounter": "Treasure",
        "Player count": "2+",
        "Repeat": 3,
        "Rank start": 61,
    },
    {
        "Type": "Encounter",
        "Encounter": "Goods",
        "Player count": "2+",
        "Repeat": 4,
        "Rank start": 49,

    },
    {
        "Type": "Encounter",
        "Encounter": "Authority",
        "Player count": "2+",
        "Repeat": 5,
        "Rank start": 31,
    },
    {
        "Type": "Encounter",
        "Encounter": "Storm",
        "Player count": "2+",
        "Repeat": 4,
        "Rank start": 16,
    },
    {
        "Type": "Encounter",
        "Encounter": "Debauchery",
        "Player count": "2+",
        "Repeat": 4,
        "Rank start": 1,
    },

    // 3+
    {
        "Type": "Encounter",
        "Encounter": "Artifact",
        "Player count": "3+",
        "Repeat": 1,
        "Rank start": 77,
    },
    {
        "Type": "Encounter",
        "Encounter": "Treasure",
        "Player count": "3+",
        "Repeat": 1,
        "Rank start": 64,
    },
    {
        "Type": "Encounter",
        "Encounter": "Goods",
        "Player count": "3+",
        "Repeat": 1,
        "Rank start": 53,

    },
    {
        "Type": "Encounter",
        "Encounter": "Authority",
        "Player count": "3+",
        "Repeat": 2,
        "Rank start": 36,
    },
    {
        "Type": "Encounter",
        "Encounter": "Storm",
        "Player count": "3+",
        "Repeat": 3,
        "Rank start": 20,
    },
    {
        "Type": "Encounter",
        "Encounter": "Debauchery",
        "Player count": "3+",
        "Repeat": 2,
        "Rank start": 5,
    },

    // 4+
    {
        "Type": "Encounter",
        "Encounter": "Artifact",
        "Player count": "4+",
        "Repeat": 2,
        "Rank start": 78,
    },
    {
        "Type": "Encounter",
        "Encounter": "Treasure",
        "Player count": "4+",
        "Repeat": 3,
        "Rank start": 65,
    },
    {
        "Type": "Encounter",
        "Encounter": "Goods",
        "Player count": "4+",
        "Repeat": 2,
        "Rank start": 54,

    },
    {
        "Type": "Encounter",
        "Encounter": "Authority",
        "Player count": "4+",
        "Repeat": 1,
        "Rank start": 38,
    },
    {
        "Type": "Encounter",
        "Encounter": "Storm",
        "Player count": "4+",
        "Repeat": 1,
        "Rank start": 23,
    },
    {
        "Type": "Encounter",
        "Encounter": "Debauchery",
        "Player count": "4+",
        "Repeat": 1,
        "Rank start": 7,
    },

    // Notoriety
    {
        "Type": "Notoriety",
        "Repeat": 5,
    },

    /*
    // One of each Encounter
    {
        "Type": "Encounter",
        "Encounter": "Artifact",
        "Player count": "2+",
        "Repeat": 1,
        "Rank start": 50,
    },
    {
        "Type": "Encounter",
        "Encounter": "Treasure",
        "Player count": "2+",
        "Repeat": 1,
        "Rank start": 43,
    },
    {
        "Type": "Encounter",
        "Encounter": "Goods",
        "Player count": "2+",
        "Repeat": 1,
        "Rank start": 36,

    },
    {
        "Type": "Encounter",
        "Encounter": "Loyal crew",
        "Repeat": 1,
        "Rank": 35,
    },
    {
        "Type": "Encounter",
        "Encounter": "Betrayer",
        "Repeat": 1,
        "Rank": 34,
    },
    {
        "Type": "Encounter",
        "Encounter": "Authority",
        "Player count": "2+",
        "Repeat": 1,
        "Rank start": 22,
    },
    {
        "Type": "Encounter",
        "Encounter": "Debauchery",
        "Player count": "2+",
        "Repeat": 1,
        "Rank start": 11,
    },
    {
        "Type": "Encounter",
        "Encounter": "Storm",
        "Player count": "2+",
        "Repeat": 1,
        "Rank start": 1,
    },
    */
];

var cards = [];

function copyObj(input) {
    var output = {};
    for (key in input) {
        output[key] = input[key];
    }
    return output;
}

for (var i = 0; i < cards_summary.length; i++) {
    var rank = cards_summary[i]["Rank start"];
    if (cards_summary[i]["Type"] == "Trusted" || cards_summary[i]["Type"] == "Marked") {
        cards_summary[i]["Repeat"] = 1;
    }
    for (var j = 0; j < cards_summary[i]["Repeat"]; j++) {
        var card = copyObj(cards_summary[i]);
        if (rank) {
            card["Rank"] = rank.toString();
            rank++;
        }
        cards.push(card);
    }
}