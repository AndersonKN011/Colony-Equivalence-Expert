ServerEvents.recipes(event => {
    event.custom({
        "type": "thermal:smelter",
        "ingredients": [
        {
            "item": "allthemodium:vibranium_dust",
            "count": 1
        },
        {
            "item": "allthemodium:allthemodium_dust",
            "count": 1
        }
        ],
        "result": [
        {
            "item": "allthemodium:vibranium_allthemodium_alloy_ingot",
            "count": 2
        }
        ],
        "energy": 16000
    }).id('allthemodium:vibranium_allthemodium_alloy_ingot_from_smelter')

    event.custom({
        "type": "thermal:smelter",
        "ingredients": [
        {
            "item": "allthemodium:unobtainium_dust",
            "count": 1
        },
        {
            "item": "allthemodium:allthemodium_dust",
            "count": 1
        }
        ],
        "result": [
        {
            "item": "allthemodium:unobtainium_allthemodium_alloy_ingot",
            "count": 2
        }
        ],
        "energy": 16000
    }).id('allthemodium:unobtainium_allthemodium_alloy_ingot_from_smelter')

    event.custom({
        "type": "thermal:smelter",
        "ingredients": [
        {
            "item": "allthemodium:unobtainium_dust",
            "count": 1
        },
        {
            "item": "allthemodium:vibranium_dust",
            "count": 1
        }
        ],
        "result": [
        {
            "item": "allthemodium:unobtainium_vibranium_alloy_ingot",
            "count": 2
        }
        ],
        "energy": 16000
    }).id('allthemodium:unobtainium_vibranium_alloy_ingot_from_smelter')
})