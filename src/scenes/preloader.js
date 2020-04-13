
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
      //  this.load.image("bruja", '/assets/bruja/Brujita.png');
        this.load.image("zombie", './assets/enemies/zombie/ZombieDer.png');

        //carga de sprites

        this.load.atlas('bruja', './assets/bruja/atlasbruja.png', './assets/bruja/json/bruja_atlas.json');

/*
        this.load.spritesheet('walkDB', '/assets/bruja/BrujitaAndandoDer.png', {
            frameWidth: 34,
            frameHeight: 96
        });
        this.load.spritesheet('walkIB', '/assets/bruja/BrujitaAndandoIzq.png', {
            frameWidth: 32,
            frameHeight: 96
        });
        this.load.spritesheet('climbB', '/assets/bruja/BrujitaEspaldasEscalar.png', {
            frameWidth: 33,
            frameHeight: 96
        });
        this.load.spritesheet('fireDBruja', '/assets/bruja/BrujitaFuego.png', {
            frameWidth: 57,
            frameHeight: 89
        });
        this.load.spritesheet('fireIBruja', '/assets/bruja/BrujitaFuegoIzq.png', {
            frameWidth: 64,
            frameHeight: 96
        });
        this.load.spritesheet('iceDBruja', '/assets/bruja/BrujitaHielo.png', {
            frameWidth: 64,
            frameHeight: 96
        });
        this.load.spritesheet('iceIBruja', '/assets/bruja/BrujitaHieloIzq.png', {
            frameWidth: 64,
            frameHeight: 94
        });
        this.load.spritesheet('thunderDBruja', '/assets/bruja/BrujitaRayo.png', {
            frameWidth: 65,
            frameHeight: 96
        });
        this.load.spritesheet('thunderIBruja', '/assets/bruja/BrujitaRayoIzq.png', {
            frameWidth: 64,
            frameHeight: 96
        });
        this.load.spritesheet('jumpDBruja', '/assets/bruja/BrujitaSaltoDer.png', {
            frameWidth: 49,
            frameHeight: 96
        });
        this.load.spritesheet('jumpIBruja', '/assets/bruja/BrujitaSaltoIZQ.png', {
            frameWidth: 48,
            frameHeight: 96
        });

*/
        //z

        this.load.spritesheet('zombieD', './assets/enemies/zombie/ZombieDer.png', {
            frameWidth: 200,
            frameHeight: 200
        });
        this.load.spritesheet('zombieD', './assets/enemies/zombie/ZombieIzq.png', {
            frameWidth: 200,
            frameHeight: 200
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