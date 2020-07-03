var cardInfo = [
    {
        "Name": "Place Domas (Home)",
        "Num": "1",
        "Setup": "Setup: Place Domas tiles here.",
        "Type": "Common project",
        "Icons": [
            {"ID": "Pay amount", "Text": "-6"},
            {"ID": "Grain"},
            {"ID": "Arrow",          },
            {"ID": "Place tile",     "Text": "1"},
        ],
        "Text": "Pay 6 Grain. Place a Domas (Home) Tile.\rWhen all Domas tiles have been placed, archive this card and activate 'Place Insulae (Home)'.",
        "Archived hint": "All Domas tiles have already been placed",
    },
    {
        "Name": "Place Insulae (Home)",
        "Num": "2",
        "Setup": "Setup: Place Insulae tiles here.",
        "Type": "Common project",
        "Icons": [
            {"ID": "Pay amount", "Text": "-12"},
            {"ID": "Grain"},
            {"ID": "Arrow",          },
            {"ID": "Place tile",     "Text": "2"},
        ],
        "Text": "Pay 12 Grain. Place an Insulae (Home) Tile.\rWhen all Insulae tiles have been placed, archive this card.",
        "Archived hint": "Activates when all Domas tiles have been placed",
    },
    {
        "Name": "Homes",
        "Num": "3",
        "Type": "Boon",
        "Icons": [
            {"ID": "Tile owned",    "Text": "H"},
            {"ID": "Tile owned",    "Text": "H"},
            {"ID": "Arrow",         },
            {"ID": "VP",            "Text": "+1"},
        ],
        "Text": "Every 2 owned Home tiles: +1 VP.",
        "Always active": true,
    },
    {
        "Name": "Place Artisian (Shop)",
        "Num": "4",
        "Setup": "Setup: Place Artisian tiles here.",
        "Type": "Common project",
        "Icons": [
            {"ID": "Pay amount", "Text": "-8"},
            {"ID": "Wood"},
            {"ID": "Arrow",         },
            {"ID": "Place tile",    "Text": "4"},
        ],
        "Text": "Pay 8 Wood. Place an Artisian (Shop) Tile.\rWhen all Artisian tiles have been placed, archive this card and activate 'Place Forum (Shop)'.",
        "Archived hint": "All Artisian tiles have already been placed",
    },
    {
        "Name": "Place Forum (Shop)",
        "Num": "5",
        "Setup": "Setup: Place Forum tiles here.",
        "Type": "Common project",
        "Icons": [
            {"ID": "Pay amount", "Text": "-16"},
            {"ID": "Wood"},
            {"ID": "Arrow",         },
            {"ID": "Place tile",    "Text": "5"},
        ],
        "Text": "Pay 16 Wood. Place a Forum (Shop) Tile.\rWhen all Forum tiles have been placed, archive this card.",
        "Archived hint": "Activates when all Artisian tiles have been placed",
    },
    {
        "Name": "Shops",
        "Num": "6",
        "Type": "Boon",
        "Icons": [
            {"ID": "Tile owned",    "Text": "S"},
            {"ID": "Tile adjacent", "Text": "T"},
            {"ID": "Arrow",         },
            {"ID": "VP",            "Text": "+3"},
        ],
        "Text": "Every owned Shop adjacent to at least 1 Temple: +3 VP.",
        "Always active": true,
    },
    {
        "Name": "Place Temple",
        "Num": "7",
        "Setup": "Setup: Place Temple tiles here.",
        "Type": "Common project",
        "Icons": [
            {"ID": "Pay amount", "Text": "-10"},
            {"ID": "Metal"},
            {"ID": "Arrow",         },
            {"ID": "Place tile",    "Text": "7"},
        ],
        "Text": "Pay 10 Metal. Place a Temple Tile.\rWhen all Temple tiles have been placed, archive this card.",
        "Archived hint": "All Temple tiles have already been placed",
    },
    {
        "Name": "Temples",
        "Num": "8",
        "Type": "Boon",
        "Icons": [
            {"ID": "Tile owned",    "Text": "T"},
            {"ID": "Tile adjacent", "Text": "H"},
            {"ID": "Arrow",         },
            {"ID": "VP",            "Text": "+2x"},
        ],
        "Text": "Every owned Temple: +2 VP for each adjacent Home.",
        "Always active": true,
    },
    {
        "Name": "Place Library (Civic)",
        "Num": "9",
        "Setup": "Setup: Place Library tiles here.",
        "Type": "Common project",
        "Icons": [
            {"ID": "Pay amount", "Text": "-6"},
            {"ID": "Papyrus"},
            {"ID": "Arrow",         },
            {"ID": "Place tile",    "Text": "9"},
        ],
        "Text": "Pay 6 Papyrus. Place a Library (Civic) Tile.\rWhen all Library tiles have been placed, archive this card and activate 'Place Court (Civic)'.",
        "Archived hint": "All Library tiles have already been placed",
    },
    {
        "Name": "Place Court (Civic)",
        "Num": "10",
        "Setup": "Setup: Place Court tiles here.",
        "Type": "Common project",
        "Icons": [
            {"ID": "Pay amount", "Text": "-12"},
            {"ID": "Papyrus"},
            {"ID": "Arrow",         },
            {"ID": "Place tile",    "Text": "10"},
        ],
        "Text": "Pay 12 Papyrus. Place a Court (Civic) Tile.\rWhen all Court tiles have been placed, archive this card and activate 'Place Comitium (Civic)'.",
        "Archived hint": "Activates when all Library tiles have been placed",
    },
    {
        "Name": "Place Comitium (Civic)",
        "Num": "11",
        "Setup": "Setup: Place Comitium tiles here.",
        "Type": "Common project",
        "Icons": [
            {"ID": "Pay amount", "Text": "-20"},
            {"ID": "Papyrus"},
            {"ID": "Arrow",         },
            {"ID": "Place tile",    "Text": "11"},
        ],
        "Text": "Pay 20 Papyrus. Place a Comitium (Civic) Tile.\rWhen all Comitium tiles have been placed, archive this card.",
        "Archived hint": "Activates when all Court tiles have been placed",
    },
    {
        "Name": "Amphitheatres",
        "Num": "12",
        "Setup": "Setup: Place Amphitheatre tiles here.",
        "Type": "Boon",
        "Icons": [
            {"ID": "Tile owned",    "Text": "12"},
            {"ID": "Tile negative", "Text": "S"},
            {"ID": "Arrow",         },
            {"ID": "VP",            "Text": "+12-4X"},
        ],
        "Text": "Owned Amphitheatre: +12 VP -4VP for each adjacent Shop.",
        "Archived hint": "Activates when you play the matching action card",
    },
    {
        "Name": "Oracles",
        "Num": "13",
        "Setup": "Setup: Place Oracle tiles here.",
        "Type": "Boon",
        "Icons": [
            {"ID": "Tile owned",    "Text": "13"},
            {"ID": "Tile adjacent", "Text": "T"},
            {"ID": "Arrow",         },
            {"ID": "VP",            "Text": "+4X"},
        ],
        "Text": "Every owned Oracle: +4VP for each adjacent Temple.",
        "Archived hint": "Activates when you play the matching action card",
    },
    {
        "Name": "Barracks (Military)",
        "Num": "14",
        "Setup": "Setup: Place Barracks tiles here.",
        "Type": "Boon",
        "Icons": [
            {"ID": "Tile owned",    "Text": "14"},
            {"ID": "Arrow",         },
            {"ID": "VP",            "Text": "+4"},
            {"ID": "Gain amount",   "Text": "2+"},
            {"ID": "VP",            "Text": "+3"},
        ],
        "Text": "Every owned Barracks: +4 VP.\r+3VP VP if a player owns at least 2.",
        "Archived hint": "Activates when you play the matching action card",
    },
    {
        "Name": "Parades (Military)",
        "Num": "15",
        "Setup": "Setup: Place Parade tiles here.",
        "Type": "Boon",
        "Icons": [
            {"ID": "Tile owned",    "Text": "15"},
            {"ID": "Arrow",         },
            {"ID": "VP",            "Text": "+6"},
        ],
        "Text": "Every owned Parade: +6 VP.",
        "Archived hint": "Activates when you play the matching action card",
    },
];