var summarizedTileInfo = [
    {
        "Name": "Domas",
        "Num": "1",
        "Type": "Home",
        "Repeat": 8,
    },
    {
        "Name": "Insulae",
        "Num": "2",
        "Type": "Home",
        "Repeat": 20,
    },
    {
        "Name": "Artisian",
        "Num": "4",
        "Type": "Shop",
        "Repeat": 5,
    },
    {
        "Name": "Forum",
        "Num": "5",
        "Type": "Shop",
        "Repeat": 15,
    },
    {
        "Name": "Temple",
        "Num": "7",
        "Type": "Religion",
        "Repeat": 6,
    },
    {
        "Name": "Pantheon",
        "Num": "8",
        "Type": "Religion",
        "Repeat": 10,
    },
    {
        "Name": "Library",
        "Num": "10",
        "Type": "Civic",
        "Repeat": 3,
    },
    {
        "Name": "Court",
        "Num": "11",
        "Type": "Civic",
        "Repeat": 5,
    },
    {
        "Name": "Comitium",
        "Num": "12",
        "Type": "Civic",
        "Repeat": 10,
    },
    {
        "Name": "Amphitheatre",
        "Num": "13",
        "Repeat": 2,
    },
    {
        "Name": "Oracle",
        "Num": "14",
        "Repeat": 3,
    },
    {
        "Name": "Barracks",
        "Num": "15",
        "Type": "Military",
        "Repeat": 3,
    },
    {
        "Name": "Parade",
        "Num": "16",
        "Type": "Military",
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