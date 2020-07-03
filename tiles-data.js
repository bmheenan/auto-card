var summarizedTileInfo = [
    {
        "Name": "Domas",
        "Num": "1",
        "Type": "Home",
        "Background": "Light green",
        "Repeat": 6,
    },
    {
        "Name": "Insulae",
        "Num": "2",
        "Type": "Home",
        "Background": "Dark green",
        "Repeat": 16,
    },
    {
        "Name": "Artisian",
        "Num": "4",
        "Type": "Shop",
        "Background": "Light amber",
        "Repeat": 4,
    },
    {
        "Name": "Forum",
        "Num": "5",
        "Type": "Shop",
        "Background": "Dark amber",
        "Repeat": 10,
    },
    {
        "Name": "Temple",
        "Num": "7",
        "Type": "Temple",
        "Background": "Violet",
        "Repeat": 12,
    },
    {
        "Name": "Library",
        "Num": "9",
        "Type": "Civic",
        "Background": "Light blue",
        "Repeat": 3,
    },
    {
        "Name": "Court",
        "Num": "10",
        "Type": "Civic",
        "Background": "Medium blue",
        "Repeat": 3,
    },
    {
        "Name": "Comitium",
        "Num": "11",
        "Type": "Civic",
        "Background": "Dark blue",
        "Repeat": 6,
    },
    {
        "Name": "Amphitheatre",
        "Num": "12",
        "Background": "Brown",
        "Repeat": 2,
    },
    {
        "Name": "Oracle",
        "Num": "13",
        "Background": "Dark violet",
        "Repeat": 3,
    },
    {
        "Name": "Barracks",
        "Num": "14",
        "Type": "Military",
        "Background": "Red",
        "Repeat": 3,
    },
    {
        "Name": "Parade",
        "Num": "15",
        "Type": "Military",
        "Background": "Dark red",
        "Repeat": 2,
    },
];

var tileInfo = [];
for (var i = 0; i < summarizedTileInfo.length; i++) {
    for (var j = 0; j < summarizedTileInfo[i]["Repeat"]; j++) {
        tileInfo.push({
            "Name": summarizedTileInfo[i]["Name"],
            "Num": summarizedTileInfo[i]["Num"],
            "Type": summarizedTileInfo[i]["Type"],
            "Background": summarizedTileInfo[i]["Background"],
        });
    }
}