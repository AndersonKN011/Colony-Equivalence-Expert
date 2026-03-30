ServerEvents.recipes(event => {
    event.remove({ output: 'extendedcrafting:advanced_table' })
    event.remove({ output: 'extendedcrafting:elite_table' })
    event.remove({ output: 'extendedcrafting:ultimate_table' })

    event.shaped('extendedcrafting:advanced_table', [
        'BCB',
        'AGA',
        'BDB'
    ], {
        A: 'extendedcrafting:basic_table',
        G: 'minecraft:gold_block',
        B: 'extendedcrafting:advanced_component',
        C: 'extendedcrafting:advanced_catalyst',
        D: 'extendedcrafting:black_iron_slate'
    }).stage('advanced_table_research')

    event.shaped('extendedcrafting:elite_table', [
        'BCB',
        'AGA',
        'BDB'
    ], {
        A: 'extendedcrafting:advanced_table',
        G: 'minecraft:diamond_block',
        B: 'extendedcrafting:elite_component',
        C: 'extendedcrafting:elite_catalyst',
        D: 'extendedcrafting:black_iron_slate'
    }).stage('elite_table_research')

    event.shaped('extendedcrafting:ultimate_table', [
        'BCB',
        'AGA',
        'BDB'
    ], {
        A: 'extendedcrafting:elite_table',
        G: 'minecraft:emerald_block',
        B: 'extendedcrafting:ultimate_component',
        C: 'extendedcrafting:ultimate_catalyst',
        D: 'extendedcrafting:black_iron_slate'
    }).stage('ultimate_table_research')
})