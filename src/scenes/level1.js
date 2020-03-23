import Player from '../player.js'
export default class Level1 extends Phaser.Scene {
    constructor() {
      super({ key: 'level1' });
    }
    preload() {
  
    }
  
    create() {
      let map = this.add.tilemap("mapaLevel1");
      let trainBack = map.addTilesetImage('b1',"TrainBack");
      let trainFull = map.addTilesetImage('b2',"TrainFulll");
      let montañas = map.addTilesetImage('b3',"montañas");
      let trees = map.addTilesetImage('b4',"trees");
      let trees1 = map.addTilesetImage('b5',"1trees");
      let luna = map.addTilesetImage('b6',"luna");
      let Stalin_without_bg = map.addTilesetImage('b7',"Stalin_without_bg");
      //layers
      let botLayer = map.createStaticLayer("bot", [trainBack],0,0);
      let botLayer1 = map.createStaticLayer("bot1", [trainFull],0,0);
      let botLayer2 = map.createStaticLayer("bot2", [montañas],0,0);
      let botLayer3 = map.createStaticLayer("bot3", [trees],0,0);
      let botLayer4 = map.createStaticLayer("bot4", [trees1],0,0);
      let botLayer5 = map.createStaticLayer("bot5", [luna],0,0);
      let botLayer6 = map.createStaticLayer("bot6", [Stalin_without_bg],0,0);
      //Ajustamos la camara a que no se salga de los limites del mapa
      this.physics.world.setBounds(0, 0, map.widthInPixels, map.heightInPixels);

      this.player = new Player(this, 200, 300);
    }
    update(){
      console.log("update");
    }
  }