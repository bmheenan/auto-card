//@include cards-clan.js
//@include cards-action-starting.js
//@include cards-action-p0.js
//@include cards-action-p1.js
//@include cards-action-p2.js
//@include cards-action-p3.js
//@include utility.js

go();

function go() {
    var cards = [];
    for (var i = 0; i < cardsClan.length; i++) {
        cards.push(cardsClan[i])
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

function fillCard(config, root, actionTemplates, iconTemplates) {

    var iconConfig = {
        "Padding": {
            "Gain amount": 20,
            "Pay amount": 20,
            "Other players": 20,
            "Lowest player": 20,
            "Dedicate adjacent tile": 0,
        },
        "Default padding": 40,
    };

    // Header
    set(config["Name"], get(root, "Name"));

    // Type
    toggleOnly([config["Type"]], get(root, "Type"));
    if (config["Type"] === "Starting") {
        toggleOnly([config["Player"]], get(get(root, "Type"), "Starting"));
    }
    if (config["Type"] === "Court") {
        toggleOnly([config["Period"]], get(get(get(root, "Type"), "Court"), "Period"));
    }

    // Image
    placeImage(get(get(root, "Flavor image"), "Placeholder"), activeDocument.path + "/" + config["Image"]);
    get(root, "Flavor image").merge();

    // Starting resources
    if (toggle(config["Starting resources"], get(root, "Starting resources"))) {
        copyIcons(iconTemplates, get(get(root, "Starting resources"), "Icons"), config["Starting resources"], iconConfig);
    }

    // Actions
    var actionPlaceholder = get(get(root, "Actions"), "Placeholder");
    var actions = [];
    for (var i = 0; i < config["Options"].length; i++) {
        if (i > 0) {
            var divider = get(actionTemplates, "Divider").duplicate(actionPlaceholder, ElementPlacement.PLACEBEFORE);
            actions.push(divider);
        }
        var action = get(actionTemplates, "Icons").duplicate(actionPlaceholder, ElementPlacement.PLACEBEFORE);
        toggle(i === 0, get(get(action, "Order"), "First"));
        toggle(i !== 0, get(get(action, "Order"), "Or"));
        copyIcons(iconTemplates, get(action, "Icons"), config["Options"][i]["Icons"], iconConfig);
        if (toggle(config["Options"][i]["After"], get(action, "After"))) {
            toggleOnly([config["Options"][i]["After"]], get(action, "After"));
        }
        action = action.merge();
        actions.push(action);

        var text = get(actionTemplates, "Text").duplicate(actionPlaceholder, ElementPlacement.PLACEBEFORE);
        set(config["Options"][i]["Text"], get(text, "Text"));
        text = text.merge();
        actions.push(text);
    }
    spaceVertically(actions, actionPlaceholder);
    actionPlaceholder.remove();
}