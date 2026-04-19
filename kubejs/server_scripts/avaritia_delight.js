ServerEvents.recipes(event => {
  // Isso remove todas as receitas que pertencem ao tipo customizado do Extrator
  event.remove({ type: 'avaritia_delight:crop_extractor' })
})