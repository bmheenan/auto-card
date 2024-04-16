var cardsStartingBase = [
    {
        "Name": "Hold court",
        "Image": "Hold court",
        "Icons": [],
        "Text": "--------------\rGain a Court card. Endow.\r----- OR -----\rPay 1 Rice. Gain 2 Court cards. Endow.\r----- OR -----\rPay 3 Rice. Gain 3 Court cards. Endow.",
    },
    {
        "Name": "Collect taxes",
        "Image": "Tax",
        "Icons": [],
        "Text": "--------------\rTax a street in Edo. Endow.\r----- OR -----\rPay 2 Metal. Tax 2 streets in Edo. Endow.\r----- OR -----\rGain 5 Gold.\rRefill taxation spaces.\rEndow.",
    },
    {
        "Name": "Trade resources",
        "Image": "Trade resources",
        "Icons": [],
        "Text": "--------------\rTake the below actions as many times as you want in any order, then endow:\r     ~~~~~~\r     Increase the price of any resource by 1, then pay\r     that much Gold. Gain 1 of that resource.\r     ~~ or ~~\r     Pay 1 of any resource. Decrease its price by 1,\r     then gain that much Gold.",
    },
    {
        "Name": "Establish your clan in Edo",
        "Image": "Move to Edo",
        "Icons": [],
        "Text": "--------------\rPay 2 Wood. Build a Peasant home. Discard.\r----- OR -----\rPay 2 Wood. Build a Samurai home. Discard.\r----- OR -----\rPay 3 Metal. Build a Merchant shop. Discard.\r----- OR -----\rPay 3 Stone. Build a Temple. Discard.",
    },
    {
        "Name": "Finish Generation",
        "Image": "Finish generation",
        "Icons": [],
        "Text": "--------------\rEndow, then place Gold on your Endowment equal to the number of players who have not finished the Generation.\r\rTake no more actions this Generation.",
    },
];

var cardsStarting = [];

var colors = [
    "Birch",
    "Cherrywood",
    /*"Green",
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