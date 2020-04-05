
export default class Preloader extends Phaser.Scene {
    constructor() {
        super({ key: 'preloader' });
    }
    preload() {


        //carga de imagenes
        this.load.image("menu_fondo", '/assets/menu/menu_fondo.png');
        this.load.image("play_button", '/assets/menu/play_button.png');
        this.load.image("rules_button", '/assets/menu/rules_button.png');
        this.load.image("credits_button", '/assets/menu/credits_button.png');
        this.load.image("logo", '/assets/menu/logo.png');
        this.load.image("bruja", '/assets/bruja/Brujita.png');

        //carga de sprites
       this.load.spritesheet('brujaDcha', '/assets/bruja/BrujitaAndandoDer.png', { 
            frameWidth: 100, 
            frameHeight: 100
        });
        this.load.spritesheet('brujaIzq', '/assets/bruja/BrujitaAndandoIzq.png', { 
            frameWidth: 100, 
            frameHeight: 100
        });
        this.load.spritesheet('brujaEsc', '/assets/bruja/BrujitaEspaldasEscalar.png', { 
            frameWidth: 100, 
            frameHeight: 100
        });
        this.load.spritesheet('brujaFDcha', '/assets/bruja/BrujitaFuego.png', { 
            frameWidth: 100, 
            frameHeight: 100
        });
        this.load.spritesheet('brujaFIzq', '/assets/bruja/BrujitaFuegoIzq.png', { 
            frameWidth: 100, 
            frameHeight: 100
        });
        this.load.spritesheet('brujaHDcha', '/assets/bruja/BrujitaHielo.png', { 
            frameWidth: 100, 
            frameHeight: 100
        });
        this.load.spritesheet('brujaHIzq', '/assets/bruja/BrujitaHieloIzq.png', { 
            frameWidth: 100, 
            frameHeight: 100
        });
        this.load.spritesheet('brujaRDcha', '/assets/bruja/BrujitaRayo.png', { 
            frameWidth: 100, 
            frameHeight: 100
        });
        this.load.spritesheet('brujaRIzq', '/assets/bruja/BrujitaRayoIzq.png', { 
            frameWidth: 100, 
            frameHeight: 100
        });
        this.load.spritesheet('brujaSaltoDcha', '/assets/bruja/BrujitaSaltoDer.png', { 
            frameWidth: 100, 
            frameHeight: 100
        });
        this.load.spritesheet('brujaSaltoIzq', '/assets/bruja/BrujitaSaltoIzq.png', { 
            frameWidth: 100, 
            frameHeight: 100
        });
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