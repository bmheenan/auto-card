// Republican Period

var cardsP1 = [
    {
        "Name": "Harvest",
        "Type": "Opportunity",
        "Period": "Republican",
        "Image": "Farming",
        "Order": "Immediate",
        "Icons": [
            {"ID": "Pay amount", "Text": "-1"},
            {"ID": "Influence"},
            {"ID": "Arrow"},
            {"ID": "Gain amount", "Text": "+3"},
            {"ID": "Grain"},
        ],
        "Text": "Pay 1 Influence. Gain 3 Grain.",
        "End": "Keep",
        "Trigger icon": [{"ID": "Place tile", "Optional": "Multi"}],
        "Trigger text": "Gain 1 Grain if the next card builds a building.",
        "Benefit icon": [{"ID": "Grain"}],
    },
    {
        "Name": "Reclaimed barrels",
        "Type": "Opportunity",
        "Period": "Republican",
        "Image": "Ship",
        "Order": "Immediate",
        "Icons": [
            {"ID": "Pay amount", "Text": "-1"},
            {"ID": "Influence"},
            {"ID": "Arrow"},
            {"ID": "Gain amount", "Text": "+3"},
            {"ID": "Wood"},
        ],
        "Text": "Pay 1 Influence. Gain 3 Wood.",
        "End": "Keep",
        "Trigger icon": [{"ID": "Resource"}],
        "Trigger text": "Gain 1 Wood if the next card gains Grain, Wood, Metal, or Papyrus.",
        "Benefit icon": [{"ID": "Wood"}],
    },
    {
        "Name": "Land surveys",
        "Type": "Opportunity",
        "Period": "Republican",
        "Image": "Building",
        "Order": "Immediate",
        "Icons": [
            {"ID": "Pay amount", "Text": "-1"},
            {"ID": "Influence"},
            {"ID": "Arrow"},
            {"ID": "Gain amount", "Text": "+3"},
            {"ID": "Metal"},
        ],
        "Text": "Pay 1 Influence. Gain 3 Metal.",
        "End": "Keep",
        "Trigger icon": [{"ID": "Opportunity"}],
        "Trigger text": "Gain 1 Metal if the next card gains an Opportunity.",
        "Benefit icon": [{"ID": "Metal"}],
    },
    {
        "Name": "Civic planning",
        "Type": "Opportunity",
        "Period": "Republican",
        "Image": "Building",
        "Order": "Immediate",
        "Icons": [
            {"ID": "Pay amount", "Text": "-1"},
            {"ID": "Influence"},
            {"ID": "Arrow"},
            {"ID": "Gain amount", "Text": "+3"},
            {"ID": "Papyrus"},
        ],
        "Text": "Pay 1 Influence. Gain 3 Papyrus.",
        "End": "Keep",
        "Trigger icon": [{"ID": "Place tile", "Optional": "Multi"}],
        "Trigger text": "Gain 1 Papyrus if the next card builds a building.",
        "Benefit icon": [{"ID": "Papyrus"}],
    },
    {
        "Name": "Exclusive trade routes",
        "Type": "Opportunity",
        "Period": "Republican",
        "Image": "Ship",
        "Order": "Immediate",
        "Icons": [
            {"ID": "Pay amount", "Text": "-1"},
            {"ID": "Influence"},
            {"ID": "Pay amount", "Text": "-3"},
            {"ID": "Metal"},
            {"ID": "Arrow"},
            {"ID": "Gain amount", "Text": "+5"},
            {"ID": "Aureus"},
        ],
        "Text": "Pay 1 Influence and 3 Metal. Gain 5 Aureus.",
        "End": "Keep",
        "Trigger icon": [{"ID": "Resource"}],
        "Trigger text": "Gain 1 Aureus if the next card gains a Grain, Wood, Metal, or Papyrus.",
        "Benefit icon": [{"ID": "Aureus"}],
    },
    {
        "Name": "Mining equipment",
        "Type": "Opportunity",
        "Period": "Republican",
        "Image": "Doorway",
        "Order": "Immediate",
        "Icons": [
            {"ID": "Pay amount", "Text": "-2"},
            {"ID": "Wood"},
            {"ID": "Pay amount", "Text": "-2"},
            {"ID": "Papyrus"},
            {"ID": "Arrow"},
            {"ID": "Gain amount", "Text": "+1"},
            {"ID": "Production metal"},
        ],
        "Text": "Pay 2 Wood and 2 Papyrus. Increase your Metal production by 1.",
        "End": "Discard",
        "Benefit icon": [{"ID": "Production metal"}],
    },
    {
        "Name": "Paperforming training",
        "Type": "Opportunity",
        "Period": "Republican",
        "Image": "Family",
        "Order": "Immediate",
        "Icons": [
            {"ID": "Pay amount", "Text": "-3"},
            {"ID": "Aureus"},
            {"ID": "Pay amount", "Text": "-2"},
            {"ID": "Grain"},
            {"ID": "Arrow"},
            {"ID": "Gain amount", "Text": "+1"},
            {"ID": "Production papyrus"},
        ],
        "Text": "Pay 3 Aureus and 2 Grain. Increase your Papyrus production by 1.",
        "End": "Discard",
        "Benefit icon": [{"ID": "Production papyrus"}],
    },
    {
        "Name": "Local market",
        "Type": "Opportunity",
        "Period": "Republican",
        "Image": "Ship",
        "Icons": [
            {"ID": "Pay amount", "Text": "-1"},
            {"ID": "Influence"},
            {"ID": "Tile before adjacent", "Text": "S", "Optional": ["Shop"]},
            {"ID": "Dedicate tile", "Text": "S", "Optional": ["Shop"]},
            {"ID": "Tile adjacent", "Text": "S", "Optional": ["Shop"]},
            {"ID": "Arrow"},
            {"ID": "Gain amount", "Text": "+1"},
            {"ID": "Production grain"},
        ],
        "Text": "Pay 1 Influence and dedicate a Shop adjacent to 2 other Shops. Increase your Grain production by 1.",
        "End": "Keep",
        "Trigger icon": [{"ID": "Wealth"}],
        "Trigger text": "Increase your Grain production by 1 if the next card increases your Wealth.",
        "Benefit icon": [{"ID": "Production grain"}],
    },
    {
        "Name": "Forrested estate",
        "Type": "Opportunity",
        "Period": "Republican",
        "Image": "Doorway",
        "Icons": [
            {"ID": "Pay amount", "Text": "-1"},
            {"ID": "Influence"},
            {"ID": "Tile before adjacent", "Text": "D", "Optional": ["Home"]},
            {"ID": "Dedicate tile", "Text": "D", "Optional": ["Home"]},
            {"ID": "Tile adjacent", "Text": "D", "Optional": ["Home"]},
            {"ID": "Arrow"},
            {"ID": "Gain amount", "Text": "+1"},
            {"ID": "Production wood"},
        ],
        "Text": "Pay 1 Influence and dedicate a Domus adjacent to 2 other Domus. Increase your Wood production by 1.",
        "End": "Keep",
        "Trigger icon": [{"ID": "Power"}],
        "Trigger text": "Increase your Wood production by 1 if the next card increases your Power.",
        "Benefit icon": [{"ID": "Production wood"}],
    },
    {
        "Name": "Military service",
        "Type": "Opportunity",
        "Period": "Republican",
        "Image": "Warriors",
        "Order": "Immediate",
        "Icons": [
            {"ID": "Pay amount", "Text": "-2"},
            {"ID": "Influence"},
            {"ID": "Pay amount", "Text": "-8"},
            {"ID": "Metal"},
            {"ID": "Arrow"},
            {"ID": "Gain amount", "Text": "+1"},
            {"ID": "Power"},
        ],
        "Text": "Pay 2 Influence and 8 Metal. Increase your Power by 1.",
        "End": "Discard",
        "Benefit icon": [{"ID": "Power"}],
    },
    {
        "Name": "Business partnerships",
        "Type": "Opportunity",
        "Period": "Republican",
        "Image": "Ship",
        "Order": "Immediate",
        "Icons": [
            {"ID": "Pay amount", "Text": "-2"},
            {"ID": "Influence"},
            {"ID": "Pay amount", "Text": "-10"},
            {"ID": "Aureus"},
            {"ID": "Arrow"},
            {"ID": "Gain amount", "Text": "+1"},
            {"ID": "Wealth"},
        ],
        "Text": "Pay 2 Influence and 10 Aureus. Increase your Wealth by 1.",
        "End": "Discard",
        "Benefit icon": [{"ID": "Wealth"}],
    },
    {
        "Name": "Civic square",
        "Type": "Opportunity",
        "Period": "Republican",
        "Image": "Doorway",
        "Icons": [
            {"ID": "Pay amount", "Text": "-1"},
            {"ID": "Influence"},
            {"ID": "Dedicate tile", "Text": "L", "Optional": ["Civic"]},
            {"ID": "Tile adjacent", "Text": "L", "Optional": ["Civic"]},
            {"ID": "Arrow"},
            {"ID": "Gain amount", "Text": "+1"},
            {"ID": "Power"},
        ],
        "Text": "Pay 1 Influence and dedicate a Library adjacent to another Library. Increase your Power by 1.",
        "End": "Discard",
        "Benefit icon": [{"ID": "Power"}],
    },
    {
        "Name": "Magnate",
        "Type": "Opportunity",
        "Period": "Republican",
        "Image": "Doorway",
        "Icons": [
            {"ID": "Pay amount", "Text": "-1"},
            {"ID": "Influence"},
            {"ID": "Pay amount", "Text": "-3"},
            {"ID": "Papyrus"},
            {"ID": "Dedicate tile", "Text": "S", "Optional": ["Shop"]},
            {"ID": "Tile adjacent", "Text": "S", "Optional": ["Shop"]},
            {"ID": "Arrow"},
            {"ID": "Gain amount", "Text": "+2"},
            {"ID": "Wealth"},
        ],
        "Text": "Pay 1 Influence, 3 Papyrus, and dedicate a Shop adjacent to another Shop. Increase your Wealth by 2.",
        "End": "Discard",
        "Benefit icon": [{"ID": "Wealth"}],
    },
    {
        "Name": "Cartography",
        "Type": "Opportunity",
        "Period": "Republican",
        "Image": "Ship",
        "Icons": [
            {"ID": "Pay amount", "Text": "-1"},
            {"ID": "Influence"},
            {"ID": "Pay amount", "Text": "-5"},
            {"ID": "Papyrus"},
            {"ID": "Dedicate tile", "Text": "L", "Optional": ["Civic"]},
            {"ID": "Tile adjacent", "Text": "S", "Optional": ["Shop"]},
            {"ID": "Arrow"},
            {"ID": "Gain amount", "Text": "+1"},
            {"ID": "Power"},
        ],
        "Text": "Pay 1 Influence and 5 Papyrus. Dedicate a Library adjacent to a Shop. Increase your Power by 1.",
        "End": "Keep",
        "Trigger icon": [{"ID": "Production resource"}],
        "Trigger text": "Increase your Power by 1 if the next card increases your Grain, Wood, Metal, or Papyrus production.",
        "Benefit icon": [{"ID": "Power"}],
    },
    {
        "Name": "Barracks",
        "Type": "Opportunity",
        "Period": "Republican",
        "Image": "Warriors",
        "Icons": [
            {"ID": "Pay amount", "Text": "-1"},
            {"ID": "Influence"},
            {"ID": "Pay amount", "Text": "-5"},
            {"ID": "Wood"},
            {"ID": "Pay amount", "Text": "-4"},
            {"ID": "Metal"},
            {"ID": "Arrow"},
            {"ID": "Place tile", "Text": "B", "Optional": ["Military"]},
        ],
        "Text": "Pay 1 Influence, 5 Wood, and 4 Metal. Build a Barracks.",
        "End": "Discard",
        "Benefit icon": [{"ID": "Place tile", "Optional": ["Military"]}],
    },
    {
        "Name": "Parade",
        "Type": "Opportunity",
        "Period": "Republican",
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
]