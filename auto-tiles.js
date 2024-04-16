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

function fillTile(config, root) {
    set(config["Name"], get(root, "Name"));
    if (toggle(config["Tax"], get(root, "Tax"))) {
        toggleOnly([config["Tax"]], get(get(root, "Tax"), "Effect"));
    }
    if (toggle(config["Scores"], get(root, "Scoring"))) {
        toggleOnly([config["Scores"]], get(get(root, "Scoring"), "Scores"));
    }
}