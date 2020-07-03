//@include tiles-data.js
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
    set(config["Num"], get(root, "Num"));
    set(config["Type"], get(root, "Type"));
    toggleOnly([config["Background"]], get(root, "Background"));
}