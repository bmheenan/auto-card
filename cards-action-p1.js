// Republican Period

var cardsP1 = [

    // 6 - Resource with pillar

    {
        "Name": "Experimental crops",
        "Type": "Opportunity",
        "Period": "Republican",
        "Players": "4+",
        "Image": "Farming",
        "Order": "Immediate",
        "Icons": [
            {"ID": "Pay amount", "Text": "-1"},
            {"ID": "Decrease production grain"},
            {"ID": "Arrow"},
            {"ID": "Gain amount", "Text": "+5"},
            {"ID": "Grain"},
        ],
        "Text": "Reduce your Grain production by 1. Gain 5 Grain.",
        "End": "Keep",
        "Trigger icon": [{"ID": "Resource"}],
        "Trigger text": "When the card above gains Grain, Wood, Metal, or Papyrus, gain 1 Grain.",
        "Benefit icon": [{"ID": "Grain"}],
    },
    {
        "Name": "Deal with the baker",
        "Type": "Opportunity",
        "Period": "Republican",
        "Players": "2+",
        "Image": "Family",
        "Order": "Immediate",
        "Icons": [
            {"ID": "Pay amount", "Text": "-2"},
            {"ID": "Influence"},
            {"ID": "Pay amount", "Text": "-3"},
            {"ID": "Aureus"},
            {"ID": "Arrow"},
            {"ID": "Gain amount", "Text": "+2"},
            {"ID": "Grain"},
        ],
        "Text": "Pay 2 Influence and 3 Aureus. Gain 2 Grain.",
        "End": "Keep",
        "Trigger icon": [{"ID": "Aureus"}],
        "Trigger text": "When the card above gains Aureus, gain 1 Grain.",
        "Benefit icon": [{"ID": "Grain"}],
    },
    {
        "Name": "Construction techniques",
        "Type": "Opportunity",
        "Period": "Republican",
        "Players": "2+",
        "Image": "Building",
        "Order": "Immediate",
        "Icons": [
            {"ID": "Pay amount", "Text": "-2"},
            {"ID": "Influence"},
            {"ID": "Pay amount", "Text": "-1"},
            {"ID": "Papyrus"},
            {"ID": "Arrow"},
            {"ID": "Gain amount", "Text": "+4"},
            {"ID": "Wood"},
        ],
        "Text": "Pay 2 Influence and 1 Papyrus. Gain 4 Wood.",
        "End": "Keep",
        "Trigger icon": [{"ID": "Place tile"}],
        "Trigger text": "When the card above places a tile, gain 1 Wood.",
        "Benefit icon": [{"ID": "Wood"}],
    },
    {
        "Name": "Clear cut",
        "Type": "Opportunity",
        "Period": "Republican",
        "Players": "5+",
        "Image": "Ship",
        "Order": "Immediate",
        "Icons": [
            {"ID": "Pay amount", "Text": "-1"},
            {"ID": "Decrease production wood"},
            {"ID": "Arrow"},
            {"ID": "Gain amount", "Text": "+8"},
            {"ID": "Wood"},
        ],
        "Text": "Reduce your Wood production by 1. Gain 8 Wood.",
        "End": "Keep",
        "Trigger icon": [{"ID": "Production resource"}],
        "Trigger text": "When the card above increases your Grain, Wood, Metal, or Papyrus production, gain 1 Wood.",
        "Benefit icon": [{"ID": "Wood"}],
    },
    {
        "Name": "Jewelry expertise",
        "Type": "Opportunity",
        "Period": "Republican",
        "Players": "2+",
        "Image": "Building",
        "Order": "Immediate",
        "Icons": [
            {"ID": "Pay amount", "Text": "-3"},
            {"ID": "Influence"},
            {"ID": "Pay amount", "Text": "-4"},
            {"ID": "Papyrus"},
            {"ID": "Arrow"},
            {"ID": "Gain amount", "Text": "+4"},
            {"ID": "Metal"},
        ],
        "Text": "Pay 3 Influence and 4 Papyrus. Gain 4 Metal.",
        "End": "Keep",
        "Trigger icon": [{"ID": "Aureus"}],
        "Trigger text": "When the card above gains Aureus, gain 1 Metal.",
        "Benefit icon": [{"ID": "Metal"}],
    },
    {
        "Name": "Foreign connections",
        "Type": "Opportunity",
        "Period": "Republican",
        "Players": "2+",
        "Image": "Ship",
        "Order": "Immediate",
        "Icons": [
            {"ID": "Pay amount", "Text": "-1"},
            {"ID": "Influence"},
            {"ID": "Pay amount", "Text": "-2"},
            {"ID": "Grain"},
            {"ID": "Arrow"},
            {"ID": "Gain amount", "Text": "+4"},
            {"ID": "Papyrus"},
        ],
        "Text": "Pay 1 Influence and 2 Grain. Gain 4 Papyrus.",
        "End": "Keep",
        "Trigger icon": [{"ID": "Power"}],
        "Trigger text": "When the card above increases your Power, gain 1 Papyrus.",
        "Benefit icon": [{"ID": "Papyrus"}],
    },

    // 4 - Resource production

    {
        "Name": "Rotating crops",
        "Type": "Opportunity",
        "Period": "Republican",
        "Players": "2+",
        "Image": "Farming",
        "Order": "Immediate",
        "Icons": [
            {"ID": "Pay amount", "Text": "-3"},
            {"ID": "Influence"},
            {"ID": "Pay amount", "Text": "-4"},
            {"ID": "Grain"},
            {"ID": "Arrow"},
            {"ID": "Gain amount", "Text": "+2"},
            {"ID": "Production grain"},
        ],
        "Text": "Pay 3 Influence and 4 Grain. Increase your Grain production by 2.",
        "End": "Discard",
        "Benefit icon": [{"ID": "Production grain"}],
    },
    {
        "Name": "Selective cutting",
        "Type": "Opportunity",
        "Period": "Republican",
        "Players": "2+",
        "Image": "Ship",
        "Order": "Immediate",
        "Icons": [
            {"ID": "Pay amount", "Text": "-3"},
            {"ID": "Influence"},
            {"ID": "Pay amount", "Text": "-4"},
            {"ID": "Wood"},
            {"ID": "Arrow"},
            {"ID": "Gain amount", "Text": "+2"},
            {"ID": "Production wood"},
        ],
        "Text": "Pay 3 Influence and 4 Wood. Increase your Wood production by 2.",
        "End": "Discard",
        "Benefit icon": [{"ID": "Production wood"}],
    },
    {
        "Name": "Mining equipment",
        "Type": "Opportunity",
        "Period": "Republican",
        "Players": "2+",
        "Image": "Doorway",
        "Order": "Immediate",
        "Icons": [
            {"ID": "Pay amount", "Text": "-4"},
            {"ID": "Influence"},
            {"ID": "Pay amount", "Text": "-3"},
            {"ID": "Metal"},
            {"ID": "Arrow"},
            {"ID": "Gain amount", "Text": "+2"},
            {"ID": "Production metal"},
        ],
        "Text": "Pay 4 Influence and 3 Metal. Increase your Metal production by 2.",
        "End": "Discard",
        "Benefit icon": [{"ID": "Production metal"}],
    },
    {
        "Name": "Paperforming training",
        "Type": "Opportunity",
        "Period": "Republican",
        "Players": "3+",
        "Image": "Family",
        "Order": "Immediate",
        "Icons": [
            {"ID": "Pay amount", "Text": "-4"},
            {"ID": "Influence"},
            {"ID": "Pay amount", "Text": "-3"},
            {"ID": "Papyrus"},
            {"ID": "Arrow"},
            {"ID": "Gain amount", "Text": "+2"},
            {"ID": "Production papyrus"},
        ],
        "Text": "Pay 4 Influence and 3 Papyrus. Increase your Papyrus production by 2.",
        "End": "Discard",
        "Benefit icon": [{"ID": "Production papyrus"}],
    },

    // 4 - Dedicate for resource production pillar

    {
        "Name": "Central crop planning",
        "Type": "Opportunity",
        "Period": "Republican",
        "Players": "3+",
        "Image": "Farming",
        "Icons": [
            {"ID": "Dedicate tile", "Text": "L", "Optional": ["Civic"]},
            {"ID": "Tile adjacent", "Text": "S", "Optional": ["Shop"]},
            {"ID": "Arrow"},
            {"ID": "Gain amount", "Text": "+2"},
            {"ID": "Production grain"},
        ],
        "Text": "Dedicate a Library adjacent to a Shop. Increase your Grain production by 2.",
        "End": "Keep",
        "Trigger icon": [{"ID": "Power"}],
        "Trigger text": "When the card above increases your Power, increase your Grain production by 1.",
        "Benefit icon": [{"ID": "Production grain"}],
    },
    {
        "Name": "Grand forested estate",
        "Type": "Opportunity",
        "Period": "Republican",
        "Players": "4+",
        "Image": "Doorway",
        "Icons": [
            {"ID": "Tile before adjacent", "Text": "D", "Optional": ["Home"]},
            {"ID": "Dedicate tile", "Text": "D", "Optional": ["Home"]},
            {"ID": "Tile adjacent", "Text": "D", "Optional": ["Home"]},
            {"ID": "Arrow"},
            {"ID": "Gain amount", "Text": "+1"},
            {"ID": "Production wood"},
        ],
        "Text": "Dedicate a Domas adjacent to 2 other Domas. Increase your Wood production by 1.",
        "End": "Keep",
        "Trigger icon": [{"ID": "Wealth"}],
        "Trigger text": "When the card above increases your Wealth, increase your Wood production by 1.",
        "Benefit icon": [{"ID": "Production wood"}],
    },
    {
        "Name": "Metallurgy craftsmanship",
        "Type": "Opportunity",
        "Period": "Republican",
        "Players": "2+",
        "Image": "Building",
        "Icons": [
            {"ID": "Pay amount", "Text": "-1"},
            {"ID": "Influence"},
            {"ID": "Dedicate tile", "Text": "L", "Optional": ["Civic"]},
            {"ID": "Tile adjacent", "Text": "M", "Optional": ["Military"]},
            {"ID": "Arrow"},
            {"ID": "Gain amount", "Text": "+2"},
            {"ID": "Production metal"},
        ],
        "Text": "Pay 1 Influence. Dedicate a Library adjacent to a Military building. Increase your Metal production by 2.",
        "End": "Keep",
        "Trigger icon": [{"ID": "Production resource"}],
        "Trigger text": "When the card above increases your Grain, Wood, Metal, or Papyrus prodution, increase your Metal production by 1.",
        "Benefit icon": [{"ID": "Production metal"}],
    },
    {
        "Name": "War propoganda",
        "Type": "Opportunity",
        "Period": "Republican",
        "Players": "2+",
        "Image": "Warriors",
        "Icons": [
            {"ID": "Dedicate tile", "Text": "M", "Optional": ["Military"]},
            {"ID": "Arrow"},
            {"ID": "Gain amount", "Text": "+2"},
            {"ID": "Production papyrus"},
        ],
        "Text": "Dedicate a Military building. Increase your Papyrus production by 2.",
        "End": "Keep",
        "Trigger icon": [{"ID": "Production resource"}],
        "Trigger text": "When the card above increases your Grain, Wood, Metal, or Papyrus prodution, increase your Papyrus production by 1.",
        "Benefit icon": [{"ID": "Production papyrus"}],
    },

    // 3 - Wealth and power

    {
        "Name": "Lead a cohort",
        "Type": "Opportunity",
        "Period": "Republican",
        "Players": "2+",
        "Image": "Warriors",
        "Order": "Immediate",
        "Icons": [
            {"ID": "Pay amount", "Text": "-3"},
            {"ID": "Influence"},
            {"ID": "Pay amount", "Text": "-7"},
            {"ID": "Metal"},
            {"ID": "Arrow"},
            {"ID": "Gain amount", "Text": "+1"},
            {"ID": "Power"},
        ],
        "Text": "Pay 3 Influence and 7 Metal. Increase your Power by 1.",
        "End": "Discard",
        "Benefit icon": [{"ID": "Power"}],
    },
    {
        "Name": "Political circles",
        "Type": "Opportunity",
        "Period": "Republican",
        "Players": "2+",
        "Image": "Family",
        "Order": "Immediate",
        "Icons": [
            {"ID": "Pay amount", "Text": "-3"},
            {"ID": "Influence"},
            {"ID": "Pay amount", "Text": "-12"},
            {"ID": "Aureus"},
            {"ID": "Arrow"},
            {"ID": "Gain amount", "Text": "+1"},
            {"ID": "Power"},
        ],
        "Text": "Pay 3 Influence and 12 Aureus. Increase your Power by 1.",
        "End": "Discard",
        "Benefit icon": [{"ID": "Power"}],
    },
    {
        "Name": "Political marriage",
        "Type": "Opportunity",
        "Period": "Republican",
        "Players": "2+",
        "Image": "Family",
        "Order": "Immediate",
        "Icons": [
            {"ID": "Pay amount", "Text": "-3"},
            {"ID": "Influence"},
            {"ID": "Pay amount", "Text": "-8"},
            {"ID": "Grain"},
            {"ID": "Arrow"},
            {"ID": "Gain amount", "Text": "+1"},
            {"ID": "Wealth"},
        ],
        "Text": "Pay 3 Influence and 8 Grain. Increase your Wealth by 1.",
        "End": "Discard",
        "Benefit icon": [{"ID": "Wealth"}],
    },

    // 3 - Dedicate for power / wealth

    {
        "Name": "Magnate",
        "Type": "Opportunity",
        "Period": "Republican",
        "Players": "3+",
        "Image": "Ship",
        "Icons": [
            {"ID": "Dedicate tile", "Text": "S", "Optional": ["Shop"]},
            {"ID": "Tile adjacent", "Text": "S", "Optional": ["Shop"]},
            {"ID": "Arrow"},
            {"ID": "Gain amount", "Text": "+1"},
            {"ID": "Wealth"},
        ],
        "Text": "Dedicate a Shop adjacent to another Shop. Increase your Wealth by 1.",
        "End": "Discard",
        "Benefit icon": [{"ID": "Wealth"}],
    },
    {
        "Name": "Civic square",
        "Type": "Opportunity",
        "Period": "Republican",
        "Players": "2+",
        "Image": "Building",
        "Icons": [
            {"ID": "Dedicate tile", "Text": "L", "Optional": ["Civic"]},
            {"ID": "Tile adjacent", "Text": "L", "Optional": ["Civic"]},
            {"ID": "Arrow"},
            {"ID": "Gain amount", "Text": "+1"},
            {"ID": "Wealth"},
        ],
        "Text": "Dedicate a Library adjacent to another Library. Increase your Wealth by 1.",
        "End": "Discard",
        "Benefit icon": [{"ID": "Wealth"}],
    },
    {
        "Name": "Accounts of great battles",
        "Type": "Opportunity",
        "Period": "Republican",
        "Players": "2+",
        "Image": "Warriors",
        "Icons": [
            {"ID": "Dedicate tile", "Text": "L", "Optional": ["Civic"]},
            {"ID": "Tile adjacent", "Text": "M", "Optional": ["Military"]},
            {"ID": "Arrow"},
            {"ID": "Gain amount", "Text": "+1"},
            {"ID": "Power"},
        ],
        "Text": "Dedicate a Library adjacent to a Military building. Increase your Power by 1.",
        "End": "Discard",
        "Benefit icon": [{"ID": "Power"}],
    },

    // 2 - Dedicate for power / wealth with pillar

    {
        "Name": "Legion",
        "Type": "Opportunity",
        "Period": "Republican",
        "Players": "4+",
        "Image": "Warriors",
        "Icons": [
            {"ID": "Dedicate tile", "Text": "M", "Optional": ["Military"]},
            {"ID": "Pay amount", "Text": "-3"},
            {"ID": "Influence"},
            {"ID": "Arrow"},
            {"ID": "Gain amount", "Text": "+1"},
            {"ID": "Power"},
        ],
        "Text": "Dedicate a Military building. Pay 3 Influence. Increase your Power by 1.",
        "End": "Keep",
        "Trigger icon": [{"ID": "Production resource"}],
        "Trigger text": "When the card above increases your Grain, Wood, Metal, or Papyrus production, increase your Power by 1.",
        "Benefit icon": [{"ID": "Power"}],
    },
    {
        "Name": "Guild Leadership",
        "Type": "Opportunity",
        "Period": "Republican",
        "Players": "4+",
        "Image": "Doorway",
        "Icons": [
            {"ID": "Dedicate tile", "Text": "S", "Optional": ["Shop"]},
            {"ID": "Dedicate tile", "Text": "S", "Optional": ["Shop"]},
            {"ID": "Pay amount", "Text": "-1"},
            {"ID": "Influence"},
            {"ID": "Pay amount", "Text": "-6"},
            {"ID": "Papyrus"},
            {"ID": "Arrow"},
            {"ID": "Gain amount", "Text": "+1"},
            {"ID": "Wealth"},
        ],
        "Tight": true,
        "Text": "Dedicate 2 Shops. Pay 1 Influence and 6 Papyrus. Increase your Wealth by 1.",
        "End": "Keep",
        "Trigger icon": [{"ID": "Production resource"}],
        "Trigger text": "When the card above increases your Grain, Wood, Metal, or Papyrus production, increase your Wealth by 1.",
        "Benefit icon": [{"ID": "Wealth"}],
    },

    // 1 - Opportunity pillar

    {
        "Name": "Construction negotiations",
        "Type": "Opportunity",
        "Period": "Republican",
        "Players": "2+",
        "Image": "Building",
        "Order": "Immediate",
        "Icons": [
            {"ID": "Pay amount", "Text": "-1"},
            {"ID": "Influence"},
            {"ID": "Pay amount", "Text": "-7"},
            {"ID": "Wood"},
            {"ID": "Arrow"},
            {"ID": "Gain amount", "Text": "+1"},
            {"ID": "Opportunity card"},
        ],
        "Text": "Pay 1 Influence and 7 Wood. Gain 1 Opportunity.",
        "End": "Keep",
        "Trigger icon": [{"ID": "Place tile", "Optional": ["Multi"]}],
        "Trigger text": "When the card above places a tile, gain 1 Opportunity.",
        "Benefit icon": [{"ID": "Opportunity card"}],
    },

    // 1 - Aureus

    {
        "Name": "Foresight",
        "Type": "Opportunity",
        "Period": "Republican",
        "Players": "4+",
        "Image": "Building",
        "Order": "Immediate",
        "Icons": [
            {"ID": "Pay amount", "Text": "-1"},
            {"ID": "Influence"},
            {"ID": "Pay amount", "Text": "-1"},
            {"ID": "Metal"},
            {"ID": "Arrow"},
            {"ID": "Gain amount", "Text": "+X"},
            {"ID": "Aureus"},
        ],
        "Text": "Pay 1 Influence and 1 Metal. Gain 1 Aureus for each card in your hand (not including this one).",
        "End": "Discard",
        "Benefit icon": [{"ID": "Aureus"}],
    },

    // 1 - Aureus with pillar

    {
        "Name": "Double entry accounting",
        "Type": "Opportunity",
        "Period": "Republican",
        "Players": "2+",
        "Image": "Building",
        "Order": "Immediate",
        "Icons": [
            {"ID": "Pay amount", "Text": "-4"},
            {"ID": "Papyrus"},
            {"ID": "Arrow"},
            {"ID": "Gain amount", "Text": "+5"},
            {"ID": "Aureus"},
        ],
        "Text": "Pay 4 Papyrus. Gain 5 Aureus.",
        "End": "Keep",
        "Trigger icon": [{"ID": "Resource"}],
        "Trigger text": "When the card above gains Grain, Wood, Metal, or Papyrus, gain 1 Aureus.",
        "Benefit icon": [{"ID": "Aureus"}],
    },

    // 3 - Military

    {
        "Name": "Build a Barracks",
        "Type": "Opportunity",
        "Period": "Republican",
        "Players": "2+",
        "Image": "Warriors",
        "Icons": [
            {"ID": "Pay amount", "Text": "-1"},
            {"ID": "Influence"},
            {"ID": "Pay amount", "Text": "-5"},
            {"ID": "Grain"},
            {"ID": "Pay amount", "Text": "-5"},
            {"ID": "Metal"},
            {"ID": "Arrow"},
            {"ID": "Place tile", "Text": "B", "Optional": ["Military"]},
        ],
        "Text": "Pay 1 Influence, 5 Grain, and 5 Metal. Build a Barracks.",
        "End": "Discard",
        "Benefit icon": [{"ID": "Place tile", "Optional": ["Military"]}],
    },
    {
        "Name": "Build a Barracks",
        "Type": "Opportunity",
        "Period": "Republican",
        "Players": "3+",
        "Image": "Warriors",
        "Icons": [
            {"ID": "Pay amount", "Text": "-1"},
            {"ID": "Influence"},
            {"ID": "Pay amount", "Text": "-5"},
            {"ID": "Wood"},
            {"ID": "Pay amount", "Text": "-5"},
            {"ID": "Metal"},
            {"ID": "Arrow"},
            {"ID": "Place tile", "Text": "B", "Optional": ["Military"]},
        ],
        "Text": "Pay 1 Influence, 5 Wood, and 5 Metal. Build a Barracks.",
        "End": "Discard",
        "Benefit icon": [{"ID": "Place tile", "Optional": ["Military"]}],
    },
    {
        "Name": "Build a Parade",
        "Type": "Opportunity",
        "Period": "Republican",
        "Players": "2+",
        "Image": "Warriors",
        "Icons": [
            {"ID": "Pay amount", "Text": "-6"},
            {"ID": "Wood"},
            {"ID": "Pay amount", "Text": "-8"},
            {"ID": "Papyrus"},
            {"ID": "Arrow"},
            {"ID": "Place tile", "Text": "P", "Optional": ["Military"]},
        ],
        "Text": "Pay 6 Wood and 8 Papyrus. Build a Parade.",
        "End": "Discard",
        "Benefit icon": [{"ID": "Place tile", "Optional": ["Military"]}],
    },

    // 1 - Free temple

    {
        "Name": "Merchant's temple",
        "Type": "Opportunity",
        "Period": "Republican",
        "Players": "3+",
        "Image": "Doorway",
        "Icons": [
            {"ID": "Pay amount", "Text": "-3"},
            {"ID": "Influence"},
            {"ID": "Pay amount", "Text": "-3"},
            {"ID": "Aureus"},
            {"ID": "Arrow"},
            {"ID": "Tile before adjacent", "Text": "S", "Optional": ["Shop"]},
            {"ID": "Place tile", "Text": "T", "Optional": ["Temple"]},
            {"ID": "Tile adjacent", "Text": "S", "Optional": ["Shop"]},
        ],
        "Text": "Pay 3 Influence and 3 Aureus. Build a Temple on any free space adjacent to at least 2 Shops (ignore the cost on the tile).",
        "End": "Discard",
        "Benefit icon": [{"ID": "Place tile", "Optional": ["Temple"]}],
    },

    // 1 - Favorable buying

    {
        "Name": "Favorable buying contract",
        "Type": "Opportunity",
        "Period": "Republican",
        "Players": "3+",
        "Image": "Ship",
        "Icons": [
            {"ID": "Pay amount", "Text": "-X"},
            {"ID": "Aureus"},
            {"ID": "Arrow"},
            {"ID": "Gain amount", "Text": "+4"},
            {"ID": "Resource"},
        ],
        "Text": "Pick any resource: pay its current market price in Aurues and gain 4 of that resource.",
        "End": "Return",
        "Benefit icon": [{"ID": "Resource"}],
    },
]