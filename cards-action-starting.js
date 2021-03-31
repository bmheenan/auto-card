var cardsStartingBase = [
    {
        "Name": "Gain new Opportunities",
        "Icons": [
            {"ID": "Pay amount", "Text": "-0/2/5"},
            {"ID": "Influence"},
            {"ID": "Arrow"},
            {"ID": "Gain amount", "Text": "1/2/3"},
            {"ID": "Opportunity"}
        ],
        "Text": "Do any one of the following:\r - Gain an Opportunity.\r - Pay 2 Influence. Gain 2 Opportunities.\r - Pay 5 Influence. Gain 3 Opportunities.",
        "End": "Return",
        "Benefit icon": [{"ID": "Opportunity"}],
    },
    {
        "Name": "Build Common buildings",
        "Image": "Building",
        "Icons": [
            {"ID": "Pay amount", "Text": "-0/2/5"},
            {"ID": "Influence"},
            {"ID": "Pay amount", "Text": "-X"},
            {"ID": "Resource"},
            {"ID": "Arrow"},
            {"ID": "Gain amount", "Text": "1/2/3"},
            {"ID": "Place tile", "Text": "X"}
        ],
        "Text": "Do any one of the following:\r - Build a Common building.\r - Pay 2 Influence. Build 2 Common buildings.\r - Pay 5 Influence. Build 3 Common buildings.",
        "End": "Return",
        "Benefit icon": [{"ID": "Place tile"}],
    },
    {
        "Name": "Buy resources",
        "Image": "Farming",
        "Icons": [
            {"ID": "Market up"},
            {"ID": "Pay amount", "Text": "-X"},
            {"ID": "Aureus"},
            {"ID": "Multi arrow"},
            {"ID": "Gain amount", "Text": "+3"},
            {"ID": "Resource"},
        ],
        "Text": "Increase the price of a resource by 1. Pay the new price in Aureus and gain 3 of that resource.\rRepeat as many times as you want.",
        "End": "Return",
        "Benefit icon": [{"ID": "Resource"}],
    },
    {
        "Name": "Sell resources",
        "Image": "Farming",
        "Icons": [
            {"ID": "Market down"},
            {"ID": "Pay amount", "Text": "-3"},
            {"ID": "Resource"},
            {"ID": "Multi arrow"},
            {"ID": "Gain amount", "Text": "+X"},
            {"ID": "Aureus"},
        ],
        "Text": "Decrease the price of a resource by 1. Pay 3 of that resource and gain the new price in Aureus.\rRepeat as many times as you want.",
        "End": "Return",
        "Benefit icon": [{"ID": "Aureus"}],
    },
    {
        "Name": "Retire",
        "Image": "Doorway",
        "Icons": [
            {"ID": "Retire"},
        ],
        "Text": "Do not take any more action rounds for the rest of the generation.",
        "End": "Return",
        "Benefit icon": [{"ID": "Retire"}],
    },
];

var  cardsStarting = [];

var colors = [
    "Red",
    "Blue",
    "Green",
    "Purple",
    "Orange",
    "Cyan",
]

function copyObj(input) {
    var output = {};
    for (key in input) {
        output[key] = input[key];
    }
    return output;
}

for (var i = 0; i < colors.length; i++) {
    for (var j = 0; j < cardsStartingBase.length; j++) {
        var card = copyObj(cardsStartingBase[j]);
        card["Type"] = "Starting";
        card["Player"] = colors[i];
        cardsStarting.push(card);
    }
}