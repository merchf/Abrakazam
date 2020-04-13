//import Star from './star.js'

export default class Zombie extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y) {
      super(scene, x, y, 'zombie');
      this.health = 2; 
    }
  create(){
    this.scene.add.existing(this);
    this.scene.physics.add.existing(this);
    this.body.setCollideWorldBounds(true);
  }
    createAnims() {
        this.scene.anims.create({
          key: 'walkDchaZ',
          frames: this.scene.anims.generateFrameNames('brujaDcha', {
            start: 0,
            end: 3
          }),
          frameRate: 10,
        });
        this.animA = this.scene.anims.create({
          key: 'walkIzqZ',
          frames: this.scene.anims.generateFrameNames('brujaIzq', {
            start: 0,
            end: 3
          }),
          frameRate: 10,
        });
    }
   
  
    preUpdate() {
        //izq
        if (this.body.touching.right || this.body.blocked.right) {
			this.body.setVelocityX(-70); // 
        }
        //dcha
		else if (this.body.touching.left || this.body.blocked.left) {
			this.body.setVelocityX(70); 
		}

    }
  
  
  }