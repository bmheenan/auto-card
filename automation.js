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

    // Trusted/Marked
    if (config["Type"] === "Trusted" || config["Type"] === "Marked") {
        toggleOnly([config["Character"]], getPath(root, ["Card type", config["Type"], "Character"]));
    }

    // Encounter
    if (config["Type"] === "Encounter") {
        var plunderPeril = "Plunder";
        var morningNight = "Night";
        if (config["Encounter"] == "Debauchery" || config["Encounter"] == "Storm" || config["Encounter"] == "Authority"
            || config["Encounter"] == "Betrayer"
        ) {
            plunderPeril = "Peril";
        }
        if (config["Encounter"] == "Artifact" || config["Encounter"] == "Storm"
            || config["Encounter"] == "Debauchery"
        ) {
            morningNight = "Morning";
        }

        if (toggle(config["Player count"], getPath(root, ["Card type", "Encounter", "Player count"]))) {
            toggleOnly([plunderPeril], getPath(root, ["Card type", "Encounter", "Player count"]));
            set(
                config["Player count"],
                getPath(root, ["Card type", "Encounter", "Player count", plunderPeril, "Count"])
            );
        }

        toggleOnly([config["Encounter"]], getPath(root, ["Card type", "Encounter", "Icon"]));
        toggleOnly([config["Encounter"]], getPath(root, ["Card type", "Encounter", "Action"]));
        toggleOnly([morningNight], getPath(root, ["Card type", "Encounter", "Background for action"]));
        toggleOnly([config["Encounter"]], getPath(root, ["Card type", "Encounter", "Stash"]));
        toggleOnly([plunderPeril], getPath(root, ["Card type", "Encounter", "Background for stash"]));
        toggleOnly([config["Encounter"]], getPath(root, ["Card type", "Encounter", "Splash"]));
        toggleOnly([config["Encounter"]], getPath(root, ["Card type", "Encounter", "Effect"]));

        set(
            config["Encounter"],
            getPath(root, ["Card type", "Encounter", "Header", plunderPeril, "Title"])
        );
        toggleOnly([plunderPeril], getPath(root, ["Card type", "Encounter", "Header"]));
        toggleOnly([plunderPeril], getPath(root, ["Card type", "Encounter", "Rank"]));
        set(config["Rank"], getPath(root, ["Card type", "Encounter", "Rank", plunderPeril, "Rank"]));
    }

    // Notoriety
    if (config["Type"] === "Notoriety") {
        toggle(config["x3"], getPath(root, ["Card type", "Notoriety", "x3"]));
    }
}