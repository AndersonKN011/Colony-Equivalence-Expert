ServerEvents.recipes(event => {
    const insolatorCrafts = [
        'chicken_roost:machines/insolator/seed_1',
        'chicken_roost:machines/insolator/seed_2',
        'chicken_roost:machines/insolator/seed_3',
        'chicken_roost:machines/insolator/seed_4',
        'chicken_roost:machines/insolator/seed_5',
        'chicken_roost:machines/insolator/seed_6',
        'chicken_roost:machines/insolator/seed_7',
        'chicken_roost:machines/insolator/seed_8',
        'chicken_roost:machines/insolator/seed_9'
    ]

    insolatorCrafts.forEach(recipeID => {
        event.remove({ id: recipeID })
    })

    const seeds = [
        'chicken_roost:chicken_food_tier_1',
        'chicken_roost:chicken_food_tier_2',
        'chicken_roost:chicken_food_tier_3',
        'chicken_roost:chicken_food_tier_4',
        'chicken_roost:chicken_food_tier_5',
        'chicken_roost:chicken_food_tier_6',
        'chicken_roost:chicken_food_tier_7',
        'chicken_roost:chicken_food_tier_8',
        'chicken_roost:chicken_food_tier_9'
    ]

    seeds.forEach(seed => {
        event.custom({
            "type": "thermal:insolator",
            "ingredient": {
                "item": seed
            },
            "result": [
                {
                    "item": seed,
                    "count": 2,
                    "chance": 1
                },
                {
                    "item": seed,
                    "count": 1,
                    "chance": 0.25
                }
            ],
            "energy_mod": 2.0,
            "water_mod": 1.0
        })
    })

})