import Player from '../player.js';
//import Ogro from '../enemies/ogro.js';
//import GameUI from './gameUI.js';

export default class Level1 extends Phaser.Scene {

    constructor() {
      super({ key: 'level2' });
      this.level = 2;
    }
    preload() {
  
    }
    create() {

        this.logic = this.scene.get('logicLevels');
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
    
    
        //añadiosObjeto
        // this.keyObject = this.add.sprite(4354, 414, "keyDoor");
        this.keyObject = this.physics.add.sprite(3874, 806, "keyDoor");
        this.logic.createLifePlayer(this);
    
    
        //player
        this.witch = new Player(this, 102, 524);
        this.witch.createAnims();
        //  this.collider = this.physics.add.collider(this.witch, this.suelo);
        this.witch.body.debugBodyColor = 0x09b500;
    
        //colisiones playes
        this.physics.add.collider(this.witch, this.capaSuelo);
        this.physics.add.collider(this.keyObject, this.capaSuelo);
    
        //enemies(ogros)
     
    
        //colisiones enemigos
        //this.physics.add.collider(this.enemies, this.topeZ);
        //this.physics.add.collider(this.enemies, this.suelo);
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
       /* this.enemies.getChildren().forEach(function (item) {
          item.preUpdate(time, delta);
        }, this);*/
    
    /*
        //Si el fuego toca a un zombie
        this.physics.add.overlap(this.charmFire, this.enemies, this.logic.attackEnemyFire);
        //Si el hielo toca a un zombie
        this.physics.add.overlap(this.charmIce, this.enemies, this.logic.attackEnemyIce);
        //Si el rayo toca a un zombie
        this.physics.add.overlap(this.charmThunder, this.enemies, this.logic.attackEnemyThunder);
        //Si el z nos toa
        this.physics.add.collider(this.witch, this.enemies, this.logic.hurtPlayer);
    */
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
    
       // this.logic.checkFlagsHurtEnemy(this, this.enemies);
        this.logic.checkFlagsHurtPlayer(this, this.witch,this.logic);
        //controla coger la llave
        this.physics.add.overlap(this.witch, this.keyObject, this.logic.catchKeyDoor, null, this);
        //si te caes se resetea el nivel
        this.physics.add.collider(this.witch, this.capaMuerte, this.logic.resetPlayer, null, this);
        this.physics.add.collider(this.witch, this.door, (witch,obj) => {
          if(witch.keyDoor){
            this.scene.start("prologoBeforeMrLion");
          }
        });
        
        console.log("update");
      }
    }