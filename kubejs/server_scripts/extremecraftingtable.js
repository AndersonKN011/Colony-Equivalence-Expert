ServerEvents.recipes(event => {
const creativeOutputs = [
    'ae2:creative_energy_cell',
    'botania:creative_pool',
    'botania:mana_tablet',
    'draconicevolution:creative_capacitor',
    'draconicevolution:creative_op_capacitor',
    'enderio:creative_power',
    'mekanism:creative_bin',
    'mekanism:creative_chemical_tank',
    'mekanism:creative_energy_cube',
    'mekanism:creative_fluid_tank'
  ]

  creativeOutputs.forEach(output => {
    event.remove({ output: output })
  })

  // 1. AE2 Creative Energy Cell
  event.custom({
    "type": "avaritia:shaped_table",
    "tier": 4,
    "pattern": [
        "YYYYXYYYY",
        "YCACXCACY", 
        "YACBXBCAY", 
        "YCBBXBBCY", 
        "XXXXDXXXX", 
        "YCBBXBBCY", 
        "YACBXBCAY", 
        "YCACXCACY", 
        "YYYYXYYYY"],
    "key": {
      "A": { "item": "ae2:vibration_chamber" },
      "B": { "item": "ae2:calculation_processor" },
      "C": { "item": "avaritia:infinity_ingot" },
      "D": { "item": "projectexpansion:final_star" },
      "X": { "item": "ae2:singularity" },
      "Y": { "item": "ae2:dense_energy_cell" }
    },
    "result": { "item": "ae2:creative_energy_cell" }
  })

  // 2. Botania Creative Pool
  event.custom({
    "type": "avaritia:shaped_table",
    "tier": 4,
    "pattern": [
        "NNNNNNNNN", 
        "NXCXYXCXN", 
        "NCXEYEXCN", 
        "NXEEYEEXN", 
        "AYYYFYYYA", 
        "NXEEYEEXN", 
        "NCXEYEXCN", 
        "NXCXYXCXN", 
        "NNNNNNNNN"],
    "key": {
      "C": { "item": "botania:mana_pool" },
      "E": { "item": "botania:dragonstone_block" },
      "F": { "item": "botania:mana_tablet" },
      "N": { "item": "avaritia:neutron_ingot" },
      "X": { "item": "avaritia:infinity_catalyst" },
      "Y": { "item": "botania:fabulous_pool" },
      "A": { "item": "projectexpansion:final_star" }
    },
    "result": { "item": "botania:creative_pool" }
  })

  // 3. Botania Creative Mana Tablet
  event.custom({
    "type": "avaritia:shaped_table",
    "tier": 4,
    "pattern": [
        "BAAACAAAD", 
        "ATTJKLTTA", 
        "ATUUMUUTA", 
        "ANUOXOUQA", 
        "EUUPRPUUF", 
        "ASUOPOUSA", 
        "ATUUUUUTA", 
        "ATTSISTTA", 
        "GAAAHAAAA"],
    "key": {
      "A": { "item": "avaritia:infinity_ingot" },
      "B": { "item": "botania:rune_envy" },
      "C": { "item": "botania:rune_gluttony" },
      "D": { "item": "botania:rune_winter" },
      "E": { "item": "botania:rune_lust" },
      "F": { "item": "botania:rune_pride" },
      "G": { "item": "botania:rune_wrath" },
      "H": { "item": "botania:rune_greed" },
      "I": { "item": "botania:rune_sloth" },
      "J": { "item": "botania:infinite_fruit" },
      "K": { "item": "botania:flight_tiara" },
      "L": { "item": "botania:king_key" },
      "M": { "item": "botania:flugel_eye" },
      "N": { "item": "botania:odin_ring" },
      "O": { "item": "botania:spawner_mover" },
      "P": { "item": "botania:mana_mirror" },
      "Q": { "item": "botania:thor_ring" },
      "R": { "item": "botania:mana_tablet" },
      "S": { "item": "botania:dice" },
      "T": { "item": "botania:fabulous_pool" },
      "U": { "item": "botania:terrasteel_block" },
      "X": { "item": "projectexpansion:final_star" }
    },
    "result": { "item": "botania:mana_tablet", "nbt": "{creative:1b,mana:500000}" }
  })

  // 4. Draconic Creative Capacitor
  event.custom({
    "type": "avaritia:shaped_table",
    "tier": 4,
    "pattern": [
        "AAAACAAAA", 
        "AEEBXBEEA", 
        "AEBFCFBEA", 
        "ABFFCFFBA", 
        "CCCCDCCCC", 
        "ABFFCFFBA", 
        "AEBFCFBEA", 
        "AEEBCBEEA", 
        "AAAACAAAA"],
    "key": {
      "A": { "item": "avaritia:infinity_ingot" },
      "B": { "item": "draconicevolution:chaotic_crafting_injector" },
      "C": { "item": "draconicevolution:reactor_stabilizer" },
      "D": { "item": "draconicevolution:reactor_core" },
      "E": { "item": "draconicevolution:chaotic_core" },
      "F": { "item": "draconicevolution:chaotic_capacitor" },
      "X": { "item": "projectexpansion:final_star" }
    },
    "result": { "item": "draconicevolution:creative_capacitor" }
  })

  // 5. Draconic Creative OP Capacitor
  event.custom({
    "type": "avaritia:shaped_table",
    "tier": 4,
    "pattern": [
        "BBCCXCCBB", 
        "BBBBBBBBB", 
        "CBAAAAABC", 
        "CBACECABC", 
        "CBAEDEABC", 
        "CBACECABC", 
        "CBAAAAABC", 
        "BBBBBBBBB", 
        "BBCCXCCBB"
    ],
    "key": {
      "A": { "item": "avaritia:infinity_ingot" },
      "B": { "item": "avaritia:infinity" },
      "C": { "item": "draconicevolution:reactor_stabilizer" },
      "D": { "item": "draconicevolution:reactor_core" },
      "E": { "item": "draconicevolution:creative_capacitor" },
      "X": { "item": "projectexpansion:final_star" }
    },
    "result": { "item": "draconicevolution:creative_op_capacitor" }
  })

  // 6. EnderIO Creative Power
  event.custom({
    "type": "avaritia:shaped_table",
    "tier": 4,
    "pattern": [
        "INIIIIINI", 
        "NZEEEEEZN", 
        "IECWWWCEI", 
        "IEWZXZWEI", 
        "IEWIVIWEI", 
        "IEWZXZWEI", 
        "IECWWWCEI", 
        "NZEEEEEZN", 
        "INIIIIINI"
    ],
    "key": {
      "C": { "item": "enderio:ender_crystal" },
      "E": { "item": "enderio:sentient_ender" },
      "I": { "item": "avaritia:infinity_ingot" },
      "N": { "item": "avaritia:neutron_ingot" },
      "V": { "item": "enderio:vibrant_capacitor_bank" },
      "W": { "item": "enderio:weather_crystal" },
      "Z": { "item": "enderio:frank_n_zombie" },
      "X": { "item": "projectexpansion:final_star" }
    },
    "result": { "item": "enderio:creative_power" }
  })

  // 7. Mekanism Creative Bin
  event.custom({
    "type": "avaritia:shaped_table",
    "tier": 4,
    "pattern": [
        "AAAAAAAAA", 
        "AEIIXIIEA", 
        "AEIXIXIEA", 
        "AEIIXIIEA", 
        "AEEESEEEA", 
        "AEEEEEEEA", 
        "AEBCDCBEA", 
        "AEBCDCBEA", 
        "AAAAAAAAA"
    ],
    "key": {
      "A": { "item": "mekanismgenerators:fusion_reactor_frame" },
      "B": { "item": "mekanism:ultimate_energy_cube" },
      "C": { "item": "mekanism:ultimate_fluid_tank" },
      "D": { "item": "mekanism:ultimate_chemical_tank" },
      "E": { "item": "mekanism:ultimate_bin" },
      "I": { "item": "avaritia:infinity_ingot" },
      "S": { "item": "avaritia:infinity_catalyst" },
      "X": { "item": "projectexpansion:final_star" }
    },
    "result": { "item": "mekanism:creative_bin" }
  })

  // 8. Mekanism Creative Chemical Tank
  event.custom({
    "type": "avaritia:shaped_table",
    "tier": 4,
    "pattern": [
        "   B B   ", 
        " SAADAAS ", 
        " ABBBBBA ", 
        " ABBCBBA ", 
        " ABCICBA ", 
        " ABBCBBA ", 
        " ABBBBBA ", 
        " SAADAAS ", 
        "         "
    ],
    "key": {
      "A": { "item": "mekanism:ultimate_chemical_tank" },
      "B": { "item": "mekanism:dynamic_tank" },
      "C": { "item": "mekanism:structural_glass" },
      "D": { "item": "mekanism:dynamic_valve" },
      "I": { "item": "projectexpansion:final_star" },
      "S": { "item": "avaritia:infinity_catalyst" }
    },
    "result": { "item": "mekanism:creative_chemical_tank" }
  })

  // 9. Mekanism Creative Energy Cube (Com NBT de energia infinita)
  event.custom({
    "type": "avaritia:shaped_table",
    "tier": 4,
    "pattern": [
        "BBBCECBBB", 
        "BDDDADDDB", 
        "BDSDADSDB", 
        "CDDDIDDDC", 
        "XAAISIAAX", 
        "CDDDIDDDC", 
        "BDSDADSDB", 
        "BDDDADDDB", 
        "BBBCECBBB"
    ],
    "key": {
      "A": { "item": "mekanism:ultimate_energy_cube" },
      "B": { "item": "mekanism:induction_casing" },
      "C": { "item": "mekanism:induction_port" },
      "D": { "item": "mekanism:ultimate_induction_cell" },
      "E": { "item": "mekanism:ultimate_induction_provider" },
      "I": { "item": "avaritia:infinity_ingot" },
      "S": { "item": "avaritia:infinity_catalyst" },
      "X": { "item": "projectexpansion:final_star" }
    },
    "result": { "item": "mekanism:creative_energy_cube", "nbt": "{mekData:{EnergyContainers:[{Container:0b,stored:\"18446744073709551615.9999\"}]}}" }
  })

  // 10. Mekanism Creative Fluid Tank
  event.custom({
    "type": "avaritia:shaped_table",
    "tier": 4,
    "pattern": [
        "         ", 
        " SAADAAS ", 
        " ABBCBBA ", 
        " ABBCBBA ", 
        " ACCICCA ", 
        " ABBCBBA ", 
        " ABBCBBA ", 
        " SAADAAS ", 
        "         "
    ],
    "key": {
      "A": { "item": "mekanism:ultimate_fluid_tank" },
      "B": { "item": "mekanism:dynamic_tank" },
      "C": { "item": "mekanism:structural_glass" },
      "D": { "item": "mekanism:dynamic_valve" },
      "I": { "item": "projectexpansion:final_star" },
      "S": { "item": "avaritia:infinity_catalyst" }
    },
    "result": { "item": "mekanism:creative_fluid_tank" }
  })

})