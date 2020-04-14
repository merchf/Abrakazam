import Player from '../player.js'
import Zombie from '../enemies/zombie.js';
let botLayer5;
let luna;
export default class Level1 extends Phaser.Scene {

  constructor() {
    super({ key: 'level1' });
    this.level = 1;
  }
  preload() {

  }

  create() {
    //mapa
    let map = this.add.tilemap("mapaLevel1");
    //Tilesets para el mapa
    let trainBack = map.addTilesetImage('TrainBack', "TrainBack");
    let trainFull = map.addTilesetImage('TrainFulll', "TrainFulll");
    let trees = map.addTilesetImage('trees', "trees");
    let trees1 = map.addTilesetImage('1trees', "1trees");
    let moon_background = map.addTilesetImage('luna', "luna");
    let Stalin_without_bg = map.addTilesetImage('Stalin_without_bg', "Stalin_without_bg");
    let finalDoor = map.addTilesetImage('tile_castle_grey', "tile_castle_grey");

    //capas
    // this.tileset = map.addTilesetImage('tilesetNameInTiled', 'tilesetNameInPhaser');

    this.topeZ = map.createStaticLayer("Capa tope Zombies", [trainBack, trainFull, Stalin_without_bg], 0, 0);
    this.background = map.createStaticLayer("Capa del fondo atardecer", [moon_background], 0, 0, 17, 291);
    this.train = map.createStaticLayer("Capa del tren ", [trainBack, trainFull, Stalin_without_bg], 0, 0);
    this.suelo = map.createStaticLayer("suelo", [trainBack, trainFull, Stalin_without_bg], 0, 0);
    this.muerte = map.createStaticLayer("Capa muerte", [trainBack, trainFull, Stalin_without_bg], 0, 0);
    this.arboles = map.createStaticLayer("Capa fondo arboles oscuros alante", [trees1], 0, 0);
    this.arboles1 = map.createStaticLayer("Capa de fondo arboles alante", [trees], 0, 0);
    this.escalar = map.createStaticLayer("escalar", [trainBack, finalDoor], 0, 0);
    this.door = map.createStaticLayer("puerta", [finalDoor], 0, 0);

    this.suelo.setCollisionByExclusion(-1, true);
    this.topeZ

    //player
    this.witch = new Player(this, 200, 400);
    this.witch.createAnims();
    this.collider = this.physics.add.collider(this.witch, this.suelo);
    this.witch.body.debugBodyColor = 0x09b500;

    //colisiones playes
    this.physics.add.collider(this.witch, this.suelo);

    //enemies(zombie)
    this.enemies = this.physics.add.group();
    //esto habria que meterlo como una funcion
    //colocarlos bien
    let z1 = new Zombie(this, 100, 250);
    let z2 = new Zombie(this, 600, 400);
    let z3 = new Zombie(this, 1400, 250);
    let z4 = new Zombie(this, 1600, 250);
    let z5 = new Zombie(this, 2300, 400);
    z1.createAnims();
    z2.createAnims();
    z3.createAnims();
    z4.createAnims();
    z5.createAnims();
    this.enemies.add(z1);
    this.enemies.add(z2);
    this.enemies.add(z3);
    this.enemies.add(z4);
    this.enemies.add(z5);
    this.enemies.getChildren().forEach(function (item) { //necesario para crear cada enemigo con sus propiedades. Hacerlo antes de añadirlo al grupo no funciona
      item.create();
    }, this);

    //colisiones enemigos
    this.physics.add.collider(this.enemies, this.suelo);
    this.physics.add.collider(this.enemies, this.enemies);
    this.physics.add.collider(this.enemies, this.topeZ);

    //this.cameras.main.setBackgroundColor("#4488AA");

    //Ajustamos la camara a que no se salga de los limites del mapa
    this.physics.world.setBounds(0, 0, map.widthInPixels, map.heightInPixels);
    this.cameras.main.startFollow(this.witch);

  }
  update(time, delta) {

    //simular movimiento del fondo
    // this.botLayer5.tilePositionX -= 1;

    //updates de personajes
    this.witch.update();
    this.enemies.getChildren().forEach(function (item) {
      item.update();
    }, this);
    //controla que si caes en la capa muerte se resetee
   // this.physics.add.collider(this.witch, this.muerte, this.resetPlayer(), null, this);

    //Si está en la escalera permite escalar al jugador
    if (this.physics.add.overlap(this.witch, this.escalar)) {
      this.witch.onLadder = true;
    } else {
      this.witch.onLadder = false;
    }

  // if(this.physics.add.overlap(this.wolf, this.enemies, this.resetPlayer(), this)){}

    console.log("update");
  }


  
  checkLadder() {
    this.witch.onLadder = true;
  }
  //cada vez que toque la capa suelo reseteo y resto vida
  resetPlayer() {
    this.witch.body.setVelocity(0, 0);
    this.witch.setX(50);
    this.witch.setY(300);
    this.witch.play('default', true);
  //  this.witch.setAlpha(0);
    let tw = this.tweens.add({
      targets: this.witch,
      alpha: 1,
      duration: 100,
      ease: 'Linear',
      repeat: 5,
    });
  }
}