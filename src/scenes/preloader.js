
export default class Preloader extends Phaser.Scene {
    constructor() {
        super({ key: 'preloader' });
    }
    preload() {

        //carga de imagenes menu
        this.load.image("menu_fondo", './assets/menu/menu_fondo.png');
        this.load.image("play_button", './assets/menu/play_button.png');
        this.load.image("rules_button", './assets/menu/rules_button.png');
        this.load.image("credits_button", './assets/menu/credits_button.png');
        this.load.image("logo", './assets/menu/logo.png');
        this.load.image("rules_fondo", './assets/menu/rules.png');
        this.load.image("credits_fondo", './assets/menu/credits.png');
        this.load.image("back_button", './assets/menu/back_button.png');
        
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

        this.load.image("TrainBack", './assets/background/TrainBack.png');
        this.load.image("TrainFulll", './assets/background/TrainFulll.png');
        this.load.image("trees", './assets/background/trees.png');
        this.load.image("1trees", './assets/background/1trees.png');
        this.load.image("luna", './assets/background/luna.png');
        this.load.image("Stalin_without_bg", './assets/background/Stalin_without_bg.png');
        this.load.image("tile_castle_grey", './assets/background/tile_castle_grey.png');

        //objetos
        this.load.image("keyDoor", './assets/objects/llaveobjeto.png');
        this.load.image("hearthUI", './assets/objects/PocionCuracionobjeto.png');


        //ataques
        this.load.image('fireCharm', './assets/bruja/Brujita_28.png');
        this.load.image('iceCharm', './assets/bruja/Brujita_29.png');
        this.load.image('thunderCharm', './assets/bruja/Brujita_30.png');



        //carga de sprites
        this.load.atlas('bruja', './assets/bruja/atlasbruja.png', './assets/bruja/json/bruja_atlas.json');

        //zombie
        this.load.atlas('zombie', './assets/enemies/zombie/zombie_atlas.png', './assets/enemies/zombie/zombie_atlas.json');

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
       this.scene.start('mainMenu');
        //this.scene.start('batallaFinal');
    }
    update() {
        console.log("menu");
    }
}