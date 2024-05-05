function automateCards(params) {
    var cardInfo = params["Card info"];
    var cardsRemaining = cardInfo.length;
    var cardsPerSheet = params["Rows"] * params["Columns"];
    var currentCard = 0;
    var currentSheet = 1;

    var iconTemplates = get(activeDocument, "Icons");
    var masterTemplate = get(activeDocument, "Master template");
    var actionTemplates = get(activeDocument, "Action options");

    while (cardsRemaining > 0) {
        var cards = [];
        for (var i = 0; i < params["Rows"]; i++) {
            for (var j = 0; j < params["Columns"]; j++) {
                if ((i * params["Columns"]) + j < cardsRemaining) {
                    var card = masterTemplate.duplicate(actionTemplates, ElementPlacement.PLACEBEFORE);
                    params["Fill function"](cardInfo[currentCard], card, actionTemplates, iconTemplates);
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

function placeImage(placeholder, imagePath) {
    var source = activeDocument;
    var imgFile = new File(imagePath);
    var opened = open(imgFile);
    activeDocument = opened;
    var image = opened.activeLayer.duplicate(placeholder, ElementPlacement.PLACEBEFORE);
    opened.close();
    activeDocument = source;

    image.translate(parseInt(placeholder.bounds[0]), parseInt(placeholder.bounds[1]));
    var placeWidth = parseInt(placeholder.bounds[2]) - parseInt(placeholder.bounds[0]);
    var imgWidth = parseInt(image.bounds[2]) - parseInt(image.bounds[0]);
    var placeHeight = parseInt(placeholder.bounds[3]) - parseInt(placeholder.bounds[1]);
    var imgHeight = parseInt(image.bounds[3]) - parseInt(image.bounds[1]);
    factor = Math.max((placeHeight * 100) / imgHeight, (placeWidth * 100) / imgWidth)
    image.resize(factor, factor, AnchorPosition.TOPLEFT);
}

function copyIcons(iconTemplates, container, icons, config) {
    placeholder = get(container, "Placeholder");
    var leftEdge = placeholder.bounds[0];
    var horizCenter = placeholder.bounds[1] + ((placeholder.bounds[3] - placeholder.bounds[1]) / 2);
    var vertCenter = placeholder.bounds[0] + ((placeholder.bounds[2] - placeholder.bounds[0]) / 2);
    for (var i = 0; i < icons.length; i++) {

        // Make the icon
        var icon = get(iconTemplates, icons[i]["ID"]).duplicate(placeholder, ElementPlacement.PLACEBEFORE);

        // Configure its details
        set(icons[i]["Text"], get(icon, "Text"));
        if (toggle(icons[i]["Optional"], get(icon, "Optional"))) {
            toggleOnly(icons[i]["Optional"], get(icon, "Optional"));
        }

        // Move it
        icon = icon.merge();
        var bounds = icon.bounds;
        icon.translate(leftEdge - bounds[0], horizCenter - ((bounds[3] - bounds[1]) / 2) - bounds[1]);
        var padding = config["Default padding"];
        if (config["Padding"][icons[i]["ID"]]) {
            padding = config["Padding"][icons[i]["ID"]];
        }
        leftEdge += (parseInt(bounds[2]) - parseInt(bounds[0])) + padding;
    }
    placeholder.remove();
    container = container.merge();
    container.translate(vertCenter - ((container.bounds[2] - container.bounds[0]) / 2) - container.bounds[0], 0);
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
        } catch (e) { }
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

function spaceVertically(layers, placeholder) {
    var height = parseInt(placeholder.bounds[3]) - parseInt(placeholder.bounds[1]);
    for (var i = 0; i < layers.length; i++) {
        height -= (parseInt(layers[i].bounds[3]) - parseInt(layers[i].bounds[1]));
    }
    var padding = height / (layers.length + 1);
    var offset = parseInt(placeholder.bounds[1]);
    for (var i = 0; i < layers.length; i++) {
        offset += padding;
        if (i > 0) {
            offset += (parseInt(layers[i - 1].bounds[3]) - parseInt(layers[i - 1].bounds[1]))
        }
        layers[i].translate(0, offset - parseInt(layers[i].bounds[1]));
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