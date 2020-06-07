
export default class Zombie extends Phaser.GameObjects.Sprite {
  constructor(scene, x, y) {
    super(scene, x, y, 'zombie');
    this.health = 5;
    this.speed = 30;
    this.delay = 2000;
    this.hurtFire = false;
    this.hurtIce = false;
    this.hurtThunder = false;
    this.frozen =false;
  }
  create() {
    this.scene.add.existing(this);
    this.scene.physics.add.existing(this);
    this.body.setCollideWorldBounds(true);
    this.body.setVelocityX(this.speed);
    this.setScale(0.65);
  }
  createAnims() {
    this.scene.anims.create({
      key: 'walkDchaZ',
      frames: this.scene.anims.generateFrameNames('zombie', {
        prefix: 'Zombie_',
        suffix: '.png',
        start: 9,
        end: 13
      }),
      frameRate: 5,
    });

    this.scene.anims.create({
      key: 'burnedDZ',
      frames:this.scene.anims.generateFrameNames('zombie', {
        prefix: 'Zombie_',
        suffix: '.png',
        start: 2,
        end: 2
      }),
      frameRate: 10,
    });
    this.scene.anims.create({
      key: 'frozenDZ',
      frames: this.scene.anims.generateFrameNames('zombie', {
        prefix: 'Zombie_',
        suffix: '.png',
        start: 3,
        end: 3
      }),
      frameRate: 10,
    }); this.scene.anims.create({
      key: 'electrocutedDZ',
      frames:this.scene.anims.generateFrameNames('zombie', {
        prefix: 'Zombie_',
        suffix: '.png',
        start: 4,
        end: 4
      }),
      frameRate: 10,
    });
    this.scene.anims.create({
      key: 'burnedIZ',
      frames: this.scene.anims.generateFrameNames('zombie', {
        prefix: 'Zombie_',
        suffix: '.png',
        start: 6,
        end: 6
      }),
      frameRate: 10,
    });
    this.scene.anims.create({
      key: 'frozenIZ',
      frames: this.scene.anims.generateFrameNames('zombie', {
        prefix: 'Zombie_',
        suffix: '.png',
        start: 7,
        end: 7
      }),
      frameRate: 10,
    });
    this.scene.anims.create({
      key: 'electrocutedIZ',
      frames: this.scene.anims.generateFrameNames('zombie', {
        prefix: 'Zombie_',
        suffix: '.png',
        start: 8,
        end: 8
      }),
      frameRate: 10,
    });
  }

  someHurts() {
    if (this.hurtFire || this.hurtIce || this.hurtThunder) {
      return true;
    } else {
      return false;
    }
  }

  preUpdate(t, dt) {
    super.preUpdate(t, dt)
    if (this.health <= 0) {
      this.destroy();
      return
    }
    
    this.play("walkDchaZ", true);
    if(this.frozen){
      this.play("frozenDZ", true);
    }
    //mirror para los sprites
    if (!this.someHurts) {
      this.play("walkDchaZ", true);
      if (this.flipX) {
        this.body.setVelocityX(this.speed);
      } else {
        this.body.setVelocityX(-this.speed);
      }
    }
    //girar a la izq si toca limites
    if (this.body.touching.right || this.body.blocked.right) {
      this.body.setVelocityX(-this.speed);
      console.log("gira a la izq")
    }
    //dcha
    else if (this.body.touching.left || this.body.blocked.left) {
      this.body.setVelocityX(this.speed);
      console.log("gira a la chaaaaaaaaaaa")
    }

    if (this.hurtFire) {
      this.play("burnedDZ", true);
      console.log("SE QUEMAAAAAAAAAAAAAAAAAAAAAaaaa");
    }
    if (this.hurtIce) {
      this.play("frozenDZ", true);
      this.body.setVelocityX(0);
    }
    if (this.hurtThunder) {
      this.play("electrocutedDZ", true);
      this.body.setVelocityX(this.speed - 15);
    }
    if(this.body.velocity.x > 0){
      this.setFlipX(false);
    }else if(this.body.velocity.x < 0){
      this.setFlipX(true);
    }

  }

}