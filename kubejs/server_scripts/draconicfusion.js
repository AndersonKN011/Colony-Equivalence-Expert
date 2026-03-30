ServerEvents.recipes(event => {

  event.recipes.draconicevolution.fusion_crafting({
    result: { "item": "mekanism:pellet_antimatter" },
    catalyst: { "item": "mekanism:pellet_polonium" },
    tier: "CHAOTIC",
    total_energy: 400000000,
    ingredients: [
      { "item": "draconicevolution:large_chaos_frag" },
      { "item": "draconicevolution:large_chaos_frag" },
      { "item": "allthemodium:unobtainium_vibranium_alloy_block" },
      { "item": "allthemodium:unobtainium_vibranium_alloy_block" },
      { "item": "draconicevolution:awakened_core" },
      { "item": "draconicevolution:awakened_core" },
      { "item": "mekanism:ultimate_control_circuit" },
      { "item": "mekanism:ultimate_control_circuit" }
    ]
  })
})