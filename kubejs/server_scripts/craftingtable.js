ServerEvents.recipes(event => {
  // Removendo o antigo primeiro (sempre bom garantir)
  event.remove({ output: 'botanicalextramachinery:catalyst_mana_infinity' })
  event.remove({ output: 'infinitestoragecell:infinite_cell_component' })
  event.remove({ output: 'extendedae_plus:infinity_biginteger_cell' })
  event.remove({ output: 'projecte:condenser_mk1' })
  event.remove({ output: 'torcherino:torcherino' })
  event.remove({ output: 'torcherino:compressed_torcherino' })
  event.remove({ output: 'torcherino:double_compressed_torcherino' })

  event.shaped(
    '2x tconstruct:cinderslime_ingot',
    [
      'AAA',
      'A A',
      'AAA'
    ],
    {
      A: 'mysticalagriculture:cinder_slime_essence'
    }
  )

  event.shaped(
    'torcherino:double_compressed_torcherino',
    [
      'AAA',
      'AXA',
      'AAA'
    ], 
    {
      A: 'torcherino:compressed_torcherino',
      X: 'mekanism:pellet_antimatter'
    }
  )

  event.shaped(
    'torcherino:compressed_torcherino', 
    [
      'AAA',
      'AXA',
      'AAA'
    ], 
    {
      A: 'torcherino:torcherino',
      X: 'mysticalagradditions:awakened_draconium_crux'
    }
  )

  event.shaped(
    'torcherino:torcherino',
    [
      ' C ',
      'ABA',
      ' D '
    ],
    {
      A: 'mekanism:ultimate_control_circuit',
      B: 'minecraft:torch',
      C: 'minecraft:clock',
      D: 'velvet_advanced_alloys:fayronium_machine_speed_augment'
    }
  )

  event.shaped(
    'projecte:condenser_mk1',
    [
      'ABA',
      'BXB',
      'ABA'
    ],
    {
      A: 'minecraft:obsidian',
      B: 'projectexpansion:cyan_fuel',
      X: 'projecte:alchemical_chest'
    }
  )

  event.shaped(
    'botanicalextramachinery:catalyst_mana_infinity',
    [
      'GYG', 
      'AXA', 
      'GAG'
    ],
    {
      X: 'botanicalextramachinery:catalyst_pattern',
      A: 'botanicalextramachinery:crimson_dragonstone_block',
      G: 'botanicalextramachinery:crimson_spark',
      Y: 'kubejs:arcane_mastery_core'
    }
  )

  event.shaped(
    'infinitestoragecell:infinite_cell_component',
    [
      'GXG', 
      'ADA', 
      'GBG'
    ],
    {
      X: 'kubejs:eternal_flux_core',
      A: 'ae2:cell_component_256k',
      B: 'minecraft:netherite_block',
      G: 'minecraft:nether_star',
      D: 'ae2:spatial_anchor'
    }
  )

  event.shaped(
    'extendedae_plus:infinity_biginteger_cell',
    [
      'GBG', 
      'ADA', 
      'XYZ'
    ],
    {
      Y: 'kubejs:eternal_flux_core',
      X: 'kubejs:calamity_heart',
      Z: 'kubejs:arcane_mastery_core',
      A: 'minecraft:nether_star',
      B: 'extendedae_plus:oblivion_singularity',
      G: 'ae2:quartz_vibrant_glass',
      D: 'extendedae_plus:infinity_core'
    }
  )

  event.shaped(
    'kubejs:refined_gold_frame',
    [
      'GGG',
      'GXG',
      'GGG'
    ],
    {
      G: 'minecraft:gold_ingot',
      X: 'mekanism:advanced_control_circuit'
    }
  )

  event.shaped(
    'kubejs:refined_diamond_frame',
    [
      'DDD',
      'AXA',
      'DDD'
    ],
    {
      D: 'minecraft:diamond',
      A: 'mekanism:elite_control_circuit',
      X: 'kubejs:refined_gold_frame'
    }
  )

  event.shaped(
    'kubejs:refined_emerald_frame',
    [
      'EEE',
      'AXA',
      'EEE'
    ],
    {
      E: 'minecraft:emerald',
      A: 'mekanism:ultimate_control_circuit',
      X: 'kubejs:refined_diamond_frame'
    }
  )
})