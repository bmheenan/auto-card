var cards_summary = [
    // 2 players
    {
        "Type": "Sail",
        "Player count": "2+",
        "Title": "Peril",
        "Rank Start": 1,
        "Repeat": 17,
        "Icons": [
            { "ID": "Skull" },
        ]
    },
    {
        "Type": "Sail",
        "Player count": "2+",
        "Title": "Plunder",
        "Rank Start": 56,
        "Repeat": 5,
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
        "Rank Start": 18,
        "Repeat": 9,
        "Icons": [
            { "ID": "Skull" },
        ]
    },
    {
        "Type": "Sail",
        "Player count": "3+",
        "Title": "Plunder",
        "Rank Start": 61,
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
        "Rank Start": 27,
        "Repeat": 3,
        "Icons": [
            { "ID": "Skull" },
        ]
    },
    {
        "Type": "Sail",
        "Player count": "4+",
        "Title": "Plunder",
        "Rank Start": 62,
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
        "Rank Start": 30,
        "Repeat": 10,
        "Icons": [
            { "ID": "Skull" },
        ]
    },
    {
        "Type": "Sail",
        "Player count": "5+",
        "Title": "Plunder",
        "Rank Start": 78,
        "Repeat": 1,
        "Icons": [
            { "ID": "Rum" },
        ]
    },
    // 6 players

    // Non sail
    {
        "Type": "Accused",
        "Repeat": 4,
    },
    {
        "Type": "Reputation",
        "Repeat": 14,
    },
    {
        "Type": "Loyal crew",
        "Repeat": 3,
    },
    {
        "Type": "Betrayer",
        "Repeat": 3,
    },
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
    var rank = cards_summary[i]["Rank Start"];
    for (var j = 0; j < cards_summary[i]["Repeat"]; j++) {
        var card = copyObj(cards_summary[i]);
        if (rank) {
            card["Rank"] = rank.toString();
            rank++;
        }
        cards.push(card);
    }
}