//@include cards.js
//@include utility.js

automateCards({
    "Rows": 3,
    "Columns": 3,
    "Export path": "/Users/brandonheenan/photoshopexport/",
    "Export name prefix": "pnp",
    "Card width": 800,
    "Card height": 1100,
    "Card info": cards,
    "Fill function": fillCard,
    "Unique backs": false,
});

function fillCard(config, root, iconTemplates) {
    toggleOnly([config["Type"]], get(root, "Card type"));
    var showPlayerCounts = config["Type"] === "Plunder" || config["Type"] === "Peril";
    if (toggle(showPlayerCounts, get(root, "Player count top"))) {
        set(config["Player count"], get(get(root, "Player count top"), "Player count top"));
    }
    if (toggle(showPlayerCounts, get(root, "Player count bottom"))) {
        set(config["Player count"], get(get(root, "Player count bottom"), "Player count bottom"));
    }
    if (config["Type"] === "Plunder") {
        set(config["Value"], get(get(get(get(root, "Card type"), "Plunder"), "Top"), "Value"));
        set(config["Value"], get(get(get(get(root, "Card type"), "Plunder"), "Bottom"), "Value"));
        toggleOnly([config["Value"].toString() + " coin"], get(get(get(root, "Card type"), "Plunder"), "Icons"));
    }
    /*
    // Sets the name at the top of the card
    set(config["Name"], get(root, "Name"));

    // Shows the correct image on the top half of the card
    toggleOnly([config["Image"]], get(root, "Flavor image"));

    // Sets the "type" of the card (red, green, blue)
    toggleOnly([config["Type"]], get(root, "Type"));

    // Makes the icons
    copyIcons(iconTemplates, get(root, "Icons"), config["Icons"], {
        "x": 0,
        "y": 900,
        "width": 1000,
    })

    // Sets the main text (under the icons) of the card
    set(config["Text"], get(root, "Text"));

    // Optionally shows the "waves" at the bottom of the card
    toggle(config["Waves"], get(root, "Waves"));
    */
}