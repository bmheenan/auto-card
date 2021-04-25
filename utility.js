/*
Kick off the process of making and exporting cards. Must pass in the params object to configure it
*/
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
                params["Back function"](cardInfo[((currentSheet - 1) * cardsPerSheet) + i], cards[i], iconTemplates);
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

/*
Copy one or more icons from your "Icons" layer into a given card. 
*/
function copyIcons(iconTemplates, root, config, location) {
    var cumOffset = 0;
    var iconPlaceholder = get(root, "Placeholder");
    for (var i = 0; i < config.length; i++) {
        var icon = get(iconTemplates, config[i]["ID"]).duplicate(iconPlaceholder, ElementPlacement.PLACEAFTER);
        set(config[i]["Text"], get(icon, "Text"));
        if (toggle(config[i]["Optional"], get(icon, "Optional"))) {
            toggleOnly(config[i]["Optional"], get(icon, "Optional"));
        }
        icon = icon.merge();
        if (i > 0) {
            cumOffset += padding(config[i - 1], config[i], location["tight"]);
        }
        icon.translate(location["x"] + cumOffset, location["y"]);
        var bounds = icon.bounds;
        cumOffset += (parseInt(bounds[2]) - parseInt(bounds[0]));
    }
    root.translate((location["width"] - cumOffset) / 2, 0);
}

/*
Returns a layer or layerset that's a child of `parent`, matching the name specified by `key`
*/
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

/*
Sets the text of `layer` to the text of `input`
*/
function set(input, layer) {
    if (input) {
        layer.textItem.contents = input;
    } else {
        toggle(false, layer);
    }
}

/*
if `expression` is true, then `layer` will be set visible. Otherwise, `layer` will be set invisible.
*/
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

/*
Within `parent`, it sets all layers whose names are in `NamesOfVisible` to be visible, and all others invisible.
*/
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

/*
Internal; don't call directly. This allows you to tune the spacing of specific icons when you call `copyIcons(...)`  
*/
function padding(firstItem, secondItem, tight) {
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
    if (noSpacingBefore[secondItem["ID"]]) {
        return 5;
    } else if (noSpacingAfter[firstItem["ID"]]) {
        return 5;
    } else if (lowSpacingAfter[firstItem["ID"]]) {
        return 15;
    } else {
        if (!tight) {
            return 36;
        } else {
            return 24;
        }
        
    }
}

/*
Internal; don't call directly. This exports a png image after it's been set up.
*/
function exportPng(name) {
    var options = new ExportOptionsSaveForWeb();
    options.format = SaveDocumentType.PNG;
    options.PNG8 = false;
    options.quality = 100;
    pngFile = new File(name);
    app.activeDocument.exportDocument(pngFile, ExportType.SAVEFORWEB, options);
}