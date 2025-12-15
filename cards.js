var cards_summary = [
    /*{
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
    },*/
    // Loyalty cards
    {
        "Type": "Encounter",
        "Encounter": "Loyal crew",
        "Repeat": 4,
        "Rank": 31,
    },
    {
        "Type": "Encounter",
        "Encounter": "Betrayer",
        "Repeat": 4,
        "Rank": 1,
    },

    // Core encounter cards
    // 2+
    {
        "Type": "Encounter",
        "Encounter": "Artifact",
        "Player count": "2+",
        "Repeat": 4,
        "Rank start": 49,
    },
    {
        "Type": "Encounter",
        "Encounter": "Treasure",
        "Player count": "2+",
        "Repeat": 4,
        "Rank start": 41,
    },
    {
        "Type": "Encounter",
        "Encounter": "Goods",
        "Player count": "2+",
        "Repeat": 4,
        "Rank start": 32,

    },
    {
        "Type": "Encounter",
        "Encounter": "Storm",
        "Player count": "2+",
        "Repeat": 4,
        "Rank start": 21,
    },
    {
        "Type": "Encounter",
        "Encounter": "Debauchery",
        "Player count": "2+",
        "Repeat": 4,
        "Rank start": 11,
    },
    {
        "Type": "Encounter",
        "Encounter": "Authority",
        "Player count": "2+",
        "Repeat": 4,
        "Rank start": 2,
    },
    {
        "Type": "Notoriety",
        "Repeat": 5,
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