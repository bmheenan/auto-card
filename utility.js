function automateCards(params) {
    var cardInfo = params["Card info"];
    var cardsRemaining = cardInfo.length;
    var cardsPerSheet = params["Rows"] * params["Columns"];
    var currentCard = 0;
    var currentSheet = 1;

    var iconTemplates = get(activeDocument, "Icons");
    var masterTemplate = get(activeDocument, "Master template");

    while (cardsRemaining > 0) {
        var cards = [];
        for (var i = 0; i < params["Rows"]; i++) {
            for (var j = 0; j < params["Columns"]; j++) {
                if ((i * params["Columns"]) + j < cardsRemaining) {
                    var card = masterTemplate.duplicate(iconTemplates, ElementPlacement.PLACEBEFORE);
                    params["Fill function"](cardInfo[currentCard], card, iconTemplates);
                    if (!params["Unique backs"]) {
                        card = card.merge();
                    }
                    card.translate(params["Card width"] * j, params["Card height"] * i);
                    cards.push(card);
                    currentCard++;
                }
            }
        }
        exportPng(params["Export path"] + params["Export name prefix"] + " front " + currentSheet + ".png");

        if (params["Unique backs"]) {
            for (var i = 0; i < cards.length; i++) {
                params["Back function"](cardInfo[i], cards[i], iconTemplates);
            }
            exportPng(params["Export path"] + params["Export name prefix"] + " back " + currentSheet + ".png");
        }

        for (var i = 0; i < cards.length; i++) {
            cards[i].remove();
        }
        currentSheet++;
        cardsRemaining -= cardsPerSheet;
    }
}

function copyIcons(iconTemplates, root, config, location) {
    var cumOffset = 0;
    var iconPlaceholder = get(root, "Placeholder");
    for (var i = 0; i < config.length; i++) {
        var icon = get(iconTemplates, config[i]["ID"]).duplicate(iconPlaceholder, ElementPlacement.PLACEAFTER);
        set(config[i]["Text"], get(icon, "Text"));
        icon = icon.merge();
        if (i > 0) {
            cumOffset += offset("padding", config[i], config[i - 1]);
        }
        icon.translate(location["x"] + cumOffset, location["y"]);
        cumOffset += offset("width", config[i]);
    }
    root.translate((location["width"] - cumOffset) / 2, 0);
}

function get(parent, key) {
    var layerSets = parent.layerSets;
    for (var i = 0; i < layerSets.length; i++) {
        if (layerSets[i].name.substring(0, key.length) === key) {
            return layerSets[i];
        } 
    }
    var layers = parent.layers;
    for (var i = 0; i < layers.length; i++) {
        if (layers[i].name.substring(0, key.length) === key) {
            return layers[i];
        } 
    }
}

function set(input, layer) {
    if (input) {
        layer.textItem.contents = input;
    } else {
        toggle(false, layer);
    }
}

function toggle(expression, layer) {
    if (expression) {
        layer.visible = true;
    } else {
        try {
            layer.visible = false;
        } catch(e) { }
    }
    return expression;
}

function toggleOnly(NamesOfVisible, parent) {
    var listsOfChildren = [parent.layers, parent.layerSets];
    for (var k = 0; i < listsOfChildren.length; k++) {
        if (typeof listsOfChildren[k] === "undefined") {
            break;
        }
        for (var i = 0; i < listsOfChildren[k].length; i++) {
            var found = false;
            for (var j = 0; j < NamesOfVisible.length; j++) {
                if (listsOfChildren[k][i].name.substring(0, NamesOfVisible[j].length) === NamesOfVisible[j]) {
                    found = true;
                }
            }
            toggle(found, listsOfChildren[k][i]);
        }
    }
}

function offset(dimension, config1, config2) {
    var widths = {
        "Opportunity set": 70,
        "Place tile": 91,
        "Tile owned": 76,
        "Tile before adjacent": 76,
        "Tile adjacent": 76,
        "Tile anyone": 76,
        "Tile negative": 76,
        "Arrow": 66,
        "Multi arrow": 66,
        "Pay specified": 85,
        "Decrease production grain": 53,
        "Decrease production wood": 53,
        "Decrease production metal": 53,
        "Decrease production papyrus": 53,
        "Influence": 55,
        "Place market banner": 77,
        "Resource": 53,
        "Grain": 53,
        "Wood": 53,
        "Metal": 53,
        "Papyrus": 53,
        "Market up": 53,
        "Market down": 53,
        "Production resource": 53,
        "Production grain": 53,
        "Production wood": 53,
        "Production metal": 53,
        "Production papyrus": 53,
        "Wealth": 76,
        "Power": 76,
        "Aureus": 52,
        "Opportunity card": 47,
        "Discard card": 60,
        "Activate common card": 53,
        "VP": 95,
    };
    var noSpacingBefore = {
        "Tile adjacent": true,
        "Tile negative": true,
    }
    var lowSpacingAfter = {
        "Pay amount": true,
        "Gain amount": true,
    }
    var noSpacingAfter = {
        "Tile before adjacent": true,
    }
    if (dimension === "padding") {
        if (noSpacingBefore[config1["ID"]]) {
            return 2;
        } else if (noSpacingAfter[config2["ID"]]) {
            return 2;
        } else if (lowSpacingAfter[config2["ID"]]) {
            return 14;
        } else {
            return 45;
        }
    } else if (dimension === "width") {
        if (config1["ID"] === "Pay amount" || config1["ID"] === "Gain amount") {
            return 18 + (18 * config1["Text"].length);
        }
        return widths[config1["ID"]];
    }
}

function exportPng(name) {
    var options = new ExportOptionsSaveForWeb();
    options.format = SaveDocumentType.PNG;
    options.PNG8 = false;
    options.quality = 100;
    pngFile = new File(name);
    app.activeDocument.exportDocument(pngFile, ExportType.SAVEFORWEB, options);
}