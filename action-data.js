

var opportunityCardInfo = [
    //////////////////
    // 4% resources //
    //////////////////
    
    ////////////////////////////
    // 20% resources + pillar //
    ////////////////////////////
    // 4% grain + pillar
    
    
    
    
    // 4% wood + pillar
    
    
    
    // 4% metal + pillar
    
    
    
    // 4% papyrus + pillar
    
    
    
    // 4% aureus + pillar
    
    {
        "Name": "Connection with the guilds",
        "Type": "Opportunity",
        "Order": "Immediate",
        "Icons": [
            {"ID": "Pay amount", "Text": "-5"},
            {"ID": "Metal"},
            {"ID": "Arrow"},
            {"ID": "Gain amount", "Text": "+2"},
            {"ID": "Aureus"},
        ],
        "Text": "Pay 5 Metal. Gain 2 Aureus.",
        "End": "Keep",
        "Trigger icon": [{"ID": "Resource"}],
        "Trigger text": "When the card above gains Grain, Wood, Metal, or Papyrus, gain 1 Aureus.",
        "Benefit icon": [{"ID": "Aureus"}],
    },
    
    
    ////////////////////
    // 11% production //
    ////////////////////
    // 2% production grain
    
    
    // 2% production wood
    
    
    // 2% production metal
    
    
    // 2% production papyrus
    
    
    // 3% city layout -> production resource of choice
    
    ///////////////////////////////////////////
    // 5% city layout -> production + pillar //
    ///////////////////////////////////////////
    
    ///////////////////////
    // 5% power / wealth //
    ///////////////////////
    
    ///////////////////////////////////////
    // 15% city layout -> power / wealth //
    ///////////////////////////////////////
    
    /////////////////////////////////////////////////////////////////////
    // 5% city layout / decrease production -> power / wealth + pillar //
    /////////////////////////////////////////////////////////////////////
    
    
    {
        "Name": "Imperial record keeping",
        "Type": "Opportunity",
        "Order": "Immediate",
        "Icons": [
            {"ID": "Pay amount", "Text": "-2"},
            {"ID": "Influence"},
            {"ID": "Pay amount", "Text": "-3"},
            {"ID": "Decrease production papyrus"},
            {"ID": "Arrow"},
            {"ID": "Gain amount", "Text": "+1"},
            {"ID": "Wealth"},
        ],
        "Text": "Pay 2 Influence. Decrease your Papyrus production by 3. Increase your Wealth by 1.",
        "End": "Keep",
        "Trigger icon": [{"ID": "Production resource"}],
        "Trigger text": "When the card above increases your Grain, Wood, Metal, or Papyrus production, increase your Wealth by 1.",
        "Benefit icon": [{"ID": "Wealth"}],
    },
    {
        "Name": "Seige equipment construction",
        "Type": "Opportunity",
        "Order": "Immediate",
        "Icons": [
            {"ID": "Pay amount", "Text": "-3"},
            {"ID": "Influence"},
            {"ID": "Pay amount", "Text": "-3"},
            {"ID": "Decrease production wood"},
            {"ID": "Arrow"},
            {"ID": "Gain amount", "Text": "+1"},
            {"ID": "Power"},
        ],
        "Text": "Pay 3 Influence. Decrease your Wood production by 3. Increase your Power by 1.",
        "End": "Keep",
        "Trigger icon": [{"ID": "Production resource"}],
        "Trigger text": "When the card above increases your Grain, Wood, Metal, or Papyrus production, increase your Power by 1.",
        "Benefit icon": [{"ID": "Power"}],
    },
    {
        "Name": "Fund a welfare program",
        "Type": "Opportunity",
        "Order": "Immediate",
        "Icons": [
            {"ID": "Pay amount", "Text": "-3"},
            {"ID": "Influence"},
            {"ID": "Pay amount", "Text": "-3"},
            {"ID": "Decrease production grain"},
            {"ID": "Arrow"},
            {"ID": "Gain amount", "Text": "+1"},
            {"ID": "Power"},
        ],
        "Text": "Pay 3 Influence. Decrease your Grain production by 3. Increase your Power by 1.",
        "End": "Keep",
        "Trigger icon": [{"ID": "Production resource"}],
        "Trigger text": "When the card above increases your Grain, Wood, Metal, or Papyrus production, increase your Power by 1.",
        "Benefit icon": [{"ID": "Power"}],
    },
    ///////////////////////
    // 10% special boons //
    ///////////////////////
    
    {
        "Name": "Build an amphitheatre",
        "Type": "Opportunity",
        "Order": "Player",
        "Icons": [
            {"ID": "Pay amount", "Text": "-1"},
            {"ID": "Influence"},
            {"ID": "Pay amount", "Text": "-14"},
            {"ID": "Wood"},
            {"ID": "Arrow"},
            {"ID": "Place tile", "Text": "13"},
            {"ID": "Activate common card", "Text": "13"},
        ],
        "Text": "Pay 1 Influence and 14 Wood. Place an Amphitheatre tile and activate the Amphitheatre boon.",
        "End": "Remove",
        "Benefit icon": [{"ID": "Place tile"}],
    },
    
    {
        "Name": "Build an Oracle",
        "Type": "Opportunity",
        "Order": "Player",
        "Icons": [
            {"ID": "Pay amount", "Text": "-16"},
            {"ID": "Papyrus"},
            {"ID": "Arrow"},
            {"ID": "Place tile", "Text": "14"},
            {"ID": "Activate common card", "Text": "14"},
        ],
        "Text": "Pay 16 Papyrus. Place an Oracle tile and activate the Oracle boon.",
        "End": "Remove",
        "Benefit icon": [{"ID": "Place tile"}],
    },
    {
        "Name": "Build an Oracle",
        "Type": "Opportunity",
        "Order": "Player",
        "Icons": [
            {"ID": "Pay amount", "Text": "-3"},
            {"ID": "Influence"},
            {"ID": "Pay amount", "Text": "-10"},
            {"ID": "Aureus"},
            {"ID": "Arrow"},
            {"ID": "Place tile", "Text": "14"},
            {"ID": "Activate common card", "Text": "14"},
        ],
        "Text": "Pay 3 Influence and 10 Aureus. Place an Oracle tile and activate the Oracle boon.",
        "End": "Remove",
        "Benefit icon": [{"ID": "Place tile"}],
    },
    

    
    
    {
        "Name": "Build a Parade",
        "Type": "Opportunity",
        "Order": "Player",
        "Icons": [
            {"ID": "Pay amount", "Text": "-10"},
            {"ID": "Metal"},
            {"ID": "Pay amount", "Text": "-6"},
            {"ID": "Papyrus"},
            {"ID": "Arrow"},
            {"ID": "Place tile", "Text": "16", "Optional": ["Military"]},
            {"ID": "Activate common card", "Text": "16"},
        ],
        "Text": "Pay 10 Metal and 6 Papyrus. Place a Parade tile and activate the Parade boon.",
        "End": "Remove",
        "Benefit icon": [{"ID": "Place tile"}],
    },
    ////////////////////
    // 10% draw cards //
    ////////////////////
    {
        "Name": "Fortunate encounter",
        "Type": "Opportunity",
        "Order": "Immediate",
        "Icons": [
            {"ID": "Pay amount", "Text": "-1"},
            {"ID": "Influence"},
            {"ID": "Arrow"},
            {"ID": "Gain amount", "Text": "+2"},
            {"ID": "Opportunity card"},
            {"ID": "Pay amount", "Text": "-1"},
            {"ID": "Discard card"},
        ],
        "Text": "Pay 1 Influence. Draw 2 Opportunity cards, then discard 1 card from your hand.",
        "End": "Remove",
        "Benefit icon": [{"ID": "Opportunity card"}],
    },
    {
        "Name": "Study",
        "Type": "Opportunity",
        "Order": "Immediate",
        "Icons": [
            {"ID": "Pay amount", "Text": "-5"},
            {"ID": "Papyrus"},
            {"ID": "Arrow"},
            {"ID": "Gain amount", "Text": "+2"},
            {"ID": "Opportunity card"},
            {"ID": "Pay amount", "Text": "-1"},
            {"ID": "Discard card"},
        ],
        "Text": "Pay 5 Papyrus. Draw 2 Opportunity cards, then discard 1 card from your hand.",
        "End": "Remove",
        "Benefit icon": [{"ID": "Opportunity card"}],
    },
    {
        "Name": "Family acquaintance",
        "Type": "Opportunity",
        "Order": "Immediate",
        "Icons": [
            {"ID": "Pay amount", "Text": "-1"},
            {"ID": "Influence"},
            {"ID": "Arrow"},
            {"ID": "Gain amount", "Text": "+2"},
            {"ID": "Opportunity card"},
        ],
        "Text": "Pay 1 Influence. Draw 2 Opportunity cards.",
        "End": "Remove",
        "Benefit icon": [{"ID": "Opportunity card"}],
    },
    {
        "Name": "Business acquaintance",
        "Type": "Opportunity",
        "Order": "Immediate",
        "Icons": [
            {"ID": "Pay amount", "Text": "-6"},
            {"ID": "Papyrus"},
            {"ID": "Arrow"},
            {"ID": "Gain amount", "Text": "+2"},
            {"ID": "Opportunity card"},
        ],
        "Text": "Pay 6 Papyrus. Draw 2 Opportunity cards.",
        "End": "Remove",
        "Benefit icon": [{"ID": "Opportunity card"}],
    },
    
    {
        "Name": "Veteran of the legion",
        "Type": "Opportunity",
        "Order": "Immediate",
        "Icons": [
            {"ID": "Pay amount", "Text": "-6"},
            {"ID": "Metal"},
            {"ID": "Arrow"},
            {"ID": "Gain amount", "Text": "=4"},
            {"ID": "Opportunity card"},
        ],
        "Text": "Pay 6 Metal. Draw Opportunity cards until you have 4 cards in your hand.",
        "End": "Remove",
        "Benefit icon": [{"ID": "Opportunity card"}],
    },
    {
        "Name": "Trip to Rome",
        "Type": "Opportunity",
        "Order": "Immediate",
        "Icons": [
            {"ID": "Pay amount", "Text": "-1"},
            {"ID": "Influence"},
            {"ID": "Pay amount", "Text": "-8"},
            {"ID": "Aureus"},
            {"ID": "Arrow"},
            {"ID": "Gain amount", "Text": "=6"},
            {"ID": "Opportunity card"},
        ],
        "Text": "Pay 1 Influence and 8 Aureus. Draw Opportunity cards until you have 6 cards in your hand.",
        "End": "Remove",
        "Benefit icon": [{"ID": "Opportunity card"}],
    },
    
    {
        "Name": "Pious reputation",
        "Type": "Opportunity",
        "Order": "Immediate",
        "Icons": [
            {"ID": "Pay amount", "Text": "-1"},
            {"ID": "Influence"},
            {"ID": "Pay amount", "Text": "-6"},
            {"ID": "Metal"},
            {"ID": "Arrow"},
            {"ID": "Gain amount", "Text": "+4"},
            {"ID": "Opportunity card"},
            {"ID": "Pay amount", "Text": "=4"},
            {"ID": "Discard card"},
        ],
        "Text": "Pay 1 Influence and 6 Metal. Draw 4 Opportunity cards, then discard until you have 4 or fewer cards in your hand.",
        "End": "Remove",
        "Benefit icon": [{"ID": "Opportunity card"}],
    },
    {
        "Name": "Prestigious reputation",
        "Type": "Opportunity",
        "Order": "Immediate",
        "Icons": [
            {"ID": "Pay amount", "Text": "-1"},
            {"ID": "Influence"},
            {"ID": "Pay amount", "Text": "-6"},
            {"ID": "Papyrus"},
            {"ID": "Arrow"},
            {"ID": "Gain amount", "Text": "+4"},
            {"ID": "Opportunity card"},
            {"ID": "Pay amount", "Text": "=4"},
            {"ID": "Discard card"},
        ],
        "Text": "Pay 1 Influence and 6 Papyrus. Draw 4 Opportunity cards, then discard until you have 4 or fewer cards in your hand.",
        "End": "Remove",
        "Benefit icon": [{"ID": "Opportunity card"}],
    },
    ////////////////////////////
    // 5% draw cards + pillar //
    ////////////////////////////
    
    
    {
        "Name": "Entrepreneurship",
        "Type": "Opportunity",
        "Order": "Immediate",
        "Icons": [
            {"ID": "Pay amount", "Text": "-2"},
            {"ID": "Influence"},
            {"ID": "Pay amount", "Text": "-5"},
            {"ID": "Grain"},
            {"ID": "Arrow"},
            {"ID": "Gain amount", "Text": "+2"},
            {"ID": "Opportunity card"},
        ],
        "Text": "Pay 2 Influence and 5 Grain. Draw 2 Opportunity cards.",
        "End": "Keep",
        "Trigger icon": [{"ID": "Production resource"}],
        "Trigger text": "When the card above increases your Grain, Wood, Metal, or Papyrus production, draw an Opportunity card.",
        "Benefit icon": [{"ID": "Opportunity card"}],
    },
    
    {
        "Name": "Confident negotiation",
        "Type": "Opportunity",
        "Order": "Immediate",
        "Icons": [
            {"ID": "Pay amount", "Text": "-2"},
            {"ID": "Influence"},
            {"ID": "Pay amount", "Text": "-5"},
            {"ID": "Papyrus"},
            {"ID": "Arrow"},
            {"ID": "Gain amount", "Text": "+1"},
            {"ID": "Opportunity card"},
        ],
        "Text": "Pay 2 Influence and 5 Papyrus. Draw an Opportunity card.",
        "End": "Keep",
        "Trigger icon": [{"ID": "Opportunity set"}],
        "Trigger text": "When the card above takes an Opportunity set, draw an Opportunity card.",
        "Benefit icon": [{"ID": "Opportunity card"}],
    },
    ////////////////////////////////
    // 5% extra common, buy, sell //
    ////////////////////////////////
    {
        "Name": "Extra Common project",
        "Type": "Opportunity",
        "Order": "Player",
        "Icons": [
            {"ID": "Pay amount", "Text": "-1"},
            {"ID": "Influence"},
            {"ID": "Pay amount", "Text": "-X"},
            {"ID": "Resource"},
            {"ID": "Arrow"},
            {"ID": "Place tile", "Text": "X", "Optional": ["Multi"]}
        ],
        "Text": "Pay 1 Influence. Build a Common project.",
        "End": "Return",
        "Benefit icon": [{"ID": "Place tile"}],
    },
    {
        "Name": "Extra Common project",
        "Type": "Opportunity",
        "Order": "Player",
        "Icons": [
            {"ID": "Pay amount", "Text": "-1"},
            {"ID": "Influence"},
            {"ID": "Pay amount", "Text": "-X"},
            {"ID": "Resource"},
            {"ID": "Arrow"},
            {"ID": "Place tile", "Text": "X", "Optional": ["Multi"]}
        ],
        "Text": "Pay 1 Influence. Build a Common project.",
        "End": "Return",
        "Benefit icon": [{"ID": "Place tile"}],
    },
    {
        "Name": "Extra buy resources",
        "Type": "Starting",
        "Order": "Player",
        "Icons": [
            {"ID": "Market up"},
            {"ID": "Pay amount", "Text": "-X"},
            {"ID": "Aureus"},
            {"ID": "Multi arrow"},
            {"ID": "Gain amount", "Text": "+3"},
            {"ID": "Resource"},
        ],
        "Text": "Increase the price marker of any resource in the Market by one level. Pay the new price in Aureus and gain 3 of that resource.\rRepeat as many times as you want for the same resource.",
        "End": "Return",
        "Benefit icon": [{"ID": "Resource"}],
    },
    {
        "Name": "Extra buy resources",
        "Type": "Starting",
        "Order": "Player",
        "Icons": [
            {"ID": "Market up"},
            {"ID": "Pay amount", "Text": "-X"},
            {"ID": "Aureus"},
            {"ID": "Multi arrow"},
            {"ID": "Gain amount", "Text": "+3"},
            {"ID": "Resource"},
        ],
        "Text": "Increase the price of a resource by 1. Pay the new price in Aureus and gain 3 of that resource.\rRepeat as many times as you want for the same resource.",
        "End": "Return",
        "Benefit icon": [{"ID": "Resource"}],
    },
    {
        "Name": "Extra sell resources",
        "Type": "Starting",
        "Order": "Player",
        "Icons": [
            {"ID": "Market down"},
            {"ID": "Pay amount", "Text": "-3"},
            {"ID": "Resource"},
            {"ID": "Multi arrow"},
            {"ID": "Gain amount", "Text": "+X"},
            {"ID": "Aureus"},
        ],
        "Text": "Decrease the price of a resource by 1. Pay 3 of that resource and gain the new price in Aureus.\rRepeat as many times as you want for the same resource.",
        "End": "Return",
        "Benefit icon": [{"ID": "Aureus"}],
    },
    ////////////////
    // 5% special //
    ////////////////
    
    
    {
        "Name": "Meditation and focus",
        "Type": "Opportunity",
        "Order": "Immediate",
        "Icons": [
            {"ID": "Pay amount", "Text": "-X"},
            {"ID": "Discard card"},
            {"ID": "Arrow"},
            {"ID": "Gain amount", "Text": "+2X"},
            {"ID": "Influence"},
        ],
        "Text": "Discard any number of cards from your hand. Gain 2 Influence for each discarded card.",
        "End": "Remove",
        "Benefit icon": [{"ID": "Influence"}],
    },
    {
        "Name": "Market manipulation",
        "Type": "Opportunity",
        "Order": "Player",
        "Icons": [
            {"ID": "Pay amount", "Text": "-1"},
            {"ID": "Influence"},
            {"ID": "Arrow"},
            {"ID": "Market up"},
            {"ID": "Market down"},
        ],
        "Text": "Pay 1 Influence. Increase the price of a resource by 1, and decrease the price of a different resource by 1",
        "End": "Remove",
        "Benefit icon": [{"ID": "Market up"}],
    },
    
];

var cardInfo = familyCardInfo
/*
var  cardInfo = [];

var colors = [
    "Red",
    "Blue",
    "Green",
    "Purple",
    "Orange",
    "Cyan",
]

for (var i = 0; i < colors.length; i++) {
    for (var j = 0; j < startingCardInfo.length; j++) {
        var card = copyObj(startingCardInfo[j]);
        card["Type"] = "Starting";
        card["Player"] = colors[i];
        cardInfo.push(card);
    }
}

function copyObj(input) {
    var output = {};
    for (key in input) {
        output[key] = input[key];
    }
    return output;
}

var compass = [
    "N",
    "S",
    "W",
    "E",
];
var ci = 0;

for (var i = 0; i < opportunityCardInfo.length; i++) {
    opportunityCardInfo[i]["Compass"] = compass[ci];
    ci++;
    ci = ci % 4;
    opportunityCardInfo[i]["Type"] = "Opportunity";
    cardInfo.push(opportunityCardInfo[i])
}
*/