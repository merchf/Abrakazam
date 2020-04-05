import Player from '../player.js'
let botLayer5;
let luna;
export default class Level1 extends Phaser.Scene {

  constructor() {
    super({ key: 'level1' });
  }
  preload() {

  }

  create() {
    let map = this.add.tilemap("mapaLevel1");
    let trainBack = map.addTilesetImage('TrainBack', "TrainBack");
    let trainFull = map.addTilesetImage('TrainFulll', "TrainFulll");
    let montañas = map.addTilesetImage('montañas', "montañas");
    let trees = map.addTilesetImage('trees', "trees");
    let trees1 = map.addTilesetImage('1trees', "1trees");
    let luna = map.addTilesetImage('luna', "luna");
    let Stalin_without_bg = map.addTilesetImage('Stalin_without_bg', "Stalin_without_bg");
    //layers
    // tileset = map.addTilesetImage('tilesetNameInTiled', 'tilesetNameInPhaser');

    this.botLayer5 = map.createStaticLayer("Capa del fondo atardecer", [luna], 0, 0, 17, 291);

    this.botLayer = map.createStaticLayer("Capa del tren ", [trainBack, trainFull, Stalin_without_bg], 0, 0);
    this.botLayer4 = map.createStaticLayer("Capa fondo arboles oscuros alante", [trees1], 0, 0);
    this.botLayer3 = map.createStaticLayer("Capa de fondo arboles alante", [trees], 0, 0);





    //Ajustamos la camara a que no se salga de los limites del mapa
    this.physics.world.setBounds(0, 0, map.widthInPixels, map.heightInPixels);

    this.player = new Player(this, 200, 300);

    

    //this.cameras.main.setBackgroundColor("#4488AA");
    this.cameras.main.startFollow(this.player);

  }
  update(time, delta) {
    //simular movimiento
   // this.botLayer5.tilePositionX -= 1;
    //console.log(luna.tilePositionX );
    console.log("update");
  }
}