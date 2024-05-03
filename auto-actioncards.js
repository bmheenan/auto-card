//@include cards-clan.js
//@include cards-action-starting.js
//@include cards-action-p0.js
//@include cards-action-p1.js
//@include cards-action-p2.js
//@include cards-action-p3.js
//@include utility.js

go();

function go() {
    var cards = [];
    for (var i = 0; i < cardsClan.length; i++) {
        cards.push(cardsClan[i])
    }
    /*for (var i = 0; i < cardsStarting.length; i++) {
        cards.push(cardsStarting[i])
    }
    /*for (var i = 0; i < cardsP0.length; i++) {
        cards.push(cardsP0[i])
    }
    for (var i = 0; i < cardsP1.length; i++) {
        cards.push(cardsP1[i])
    }
    for (var i = 0; i < cardsP2.length; i++) {
        cards.push(cardsP2[i])
    }
    for (var i = 0; i < cardsP3.length; i++) {
        cards.push(cardsP3[i])
    }*/
    automateCards({
        "Rows": 4,
        "Columns": 6,
        "Export path": "/Users/brandonheenan/photoshopexport/",
        "Export name prefix": "cards action",
        "Card width": 1000,
        "Card height": 1500,
        "Card info": cards,
        "Fill function": fillCard,
        "Unique backs": false,
    });
}

function fillCard(config, root, actionTemplates, iconTemplates) {

    // Header
    set(config["Name"], get(root, "Name"));

    // Type
    toggleOnly([config["Type"]], get(root, "Type"));
    if (config["Type"] === "Starting") {
        toggleOnly([config["Player"]], get(get(root, "Type"), "Starting"));
    }
    if (config["Type"] === "Court") {
        toggleOnly([config["Period"]], get(get(get(root, "Type"), "Court"), "Period"));
    }

    // Image
    var source = activeDocument;
    template = get(get(root, "Flavor image"), "Placeholder");
    var imagePath = source.path + "/" + config["Image"];
    var imgFile = new File(imagePath);
    var opened = open(imgFile);
    activeDocument = opened;
    var image = opened.activeLayer.duplicate(template, ElementPlacement.PLACEBEFORE);
    opened.close();
    activeDocument = source;

    image.translate(parseInt(template.bounds[0]), parseInt(template.bounds[1]));
    var tempWidth = parseInt(template.bounds[2]) - parseInt(template.bounds[0]);
    var imgWidth = parseInt(image.bounds[2]) - parseInt(image.bounds[0]);
    var tempHeight = parseInt(template.bounds[3]) - parseInt(template.bounds[1]);
    var imgHeight = parseInt(image.bounds[3]) - parseInt(image.bounds[1]);
    factor = Math.max((tempHeight * 100) / imgHeight, (tempWidth * 100) / imgWidth)
    image.resize(factor, factor, AnchorPosition.TOPLEFT);
    get(root, "Flavor image").merge();

    // Starting resources
    if (toggle(config["Starting resources"], get(root, "Starting resources"))) {
        copyIcons(iconTemplates, get(get(root, "Starting resources"), "Icons"), config["Starting resources"], {
            "x": 20,
            "y": 655,
            "width": 960,
            "tight": config["Tight"],
        });
    }

    // Action options
    var actionPlaceholder = get(get(root, "Actions"), "Placeholder");
    var heights = [];
    var options = [];
    var padding = 690;
    for (var i = 0; i < config["Options"].length; i++) {
        var conf = config["Options"][i];
        var action = get(actionTemplates, "Med").duplicate(actionPlaceholder, ElementPlacement.PLACEAFTER);
        toggle(i === 0, get(get(action, "Order"), "First"));
        toggle(i !== 0, get(get(action, "Order"), "Or"));
        set(conf["Text"], get(action, "Text"));
        copyIcons(iconTemplates, get(action, "Icons"), conf["Icons"], {
            "x": 20,
            "y": 775,
            "width": 960,
        });
        if (toggle(conf["After"], get(action, "After"))) {
            toggleOnly([conf["After"]], get(action, "After"));
        }
        action = action.merge();
        options.push(action);
        heights.push((parseInt(action.bounds[3]) - parseInt(action.bounds[1])));
        padding -= heights[i];
    }
    numPads = options.length * 2;
    padding = padding / numPads;
    var offset = 0;
    for (var i = 0; i < options.length; i++) {
        offset += padding;
        if (i > 0) {
            var divider = get(actionTemplates, "Divider").duplicate(options[i], ElementPlacement.PLACEBEFORE);
            divider.translate(0, offset);
            offset += padding;
        }
        options[i].translate(0, offset);
        offset += heights[i];
    }
}