var cardsStartingBase = [
    {
        "Name": "Hold court",
        "Image": "Hold court",
        "Options": [
            {
                "Text": "Gain a Court card. Endow.",
                "Icons": [
                    { "ID": "Arrow" },
                    { "ID": "Gain amount", "Text": "1" },
                    { "ID": "Court card" },
                ],
                "After": "Endow",
            },
            {
                "Text": "Pay 1 Silk. Gain 2 Court cards. Endow.",
                "Icons": [
                    { "ID": "Pay amount", "Text": "-1" },
                    { "ID": "Silk" },
                    { "ID": "Arrow" },
                    { "ID": "Gain amount", "Text": "2" },
                    { "ID": "Court card" },
                ],
                "After": "Endow",
            },
            {
                "Text": "Pay 3 Silk. Gain 3 Court cards. Endow.",
                "Icons": [
                    { "ID": "Pay amount", "Text": "-3" },
                    { "ID": "Silk" },
                    { "ID": "Arrow" },
                    { "ID": "Gain amount", "Text": "3" },
                    { "ID": "Court card" },
                ],
                "After": "Endow",
            },

        ],
    },
    {
        "Name": "Collect taxes",
        "Image": "Tax",
        "Options": [
            {
                "Text": "Tax a street. Endow.",
                "Icons": [
                    { "ID": "Arrow" },
                    { "ID": "Gain amount", "Text": "1" },
                    { "ID": "Tax street" },
                ],
                "After": "Endow",
            },
            {
                "Text": "Gain 5 Gold. Refill Taxation spaces. Endow.",
                "Icons": [
                    { "ID": "Arrow" },
                    { "ID": "Gain amount", "Text": "5" },
                    { "ID": "Gold" },
                    { "ID": "Refill tax" },
                ],
                "After": "Endow",
            },
            {
                "Text": "Pay 2 Rice. Tax 2 streets. Endow.",
                "Icons": [
                    { "ID": "Pay amount", "Text": "-2" },
                    { "ID": "Rice" },
                    { "ID": "Arrow" },
                    { "ID": "Gain amount", "Text": "2" },
                    { "ID": "Tax street" },
                ],
                "After": "Endow",
            },
            {
                "Text": "Pay 3 Rice. Refill Taxation spaces, then tax a street. Endow.",
                "Icons": [
                    { "ID": "Pay amount", "Text": "-3" },
                    { "ID": "Rice" },
                    { "ID": "Arrow" },
                    { "ID": "Refill tax" },
                    { "ID": "Gain amount", "Text": "1" },
                    { "ID": "Tax street" },
                ],
                "After": "Endow",
            },
        ],
    },
    {
        "Name": "Establish your clan",
        "Image": "Move to Edo",
        "Options": [
            {
                "Text": "Pay 2 Wood. Build a Peasant home. Discard.",
                "Icons": [
                    { "ID": "Pay amount", "Text": "-2" },
                    { "ID": "Wood" },
                    { "ID": "Arrow" },
                    { "ID": "Place tile", "Optional": "Peasant home" },
                ],
                "After": "Discard",
            },
            {
                "Text": "Pay 2 Wood. Build a Samurai home. Discard.",
                "Icons": [
                    { "ID": "Pay amount", "Text": "-2" },
                    { "ID": "Wood" },
                    { "ID": "Arrow" },
                    { "ID": "Place tile", "Optional": "Samurai home" },
                ],
                "After": "Discard",
            },
            {
                "Text": "Pay 2 Stone. Build a Merchant shop. Discard.",
                "Icons": [
                    { "ID": "Pay amount", "Text": "-2" },
                    { "ID": "Stone" },
                    { "ID": "Arrow" },
                    { "ID": "Place tile", "Optional": "Merchant shop" },
                ],
                "After": "Discard",
            },
            {
                "Text": "Pay 2 Stone. Build a Temple. Discard.",
                "Icons": [
                    { "ID": "Pay amount", "Text": "-2" },
                    { "ID": "Stone" },
                    { "ID": "Arrow" },
                    { "ID": "Place tile", "Optional": "Temple" },
                ],
                "After": "Discard",
            },
        ],
    },
    {
        "Name": "Pass",
        "Image": "Finish generation",
        "Options": [
            {
                "Text": "Endow, then place Gold on your Endowment equal to the number of players who have not yet passed in this Generation.\r\rTake no more actions for the rest of this Generation.",
                "Icons": [
                    { "ID": "Pass" },
                ],
            },
        ],
    },
];

var cardsStarting = [];

var colors = [
    "Birch",
    /*"Cherrywood",
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