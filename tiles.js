var tileSummary = [
    {
        "Name": "Peasant home",
        "Tax": "Rice",
        "Scores": [
            { "ID": "Text", "Text": "1x" },
            { "ID": "Adjacent" },
            { "ID": "Merchant shop" },
        ],
        "Repeat": 7,
    },
    {
        "Name": "Samurai home",
        "Tax": "Wood",
        "Scores": [
            { "ID": "Text", "Text": "1x" },
            { "ID": "Adjacent" },
            { "ID": "Temple" },
        ],
        "Repeat": 7,
    },
    {
        "Name": "Merchant shop",
        "Tax": "Silk",
        "Scores": [
            { "ID": "Text", "Text": "1x" },
            { "ID": "Adjacent" },
            { "ID": "Samurai home" },
        ],
        "Repeat": 6,
    },
    {
        "Name": "Temple",
        "Tax": "Stone",
        "Scores": [
            { "ID": "Text", "Text": "1x" },
            { "ID": "Adjacent" },
            { "ID": "Peasant home" },
        ],
        "Repeat": 6,
    },
    {
        "Name": "Market",
        "Tax": "+1",
        "Repeat": 4,
    },
    {
        "Name": "Garden",
        "Scores": [
            { "ID": "Text", "Text": "5 for most" },
        ],
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