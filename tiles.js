var tileSummary = [
    {
        "Name": "Domus",
        "Background": "Home",
        "Resource": "Grain",
        "Costs": [
            -3,
            -3,
            -3,
            -3,
            -4,
            -4,
            -4,
            -4,
            -5,
            -5,
            -5,
            -6,
            -6,
            -6,
            -7,
            -8,
            -9,
        ],
    },
    {
        "Name": "Shop",
        "Background": "Shop",
        "Resource": "Wood",
        "Costs": [
            -3,
            -3,
            -4,
            -4,
            -5,
            -5,
            -5,
            -6,
            -6,
            -6,
            -6,
            -7,
            -7,
            -7,
            -8,
            -8,
        ],
    },
    {
        "Name": "Temple",
        "Background": "Temple",
        "Resource": "Metal",
        "Costs": [
            -4,
            -5,
            -5,
            -6,
            -6,
            -6,
            -7,
            -7,
            -7,
            -8,
            -8,
            -9,
        ],
    },
    {
        "Name": "Library",
        "Background": "Civic",
        "Resource": "Papyrus",
        "Costs": [
            -3,
            -4,
            -4,
            -5,
            -5,
            -6,
            -6,
            -6,
            -7,
            -7,
            -8,
        ],
    },
    {
        "Name": "Amphitheatre",
        "Background": "Amphitheatre",
        "Repeat": 2,
    },
    {
        "Name": "Oracle",
        "Background": "Temple",
        "Repeat": 2,
    },
    {
        "Name": "Barracks",
        "Type": "Military",
        "Background": "Military",
        "Repeat": 3,
    },
    {
        "Name": "Parade",
        "Type": "Military",
        "Background": "Military",
        "Repeat": 3,
    },
]

var tileInfo = [];
for (var i = 0; i < tileSummary.length; i++) {
    if (tileSummary[i]["Costs"]) {
        for (var j = 0; j < tileSummary[i]["Costs"].length; j++) {
            // Figure out the "next" costs
            var next = ""
            if (j + 1 === tileSummary[i]["Costs"].length) {
                next = "Last";
            } else {
                var maxK = j + 3;
                next = "Next:  "
                for (var k = j + 1; k < tileSummary[i]["Costs"].length && k <= maxK; k++) {
                    next = next + tileSummary[i]["Costs"][k];
                    if (k + 1 < tileSummary[i]["Costs"].length && k + 1 <= maxK) {
                        next = next + ",  ";
                    }
                }
            }
            tileInfo.push({
                "Name": tileSummary[i]["Name"],
                "Type": tileSummary[i]["Type"],
                "Background": tileSummary[i]["Background"],
                "Resource": tileSummary[i]["Resource"],
                "Cost": tileSummary[i]["Costs"][j],
                "Next": next,
                "Order": "#" + (j + 1),
            });
        }
    } else {
        for (var j = 0; j < tileSummary[i]["Repeat"]; j++) {
            tileInfo.push({
                "Name": tileSummary[i]["Name"],
                "Type": tileSummary[i]["Type"],
                "Background": tileSummary[i]["Background"],
            });
        }
    }
}