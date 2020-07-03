//@include common-data.js
//@include utility.js
go();

function go() {
    automateCards({
        "Rows": 4,
        "Columns": 6,
        "Export path": "/Users/brandonheenan/photoshopexport/",
        "Export name prefix": "cards common",
        "Card width": 1000,
        "Card height": 1500,
        "Card info": cardInfo,
        "Fill function": fillCard,
        "Unique backs": true,
        "Back function": backFunction,
    });
}

function fillCard(config, root, iconTemplates) {
    
    // Header
    set(config["Name"], get(root, "Name"));
    set(config["Num"], get(root, "Num"));

    // Common project
    if (toggle(config["Type"] === "Common project", get(root, "Common project"))) {
        set(config["Text"], get(get(root, "Common project"), "Text"));
    }

    // Boon
    if (toggle(config["Type"] === "Boon", get(root, "Boon"))) {
        set(config["Text"], get(get(root, "Boon"), "Text"));
    }

    // Icons
    if (config["Icons"]) {
        copyIcons(iconTemplates, get(root, "Icons"), config["Icons"], {
            "x": 0,
            "y": 1018,
            "width": 1000,
        });
    }

    // Opportunity
    if (toggle(config["Type"] === "Opportunity", get(root, "Opportunity"))) {
        set(config["Text"], get(get(root, "Opportunity"), "Text"));
    }

    // Archived
    toggle(false, get(root, "Archived"));
    set(config["Archived hint"], get(get(root, "Archived"), "Hint"));

    // Setup
    set(config["Setup"], get(root, "Setup"));
}

function backFunction(config, root) {
    if (!config["Always active"]) {
        toggle(true, get(root, "Archived"));
    }
}