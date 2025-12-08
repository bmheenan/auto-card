var cards_summary = [
    {
        "Type": "Character",
        "Character": "Sid",
    },
    {
        "Type": "Character",
        "Character": "Hagar",
    },
    {
        "Type": "Character",
        "Character": "Riggs",
    },
    {
        "Type": "Encounter",
        "Encounter": "Artifact",
        "Player count": "2+",
        "Repeat": 5,
        "Rank start": 45,
    },
    {
        "Type": "Encounter",
        "Encounter": "Treasure",
        "Player count": "2+",
        "Repeat": 5,
        "Rank start": 36,
    },
    {
        "Type": "Encounter",
        "Encounter": "Goods",
        "Player count": "2+",
        "Repeat": 5,
        "Rank start": 27,

    },
    {
        "Type": "Encounter",
        "Encounter": "Authority",
        "Player count": "2+",
        "Repeat": 5,
        "Rank start": 18,
    },
    {
        "Type": "Encounter",
        "Encounter": "Storm",
        "Player count": "2+",
        "Repeat": 5,
        "Rank start": 9,
    },
    {
        "Type": "Encounter",
        "Encounter": "Debauchery",
        "Player count": "2+",
        "Repeat": 5,
        "Rank start": 1,
    },
    {
        "Type": "Notoriety",
        "Repeat": 6,
    },
    /*
    // 2 players
    {
        "Type": "Sail",
        "Player count": "2+",
        "Title": "Peril",
        "Rank Start": 1,
        "Repeat": 15,
        "Icons": [
            { "ID": "Skull" },
        ]
    },
    {
        "Type": "Sail",
        "Player count": "2+",
        "Title": "Plunder",
        "Rank Start": 51,
        "Repeat": 7,
        "Icons": [
            { "ID": "Swords" },
        ]
    },
    {
        "Type": "Sail",
        "Player count": "2+",
        "Title": "Plunder",
        "Rank Start": 72,
        "Repeat": 4,
        "Icons": [
            { "ID": "Rum" },
        ]
    },
    {
        "Type": "Sail",
        "Player count": "2+",
        "Title": "Plunder",
        "Rank Start": 83,
        "Repeat": 1,
        "Icons": [
            { "ID": "Rum" },
            { "ID": "Rum" },
        ]
    },
    {
        "Type": "Sail",
        "Player count": "2+",
        "Title": "Plunder",
        "Rank Start": 87,
        "Repeat": 3,
        "Icons": [
            { "ID": "Coin" },
            { "ID": "Coin" },
        ]
    },
    // 3 players
    {
        "Type": "Sail",
        "Player count": "3+",
        "Title": "Peril",
        "Rank Start": 16,
        "Repeat": 9,
        "Icons": [
            { "ID": "Skull" },
        ]
    },
    {
        "Type": "Sail",
        "Player count": "3+",
        "Title": "Plunder",
        "Rank Start": 58,
        "Repeat": 1,
        "Icons": [
            { "ID": "Swords" },
        ]
    },
    {
        "Type": "Sail",
        "Player count": "3+",
        "Title": "Plunder",
        "Rank Start": 84,
        "Repeat": 1,
        "Icons": [
            { "ID": "Rum" },
            { "ID": "Rum" },
        ]
    },
    // 4 players
    {
        "Type": "Sail",
        "Player count": "4+",
        "Title": "Peril",
        "Rank Start": 25,
        "Repeat": 3,
        "Icons": [
            { "ID": "Skull" },
        ]
    },
    {
        "Type": "Sail",
        "Player count": "4+",
        "Title": "Plunder",
        "Rank Start": 59,
        "Repeat": 3,
        "Icons": [
            { "ID": "Swords" },
        ]
    },
    {
        "Type": "Sail",
        "Player count": "4+",
        "Title": "Plunder",
        "Rank Start": 76,
        "Repeat": 2,
        "Icons": [
            { "ID": "Rum" },
        ]
    },
    {
        "Type": "Sail",
        "Player count": "4+",
        "Title": "Plunder",
        "Rank Start": 85,
        "Repeat": 1,
        "Icons": [
            { "ID": "Rum" },
            { "ID": "Rum" },
        ]
    },
    {
        "Type": "Sail",
        "Player count": "4+",
        "Title": "Plunder",
        "Rank Start": 90,
        "Repeat": 2,
        "Icons": [
            { "ID": "Coin" },
            { "ID": "Coin" },
        ]
    },
    // 5 players
    {
        "Type": "Sail",
        "Player count": "5+",
        "Title": "Peril",
        "Rank Start": 28,
        "Repeat": 9,
        "Icons": [
            { "ID": "Skull" },
        ]
    },
    {
        "Type": "Sail",
        "Player count": "5+",
        "Title": "Plunder",
        "Rank Start": 62,
        "Repeat": 1,
        "Icons": [
            { "ID": "Swords" },
        ]
    },
    {
        "Type": "Sail",
        "Player count": "5+",
        "Title": "Plunder",
        "Rank Start": 76,
        "Repeat": 1,
        "Icons": [
            { "ID": "Rum" },
        ]
    },
    // 6 players
    {
        "Type": "Sail",
        "Player count": "6+",
        "Title": "Peril",
        "Rank Start": 37,
        "Repeat": 2,
        "Icons": [
            { "ID": "Skull" },
        ]
    },
    {
        "Type": "Sail",
        "Player count": "6+",
        "Title": "Plunder",
        "Rank Start": 63,
        "Repeat": 5,
        "Icons": [
            { "ID": "Swords" },
        ]
    },
    {
        "Type": "Sail",
        "Player count": "6+",
        "Title": "Plunder",
        "Rank Start": 79,
        "Repeat": 2,
        "Icons": [
            { "ID": "Rum" },
        ]
    },
    {
        "Type": "Sail",
        "Player count": "6+",
        "Title": "Plunder",
        "Rank Start": 92,
        "Repeat": 2,
        "Icons": [
            { "ID": "Coin" },
            { "ID": "Coin" },
        ]
    },
    // 7 players
    {
        "Type": "Sail",
        "Player count": "7+",
        "Title": "Peril",
        "Rank Start": 39,
        "Repeat": 11,
        "Icons": [
            { "ID": "Skull" },
        ]
    },
    // 8 players
    {
        "Type": "Sail",
        "Player count": "8+",
        "Title": "Peril",
        "Rank Start": 50,
        "Repeat": 1,
        "Icons": [
            { "ID": "Skull" },
        ]
    },
    {
        "Type": "Sail",
        "Player count": "8+",
        "Title": "Plunder",
        "Rank Start": 68,
        "Repeat": 4,
        "Icons": [
            { "ID": "Swords" },
        ]
    },
    {
        "Type": "Sail",
        "Player count": "8+",
        "Title": "Plunder",
        "Rank Start": 81,
        "Repeat": 2,
        "Icons": [
            { "ID": "Rum" },
        ]
    },
    {
        "Type": "Sail",
        "Player count": "8+",
        "Title": "Plunder",
        "Rank Start": 86,
        "Repeat": 1,
        "Icons": [
            { "ID": "Rum" },
            { "ID": "Rum" },
        ]
    },
    {
        "Type": "Sail",
        "Player count": "8+",
        "Title": "Plunder",
        "Rank Start": 94,
        "Repeat": 3,
        "Icons": [
            { "ID": "Coin" },
            { "ID": "Coin" },
        ]
    },
    // Non sail
    {
        "Type": "Accused",
        "Repeat": 7,
    },
    {
        "Type": "Reputation",
        "Repeat": 21,
    },
    {
        "Type": "Loyal crew",
        "Repeat": 8,
    },
    {
        "Type": "Betrayer",
        "Repeat": 8,
    },
    // Backs
    {
        "Type": "Accused",
        "Repeat": 7,
    },
    {
        "Type": "Reputation",
        "Repeat": 21,
    },
    {
        "Type": "Reputation",
        "Repeat": 42,
    },
    {
        "Type": "Scoring",
        "Repeat": 16,
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
    if (cards_summary[i]["Type"] == "Character") {
        cards.push({
            "Type": "Character",
            "Character": cards_summary[i]["Character"],
            "Variation": "Loyalty back",
        });
        cards.push({
            "Type": "Character",
            "Character": cards_summary[i]["Character"],
            "Variation": "Loyalty back",
        });
        cards.push({
            "Type": "Character",
            "Character": cards_summary[i]["Character"],
            "Variation": "Loyal crew",
        });
        cards.push({
            "Type": "Character",
            "Character": cards_summary[i]["Character"],
            "Variation": "Betrayer",
        });
        cards.push({
            "Type": "Character",
            "Character": cards_summary[i]["Character"],
            "Variation": "Trusted",
        });
        cards.push({
            "Type": "Character",
            "Character": cards_summary[i]["Character"],
            "Variation": "Accused",
        });
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