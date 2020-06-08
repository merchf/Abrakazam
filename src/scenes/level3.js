import Player from '../player.js';
import Ogro from '../enemies/ogro.js';
export default class Level3 extends Phaser.Scene {

  constructor() {
    super({ key: 'level3' });
    this.level = 3;
    this.levelName = "level3";
  }
  preload() {

  }
  create() {

    this.logic = this.scene.get('logicLevels');
    this.music = this.logic.addMusicScenes(this, "level3");
    this.music.volume = 0.10;
    this.logic.createButtonMusic(this);
    this.logic.createButtonPause(this);
    //mapa
    let map = this.add.tilemap("mapaLevel3");
    //Tilesets para el mapa
    let moon = map.addTilesetImage('luna', "luna");
    let castle = map.addTilesetImage('tile_castle_grey', "tile_castle_grey");
    let montañas = map.addTilesetImage('montañas', "montañas");

    //capas
    // this.tileset = map.addTilesetImage('tilesetNameInTiled', 'tilesetNameInPhaser');
    this.tope = map.createStaticLayer("topeOgros", [castle], 0, 0);
    this.objects = map.getObjectLayer["objetos"];
    this.fondoCielo = map.createStaticLayer("fondoMontanas", [montañas,moon], 0, 0, 30, 200);
    this.fondoCastillo = map.createStaticLayer("fondoCastillo", [castle], 0, 0, 30, 200);
    this.capaSuelo = map.createStaticLayer("suelo", [castle], 0, 0);
    this.fondoDelante = map.createStaticLayer("decoraciones", [castle], 0, 0);
    this.door = map.createStaticLayer("puerta", [castle], 0, 0);

    //setCollisionByExclusionle dice a Phaser que habilite las colisiones 
    //para cada mosaico cuyo índice no sea -1, por lo tanto, todos los mosaicos.
    this.capaSuelo.setCollisionByExclusion(-1, true);
    this.tope.setCollisionByExclusion(-1, true);
    this.door.setCollisionByExclusion(-1, true);


    //añadimosObjeto
    this.keyObject = this.physics.add.sprite(64, 1224, "keyDoor");
    this.hearthUI = this.physics.add.sprite(46.6666666666667, 1792, "hearthUI");
    //this.hearthUI = this.physics.add.sprite(220, 524, "hearthUI");
    this.logic.createLifePlayer(this);


    //player
    this.witch = new Player(this, 64, 2346);
    this.witch.createAnims();
    //  this.collider = this.physics.add.collider(this.witch, this.suelo);
    this.witch.body.debugBodyColor = 0x09b500;

    //colisiones playes
    this.physics.add.collider(this.witch, this.capaSuelo);
    this.physics.add.collider(this.keyObject, this.capaSuelo);
    this.physics.add.collider(this.hearthUI, this.capaSuelo);

    //enemies(ogros)
    this.enemies = this.physics.add.group();

    //esto habria que meterlo como una funcion
    //colocarlos bien
    let o1 = new Ogro(this, 284, 936);
    let o2 = new Ogro(this, 492, 644);
    let o3 = new Ogro(this, 988, 625.333333333333);
    let o4 = new Ogro(this, 742.666666666667, 354.666666666667);
    let o5 = new Ogro(this, 1128, 352);
    let o6 = new Ogro(this, 232, 350.666666666667);
    let o7 = new Ogro(this, 297.333333333333, 637.333333333333);
    let o8 = new Ogro(this, 1000, 930.666666666667);
    let o9 = new Ogro(this, 430.666666666667, 934.666666666667);
    let o10 = new Ogro(this, 228, 1216);
    let o11 = new Ogro(this, 936, 1218.66666666667);
    let o12 = new Ogro(this, 713.333333333333, 1220);
    let o13 = new Ogro(this, 340, 1525.33333333333);
    let o14 = new Ogro(this, 950.666666666667, 1522.66666666667);
    let o15 = new Ogro(this, 438.666666666667, 1794.66666666667);
    let o16 = new Ogro(this, 857.333333333333, 1796);
    let o17 = new Ogro(this, 548, 2100);
    let o18 = new Ogro(this, 753.333333333333, 2098.66666666667);

    this.enemies.add(o1);
    this.enemies.add(o2);
    this.enemies.add(o3);
    this.enemies.add(o4);
    this.enemies.add(o5);
    this.enemies.add(o6);
    this.enemies.add(o7);
    this.enemies.add(o8);
    this.enemies.add(o9);
    this.enemies.add(o10);
    this.enemies.add(o11);
    this.enemies.add(o12);
    this.enemies.add(o13);
    this.enemies.add(o14);
    this.enemies.add(o15);
    this.enemies.add(o16);
    this.enemies.add(o17);
    this.enemies.add(o18);
    this.enemies.getChildren().forEach(function (item) { //necesario para crear cada enemigo con sus propiedades. Hacerlo antes de añadirlo al grupo no funciona
      item.create();
      item.createAnims();
    }, this);

    //colisiones enemigos
    this.physics.add.collider(this.enemies, this.capaSuelo);
    this.physics.add.collider(this.enemies, this.tope);

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
    this.witch.preUpdate(time, delta);
    this.enemies.getChildren().forEach(function (item) {
      item.preUpdate(time, delta);
    }, this);

    //Si el fuego toca a un ogro
    this.physics.add.overlap(this.charmFire, this.enemies, this.logic.attackEnemyFire);
    //Si el hielo toca a un ogro
    this.physics.add.overlap(this.charmIce, this.enemies, this.logic.attackEnemyIce);
    //Si el rayo toca a un ogro
    this.physics.add.overlap(this.charmThunder, this.enemies, this.logic.attackEnemyThunder);
    //Si el ogro nos toca
    this.physics.add.collider(this.witch, this.enemies, this.logic.hurtPlayer);

    //si los hechizos chocasn con la pared desaparecen
    this.physics.add.collider(this.charmFire, this.capaSuelo, (obj1, obj2) => {
      obj1.destroy();
    }, null, this);
    this.physics.add.collider(this.charmIce, this.capaSuelo, (obj1, obj2) => {
      obj1.destroy();
    }, null, this);
    this.physics.add.collider(this.charmThunder, this.capaSuelo, (obj1, obj2) => {
      obj1.destroy();
    }, null, this);

    this.logic.checkFlagsHurtEnemy(this, this.enemies);
    this.logic.checkFlagsHurtPlayer(this, this.witch, this.logic,this.music);
    //controla coger la llave
    this.physics.add.overlap(this.witch, this.keyObject, this.logic.catchKeyDoor, null, this);

    //controla coger la vida
    this.physics.add.overlap(this.witch, this.hearthUI, this.logic.catchHeart, null, this);

    //si te caes se resetea el nivel
    this.physics.add.collider(this.witch, this.capaMuerte, this.logic.resetPlayer, null, this);
    this.physics.add.collider(this.witch, this.door, (witch, obj) => {
      if (witch.keyDoor) {
        this.music.destroy();
        this.scene.start("prologoBeforeMrLion");
      }
    });

    console.log("update");
  }
}