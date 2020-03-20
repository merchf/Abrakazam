
export default class Preloader extends Phaser.Scene {
    constructor() {
      super({ key: 'preloader' });
    }
    preload() {


        //carga de imagenes
        this.load.image("menu_fondo", 'assets/menu/menu_fondo.png');
        this.load.image("play_button", 'assets/menu/play_button.png');
        this.load.image("rules_button", 'assets/menu/rules_button.png');
        this.load.image("credits_button", 'assets/menu/credits_button.png');
        this.load.image("logo", 'assets/menu/logo.png');
        this.load.image("bruja", 'assets/bruja/Brujita.png');

      //carga de sprites
       this.load.spritesheet("brujaSaltoDer", 'assets/bruja/BrujitaSaltoDer.png',{
           frameHeight:32,
           frameWidth:32
       });
       
        // barras de carga, una sobre otra (rosa sobre morado o algo asi)
		       
        let loadingBar = this.add.graphics({
            fillStyle: {
                color:0xffadff
            }
        });
        let loadingFill =  this.add.graphics({
            fillStyle: {
                color:0xffffff
            }
        });

        this.load.on("progress", (percent)=>{
            loadingBar.fillRect(0,this.game.renderer.height /2,this.game.renderer.width * percent,50);
            console.log(percent);
        });
        this.load.on("complete", ()=>{
            console.log("done");
        });
    }
  
    create() {
      this.scene.start('mainMenu');
    }
    update(){
      console.log("menu");
    }
  }