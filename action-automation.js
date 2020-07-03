//@include action-data.js
//@include utility.js
go();

function go() {
    automateCards({
        "Rows": 4,
        "Columns": 6,
        "Export path": "/Users/brandonheenan/photoshopexport/",
        "Export name prefix": "cards action",
        "Card width": 1000,
        "Card height": 1500,
        "Card info": cardInfo,
        "Fill function": fillCard,
        "Unique backs": false,
    });
}

function fillCard(config, root, iconTemplates) {
    
    // Header
    set(config["Name"], get(root, "Name"));
    if (toggle(config["Type"] === "Starting", get(get(root, "Type"), "Starting"))) {
        toggleOnly([config["Player"]], get(get(root, "Type"), "Starting"));
    }
    if (toggle(config["Type"] === "Opportunity", get(get(root, "Type"), "Opportunity"))) {
        toggleOnly([config["Compass"]], get(get(get(root, "Type"), "Opportunity"), "Compass"));
    }

    // Order, icons, text
    toggleOnly([config["Order"]], get(root, "Order"));
    copyIcons(iconTemplates, get(root, "Icons"), config["Icons"], {
        "x": 20,
        "y": 908,
        "width": 834,
    });
    set(config["Text"], get(root, "Text"));

    // Footer and sidebar
    toggleOnly([config["End"]], get(root, "End"));
    if (config["Trigger icon"]) {
        copyIcons(iconTemplates, get(root, "Trigger icon"), config["Trigger icon"], {
            "x": 874,
            "y": 1104,
            "width": 90,
        });
    }
    set(config["Trigger text"], get(root, "Trigger text"));
    copyIcons(iconTemplates, get(root, "Benefit icon"), config["Benefit icon"], {
        "x": 874,
        "y": 1365,
        "width": 90,
    });
    
/*
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
        copyIcons(iconTemplates, root, config["Icons"], {
            "x": 0,
            "y": 1025,
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
    */
}