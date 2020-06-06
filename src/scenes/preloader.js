
export default class Preloader extends Phaser.Scene {
    constructor() {
        super({ key: 'preloader' });
    }
    preload() {

        //prologos
        this.load.image("prologo", './assets/cambioEscenarios/Inicio.png');
        this.load.image("beforeMrLion", './assets/cambioEscenarios/Escenarios4.png');
        this.load.image("afterMrLion", './assets/cambioEscenarios/Escenarios6.png');
        this.load.image("afterMrLion2", './assets/cambioEscenarios/Escenarios8.png');
        this.load.image("afterMrLion3", './assets/cambioEscenarios/Escenarios9.png');
        this.load.image("gameOver", './assets/cambioEscenarios/GameOver.png')

        //carga de imagenes menu
        this.load.image("menu_fondo", './assets/menu/menu_fondo.png');
        this.load.image("play_button", './assets/menu/play_button.png');
        this.load.image("rules_button", './assets/menu/rules_button.png');
        this.load.image("credits_button", './assets/menu/credits_button.png');
        this.load.image("logo", './assets/menu/logo.png');
        this.load.image("rules_fondo", './assets/menu/rules.png');
        this.load.image("credits_fondo", './assets/menu/credits.png');
        this.load.image("back_button", './assets/menu/back_button.png');
        this.load.image("next_button", './assets/menu/next_button.png');
        this.load.image("flecha_button", './assets/menu/flecha_button.png');

        //carga de imagenes batalla final
        this.load.image("fondobatallafinal", './assets/batallaFinal/fondobatallafinal.png');
        this.load.image("fuegoButton", './assets/batallaFinal/botonesbatallafinal1.png');
        this.load.image("hieloButton", './assets/batallaFinal/botonesbatallafinal2.png');
        this.load.image("rayoButton", './assets/batallaFinal/botonesbatallafinal3.png');
        this.load.image("brujafinal", './assets/bruja/Bruja_1.png');
        this.load.image("brujaF", './assets/bruja/Bruja_2.png');
        this.load.image("brujaH", './assets/bruja/Bruja_3.png');
        this.load.image("brujaR", './assets/bruja/Bruja_4.png');
        this.load.image("mrLion", './assets/enemies/mrLion/MrLion.png');
        this.load.image("MrLionFuego", './assets/enemies/mrLion/MrLionFuego.png');
        this.load.image("MrLionHielo", './assets/enemies/mrLion/MrLionHielo.png');
        this.load.image("MrLionRayo", './assets/enemies/mrLion/MrLionRayo.png');

        //mapa
        this.load.tilemapTiledJSON('mapaLevel1', './assets/mapas/mapaNivel1.json');
        this.load.tilemapTiledJSON('mapaLevel2', './assets/mapas/mapaNivel2.json');

        this.load.image("TrainBack", './assets/background/TrainBack.png');
        this.load.image("TrainFulll", './assets/background/TrainFulll.png');
        this.load.image("trees", './assets/background/trees.png');
        this.load.image("1trees", './assets/background/1trees.png');
        this.load.image("luna", './assets/background/luna.png');
        this.load.image("Stalin_without_bg", './assets/background/Stalin_without_bg.png');
        this.load.image("tile_castle_grey", './assets/background/tile_castle_grey.png');
        this.load.image("montañas", './assets/background/montañas.png')
        //objetos
        this.load.image("keyDoor", './assets/objects/llaveobjeto.png');
        this.load.image("hearthUI", './assets/objects/PocionCuracionobjeto.png');

        //vidas
        this.load.image("Life3", './assets/objects/VidaBruja1.png');
        this.load.image("Life2", './assets/objects/VidaBruja2.png');
        this.load.image("Life1", './assets/objects/VidaBruja3.png');
        this.load.image("Life0", './assets/objects/VidaBruja4.png');
        this.load.image("LifeMrLion3", './assets/objects/VidasMrLion1.png');
        this.load.image("LifeMrLion2", './assets/objects/VidasMrLion2.png');
        this.load.image("LifeMrLion1", './assets/objects/VidasMrLion3.png');
        this.load.image("LifeMrLion0", './assets/objects/VidasMrLion4.png');


        //ataques
        this.load.image('fireCharm', './assets/bruja/Brujita_28.png');
        this.load.image('iceCharm', './assets/bruja/Brujita_29.png');
        this.load.image('thunderCharm', './assets/bruja/Brujita_30.png');

        //audios escenas
        this.load.audio("mainMenuMusic", './public/music/musicamapas/moon.ogg');
        this.load.audio("prologoMusic", './public/music/musicamapas/underground.ogg');
        //this.load.audio("prologoBeforeMrLionMusic", './public/music/musicamapas/underground.ogg');
        this.load.audio("prologoAfterMrLionMusic", './public/music/musicamapas/credits.ogg');
        this.load.audio("level1Music", './public/music/musicamapas2/runningwild.mp3');
        this.load.audio("level2Music", './public/music/musicamapas/battle.ogg');
        this.load.audio("level3Music", './public/music/musicamapas/castle.ogg');
        this.load.audio("finalBattleMusic", './public/music/musicamapas/boss.ogg');
        this.load.audio("gameOverMusic", './public/music/musicamapas2/gameover.mp3');
        //audios objetos
        this.load.audio("catchKeyMusic", './public/music/musicaparaimpactos/cogerllave.mp3');
        this.load.audio("openDoorMusic", './public/music/musicaparaobjetos/doorOpen_1.ogg');
        this.load.audio("catchHearthMusic", './public/music/musicaparaimpactos/cogervida.mp3');
        //audios movimientos
        this.load.audio("jumpMusic", './public/music/musicaparaimpactos/player-jump.wav');
        this.load.audio("charmMusic", './public/music/musicaparaimpactos/hechizo4.ogg');
        //audios enemigos
        this.load.audio("zMusic", './public/music/musicaenemigos/zombie1.mp3');
        this.load.audio("hurtZMusic", './public/music/musicaenemigos/zombiehurt1.mp3');



        //carga de sprites
        this.load.atlas('bruja', './assets/bruja/atlasbruja.png', './assets/bruja/json/bruja_atlas.json');

        //zombie
        this.load.atlas('zombie', './assets/enemies/zombie/zombie_atlas.png', './assets/enemies/zombie/zombie_atlas.json');

        //ogro
        this.load.atlas('ogro', './assets/enemies/ogro/ogro_atlas.png', './assets/enemies/ogro/ogro_atlas.json');

        // barras de carga, una sobre otra (rosa sobre morado o algo asi)

        let loadingBar = this.add.graphics({
            fillStyle: {
                color: 0xffadff
            }
        });
        let loadingFill = this.add.graphics({
            fillStyle: {
                color: 0xffffff
            }
        });

        this.load.on("progress", (percent) => {
            loadingBar.fillRect(0, this.game.renderer.height / 2, this.game.renderer.width * percent, 50);
            console.log(percent);
        });
        this.load.on("complete", () => {
            console.log("done");
        });
    }

    create() {
        //audio
        let musicMenu = this.sound.add("mainMenuMusic");
        musicMenu.play();
        musicMenu.setLoop(true);

        this.scene.start('mainMenu', musicMenu);
        //this.scene.start('batallaFinal');
    }
    update() {
        console.log("menu");
    }
}