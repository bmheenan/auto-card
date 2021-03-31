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
        "Unique backs": true,
        "Back function": fillBack,
    });
}

function fillTile(config, root) {
    set(config["Name"], get(root, "Name"));
    if (toggle(config["Type"], get(root, "Type"))) {
        set(config["Type"], get(root, "Type"));
    }
    toggle(false, get(root, "Common cost"));
    toggle(false, get(root, "Order"));
    if (toggle(config["Background"], get(root, "Background"))) {
        toggleOnly([config["Background"]], get(root, "Background"));
    }
}

function fillBack(config, root) {
    if (toggle(config["Cost"], get(root, "Common cost"))) {
        set(config["Cost"], get(get(root, "Common cost"), "Pay amount"));
        set(config["Next"], get(get(root, "Common cost"), "Next cost"));
        toggle(true, get(root, "Order"));
        set(config["Order"], get(root, "Order"));
        toggleOnly([config["Resource"]], get(get(root, "Common cost"), "Resource type"));
    }
}