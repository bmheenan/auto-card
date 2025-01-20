var cards_summary = [
    {
        "Type": "Loyal crew",
        "Player count": "2+",
        "Repeat": 2,
    },
    {
        "Type": "Betrayer",
        "Player count": "2+",
        "Repeat": 2,
    },
    {
        "Type": "Loyal crew",
        "Player count": "3+",
        "Repeat": 1,
    },
    {
        "Type": "Betrayer",
        "Player count": "3+",
        "Repeat": 1,
    },
    {
        "Type": "Loyal crew",
        "Player count": "4+",
        "Repeat": 1,
    },
    {
        "Type": "Betrayer",
        "Player count": "4+",
        "Repeat": 1,
    },
    {
        "Type": "Loyal crew",
        "Player count": "5+",
        "Repeat": 1,
    },
    {
        "Type": "Betrayer",
        "Player count": "5+",
        "Repeat": 1,
    },
    {
        "Type": "Loyal crew",
        "Player count": "6+",
        "Repeat": 1,
    },
    {
        "Type": "Betrayer",
        "Player count": "6+",
        "Repeat": 1,
    },
    {
        "Type": "Loyal crew",
        "Player count": "7+",
        "Repeat": 1,
    },
    {
        "Type": "Betrayer",
        "Player count": "7+",
        "Repeat": 1,
    },
    {
        "Type": "Loyal crew",
        "Player count": "8+",
        "Repeat": 1,
    },
    {
        "Type": "Betrayer",
        "Player count": "8+",
        "Repeat": 1,
    },

    {
        "Type": "Peril",
        "Player count": "2+",
        "Repeat": 11,
    },
    {
        "Type": "Plunder",
        "Value": 1,
        "Player count": "2+",
        "Repeat": 3,
    },
    {
        "Type": "Plunder",
        "Value": 2,
        "Player count": "2+",
        "Repeat": 2,
    },
    {
        "Type": "Plunder",
        "Value": 3,
        "Player count": "2+",
        "Repeat": 2,
    },

    {
        "Type": "Peril",
        "Player count": "3+",
        "Repeat": 5,
    },
    {
        "Type": "Plunder",
        "Value": 1,
        "Player count": "3+",
        "Repeat": 1,
    },
    {
        "Type": "Plunder",
        "Value": 2,
        "Player count": "3+",
        "Repeat": 1,
    },
    {
        "Type": "Plunder",
        "Value": 3,
        "Player count": "3+",
        "Repeat": 0,
    },

    {
        "Type": "Peril",
        "Player count": "4+",
        "Repeat": 4,
    },
    {
        "Type": "Plunder",
        "Value": 1,
        "Player count": "4+",
        "Repeat": 1,
    },
    {
        "Type": "Plunder",
        "Value": 2,
        "Player count": "4+",
        "Repeat": 1,
    },
    {
        "Type": "Plunder",
        "Value": 3,
        "Player count": "4+",
        "Repeat": 1,
    },

    {
        "Type": "Peril",
        "Player count": "5+",
        "Repeat": 6,
    },
    {
        "Type": "Plunder",
        "Value": 1,
        "Player count": "5+",
        "Repeat": 0,
    },
    {
        "Type": "Plunder",
        "Value": 2,
        "Player count": "5+",
        "Repeat": 1,
    },
    {
        "Type": "Plunder",
        "Value": 3,
        "Player count": "5+",
        "Repeat": 0,
    },

    {
        "Type": "Peril",
        "Player count": "6+",
        "Repeat": 3,
    },
    {
        "Type": "Plunder",
        "Value": 1,
        "Player count": "6+",
        "Repeat": 2,
    },
    {
        "Type": "Plunder",
        "Value": 2,
        "Player count": "6+",
        "Repeat": 1,
    },
    {
        "Type": "Plunder",
        "Value": 3,
        "Player count": "6+",
        "Repeat": 1,
    },

    {
        "Type": "Peril",
        "Player count": "7+",
        "Repeat": 6,
    },
    {
        "Type": "Plunder",
        "Value": 1,
        "Player count": "7+",
        "Repeat": 0,
    },
    {
        "Type": "Plunder",
        "Value": 2,
        "Player count": "7+",
        "Repeat": 1,
    },
    {
        "Type": "Plunder",
        "Value": 3,
        "Player count": "7+",
        "Repeat": 0,
    },

    {
        "Type": "Peril",
        "Player count": "8+",
        "Repeat": 3,
    },
    {
        "Type": "Plunder",
        "Value": 1,
        "Player count": "8+",
        "Repeat": 2,
    },
    {
        "Type": "Plunder",
        "Value": 2,
        "Player count": "8+",
        "Repeat": 1,
    },
    {
        "Type": "Plunder",
        "Value": 3,
        "Player count": "8+",
        "Repeat": 1,
    },

    {
        "Type": "Accused",
        "Player count": "4+",
        "Repeat": 6,
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
    for (var j = 0; j < cards_summary[i]["Repeat"]; j++) {
        var card = copyObj(cards_summary[i]);
        cards.push(card);
    }
}