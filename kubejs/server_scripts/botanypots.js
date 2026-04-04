ServerEvents.recipes(event => {
  event.remove({id: 'chicken_roost:machines/botanypots/1_seed'})
  event.remove({id: 'chicken_roost:machines/botanypots/2_seed'})
  event.remove({id: 'chicken_roost:machines/botanypots/3_seed'})
  event.remove({id: 'chicken_roost:machines/botanypots/4_seed'})
  event.remove({id: 'chicken_roost:machines/botanypots/5_seed'})
  event.remove({id: 'chicken_roost:machines/botanypots/6_seed'})
  event.remove({id: 'chicken_roost:machines/botanypots/7_seed'})
  event.remove({id: 'chicken_roost:machines/botanypots/8_seed'})
  event.remove({id: 'chicken_roost:machines/botanypots/9_seed'})

  event.custom({
        "type": "botanypots:crop",
        "seed": { 
            "item": "mysticalagriculture:cinder_slime_seeds" 
        },
        "categories": ["imperium"],
        "growthTicks": 4000,
        "display": {
            "type": "botanypots:aging",
            "block": "mysticalagriculture:cinder_slime_crop"
        },
        "drops": [
            {
                "chance": 1.00,
                "output": { "item": "mysticalagriculture:cinder_slime_essence" }
            },
            {
                "chance": 0.01,
                "output": { "item": "mysticalagriculture:cinder_slime_seeds" }
            },
            {
                "chance": 0.01,
                "output": { "item": "mysticalagriculture:fertilized_essence" }
            }
        ]
    })
})