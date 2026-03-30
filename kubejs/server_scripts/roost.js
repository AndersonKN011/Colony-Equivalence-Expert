ServerEvents.recipes(event => {

  // Allthemodium Chicken
  event.custom({
    "type": "chicken_roost:basic_breeding",
    "food": {
      "tag": "c:seeds/tier7orup"
    },
    "left-chicken": {
      "item": "chicken_roost:c_netherstar"
    },
    "right-chicken": {
      "item": "chicken_roost:c_pigiron"
    },
    "time": 20,
    "output": {
      "item": "chicken_roost:c_allthemodium"
    }
  })

  // Vibranium Chicken
  event.custom({
    "type": "chicken_roost:basic_breeding",
    "food": {
      "tag": "c:seeds/tier8orup"
    },
    "left-chicken": {
      "item": "chicken_roost:c_allthemodium"
    },
    "right-chicken": {
      "item": "chicken_roost:c_draconium"
    },
    "time": 20,
    "output": {
      "item": "chicken_roost:c_vibranium"
    }
  })

  // Unobtainium Chicken
  event.custom({
    "type": "chicken_roost:basic_breeding",
    "food": {
      "tag": "c:seeds/tier9orup"
    },
    "left-chicken": {
      "item": "chicken_roost:c_vibranium"
    },
    "right-chicken": {
      "item": "chicken_roost:c_awakeneddraconium"
    },
    "time": 20,
    "output": {
      "item": "chicken_roost:c_unobtainium"
    }
  })

})