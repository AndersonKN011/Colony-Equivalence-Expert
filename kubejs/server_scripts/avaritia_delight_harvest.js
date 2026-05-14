// Fix: Supplementaries mixin (CompatFarmersDelightTomatoMixin) é injetado em BuddingTomatoBlock
// e intercepta o randomTick de BuddingBlazeTomatoBlock (que herda dele).
// Quando detecta um graveto abaixo, coloca farmersdelight:tomatoes (com graveto) no topo,
// cancelando o código original do Avaritia Delight.
// Solução: detectar quando o bloco de vine errado é colocado acima de budding_blaze_tomato ou blaze_tomato
// e substituí-lo imediatamente pelo bloco correto.

BlockEvents.placed('farmersdelight:tomatoes', event => {
    let level = event.level;
    let pos = event.block.pos;

    let belowPos = pos.below();
    let belowId = level.getBlockState(belowPos).getBlock().toString();

    // Quando cresce, a base muitas vezes se transforma em 'avaritia_delight:blaze_tomato'
    if (belowId.includes('avaritia_delight:budding_blaze_tomato') || belowId.includes('avaritia_delight:blaze_tomato')) {
        let ForgeRegistries = Java.loadClass('net.minecraftforge.registries.ForgeRegistries');
        let blazeTomato = ForgeRegistries.BLOCKS.getValue(new ResourceLocation('avaritia_delight', 'blaze_tomato'));
        if (blazeTomato) {
            level.setBlock(pos, blazeTomato.defaultBlockState(), 3);
        }
    }
});

// Também trata o bloco com graveto do supplementaries (stick_tomatoes)
BlockEvents.placed('supplementaries:stick_tomatoes', event => {
    let level = event.level;
    let pos = event.block.pos;

    let belowPos = pos.below();
    let belowId = level.getBlockState(belowPos).getBlock().toString();

    if (belowId.includes('avaritia_delight:budding_blaze_tomato') || belowId.includes('avaritia_delight:blaze_tomato')) {
        let ForgeRegistries = Java.loadClass('net.minecraftforge.registries.ForgeRegistries');
        let blazeTomato = ForgeRegistries.BLOCKS.getValue(new ResourceLocation('avaritia_delight', 'blaze_tomato'));
        if (blazeTomato) {
            level.setBlock(pos, blazeTomato.defaultBlockState(), 3);
        }
    }
});

// Fix de colheita com botão direito: dropa blaze_tomato corretamente
BlockEvents.rightClicked('avaritia_delight:blaze_tomato', event => {
    const block = event.block;
    if (block.properties.age === '3') {
        block.popItem('avaritia_delight:blaze_tomato');
        block.set('age', '0');
        event.player.swing();
        event.level.playSound(null, block.x, block.y, block.z, 'minecraft:item.sweet_berries.pick_from_bush', 'blocks', 1.0, 0.8 + Math.random() * 0.4);
        event.cancel();
    }
});
