//import Star from './star.js'

export default class Zombie extends Phaser.GameObjects.Sprite {
  constructor(scene, x, y) {
    super(scene, x, y, 'zombie');
    this.health = 2;
  }
  create() {
    this.scene.add.existing(this);
    this.scene.physics.add.existing(this);
    this.body.setCollideWorldBounds(true);
    this.setScale(0.75);
  }
  createAnims() {
    this.scene.anims.create({
      key: 'walkDchaZ',
      frames: [{ key: 'zombie', frame: 'Zombie_1' }],
      frameRate: 10,
    });
    this.scene.anims.create({
      key: 'walkIzqZ',
      frames: [{ key: 'zombie', frame: 'Zombie_5' }],
      frameRate: 10,
    });
    this.scene.anims.create({
      key: 'burnedDZ',
      frames: [{ key: 'zombie', frame: 'Zombie_2' }],
      frameRate: 10,
    });
    this.scene.anims.create({
      key: 'frozenDZ',
      frames: [{ key: 'zombie', frame: 'Zombie_3' }],
      frameRate: 10,
    }); this.scene.anims.create({
      key: 'electrocutedDZ',
      frames: [{ key: 'zombie', frame: 'Zombie_4' }],
      frameRate: 10,
    });
    this.scene.anims.create({
      key: 'burnedIZ',
      frames: [{ key: 'zombie', frame: 'Zombie_6' }],
      frameRate: 10,
    });
    this.scene.anims.create({
      key: 'frozenIZ',
      frames: [{ key: 'zombie', frame: 'Zombie_7' }],
      frameRate: 10,
    });
    this.scene.anims.create({
      key: 'electrocutedIZ',
      frames: [{ key: 'zombie', frame: 'Zombie_8' }],
      frameRate: 10,
    });
  }


  update() {
    //izq
    console.log("zzzzzzzzzzzzzzzzzzzzzzzz")
    if (this.body.touching.right || this.body.blocked.right) {
      this.body.setVelocityX(-20);
     // this.play("walkIzqZ", true);
    }
    //dcha
    else if (this.body.touching.left || this.body.blocked.left) {
      this.body.setVelocityX(20);
      //this.play("walkDchaZ", true);
    }
  }
}