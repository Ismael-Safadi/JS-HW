var sum_ppu = 0;
var count_ppu = 0;
const hw = [
	{
		"id": "0001",
		"type": "donut",
		"name": "Cake",
		"ppu":0.78,
		"batters":
			{
				"batter":
					[
						{ "id": "1001", "type": "Regular" },
						{ "id": "1002", "type": "Chocolate" },
						{ "id": "1003", "type": "Blueberry" },
						{ "id": "1004", "type": "Devil's Food" }
					]
			},
		"topping":
			[
				{ "id": "5001", "type": "None" },
				{ "id": "5002", "type": "Glazed" },
				{ "id": "5005", "type": "Sugar" },
				{ "id": "5007", "type": "Powdered Sugar" },
				{ "id": "5006", "type": "Chocolate with Sprinkles" },
				{ "id": "5003", "type": "Chocolate" },
				{ "id": "5004", "type": "Maple" }
			]
	},
	{
		"id": "0002",
		"type": "donut",
		"name": "Raised",
		"ppu": 0.55,
		"batters":
			{
				"batter":
					[
						{ "id": "1001", "type": "Regular" }
					]
			},
		"topping":
			[
				{ "id": "5001", "type": "None" },
				{ "id": "5002", "type": "Glazed" },
				{ "id": "5005", "type": "Sugar" },
				{ "id": "5003", "type": "Chocolate" },
				{ "id": "5004", "type": "Maple" }
			]
	},
	{
		"id": "0003",
		"type": "donut",
		"name": "Old Fashioned",
		"ppu":0.26,
		"batters":
			{
				"batter":
					[
						{ "id": "1001", "type": "Regular" },
						{ "id": "1002", "type": "Chocolate" }
					]
			},
		"topping":
			[
				{ "id": "5001", "type": "None" },
				{ "id": "5002", "type": "Glazed" },
				{ "id": "5003", "type": "Chocolate" },
				{ "id": "5004", "type": "Maple" }
			]
	}
]
console.log("All topping");
for (var item in hw) {
    console.log(hw[item].topping);
}

console.log("All batters");
for (var item in hw) {
    console.log(hw[item].batters);
}


for (var item in hw) {
    sum_ppu += hw[item].ppu
    count_ppu++;
}

console.log("ppu average " + sum_ppu / count_ppu);
console.log("ppu sum " + sum_ppu);


console.log("5.List of all mentioned IDs regardless to the type");
for (var item in hw) {
    console.log(hw[item].id);
    for (var i in hw[item].batters.batter) {
        var batter_obj = hw[item].batters.batter;
        console.log(batter_obj[i].id);
    }

    for (var i in hw[item].topping) {
        var topping_obj = hw[item].topping;
        console.log(topping_obj[i].id);
    }

}