import Player from '../player.js'
let botLayer5;
let luna;
export default class Level1 extends Phaser.Scene {

  constructor() {
    super({ key: 'level1' });
    this.level =1;
  }
  preload() {

  }

  create() {
    //mapa
    let map = this.add.tilemap("mapaLevel1");
    //Tilesets para el mapa
    let trainBack = map.addTilesetImage('TrainBack', "TrainBack");
    let trainFull = map.addTilesetImage('TrainFulll', "TrainFulll");
  //  let montañas = map.addTilesetImage('montañas', "montañas");
    let trees = map.addTilesetImage('trees', "trees");
    let trees1 = map.addTilesetImage('1trees', "1trees");
    let luna = map.addTilesetImage('luna', "luna");
    let Stalin_without_bg = map.addTilesetImage('Stalin_without_bg', "Stalin_without_bg");
  
    //capas
    // tileset = map.addTilesetImage('tilesetNameInTiled', 'tilesetNameInPhaser');
    this.fondo = map.createStaticLayer("Capa del fondo atardecer", [luna], 0, 0, 17, 291);
    this.tren = map.createStaticLayer("Capa del tren ", [trainBack, trainFull, Stalin_without_bg], 0, 0);
    this.suelo = map.createStaticLayer("suelo", [trainBack, trainFull, Stalin_without_bg], 0, 0);
    this.paredes = map.createStaticLayer("paredes", [trainBack, trainFull, Stalin_without_bg], 0, 0);
    this.arboles = map.createStaticLayer("Capa fondo arboles oscuros alante", [trees1], 0, 0);
    this.arboles1 = map.createStaticLayer("Capa de fondo arboles alante", [trees], 0, 0);
    this.escalar =map.createStaticLayer("escalar", [trainBack, trainFull, Stalin_without_bg],0 ,0);
    this.suelo.setCollisionByExclusion(-1, true);
   
    //Ajustamos la camara a que no se salga de los limites del mapa
   // this.physics.world.setBounds(0, 0, map.widthInPixels, map.heightInPixels);

    //player
    this.witch = new Player(this, 200, 300);
    this.witch.createAnims();
    this.collider = this.physics.add.collider(this.witch,this.suelo);
    this.physics.add.overlap(this.witch,this.escalar);



    //this.cameras.main.setBackgroundColor("#4488AA");
    this.cameras.main.startFollow(this.witch);

  }
  update(time, delta) {
    //simular movimiento
    // this.botLayer5.tilePositionX -= 1;
    //console.log(luna.tilePositionX );
    this.physics.add.collider(this.witch, this.suelo);
    this.physics.add.collider(this.witch, this.paredes);
    console.log("update");
  }
  checkLadder(){
    this.onLadder=false;
    if(!this.escalar.body.touching.none){
      this.onLadder =true;
    }
    return this.onLadder
  }
}