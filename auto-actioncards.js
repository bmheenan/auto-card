//@include cards-family.js
//@include cards-action-starting.js
//@include cards-action-p0.js
//@include cards-action-p1.js
//@include cards-action-p2.js
//@include cards-action-p3.js
//@include utility.js

go();

function go() {
    var cards = [];
    for (var i = 0; i < cardsFamily.length; i++) {
        cards.push(cardsFamily[i])
    }
    for (var i = 0; i < cardsStarting.length; i++) {
        cards.push(cardsStarting[i])
    }
    for (var i = 0; i < cardsP0.length; i++) {
        cards.push(cardsP0[i])
    }
    /*for (var i = 0; i < cardsP1.length; i++) {
        cards.push(cardsP1[i])
    }
    for (var i = 0; i < cardsP2.length; i++) {
        cards.push(cardsP2[i])
    }
    for (var i = 0; i < cardsP3.length; i++) {
        cards.push(cardsP3[i])
    }*/
    automateCards({
        "Rows": 4,
        "Columns": 6,
        "Export path": "/Users/brandonheenan/photoshopexport/",
        "Export name prefix": "cards action",
        "Card width": 1000,
        "Card height": 1500,
        "Card info": cards,
        "Fill function": fillCard,
        "Unique backs": false,
    });
}

function fillCard(config, root, iconTemplates) {

    // Header
    set(config["Name"], get(root, "Name"));

    // Type
    toggleOnly([config["Type"]], get(root, "Type"));
    if (config["Type"] === "Starting") {
        toggleOnly([config["Player"]], get(get(get(root, "Type"), "Starting"), "Player"));
    }
    if (config["Type"] === "Court") {
        toggleOnly([config["Period"]], get(get(get(root, "Type"), "Court"), "Period"));
    }

    // Image
    if (config["Image"]) {
        toggleOnly([config["Image"]], get(root, "Flavor image"))
    } else {
        toggleOnly(["Warriors"], get(root, "Flavor image"))
    }

    // Starting resources
    if (toggle(config["Starting resources"], get(root, "Starting resources"))) {
        copyIcons(iconTemplates, get(get(root, "Starting resources"), "Icons"), config["Starting resources"], {
            "x": 20,
            "y": 680,
            "width": 960,
            "tight": config["Tight"],
        });
    }


    // Immediate, first, icons, text
    //toggle(config["Order"] === "Immediate", get(get(root, "Order"), "Immediate"));
    //toggle(config["Order"] === "First", get(get(root, "Order"), "First"));
    /*copyIcons(iconTemplates, get(root, "Icons"), config["Icons"], {
        "x": 20,
        "y": 850,
        "width": 960,
        "tight": config["Tight"],
    });*/
    set(config["Text"], get(root, "Text"));
}