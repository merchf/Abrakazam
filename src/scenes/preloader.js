
export default class Preloader extends Phaser.Scene {
    constructor() {
        super({ key: 'preloader' });
    }
    preload() {


        //carga de imagenes
        this.load.image("menu_fondo", '/Abrakazam/assets/menu/menu_fondo.png');
        this.load.image("play_button", '/Abrakazam/assets/menu/play_button.png');
        this.load.image("rules_button", '/Abrakazam/assets/menu/rules_button.png');
        this.load.image("credits_button", '/Abrakazam/assets/menu/credits_button.png');
        this.load.image("logo", '/Abrakazam/assets/menu/logo.png');
        this.load.image("bruja", '/Abrakazam/assets/bruja/Brujita.png');

        //carga de sprites
       this.load.spritesheet('brujaDcha', '/Abrakazam/assets/bruja/BrujitaAndandoDer.png', { 
            frameWidth: 100, 
            frameHeight: 100
        });
        this.load.spritesheet('brujaIzq', '/Abrakazam/assets/bruja/BrujitaAndandoIzq.png', { 
            frameWidth: 100, 
            frameHeight: 100
        });
        this.load.spritesheet('brujaEsc', '/Abrakazam/assets/bruja/BrujitaEspaldasEscalar.png', { 
            frameWidth: 100, 
            frameHeight: 100
        });
        this.load.spritesheet('brujaFDcha', '/Abrakazam/assets/bruja/BrujitaFuego.png', { 
            frameWidth: 100, 
            frameHeight: 100
        });
        this.load.spritesheet('brujaFIzq', '/Abrakazam/assets/bruja/BrujitaFuegoIzq.png', { 
            frameWidth: 100, 
            frameHeight: 100
        });
        this.load.spritesheet('brujaHDcha', '/Abrakazam/assets/bruja/BrujitaHielo.png', { 
            frameWidth: 100, 
            frameHeight: 100
        });
        this.load.spritesheet('brujaHIzq', '/Abrakazam/assets/bruja/BrujitaHieloIzq.png', { 
            frameWidth: 100, 
            frameHeight: 100
        });
        this.load.spritesheet('brujaRDcha', '/Abrakazam/assets/bruja/BrujitaRayo.png', { 
            frameWidth: 100, 
            frameHeight: 100
        });
        this.load.spritesheet('brujaRIzq', '/Abrakazam/assets/bruja/BrujitaRayoIzq.png', { 
            frameWidth: 100, 
            frameHeight: 100
        });
        this.load.spritesheet('brujaSaltoDcha', '/Abrakazam/assets/bruja/BrujitaSaltoDer.png', { 
            frameWidth: 100, 
            frameHeight: 100
        });
        this.load.spritesheet('brujaSaltoIzq', '/Abrakazam/assets/bruja/BrujitaSaltoIzq.png', { 
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