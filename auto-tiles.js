//@include tiles.js
//@include utility.js
go();

function go() {
    automateCards({
        "Rows": 6,
        "Columns": 6,
        "Export path": "/Users/brandonheenan/photoshopexport/",
        "Export name prefix": "tiles",
        "Card width": 1000,
        "Card height": 1000,
        "Card info": tileInfo,
        "Fill function": fillTile,
        "Unique backs": false,
    });
}

function fillTile(config, root, actionTemplates, iconTemplates) {
    copyIcons(iconTemplates, get(root, "Icon"), [{ "ID": "Big " + config["Name"] }], {});
    set(config["Name"], get(root, "Name"));
    if (toggle(config["Tax"], get(root, "Tax"))) {
        copyIcons(iconTemplates, get(get(root, "Tax"), "Icon"), [{ "ID": config["Tax"] }], {});
    }
    if (toggle(config["Scores"], get(root, "Scoring"))) {
        copyIcons(iconTemplates, get(get(root, "Scoring"), "Icons"), config["Scores"], { "Default padding": 30 });
    }
    toggle(config["Tax"] || config["Scores"], get(root, "Bottom bar"));
    toggleOnly([config["Name"]], get(root, "Image"));
}