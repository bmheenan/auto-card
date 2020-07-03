//@include family-data.js
//@include utility.js
go();

function go() {
    automateCards({
        "Rows": 4,
        "Columns": 6,
        "Export path": "/Users/brandonheenan/photoshopexport/",
        "Export name prefix": "cards family",
        "Card width": 1000,
        "Card height": 1500,
        "Card info": cardInfo,
        "Fill function": fillCard,
        "Unique backs": false,
    });
}

function fillCard(config, root, iconTemplates) {

    // Name
    set(config["Name"], get(root, "Name"));

    // Type
    toggleOnly([config["Type"]],get(root, "Type"));

    // Resources
    var resources = ["Influence", "Aureus", "Grain", "Wood", "Metal", "Papyrus"];
    for (var i = 0; i < resources.length; i++) {
        set(config[resources[i]], get(get(root, "Resources"), resources[i] + " amount"));
    }

    // Drawn cards
    set("+" + config["Draw cards"], get(root, "Opportunity card amount"));
    set("Draw " + config["Draw cards"] + " Opportunity cards.", get(root, "Opportunity card text"));

    if (toggle(config["Added card"], get(root, "Added card"))) {
        var added = get(root, "Added card");
        set("Add '" + config["Added card"] + "' to your hand:", get(added, "Added card title"));
        set(config["Added card text"], get(added, "Added card text"));
    }
}