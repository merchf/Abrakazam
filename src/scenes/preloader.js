
export default class Preloader extends Phaser.Scene {
    constructor() {
        super({ key: 'preloader' });
    }
    preload() {


        //carga de imagenes
        this.load.image("menu_fondo", './assets/menu/menu_fondo.png');
        this.load.image("play_button", './assets/menu/play_button.png');
        this.load.image("rules_button", './assets/menu/rules_button.png');
        this.load.image("credits_button", './assets/menu/credits_button.png');
        this.load.image("logo", './assets/menu/logo.png');
 
        //carga de sprites

        this.load.atlas('bruja', './assets/bruja/atlasbruja.png', './assets/bruja/json/bruja_atlas.json');


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
    }
    update() {
        console.log("menu");
    }
}