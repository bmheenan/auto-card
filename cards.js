// Period of Kings

var cards = [
    {
        "Name": "The first card",
        "Image": "Sword",
        "Type": "Red",
        "Icons": [
            {"ID": "Set of cards"},
            {"ID": "Gain amount", "Text": "+1"},
            {"ID": "Star"},
        ],
        "Text": "Gain new cards and a star",
    },
    {
        "Name": "The second card",
        "Image": "Wonder",
        "Type": "Blue",
        "Icons": [
            {"ID": "Pay amount", "Text": "-10"},
            {"ID": "Coin"},
            {"ID": "Arrow"},
            {"ID": "Place hex", "Text": "HX", "Optional": ["Purple"]},
        ],
        "Text": "Pay 10 coins to place a purple HX hex",
    },
    {
        "Name": "The third card",
        "Image": "Castle",
        "Type": "Green",
        "Icons": [
            {"ID": "Pay amount", "Text": "+99"},
            {"ID": "Coin"},
        ],
        "Text": "Gain 99 coins",
        "Waves": true,
    },
]