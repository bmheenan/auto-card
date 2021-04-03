// Imperial period

var cardsP2 = [
    {
        "Name": "Bountiful harvest",
        "Type": "Opportunity",
        "Period": "Imperial",
        "Image": "Farming",
        "Order": "Immediate",
        "Icons": [
            {"ID": "Pay amount", "Text": "-1"},
            {"ID": "Influence"},
            {"ID": "Arrow"},
            {"ID": "Gain amount", "Text": "+4"},
            {"ID": "Grain"},
        ],
        "Text": "Pay 1 Influence. Gain 4 Grain.",
        "End": "Keep",
        "Trigger icon": [{"ID": "Production resource"}],
        "Trigger text": "When the card above increases your Grain, Wood, Metal, or Papyrus production, gain 1 Grain.",
        "Benefit icon": [{"ID": "Grain"}],
    },
    {
        "Name": "Tree cutting imports",
        "Type": "Opportunity",
        "Period": "Imperial",
        "Image": "Ship",
        "Order": "Immediate",
        "Icons": [
            {"ID": "Pay amount", "Text": "-1"},
            {"ID": "Influence"},
            {"ID": "Arrow"},
            {"ID": "Gain amount", "Text": "+4"},
            {"ID": "Wood"},
        ],
        "Text": "Pay 1 Influence. Gain 4 Wood.",
        "End": "Keep",
        "Trigger icon": [{"ID": "Production resource"}],
        "Trigger text": "When the card above increases your Grain, Wood, Metal, or Papyrus production, gain 1 Wood.",
        "Benefit icon": [{"ID": "Wood"}],
    },
    {
        "Name": "Jewelry expertise",
        "Type": "Opportunity",
        "Period": "Imperial",
        "Image": "Family",
        "Order": "Immediate",
        "Icons": [
            {"ID": "Pay amount", "Text": "-2"},
            {"ID": "Influence"},
            {"ID": "Arrow"},
            {"ID": "Gain amount", "Text": "+4"},
            {"ID": "Metal"},
        ],
        "Text": "Pay 2 Influence. Gain 4 Metal.",
        "End": "Keep",
        "Trigger icon": [{"ID": "Resource"}],
        "Trigger text": "When the card above gains a Grain, Wood, Metal, or Papyrus, gain 1 Metal.",
        "Benefit icon": [{"ID": "Metal"}],
    },
    {
        "Name": "Patron of the University",
        "Type": "Opportunity",
        "Period": "Imperial",
        "Image": "Family",
        "Order": "Immediate",
        "Icons": [
            {"ID": "Pay amount", "Text": "-2"},
            {"ID": "Influence"},
            {"ID": "Arrow"},
            {"ID": "Gain amount", "Text": "+4"},
            {"ID": "Papyrus"},
        ],
        "Text": "Pay 2 Influence. Gain 4 Papyrus.",
        "End": "Keep",
        "Trigger icon": [{"ID": "Resource"}],
        "Trigger text": "When the card above gains a Grain, Wood, Metal, or Papyrus, gain 1 Papyrus.",
        "Benefit icon": [{"ID": "Papyrus"}],
    },
    {
        "Name": "Agricultural tools",
        "Type": "Opportunity",
        "Period": "Imperial",
        "Image": "Farming",
        "Order": "Immediate",
        "Icons": [
            {"ID": "Pay amount", "Text": "-1"},
            {"ID": "Influence"},
            {"ID": "Pay amount", "Text": "-6"},
            {"ID": "Metal"},
            {"ID": "Arrow"},
            {"ID": "Gain amount", "Text": "+2"},
            {"ID": "Production grain"},
        ],
        "Text": "Pay 1 Influence and 6 Metal. Increase your Grain production by 2.",
        "End": "Discard",
        "Benefit icon": [{"ID": "Production grain"}],
    },
    {
        "Name": "Apprenticeship",
        "Type": "Opportunity",
        "Period": "Imperial",
        "Image": "Building",
        "Order": "Immediate",
        "Icons": [
            {"ID": "Pay amount", "Text": "-1"},
            {"ID": "Influence"},
            {"ID": "Pay amount", "Text": "-6"},
            {"ID": "Papyrus"},
            {"ID": "Arrow"},
            {"ID": "Gain amount", "Text": "+2"},
            {"ID": "Production wood"},
        ],
        "Text": "Pay 1 Influence and 6 Papyrus. Increase your Wood production by 2.",
        "End": "Discard",
        "Benefit icon": [{"ID": "Production wood"}],
    },
    {
        "Name": "Eastern trade route",
        "Type": "Opportunity",
        "Period": "Imperial",
        "Image": "Ship",
        "Order": "Immediate",
        "Icons": [
            {"ID": "Pay amount", "Text": "-2"},
            {"ID": "Influence"},
            {"ID": "Pay amount", "Text": "-5"},
            {"ID": "Aureus"},
            {"ID": "Pay amount", "Text": "-4"},
            {"ID": "Grain"},
            {"ID": "Arrow"},
            {"ID": "Gain amount", "Text": "+1"},
            {"ID": "Production metal"},
        ],
        "Text": "Pay 2 Influence, 5 Aureus, and 4 Grain. Increase your Metal production by 1.",
        "End": "Keep",
        "Trigger icon": [{"ID": "Wealth"}],
        "Trigger text": "When the card above increases your Wealth, increase your Metal production by 1.",
        "Benefit icon": [{"ID": "Production metal"}],
    },
    {
        "Name": "Pulp industry",
        "Type": "Opportunity",
        "Period": "Imperial",
        "Image": "Doorway",
        "Order": "Immediate",
        "Icons": [
            {"ID": "Pay amount", "Text": "-2"},
            {"ID": "Influence"},
            {"ID": "Pay amount", "Text": "-5"},
            {"ID": "Aureus"},
            {"ID": "Pay amount", "Text": "-4"},
            {"ID": "Wood"},
            {"ID": "Arrow"},
            {"ID": "Gain amount", "Text": "+1"},
            {"ID": "Production papyrus"},
        ],
        "Text": "Pay 2 Influence, 5 Aureus, and 4 Wood. Increase your Papyrus production by 1.",
        "End": "Keep",
        "Trigger icon": [{"ID": "Power"}],
        "Trigger text": "When the card above increases your Power, increase your Papyrus production by 1.",
        "Benefit icon": [{"ID": "Production papyrus"}],
    },
    {
        "Name": "Martial labor",
        "Type": "Opportunity",
        "Period": "Imperial",
        "Image": "Warriors",
        "Icons": [
            {"ID": "Dedicate tile", "Text": "M", "Optional": ["Military"]},
            {"ID": "Arrow"},
            {"ID": "Gain amount", "Text": "+1"},
            {"ID": "Production resource"},
        ],
        "Text": "Dedicate a Military building. Increase your Grain, Wood, Metal, or Papyrus production by 1.",
        "End": "Discard",
        "Benefit icon": [{"ID": "Production resource"}],
    },
    {
        "Name": "Offering collection",
        "Type": "Opportunity",
        "Period": "Imperial",
        "Image": "Ceiling",
        "Icons": [
            {"ID": "Pay amount", "Text": "-2"},
            {"ID": "Papyrus"},
            {"ID": "Dedicate tile", "Text": "R", "Optional": ["Temple"]},
            {"ID": "Arrow"},
            {"ID": "Gain amount", "Text": "+1"},
            {"ID": "Production resource"},
        ],
        "Text": "Pay 2 Papyrus and dedicate a Religion building. Increase your Grain, Wood, Metal, or Papyrus production by 1.",
        "End": "Discard",
        "Benefit icon": [{"ID": "Production resource"}],
    },
    {
        "Name": "Favor of the Gods",
        "Type": "Opportunity",
        "Period": "Imperial",
        "Image": "Ceiling",
        "Icons": [
            {"ID": "Pay amount", "Text": "-2"},
            {"ID": "Influence"},
            {"ID": "Dedicate tile", "Text": "R", "Optional": ["Temple"]},
            {"ID": "Tile adjacent", "Text": "R", "Optional": ["Temple"]},
            {"ID": "Arrow"},
            {"ID": "Gain amount", "Text": "+2"},
            {"ID": "Power"},
        ],
        "Text": "Pay 2 Influence and dedicate a Religion building adjacent to another Religion building. Increase your Power by 2.",
        "End": "Discard",
        "Benefit icon": [{"ID": "Power"}],
    },
    {
        "Name": "Wealthy neighborhood",
        "Type": "Opportunity",
        "Period": "Imperial",
        "Image": "Family",
        "Icons": [
            {"ID": "Pay amount", "Text": "-3"},
            {"ID": "Influence"},
            {"ID": "Tile before adjacent", "Text": "L", "Optional": ["Civic"]},
            {"ID": "Dedicate tile", "Text": "D", "Optional": ["Home"]},
            {"ID": "Tile adjacent", "Text": "S", "Optional": ["Shop"]},
            {"ID": "Arrow"},
            {"ID": "Gain amount", "Text": "+2"},
            {"ID": "Wealth"},
        ],
        "Text": "Pay 3 Influence and dedicate a Domus adjacent to a Library and a Shop. Increase your Wealth by 2.",
        "End": "Discard",
        "Benefit icon": [{"ID": "Wealth"}],
    },
    {
        "Name": "Distinguished service",
        "Type": "Opportunity",
        "Period": "Imperial",
        "Image": "Warriors",
        "Icons": [
            {"ID": "Pay amount", "Text": "-6"},
            {"ID": "Metal"},
            {"ID": "Tile before adjacent", "Text": "M", "Optional": ["Military"]},
            {"ID": "Dedicate tile", "Text": "D", "Optional": ["Home"]},
            {"ID": "Tile adjacent", "Text": "L", "Optional": ["Civic"]},
            {"ID": "Arrow"},
            {"ID": "Gain amount", "Text": "+1"},
            {"ID": "Power"},
        ],
        "Text": "Pay 6 Metal and dedicate a Domus adjacent to a Military building and a Library. Increase your Power by 1.",
        "End": "Discard",
        "Benefit icon": [{"ID": "Power"}],
    },
    {
        "Name": "Guild leadership",
        "Type": "Opportunity",
        "Period": "Imperial",
        "Image": "Ceiling",
        "Icons": [
            {"ID": "Pay amount", "Text": "-3"},
            {"ID": "Influence"},
            {"ID": "Dedicate tile", "Text": "S", "Optional": ["Shop"]},
            {"ID": "Dedicate tile", "Text": "S", "Optional": ["Shop"]},
            {"ID": "Arrow"},
            {"ID": "Gain amount", "Text": "+1"},
            {"ID": "Wealth"},
        ],
        "Text": "Pay 3 Influence and dedicate 2 Shops. Increase your Wealth by 1.",
        "End": "Keep",
        "Trigger icon": [{"ID": "Production resource"}],
        "Trigger text": "When the card above increases your Grain, Wood, Metal, or Papyrus production, increase your Wealth by 1.",
        "Benefit icon": [{"ID": "Wealth"}],
    },
    {
        "Name": "New battlefield tactics",
        "Type": "Opportunity",
        "Period": "Imperial",
        "Image": "Warriors",
        "Icons": [
            {"ID": "Pay amount", "Text": "-6"},
            {"ID": "Grain"},
            {"ID": "Tile before adjacent", "Text": "M", "Optional": ["Military"]},
            {"ID": "Dedicate tile", "Text": "L", "Optional": ["Civic"]},
            {"ID": "Tile adjacent", "Text": "M", "Optional": ["Military"]},
            {"ID": "Arrow"},
            {"ID": "Gain amount", "Text": "+1"},
            {"ID": "Power"},
        ],
        "Text": "Pay 6 Grain and dedicate a Library adjacent to 2 Military buildings. Increase your Power by 1.",
        "End": "Keep",
        "Trigger icon": [{"ID": "Production resource"}],
        "Trigger text": "When the card above increases your Grain, Wood, Metal, or Papyrus production, increase your Power by 1.",
        "Benefit icon": [{"ID": "Power"}],
    },
    {
        "Name": "Barracks",
        "Type": "Opportunity",
        "Period": "Imperial",
        "Image": "Warriors",
        "Icons": [
            {"ID": "Pay amount", "Text": "-1"},
            {"ID": "Influence"},
            {"ID": "Pay amount", "Text": "-6"},
            {"ID": "Grain"},
            {"ID": "Pay amount", "Text": "-5"},
            {"ID": "Metal"},
            {"ID": "Arrow"},
            {"ID": "Place tile", "Text": "B", "Optional": ["Military"]},
        ],
        "Text": "Pay 1 Influence, 6 Grain, and 5 Metal. Build a Barracks.",
        "End": "Discard",
        "Benefit icon": [{"ID": "Place tile", "Optional": ["Military"]}],
    },
    {
        "Name": "Barracks",
        "Type": "Opportunity",
        "Period": "Imperial",
        "Image": "Warriors",
        "Icons": [
            {"ID": "Pay amount", "Text": "-2"},
            {"ID": "Influence"},
            {"ID": "Pay amount", "Text": "-3"},
            {"ID": "Wood"},
            {"ID": "Pay amount", "Text": "-5"},
            {"ID": "Papyrus"},
            {"ID": "Arrow"},
            {"ID": "Place tile", "Text": "B", "Optional": ["Military"]},
        ],
        "Text": "Pay 2 Influence, 3 Wood, and 5 Papyrus. Build a Barracks.",
        "End": "Discard",
        "Benefit icon": [{"ID": "Place tile", "Optional": ["Military"]}],
    },
    {
        "Name": "Parade",
        "Type": "Opportunity",
        "Period": "Imperial",
        "Image": "Warriors",
        "Icons": [
            {"ID": "Pay amount", "Text": "-3"},
            {"ID": "Grain"},
            {"ID": "Pay amount", "Text": "-3"},
            {"ID": "Wood"},
            {"ID": "Pay amount", "Text": "-3"},
            {"ID": "Metal"},
            {"ID": "Pay amount", "Text": "-3"},
            {"ID": "Papyrus"},
            {"ID": "Arrow"},
            {"ID": "Place tile", "Text": "P", "Optional": ["Military"]},
        ],
        "Tight": true,
        "Text": "Pay 3 Grain, 3 Wood, 3 Metal, and 3 Papyrus. Build a Parade.",
        "End": "Discard",
        "Benefit icon": [{"ID": "Place tile", "Optional": ["Military"]}],
    },
    {
        "Name": "Amphitheatre",
        "Type": "Opportunity",
        "Period": "Imperial",
        "Image": "Building",
        "Icons": [
            {"ID": "Pay amount", "Text": "-5"},
            {"ID": "Aureus"},
            {"ID": "Pay amount", "Text": "-5"},
            {"ID": "Grain"},
            {"ID": "Pay amount", "Text": "-5"},
            {"ID": "Wood"},
            {"ID": "Arrow"},
            {"ID": "Place tile", "Text": "A"},
        ],
        "Text": "Pay 5 Aureus, 5 Grain, and 5 Wood. Build an Amphitheatre.",
        "End": "Discard",
        "Benefit icon": [{"ID": "Place tile"}],
    },
    {
        "Name": "Oracle",
        "Type": "Opportunity",
        "Period": "Imperial",
        "Image": "Ceiling",
        "Icons": [
            {"ID": "Pay amount", "Text": "-1"},
            {"ID": "Influence"},
            {"ID": "Pay amount", "Text": "-5"},
            {"ID": "Metal"},
            {"ID": "Pay amount", "Text": "-5"},
            {"ID": "Papyrus"},
            {"ID": "Arrow"},
            {"ID": "Place tile", "Text": "O", "Optional":["Temple"]},
        ],
        "Text": "Pay 1 Influence, 5 Metal, and 5 Papyrus. Build an Oracle.",
        "End": "Discard",
        "Benefit icon": [{"ID": "Place tile", "Optional":["Temple"]}],
    },
]