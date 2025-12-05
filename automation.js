//@include cards.js
//@include utility.js

automateCards({
    "Rows": 3,
    "Columns": 3,
    "Export path": "/Users/brandonheenan/photoshopexport/",
    "Export name prefix": "pnp",
    "Card width": 780,
    "Card height": 1080,
    "Card info": cards,
    "Fill function": fillCard,
    "Unique backs": false,
});

function fillCard(config, root, iconTemplates) {
    toggleOnly([config["Type"]], get(root, "Card type"));
    var showPlayerCounts = config["Type"] === "Sail";
    if (toggle(showPlayerCounts, get(root, "Player count bottom"))) {
        set(config["Player count"], getPath(root, ["Player count bottom", "Player count bottom"]));
    }
    if (config["Type"] === "Sail") {
        set(config["Title"], getPath(root, ["Card type", "Sail", "Title"]));
        set(config["Rank"], getPath(root, ["Card type", "Sail", "Rank", "Amount"]));
        toggleOnly([config["Title"]], getPath(root, ["Card type", "Sail", "Splash"]));
        copyIcons(iconTemplates, getPath(root, ["Card type", "Sail", "Icons"]), config["Icons"], {
            "x": 140,
            "y": 50,
            "center": false,
            "vertical": true,
        })
    }
}