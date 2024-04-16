var tileSummary = [
    {
        "Name": "Peasant home",
        "Tax": "Rice",
        "Scores": "Adjacent to Samurai",
        "Repeat": 6,
    },
    {
        "Name": "Samurai home",
        "Tax": "Wood",
        "Scores": "Adjacent to Merchant",
        "Repeat": 6,
    },
    {
        "Name": "Merchant shop",
        "Tax": "Metal",
        "Scores": "Adjacent to Temple",
        "Repeat": 6,
    },
    {
        "Name": "Temple",
        "Tax": "Stone",
        "Scores": "Adjacent to Peasant",
        "Repeat": 6,
    },
    {
        "Name": "Market",
        "Tax": "Plus 1",
        "Repeat": 1,
    },
    {
        "Name": "Garden",
        "Scores": "Most",
        "Repeat": 4,
    },
    {
        "Name": "Barracks",
        "Repeat": 2,
    },
    {
        "Name": "Arsenal",
        "Scores": "Per Barracks",
        "Repeat": 2,
    },
    {
        "Name": "Mountain shrine",
        "Repeat": 1,
    },
    {
        "Name": "Harvest shrine",
        "Repeat": 1,
    },
]

var tileInfo = [];
for (var i = 0; i < tileSummary.length; i++) {
    for (var j = 0; j < tileSummary[i]["Repeat"]; j++) {
        tileInfo.push({
            "Name": tileSummary[i]["Name"],
            "Tax": tileSummary[i]["Tax"],
            "Scores": tileSummary[i]["Scores"],
        });
    }
}