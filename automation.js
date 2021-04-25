//@include cards.js
//@include utility.js

automateCards({
    "Rows": 4,
    "Columns": 6,
    "Export path": "/Users/brandonheenan/photoshopexport/",
    "Export name prefix": "cards",
    "Card width": 1000,
    "Card height": 1500,
    "Card info": cards,
    "Fill function": fillCard,
    "Unique backs": false,
});

function fillCard(config, root, iconTemplates) {
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
}