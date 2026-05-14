ServerEvents.recipes(event => {
  // Remove as receitas de processamento interno mantendo o registro do tipo estrutural intacto
  event.remove({
    mod: 'avaritia_delight',
    type: 'avaritia_delight:crop_extractor'
  })
    // Remove a receita de fabricação da máquina em si
  event.remove({ output: 'avaritia_delight:crop_extractor' })
})