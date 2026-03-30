GameStageEvents.stageAdded(event => {
    let player = event.player;
    let stage = event.stage;

    // Configuração das cores em Hex
    let configEstagios = {
        'advanced_table_research': { cor: '#FFFF55' },
        'elite_table_research':    { cor: '#55FFFF' },
        'ultimate_table_research': { cor: '#55FF55' }
    };

    if (configEstagios[stage]) {
        let config = configEstagios[stage];
        
        // Chaves de tradução dinâmicas
        let chaveTitulo = `research.stage.${stage}.title`;
        let chaveDesc = `research.stage.${stage}.desc`;

        player.tell(Text.gold("========================================"));

        // Use o helper Component para garantir a compatibilidade
        player.tell(Component.translate("chat.research.completed").green().bold());

        // A concatenação correta para evitar que a chave se perca:
        let msgTitulo = Component.translate("chat.research.new_tech").white()
            .append(Component.translate(chaveTitulo).color(config.cor).bold());
        player.tell(msgTitulo);

        player.tell(Component.translate(chaveDesc).white());
        player.tell(Text.gold("========================================"));
    }
});