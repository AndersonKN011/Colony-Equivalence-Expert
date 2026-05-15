ServerEvents.recipes(event => {
event.remove({output: 'projecte:philosophers_stone'})
event.remove({ output: 'projectexpansion:final_star' })

  event.recipes.extendedcrafting.shaped_table('projecte:philosophers_stone', [
    'BBBAAABBB',
    'BCCCCCCCB',
    'BCDEFEDCB',
    'BCFGIGFCB',
    'ACHJXJHCA',
    'BCFGIGFCB',
    'BCDEFEDCB',
    'BCCCCCCCB',
    'BBBAAABBB'
  ], {
    X: 'forbidden_arcanus:eternal_stella',
    J: 'extendedcrafting:ultimate_singularity',
    I: 'enderio:frank_n_zombie',
    H: 'kubejs:eternal_flux_core',
    G: 'kubejs:arcane_mastery_core',
    F: 'kubejs:calamity_heart',
    E: 'mekanism:pellet_antimatter',
    D: 'draconicevolution:chaos_shard',
    C: 'avaritia:neutron_ingot',
    A: 'allthemodium:unobtainium_block',
    B: 'allthemodium:allthemodium_block'
  })
  // 1. Arcane Mastery Core (5x5)
  event.recipes.extendedcrafting.shaped_table('kubejs:arcane_mastery_core', [
    'ABFBA',
    'BCECB',
    'BDXDB',
    'BCECB',
    'ABFBA'
  ], {
    X: 'botanicalmachinery:mana_battery',
    F: 'chicken_roost:chicken_essence_tier_9',
    E: 'ars_nouveau:wilden_tribute',
    D: 'botania:dice',
    C: 'botanicalextramachinery:mazarine_dragonstone_block',
    B: 'ars_nouveau:source_gem',
    A: 'ars_nouveau:thread_spellpower'
  })

  // 2. Eternal Flux Core (5x5)
  event.recipes.extendedcrafting.shaped_table('kubejs:eternal_flux_core', [
    'ABHBA',
    'BCDCB',
    'HEXEH',
    'BCFCB',
    'ABHBA'
  ], {
    F: 'draconicevolution:dragon_heart',
    H: 'powah:nitro_crystal_block',
    D: 'industrialforegoing:machine_frame_supreme',
    C: 'mekanism:pellet_polonium',
    E: 'velvet_advanced_alloys:manyedrite_upgrade_augment',
    X: 'draconicevolution:reactor_core',
    B: 'minecraft:netherite_block',
    A: 'mysticalagradditions:insanium_block'
  })

  // 3. Calamity Heart (7x7)
  event.recipes.extendedcrafting.shaped_table('kubejs:calamity_heart', [
    'OOOOOOO',
    'OVFDFVO',
    'VBCECBV',
    'BAGXGAB',
    'VBCECBV',
    'OVFDFVO',
    'OOOOOOO'
  ], {
    X: 'crazyae2addons:super_singularity_block',
    O: 'bosses_of_mass_destruction:obsidian_heart',
    V: 'bosses_of_mass_destruction:void_thorn',
    C: 'cataclysm:cursium_block',
    B: 'cataclysm:void_core',
    D: 'cataclysm:abyssal_sacrifice',
    E: 'cataclysm:ignitium_block',
    A: 'mowziesmobs:ice_crystal',
    G: 'mowziesmobs:sol_visage',
    F: 'allthemodium:piglich_heart'
  })

  event.recipes.extendedcrafting.shaped_table('projectexpansion:final_star', [
    'FNNNNFNNNNF',
    'NCCCCCCCCCN',
    'NCMMMGMMMCN',
    'NC   S   CN',
    'NC IIIII CN',
    'FHLIWEPIKHF',
    'NC IIIII CN',
    'NC   J   CN',
    'NCAAAAAAACN',
    'NCCCCCCCCCN',
    'FNNNNFNNNNF'
  ], {
    F: 'projectexpansion:final_power_flower',
    S: 'avaritia_delight:infinity_salad',
    W: 'avaritia_delight:mobs_stew',
    P: 'avaritia_delight:pasta_with_cosmic_meatballs',
    E: 'minecraft:dragon_egg',
    N: 'avaritia:neutron_ingot',
    C: 'avaritia:crystal_matrix_ingot',
    A: 'avaritia_delight:slice_of_endless_cake',
    G: 'avaritia_delight:infinity_popsicle',
    I: 'avaritia:infinity',
    H: 'avaritia:infinity_catalyst',
    J: 'avaritia_delight:star_pie',
    K: 'avaritia_delight:infinity_large_hamburger',
    L: 'avaritia_delight:infinity_taco',
    M: 'avaritia:densest_neutron_collector'
  })

  // Solar Flux Reborn - Neutronium Solar Panel (Elite Table - 7x7)
  event.recipes.extendedcrafting.shaped_table('solarflux:sp_avaritia.neutronium', [
    'UNNNNNU',
    'NMPCPMN',
    'NPUCUPN',
    'NCCXCCN',
    'NPUCUPN',
    'NMPCPMN',
    'UNNNNNU'
  ], {
    U: 'allthemodium:unobtainium_block',
    N: 'avaritia:neutron_ingot',
    M: 'avaritia:crystal_matrix_ingot',
    P: 'mekanism:pellet_polonium',
    C: 'solarflux:sp_de.chaotic',
    X: 'kubejs:eternal_flux_core'
  })

  // Solar Flux Reborn - Infinity Solar Panel (Ultimate Table - 9x9)
  event.recipes.extendedcrafting.shaped_table('2x solarflux:sp_avaritia.infinity', [
    'IIIIIIIII',
    'IDDDDDDDI',
    'IDAAAAADI',
    'IDASSSADI',
    'IDANXNADI',
    'IDASSSADI',
    'IDAAAAADI',
    'IDDDDDDDI',
    'IIIIIIIII'
  ], {
    I: 'avaritia:infinity',
    D: 'draconicevolution:chaos_shard',
    A: 'mekanism:pellet_antimatter',
    S: 'extendedcrafting:ultimate_singularity',
    X: 'kubejs:calamity_heart',
    N: 'solarflux:sp_avaritia.neutronium'
  })
})