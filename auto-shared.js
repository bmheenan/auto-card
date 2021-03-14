//@include cards-shared.js
//@include utility.js
go();

function go() {
    automateCards({
        "Rows": 4,
        "Columns": 6,
        "Export path": "/Users/brandonheenan/photoshopexport/",
        "Export name prefix": "cards shared",
        "Card width": 1000,
        "Card height": 1500,
        "Card info": cardsShared,
        "Fill function": fillCard,
        "Unique backs": false
    });
}

function fillCard(config, root, iconTemplates) {
    
    // Header
    set(config["Name"], get(root, "Name"));

    // Caption
    toggleOnly([config["Caption"]], get(root, "Caption"));

    // Tile type
    if (toggle(config["Tile type"], get(root, "Tile type"))) {
        toggleOnly([config["Tile type"]], get(root, "Tile type"));
    }

    // Image
    toggleOnly([config["Image"]], get(root, "Flavor image"));

    // Icons
    if (config["Icons"]) {
        copyIcons(iconTemplates, get(root, "Icons"), config["Icons"], {
            "x": 0,
            "y": 1050,
            "width": 1000,
        });
    }

    // Boon
    set(config["Boon"], get(get(root, "Boon"), "Text"));
}