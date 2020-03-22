export default class Level1 extends Phaser.Scene {
    constructor() {
      super({ key: 'level1' });
    }
    preload() {
      this.load.image('background', '/assets/background/mapaNivel1.json');
      this.load.image('bruja', '/assets/bruja/Brujita.png');
  
    }
  
    create() {
      this.add.sprite(0,0,'background');
      this.scene.start('scene');
    }
    update(){
      console.log("update");
    }
  }