import Player from '../player.js';
import Zombie from '../enemies/zombie.js';


export default class LogicLevels extends Phaser.Scene {

  constructor() {
    super({ key: 'logicLevels' });
    this.musicOn = true;
    this.pause = false;
  }
  preload() {
  }

  create() {
  }

  addMusicScenes(scene, sceneKey) {
    let music;
    let keyMusic;
    switch (sceneKey) {
      case "prologo":
        keyMusic = "prologoMusic";
        break;
      case "level1":
        keyMusic = "level1Music";
        break;
      case "prologoBeforeMrLion":
        keyMusic = "prologoMusic";
        break;
      case "batallaFinal":
        keyMusic = "finalBattleMusic";
        break;
      case "prologoAfterMrLion":
        keyMusic = "prologoAfterMrLionMusic";
        break;
      case "level2":
        keyMusic = "level2Music";
        break;
      case "gameOver":
        keyMusic = "gameOverMusic";
        break;
    }
    music = scene.sound.add(keyMusic);
    music.play();
    music.setLoop(true);
    return music;
  }
  addMusicZ() {
    let music = this.sound.add("zMusic");
    music.play();
  }
  addMusicHurtZ() {
    let music = this.sound.add("hurtZMusic");
    music.play();
  }
  /*--------- ogrooooo--------
  addMusicO(){
    let music = this.sound.add("oMusic");
    music.play();
  }
  addMusicHurtO(){
    let music = this.sound.add("hurtOMusic");
    music.play();
  }
*/
  //vida player
  createLifePlayer(scene) {
    this.life = scene.add.sprite(50, 20, 'Life3').setDepth(1);
    this.life.setTexture('Life3');
    this.life.setScrollFactor(0);
  }
  createButtonMusic(scene) {
    let buttonMusic = scene.add.sprite(28, 90, 'musicOn').setDepth(1);
    buttonMusic.setTexture('musicOn');
    buttonMusic.setScrollFactor(0);
    buttonMusic.setInteractive();

    buttonMusic.on("pointerup", () => {
      if (this.musicOn) {
        buttonMusic.setTexture("musicOff");
        scene.music.pause();
        this.musicOn = false;
      } else {
        buttonMusic.setTexture("musicOn");
        scene.music.resume();
        this.musicOn = true;
      }
    });
  }
  createButtonPause(scene) {
    let buttonPause = scene.add.sprite(40, 130, 'pause_button').setDepth(1);
    buttonPause.setScrollFactor(0);
    buttonPause.setInteractive();
    buttonPause.setScale(0.5);
    buttonPause.on("pointerup", () => {
      if (!this.pause) {
        buttonPause.setTexture("pause_button");
        scene.music.resume();
        scene.resume();
        this.pause = true;
      } else {
    //   buttonPause.setTexture("continue_button");
        scene.music.pause();
        scene.stop();
        this.pause = false;
      }
    });
  }

  updateLifePlayer(health) {
    if (health <= 0) {
      this.life.setTexture('Life0');
    }
    else if (health === 1) {
      this.life.setTexture('Life1')
    }
    else if (health === 2) {
      this.life.setTexture('Life2')
    }
    else if (health === 3) {
      this.life.setTexture('Life3')
    }
  }
  //vida MrLion

  createLifeMrLion(scene) {
    this.lifeMrLion = scene.add.sprite(750, 20, 'LifeMrLion3');
    this.lifeMrLion.setDepth(20);
    this.lifeMrLion.setTexture('LifeMrLion3');
  }

  updateLifeMrLion(health) {
    if (health <= 0) {
      this.lifeMrLion.setTexture('LifeMrLion0');
    }
    else if (health === 1) {
      this.lifeMrLion.setTexture('LifeMrLion1')
    }
    else if (health === 2) {
      this.lifeMrLion.setTexture('LifeMrLion2')
    }
    else if (health === 3) {
      this.lifeMrLion.setTexture('LifeMrLion3')
    }
  }

  //ataques
  hurtPlayer(player, enemie) {
    player.hurtFlag = true;
    player.play('deadWitch', false);
  }
  updateHurtParams(player) {
    player.hurtFlag = false;
    player.health -= 1;
  }
  attackEnemyFire(charm, e) {
    charm.destroy();
    e.health -= 3;
    e.hurtFire = true;
  }
  attackEnemyIce(charm, e) {
    e.hurtIce = true;
    charm.destroy();

  }
  attackEnemyThunder(charm, e) {
    e.hurtThunder = true;
    charm.destroy();
  }
  //checks varios
  checkFlagsHurtEnemy(scene, e) {
    e.getChildren().forEach(function (item) {
      if (item.hurtFire) {
        scene.time.addEvent({
          delay: item.delay, //tiempo que el enemigo esta stuneado
          callback: () => {
            item.hurtFire = false;
          },
        });
      } else if (item.hurtIce) {
        scene.time.addEvent({
          delay: item.delay, //tiempo que el enemigo esta stuneado
          callback: () => {
            item.hurtIce = false;
          },
        });
      } else if (item.hurtThunder) {
        scene.time.addEvent({
          delay: item.delay, //tiempo que el enemigo esta stuneado
          callback: () => {
            item.hurtThunder = false;
          },
        });
      }
    });
  }
  checkFlagsHurtPlayer(scene, player, logic, music) {
    if (player.hurtFlag) {
      logic.updateHurtParams(player);
      logic.updateLifePlayer(player.health);
      //ver si no se ha quedado sin vidas
      logic.checkLife(player, music);

    }
  }
  checkLife(player, music) {
    if (player.health <= 0) {
      music.destroy();
      this.scene.start("level1");
    }
  }
  checkLadder(player) {
    player.onLadder = true;
  }

  //reset player 
  resetPlayer(player, obj2) {

    console.log("MUERTEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE");
    player.body.setVelocity(0, 0);
    player.setX(100);
    player.setY(400);
    player.play('default', true);
    //  this.witch.setAlpha(0);
    let tw = this.tweens.add({
      targets: player,
      alpha: 1,
      duration: 100,
      ease: 'Linear',
      repeat: 5,
    });
  }
  //coger objetos
  catchKeyDoor(player, object1) {
    let music = this.sound.add("catchKeyMusic");
    music.play();
    player.keyDoor = true;
    player.updateKey();
    object1.destroy();
  }

  catchHeart(player, object1) {
    if (player.health < 3) {
      let music = this.sound.add("catchHearthMusic");
      music.play();
      player.health += 1;
      object1.destroy();
    }
  }

  //pasar de nivel
  nextLevel(level) {
    //habria que hacer un stop del level actual
    switch (level) {
      case "uno":
        this.scene.start('prologoAfterMrLion');
        break;
      case "dos":
        this.scene.start('prologoAfterMrLion2');
        break;
    }
  }
  prologoBeforeFinalBattle(player, obj) {
    if (player.keyDoor === true) {
      this.scene.start('prologoBeforeMrLion');
    }
  }
  prologoAfterFinalBattle(player, obj) {
    this.scene.start('batallaFinal');

  }
}