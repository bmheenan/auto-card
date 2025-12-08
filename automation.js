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
    // Main toggle
    toggleOnly([config["Type"]], get(root, "Card type"));

    // Player counts
    var showPlayerCounts = config["Type"] === "Encounter";
    if (toggle(showPlayerCounts, get(root, "Player count"))) {
        set(config["Player count"], getPath(root, ["Player count", "Count"]));
    }

    // Character
    if (config["Type"] === "Character") {
        toggleOnly([config["Character"]], getPath(root, ["Card type", "Character"]));
        toggleOnly([config["Variation"]], getPath(root, ["Card type", "Character", config["Character"], "Variation"]));
    }

    // Encounter
    if (config["Type"] === "Encounter") {
        // Encounter-based toggles
        toggleOnly([config["Encounter"]], getPath(root, ["Card type", "Encounter", "Top banner"]));
        toggleOnly([config["Encounter"]], getPath(root, ["Card type", "Encounter", "Action"]));
        toggleOnly([config["Encounter"]], getPath(root, ["Card type", "Encounter", "Stash"]));
        toggleOnly([config["Encounter"]], getPath(root, ["Card type", "Encounter", "Splash"]));

        // Plunder/Peril-based toggles and rank
        if (config["Encounter"] == "Goods" || config["Encounter"] == "Treasure" || config["Encounter"] == "Artifact") {
            // Plunder

            // Bottom banner
            toggleOnly(["Plunder"], getPath(root, ["Card type", "Encounter", "Bottom banner"]));

            // Rank
            toggle(false, getPath(root, ["Card type", "Encounter", "Peril rank"]));
            toggle(true, getPath(root, ["Card type", "Encounter", "Plunder rank"]));
            set(config["Rank"], getPath(root, ["Card type", "Encounter", "Plunder rank", "Rank"]));
        }
        if (config["Encounter"] == "Debauchery" || config["Encounter"] == "Storm" || config["Encounter"] == "Authority") {
            // Peril

            // Bottom banner
            toggleOnly(["Peril"], getPath(root, ["Card type", "Encounter", "Bottom banner"]));

            // Rank
            toggle(true, getPath(root, ["Card type", "Encounter", "Peril rank"]));
            toggle(false, getPath(root, ["Card type", "Encounter", "Plunder rank"]));
            set(config["Rank"], getPath(root, ["Card type", "Encounter", "Peril rank", "Rank"]));
        }
    }
}