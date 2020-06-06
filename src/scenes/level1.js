import Player from '../player.js';
import Zombie from '../enemies/zombie.js';
import GameUI from './gameUI.js';


export default class Level1 extends Phaser.Scene {

  constructor() {
    super({ key: 'level1' });
    this.level = 1;
  }
  preload() {

  }

  create() {

    this.logic = this.scene.get('logicLevels');
    this.music = this.logic.addMusicScenes(this,"level1");
    this.music.volume = 0.10;
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
    this.objects = map.getObjectLayer["Capa de Objetos "];

    //setCollisionByExclusionle dice a Phaser que habilite las colisiones 
    //para cada mosaico cuyo índice no sea -1, por lo tanto, todos los mosaicos.
    this.topeZ.setCollisionByExclusion(-1, true);
    this.suelo.setCollisionByExclusion(-1, true);
    this.muerte.setCollisionByExclusion(-1, true);
    this.door.setCollisionByExclusion(-1, true);
    this.escalar.setCollisionByExclusion(-1, true);


    //añadiosObjeto
    // this.keyObject = this.add.sprite(4354, 414, "keyDoor");
    this.keyObject = this.physics.add.sprite(4354, 414, "keyDoor");
    this.logic.createLifePlayer(this);


    //player
    this.witch = new Player(this, 200, 400);
    this.witch.createAnims();
    //  this.collider = this.physics.add.collider(this.witch, this.suelo);
    this.witch.body.debugBodyColor = 0x09b500;

    //colisiones playes
    this.physics.add.collider(this.witch, this.suelo);
    this.physics.add.collider(this.keyObject, this.suelo);

    //enemies(zombie)
    this.enemies = this.physics.add.group();
    
    //esto habria que meterlo como una funcion
    //colocarlos bien
    let z1 = new Zombie(this, 100, 250);
    let z2 = new Zombie(this, 600, 400);
    let z3 = new Zombie(this, 1400, 250);
    let z4 = new Zombie(this, 1600, 250);
    let z5 = new Zombie(this, 2300, 400);
    this.enemies.add(z1);
    this.enemies.add(z2);
    this.enemies.add(z3);
    this.enemies.add(z4);
    this.enemies.add(z5);
    this.enemies.getChildren().forEach(function (item) { //necesario para crear cada enemigo con sus propiedades. Hacerlo antes de añadirlo al grupo no funciona
      item.create();
      item.createAnims();
    }, this);

    //colisiones enemigos
    this.physics.add.collider(this.enemies, this.topeZ);
    this.physics.add.collider(this.enemies, this.suelo);
    //this.physics.add.collider(this.enemies, this.enemies);


    //disparos
    this.charmFire = this.add.group();
    this.charmIce = this.add.group();
    this.charmThunder = this.add.group();

    //colisiones hechizos

    //Ajustamos la camara a que no se salga de los limites del mapa
    this.physics.world.setBounds(0, 0, map.widthInPixel, map.heightInPixel);
    this.cameras.main.startFollow(this.witch);

  }


  update(time, delta) {

    //updates de personajes
    this.witch.preUpdate(time, delta, this.bullets);
    this.enemies.getChildren().forEach(function (item) {
      item.preUpdate(time, delta);
    }, this);


    //Si el fuego toca a un zombie
    this.physics.add.overlap(this.charmFire, this.enemies, this.logic.attackEnemyFire);
    //Si el hielo toca a un zombie
    this.physics.add.overlap(this.charmIce, this.enemies, this.logic.attackEnemyIce);
    //Si el rayo toca a un zombie
    this.physics.add.overlap(this.charmThunder, this.enemies, this.logic.attackEnemyThunder);
    //Si el z nos toa
    this.physics.add.collider(this.witch, this.enemies, this.logic.hurtPlayer);

    //si los hechizos chocasn con la pared desaparecen
    this.physics.add.collider(this.charmFire, this.suelo, (obj1, obj2) => {
      obj1.destroy();
    }, null, this);
    this.physics.add.collider(this.charmIce, this.suelo, (obj1, obj2) => {
      obj1.destroy();
    }, null, this);
    this.physics.add.collider(this.charmThunder, this.suelo, (obj1, obj2) => {
      obj1.destroy();
    }, null, this);

    this.logic.checkFlagsHurtEnemy(this, this.enemies);
    this.logic.checkFlagsHurtPlayer(this, this.witch,this.logic,this.music);
    //controla coger la llave
    this.physics.add.overlap(this.witch, this.keyObject, this.logic.catchKeyDoor, null, this);
    //si te caes del tren se resetea el nivel
    this.physics.add.collider(this.witch, this.muerte, this.logic.resetPlayer, null, this);
    this.physics.add.collider(this.witch, this.door, (witch,obj) => {
      if(witch.keyDoor){
        this.music.destroy();
        //ruido abrir puerta
        this.scene.start("prologoBeforeMrLion");
      }
    });

    //Si está en la escalera permite escalar al jugador
    if (this.physics.add.overlap(this.witch, this.escalar)) {
      this.witch.onLadder = true;
    } else {
      this.witch.onLadder = false;
    }
    
    console.log("update");
  }
}