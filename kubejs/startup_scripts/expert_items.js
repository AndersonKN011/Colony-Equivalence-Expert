StartupEvents.registry('item', event => {
    event.create('calamity_heart')
         .displayName('Calamity Heart')
         .rarity('epic')
         .glow(true)
         
    event.create('arcane_mastery_core')
         .displayName('Arcane Mastery Core')
         .glow(true)
         .rarity('rare')

    event.create('eternal_flux_core')
         .displayName('Eternal Flux Core')
         .glow(true)
         .rarity('epic')

     event.create('refined_gold_frame')
         .displayName('Refined Gold Frame')
         .rarity('uncommon')

     event.create('refined_diamond_frame')
         .displayName('Refined Diamond Frame')
         .rarity('uncommon')

     event.create('refined_emerald_frame')
         .displayName('Refined Emerald Frame')
         .rarity('uncommon')
})