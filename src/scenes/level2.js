import Player from '../player.js';
import Ogro from '../enemies/ogro.js';
import GameUI from './gameUI.js';

export default class Level1 extends Phaser.Scene {

    constructor() {
      super({ key: 'level2' });
      this.level = 2;
    }
    preload() {
  
    }
    create() {

        this.logic = this.scene.get('logicLevels');
        this.music = this.logic.addMusicScenes(this,"level2");
        //this.music.volume = 0.10;    
        this.logic.createButtonMusic(this);
        //mapa
        let map = this.add.tilemap("mapaLevel2");
        //Tilesets para el mapa
        let castle = map.addTilesetImage('tile_castle_grey', "tile_castle_grey");
        let montañas= map.addTilesetImage('montañas', "montañas");
    
        //capas
        // this.tileset = map.addTilesetImage('tilesetNameInTiled', 'tilesetNameInPhaser');
        this.capaSuelo = map.createStaticLayer("capa suelo", [castle], 0, 0);
        this.objects = map.getObjectLayer["Capa de Objetos "];
        this.capaMuerte = map.createStaticLayer("capa muerte", [castle], 0, 0);
        this.fondoCielo = map.createStaticLayer("fondo cielo", [montañas], 0, 0, 30, 200);
        this.fondoCastillo = map.createStaticLayer("fondo castillo", [castle], 0, 0, 30, 200);
        this.castillo = map.createStaticLayer("castillo", [castle], 0, 0);
        this.fondoDelante = map.createStaticLayer("fondo delante", [castle], 0, 0);
        this.door = map.createStaticLayer("puerta", [castle], 0, 0);
    
        //setCollisionByExclusionle dice a Phaser que habilite las colisiones 
        //para cada mosaico cuyo índice no sea -1, por lo tanto, todos los mosaicos.
        this.capaSuelo.setCollisionByExclusion(-1, true);
        this.capaMuerte.setCollisionByExclusion(-1, true);
        this.door.setCollisionByExclusion(-1, true);
    
    
        //añadimosObjeto
        this.keyObject = this.physics.add.sprite(3874, 806, "keyDoor");
        this.hearthUI = this.physics.add.sprite(4089, 155, "hearthUI");
        //this.hearthUI = this.physics.add.sprite(220, 524, "hearthUI");
        this.logic.createLifePlayer(this);
    
    
        //player
        this.witch = new Player(this, 102, 524);
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
        let o = new Ogro(this, 200, 524);
        let o1 = new Ogro(this, 990.909, 509.091);
        let o2 = new Ogro(this, 2112.12, 348.485);
        let o3 = new Ogro(this, 3130.3, 503.03);
        let o4 = new Ogro(this, 3330.3, 506.061);
        let o5 = new Ogro(this, 3521.21, 284.848);
        let o6 = new Ogro(this, 3839.39, 284.848);
        let o7 = new Ogro(this, 3833.33, 87.8788);
        let o8 = new Ogro(this, 4315.15, 506.061);
        let o9 = new Ogro(this, 4572.73, 509.091);
        let o10 = new Ogro(this, 5306.06, 157.576);
        let o11 = new Ogro(this, 4927.27, 412.121);
        let o12 = new Ogro(this, 5693.94, 157.576);
        this.enemies.add(o);
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
      this.enemies.getChildren().forEach(function (item) { //necesario para crear cada enemigo con sus propiedades. Hacerlo antes de añadirlo al grupo no funciona
      item.create();
      item.createAnims();
    }, this);
    
        //colisiones enemigos
        this.physics.add.collider(this.enemies, this.capaSuelo);
        
    
    
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
    
        //Si el fuego toca a un ogro
        this.physics.add.overlap(this.charmFire, this.enemies, this.logic.attackEnemyFire);
        //Si el hielo toca a un ogro
        this.physics.add.overlap(this.charmIce, this.enemies, this.logic.attackEnemyIce);
        //Si el rayo toca a un ogro
        this.physics.add.overlap(this.charmThunder, this.enemies, this.logic.attackEnemyThunder);
        //Si el ogro nos toca
        this.physics.add.overlap(this.witch, this.enemies, this.logic.hurtPlayer);
        
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
        this.logic.checkFlagsHurtPlayer(this, this.witch,this.logic);
        //controla coger la llave
        this.physics.add.overlap(this.witch, this.keyObject, this.logic.catchKeyDoor, null, this);

        //controla coger la vida
        this.physics.add.overlap(this.witch, this.hearthUI, this.logic.catchHeart, null, this);

        //si te caes se resetea el nivel
        this.physics.add.collider(this.witch, this.capaMuerte, this.logic.resetPlayer, null, this);
        this.physics.add.collider(this.witch, this.door, (witch,obj) => {
          if(witch.keyDoor){
            this.music.destroy();
            this.scene.start("prologoBeforeMrLion");
          }
        });
        
        console.log("update");
      }
    }