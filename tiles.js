var tileSummary = [
    {
        "Name": "Domas",
        "Background": "Home",
        "Resource": "Grain",
        "Costs": [
            -3,
            -3,
            -4,
        ],
    },
    {
        "Name": "Temple",
        "Background": "Temple",
        "Resource": "Metal",
        "Costs": [
            -5,
            -6,
            -6,
        ],
        "Type": "Religion",
    },
]

var tileInfo = [];
for (var i = 0; i < tileSummary.length; i++) {
    for (var j = 0; j < tileSummary[i]["Costs"].length; j++) {
        tileInfo.push({
            "Name": tileSummary[i]["Name"],
            "Type": tileSummary[i]["Type"],
            "Background": tileSummary[i]["Background"],
            "Resource": tileSummary[i]["Resource"],
            "Cost": tileSummary[i]["Costs"][j],
        });
    }
}