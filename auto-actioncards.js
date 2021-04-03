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
    for (var i = 0; i < cardsP1.length; i++) {
        cards.push(cardsP1[i])
    }
    for (var i = 0; i < cardsP2.length; i++) {
        cards.push(cardsP2[i])
    }
    for (var i = 0; i < cardsP3.length; i++) {
        cards.push(cardsP3[i])
    }
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

    // The last generation card is special
    if (config["Type"] === "Last generation") {
        set("Last generation", get(root, "Name"));
        set("If this card is visible: this is the last generation of the game.", get(root, "Text"))
        toggleOnly("Cityscape", get(root, "Flavor image"))
        toggle(false, get(root, "Type"));
        toggle(false, get(root, "Order"));
        toggle(false, get(root, "Type"));
        toggle(false, get(root, "Trigger text"));
        toggle(false, get(root, "Trigger icon"));
        toggle(false, get(root, "Benefit icon"));
        toggle(false, get(root, "End of generation"));
        return
    }
    
    // Header
    set(config["Name"], get(root, "Name"));
    if (toggle(config["Type"] === "Starting", get(get(root, "Type"), "Starting"))) {
        toggleOnly([config["Player"]], get(get(get(root, "Type"), "Starting"), "Player"));
    }
    if (toggle(config["Type"] === "Opportunity", get(get(root, "Type"), "Opportunity"))) {
        toggleOnly([config["Period"]], get(get(get(root, "Type"), "Opportunity"), "Period"));
        set(config["Players"], get(get(get(root, "Type"), "Opportunity"), "Players"));
    }
    if (toggle(config["Type"] === "Family", get(get(root, "Type"), "Family"))) {
        toggleOnly([config["Family type"]], get(get(get(root, "Type"), "Family"), "Family type"));
        rs = ["Influence", "Aureus", "Grain", "Wood", "Metal", "Papyrus"];
        for (var i = 0; i < rs.length; i++) {
            set(config["Starting resources"][rs[i]], get(get(get(get(root, "Type"), "Family"), "Amounts"), rs[i]))
        }
    }

    // Image
    if (config["Image"]) {
        toggleOnly([config["Image"]], get(root, "Flavor image"))
    } else {
        toggleOnly(["Warriors"], get(root, "Flavor image"))
    }
    

    // Immediate, first, icons, text
    toggle(config["Order"] === "Immediate", get(get(root, "Order"), "Immediate"));
    toggle(config["Order"] === "First", get(get(root, "Order"), "First"));
    copyIcons(iconTemplates, get(root, "Icons"), config["Icons"], {
        "x": 20,
        "y": 850,
        "width": 834,
        "tight": config["Tight"],
    });
    set(config["Text"], get(root, "Text"));

    // Triggers and generation cleanup
    toggleOnly([config["End"]], get(root, "End of generation"));
    if (config["Trigger icon"]) {
        copyIcons(iconTemplates, get(root, "Trigger icon"), config["Trigger icon"], {
            "x": 874,
            "y": 1083,
            "width": 90,
        });
    }
    if (toggle(config["Trigger text"], get(root, "Trigger text"))) {
        set(config["Trigger text"], get(root, "Trigger text"));
    }
    if (config["Benefit icon"]) {
        copyIcons(iconTemplates, get(root, "Benefit icon"), config["Benefit icon"], {
            "x": 874,
            "y": 1365,
            "width": 90,
        });
    }
}