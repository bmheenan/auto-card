var cardsStartingBase = [
    {
        "Name": "Gain Opportunities",
        "Icons": [
            { "ID": "Pay amount", "Text": "-0/1/3" },
            { "ID": "Influence" },
            { "ID": "Pay amount", "Text": "-X" },
            { "ID": "Influence" },
            { "ID": "Arrow" },
            { "ID": "Gain amount", "Text": "1/2/3" },
            { "ID": "Opportunity" }
        ],
        "Text": "Do any one of the following:\r - Gain an Opportunity.\r - Pay 1 Influence. Gain 2 Opportunities.\r - Pay 3 Influence. Gain 3 Opportunities\rPay any influence listed under your chosen cards.",
        "After": "Dynasty",
    },
    {
        "Name": "Build Common buildings",
        "Image": "Building",
        "Icons": [
            { "ID": "Pay amount", "Text": "-0/2/6" },
            { "ID": "Influence" },
            { "ID": "Pay amount", "Text": "-X" },
            { "ID": "Resource" },
            { "ID": "Arrow" },
            { "ID": "Gain amount", "Text": "1/2/3" },
            { "ID": "Place tile", "Optional": "Multi" }
        ],
        "Text": "Do any one of the following:\r - Build a Common building.\r - Pay 2 Influence. Build 2 Common buildings.\r - Pay 6 Influence. Build 3 Common buildings.\rPay the resources listed on each placed tile.",
        "After": "Dynasty",
    },
    {
        "Name": "Trade resources",
        "Image": "Farming",
        "Icons": [
            { "ID": "Market manipulation" },
            { "ID": "Gain amount", "Text": "+X" },
            { "ID": "Neutral amount", "Text": "/" },
            { "ID": "Pay amount", "Text": "-X" },
            { "ID": "Silver" },
            { "ID": "Multi arrow" },
            { "ID": "Pay amount", "Text": "-3" },
            { "ID": "Neutral amount", "Text": "/" },
            { "ID": "Gain amount", "Text": "+3" },
            { "ID": "Resource" },
        ],
        "Text": "Do either of the following as many times as you want:\r - Increase the price of any resource by 1, then pay that much Silver. Gain 3 of that resource.\r - Pay 3 of any resource. Decrease its price by 1, then gain that much Silver.",
        "After": "Dynasty",
    },
    {
        "Name": "Activate industry",
        "Image": "Doorway",
        "Icons": [
            { "ID": "Pay amount", "Text": "-0/2/6" },
            { "ID": "Influence" },
            { "ID": "Arrow" },
            { "ID": "Gain amount", "Text": "1/2/3" },
            { "ID": "Activate industry" }
        ],
        "Text": "Do any one of the following:\r - Activate industry\r - Pay 2 Influence. Activate industry twice.\r - Pay 6 Influnce. Activate industry 3 times.",
        "After": "Dynasty",
    },
    {
        "Name": "Build starter industry",
        "Image": "Farming",
        "Icons": [
            { "ID": "Pay amount", "Text": "-3" },
            { "ID": "Grain" },
            { "ID": "Pay amount", "Text": "-1" },
            { "ID": "Wood" },
            { "ID": "Arrow" },
            { "ID": "Place tile", "Optional": ["Industry"] },
        ],
        "Text": "Pay 3 Grain and 1 Wood. Build a Farm, Mill, Smith, or Mason (your choice).",
        "After": "Once",
    },
    {
        "Name": "Build starter industry",
        "Image": "Farming",
        "Icons": [
            { "ID": "Pay amount", "Text": "-3" },
            { "ID": "Wood" },
            { "ID": "Pay amount", "Text": "-1" },
            { "ID": "Iron" },
            { "ID": "Arrow" },
            { "ID": "Place tile", "Optional": ["Industry"] },
        ],
        "Text": "Pay 3 Wood and 1 Iron. Build a Farm, Mill, Smith, or Mason (your choice).",
        "After": "Once",
    },
    {
        "Name": "Retire",
        "Image": "Doorway",
        "Icons": [
            { "ID": "Arrow" },
            { "ID": "Dynasty" },
            { "ID": "Gain amount", "Text": "+X" },
            { "ID": "Silver" },
        ],
        "Text": "Put this card on your Dynasty pile, then place Silver equal to the number of unretired players on it.\rDo not take any more actions for the rest of the Generation.",
        "After": "Dynasty",
    },
];

var cardsStarting = [];

var colors = [
    "Red",
    /*"Blue",
    "Green",
    "Purple",
    "Orange",
    "Cyan",*/
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