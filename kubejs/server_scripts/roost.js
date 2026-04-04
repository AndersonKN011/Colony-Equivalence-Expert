ServerEvents.recipes(event => {

  event.remove({output: 'chicken_roost:c_ink'})
  event.remove({output: 'chicken_roost:c_bonemeal'})
  event.remove({output: 'chicken_roost:c_feather'})
  event.remove({output: 'chicken_roost:c_netherbrick'})
  event.remove({output: 'chicken_roost:c_acacia'})
  event.remove({output: 'chicken_roost:c_nautilus'})
  event.remove({output: 'chicken_roost:c_wool'})
  event.remove({output: 'chicken_roost:c_paper'})
  event.remove({output: 'chicken_roost:c_tintedglass'})
  event.remove({output: 'chicken_roost:c_rabbithide'})
  event.remove({output: 'chicken_roost:c_sponge'})
  event.remove({output: 'chicken_roost:c_quartzenrichediron'})
  event.remove({output: 'chicken_roost:c_niter'})
  event.remove({output: 'chicken_roost:c_coke'})
  event.remove({output: 'chicken_roost:c_tar'})
  event.remove({output: 'chicken_roost:c_apatite'})
  event.remove({output: 'chicken_roost:c_bitumen'})
  event.remove({output: 'chicken_roost:c_blazepowder'})
  event.remove({output: 'chicken_roost:c_saltpeter'})
  event.remove({output: 'chicken_roost:c_magma_slime'})
  event.remove({output: 'chicken_roost:c_blood'})
  event.remove({output: 'chicken_roost:c_chrome'})
  event.remove({output: 'chicken_roost:c_refinediron'})
  event.remove({output: 'chicken_roost:c_blueslime'})
  event.remove({output: 'chicken_roost:c_electrical'})
  event.remove({output: 'chicken_roost:c_chickenosto'})
  event.remove({output: 'chicken_roost:c_funway'})
  event.remove({output: 'chicken_roost:c_ruby'})
  event.remove({output: 'chicken_roost:c_sapphire'})
  event.remove({output: 'chicken_roost:c_brass'})
  event.remove({output: 'chicken_roost:c_endereye'})
  event.remove({output: 'chicken_roost:c_biofuel'})
  event.remove({output: 'chicken_roost:c_yellorium'})
  event.remove({output: 'chicken_roost:c_purpleslime'})
  event.remove({output: 'chicken_roost:c_dark_gem'})
  event.remove({output: 'chicken_roost:c_ardite'})
  event.remove({output: 'chicken_roost:c_chargedcertus'})
  event.remove({output: 'chicken_roost:c_fluixcrystal'})
  event.remove({output: 'chicken_roost:c_hottungstensteel'})
  event.remove({output: 'chicken_roost:c_tungstensteel'})
  event.remove({output: 'chicken_roost:c_diamantine'})
  event.remove({output: 'chicken_roost:c_cyanite'})
  event.remove({output: 'chicken_roost:c_magicalwood'})
  event.remove({output: 'chicken_roost:c_redstonecrystal'})
  event.remove({output: 'chicken_roost:c_blutonium'})
  event.remove({output: 'chicken_roost:c_knightslime'})
  event.remove({output: 'chicken_roost:c_adamantium'})
  event.remove({output: 'chicken_roost:c_lunarreactivedust'})
  event.remove({output: 'chicken_roost:c_stoneburnt'})
  event.remove({output: 'chicken_roost:c_demonmetal'})
  event.remove({output: 'chicken_roost:c_moonstone'})
  event.remove({output: 'chicken_roost:c_manainfused'})
  event.remove({output: 'chicken_roost:c_hepatizon'})

  event.remove({id: 'chicken_roost:roost/tier1/roostv1_ink'})
  event.remove({id: 'chicken_roost:roost/tier1/roostv1_wool'})
  event.remove({id: 'chicken_roost:roost/tier2/roostv2_paper'})
  event.remove({id: 'chicken_roost:roost/tier3/roostv3_rabbithide'})
  event.remove({id: 'chicken_roost:roost/tier3/roostv3_tintedglass'})
  event.remove({id: 'chicken_roost:roost/tier3/roostv3_sponge'})
  event.remove({id: 'chicken_roost:roost/tier4/roostv4_apatite'})
  event.remove({id: 'chicken_roost:roost/tier4/roostv4_bitumen'})
  event.remove({id: 'chicken_roost:roost/tier4/roostv4_tar'})
  event.remove({id: 'chicken_roost:roost/tier4/roostv4_coke'})
  event.remove({id: 'chicken_roost:roost/tier5/roostv5_chrome'})
  event.remove({id: 'chicken_roost:roost/tier5/roostv5_chickenosto'})
  event.remove({id: 'chicken_roost:roost/tier6/roostv6_endereye'})
  event.remove({id: 'chicken_roost:roost/tier6/roostv6_hepatizon'})
  event.remove({id: 'chicken_roost:roost/tier6/roostv6_biofuel'})
  event.remove({id: 'chicken_roost:roost/tier7/roostv7_tungstensteel'})
  event.remove({id: 'chicken_roost:roost/tier8/roostv8_adamantium'})

  //Manyullyn Chicken
  event.custom({
    "type": "chicken_roost:basic_breeding",
    "food": {
      "tag": "c:seeds/tier7orup"
    },
    "left-chicken": {
      "item": "chicken_roost:c_cobald"
    },
    "right-chicken": {
      "item": "chicken_roost:c_netherite"
    },
    "time": 20,
    "output": {
      "item": "chicken_roost:c_manyullyn"
    }
  })

  //Tungsten Chicken
  event.custom({
    "type": "chicken_roost:basic_breeding",
    "food": {
      "tag": "c:seeds/tier6orup"
    },
    "left-chicken": {
      "item": "chicken_roost:c_obsidian"
    },
    "right-chicken": {
      "item": "chicken_roost:c_iron"
    },
    "time": 20,
    "output": {
      "item": "chicken_roost:c_tungsten"
    }
  })

  //Certus Quartz Chicken
  event.custom({
    "type": "chicken_roost:basic_breeding",
    "food": {
      "tag": "c:seeds/tier6orup"
    },
    "left-chicken": {
      "item": "chicken_roost:c_iron"
    },
    "right-chicken": {
      "item": "chicken_roost:c_quartz"
    },
    "time": 20,
    "output": {
      "item": "chicken_roost:c_certusquartz"
    }
  })

  //Slime Steel Chicken
  event.custom({
    "type": "chicken_roost:basic_breeding",
    "food": {
      "tag": "c:seeds/tier6orup"
    },
    "left-chicken": {
      "item": "chicken_roost:c_iron"
    },
    "right-chicken": {
      "item": "chicken_roost:c_slime"
    },
    "time": 20,
    "output": {
      "item": "chicken_roost:c_slimesteel"
    }
  })

  //Basalz Chicken
  event.custom({
    "type": "chicken_roost:basic_breeding",
    "food": {
      "tag": "c:seeds/tier5orup"
    },
    "left-chicken": {
      "item": "chicken_roost:c_blazerod"
    },
    "right-chicken": {
      "item": "chicken_roost:c_stone"
    },
    "time": 20,
    "output": {
      "item": "chicken_roost:c_basalz"
    }
  })

  // Cinnabar Chiken
  event.custom({
    "type": "chicken_roost:basic_breeding",
    "food": {
      "tag": "c:seeds/tier5orup"
    },
    "left-chicken": {
      "item": "chicken_roost:c_gold"
    },
    "right-chicken": {
      "item": "chicken_roost:c_redstone"
    },
    "time": 20,
    "output": {
      "item": "chicken_roost:c_cinnabar"
    }
  })

  // Livingrock Chicken
  event.custom({
    "type": "chicken_roost:basic_breeding",
    "food": {
      "tag": "c:seeds/tier3orup"
    },
    "left-chicken": {
      "item": "chicken_roost:c_stone"
    },
    "right-chicken": {
      "item": "chicken_roost:c_light_gray"
    },
    "time": 20,
    "output": {
      "item": "chicken_roost:c_livingrock"
    }
  })

  // Livingwood Chicken
  event.custom({
    "type": "chicken_roost:basic_breeding",
    "food": {
      "tag": "c:seeds/tier3orup"
    },
    "left-chicken": {
      "tag": "c:chickens/wood"
    },
    "right-chicken": {
      "item": "chicken_roost:c_brown"
    },
    "time": 20,
    "output": {
      "item": "chicken_roost:c_livingwood"
    }
  })

  //Charcoal Chicken
  event.custom({
    "type": "chicken_roost:basic_breeding",
    "food": {
      "tag": "c:seeds/tier2orup"
    },
    "left-chicken": {
      "item": "chicken_roost:c_coal"
    },
    "right-chicken": {
      "tag": "c:chickens/wood"
    },
    "time": 20,
    "output": {
      "item": "chicken_roost:c_charcoal"
    }
  })

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