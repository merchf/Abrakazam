import CharmFire from './charmFire.js'
import CharmIce from './charmIce.js'
import CharmThunder from './charmThunder.js'

export default class Player extends Phaser.GameObjects.Sprite {

  constructor(scene, x, y) {
    super(scene, x, y, 'bruja');
    this.scene = scene;
    this.scene.add.existing(this);
    this.scene.physics.add.existing(this);
    this.body.setCollideWorldBounds();
    this.speed = 230;
    this.jumpSpeed = -250;
    this.health = 3;
    this.hurtFlag = false;
    this.lastFired = 0;
    this.timeFire = 5;
    this.timeIce = 10;
    this.timeThunder = 2;
    //la llave tiene que estar a true para acabar cada nivel
    this.keyDoor = false;
    this.onLadder = false;
    this.labelKey = this.scene.add.text(10, 40);

    this.labelKey.setScrollFactor(0);
    this.cursors = this.scene.input.keyboard.createCursorKeys();
    this.setFlipX(true);
    //ataques y salto
    this.cursorsExtra = this.scene.input.keyboard.addKeys({
      fireAttack: Phaser.Input.Keyboard.KeyCodes.Q,
      iceAttack: Phaser.Input.Keyboard.KeyCodes.W,
      thunderAttack: Phaser.Input.Keyboard.KeyCodes.E,
      jump: Phaser.Input.Keyboard.KeyCodes.SPACE
    });
    this.updateKey();
  }
  updateKey() {
    if (this.keyDoor) {
      this.labelKey.text = '¡Llave encontrada! Ya puedes abrir la puerta.';
    } else {
      this.labelKey.text = 'Encuentra la llave para poder abrir la puerta.';
    }
  }
  createAnims() {
    this.scene.anims.create({
      key: 'default',
      frames: [{ key: 'bruja', frame: 'Brujita_1' }],
      frameRate: 10,
    });
    this.scene.anims.create({
      key: 'walkDchaBruja',
      frames: this.scene.anims.generateFrameNames('bruja', {
        prefix: 'Brujita_',
        suffix: '.png',
        start: 1,
        end: 4
      }),
      frameRate: 10,
    });
    this.scene.anims.create({
      key: 'walkIzqBruja',
      frames: this.scene.anims.generateFrameNames('bruja', {
        prefix: 'Brujita_',
        suffix: '.png',
        start: 5,
        end: 8
      }),
      frameRate: 10,
    });
    this.scene.anims.create({
      key: 'climbBruja',
      frames: this.scene.anims.generateFrameNames('bruja', {
        prefix: 'Brujita_',
        suffix: '.png',
        start: 9,
        end: 11
      }),
      frameRate: 10,
    });
    this.scene.anims.create({
      key: 'attackFireDB',
      frames: this.scene.anims.generateFrameNames('bruja', {
        prefix: 'Brujita_',
        suffix: '.png',
        start: 12,
        end: 13
      }),
      frameRate: 10,
    });
    this.scene.anims.create({
      key: 'attackFireIB',
      frames: this.scene.anims.generateFrameNames('bruja', {
        prefix: 'Brujita_',
        suffix: '.png',
        start: 14,
        end: 15
      }),
      frameRate: 10,
    });
    this.scene.anims.create({
      key: 'attackIceDB',
      frames: this.scene.anims.generateFrameNames('bruja', {
        prefix: 'Brujita_',
        suffix: '.png',
        start: 16,
        end: 17
      }),
      frameRate: 10,
    });
    this.scene.anims.create({
      key: 'attackIceIB',
      frames: this.scene.anims.generateFrameNames('bruja', {
        prefix: 'Brujita_',
        suffix: '.png',
        start: 18,
        end: 19
      }),
      frameRate: 10,
    });
    this.scene.anims.create({
      key: 'attackThunderDB',
      frames: this.scene.anims.generateFrameNames('bruja', {
        prefix: 'Brujita_',
        suffix: '.png',
        start: 20,
        end: 21
      }),
      frameRate: 10,
    });
    this.scene.anims.create({
      key: 'attackThunderIB',
      frames: this.scene.anims.generateFrameNames('bruja', {
        prefix: 'Brujita_',
        suffix: '.png',
        start: 22,
        end: 23
      }),
      frameRate: 10,
    });
    this.scene.anims.create({
      key: 'jumpBrujaD',
      frames: this.scene.anims.generateFrameNames('bruja', {
        prefix: 'Brujita_',
        suffix: '.png',
        start: 24,
        end: 25
      }),
      frameRate: 10,
    });
    this.scene.anims.create({
      key: 'jumpBrujaI',
      frames: this.scene.anims.generateFrameNames('bruja', {
        prefix: 'Brujita_',
        suffix: '.png',
        start: 26,
        end: 27
      }),
      frameRate: 10,
    });
    this.scene.anims.create({
      key: 'deadWitch',
      frames: [{ key: 'bruja', frame: 'Brujita_31' }],
      frameRate: 10,
    });
  }

  preUpdate(t, dt) {
    super.preUpdate(t, dt)
    this.body.setSize(0, 85);

    //attack
    if (Phaser.Input.Keyboard.JustDown(this.cursorsExtra.fireAttack) && this.body.onFloor()) {

      this.body.setVelocityX(0);
      this.play('attackFireIB', true);
      this.throwCharmFire();

    } else if (Phaser.Input.Keyboard.JustDown(this.cursorsExtra.iceAttack) && this.body.onFloor()) {
      this.body.setVelocityX(0);
      this.play('attackIceIB', true);
      this.throwCharmIce();
    } else if (Phaser.Input.Keyboard.JustDown(this.cursorsExtra.thunderAttack) && this.body.onFloor()) {
      this.body.setVelocityX(0);
      this.play('attackThunderIB', true);
      this.throwCharmThunder();
    }

    //escalar
    if (this.cursors.up.isDown && this.onLadder == true) {
      this.body.setVelocityY(-100);
      this.play('climbBruja', true);
    } else if (this.cursors.down.isDown && this.onLadder == true) {
      this.body.setVelocityY(100);
      this.play('climbBruja', true);
    }
    //cuando recibe daño
    if (this.anims.isPlaying && this.anims.currentAnim.key === 'deadWitch') {
      if (this.body.touching.down) {
        this.body.setVelocityY(-800);
      }
      else if (this.body.touching.left) {
        this.body.setVelocityX(+800);
      }
      else if (this.body.touching.right) {
        this.body.setVelocityX(-800);
      }
      else if (this.body.touching.up) {
        this.body.setVelocityY(+800);
      }
    }


    //moverse
    if (this.cursors.left.isDown) {
      this.body.setVelocityX(-this.speed);
      if (this.body.onFloor()) {
        this.play('walkIzqBruja', true);
      }
    }
    else if (this.cursors.right.isDown) {
      this.body.setVelocityX(this.speed);
      if (this.body.onFloor()) {
        this.play('walkIzqBruja', true);
      }
    }
    else if (this.cursors.right.isUp && this.cursors.left.isUp && !this.anims.isPlaying) {
      this.body.setVelocityX(0);
      /* if (this.body.onFloor()) {
         this.play('default', true);
       }
 */
    }

    //saltar
    if (this.cursorsExtra.jump.isDown && this.body.onFloor()) {
      this.body.setVelocityY(this.jumpSpeed);
      this.play('jumpBrujaI', true);
      this.addMusicJump();
    }

    //sprites segun lado
    if (this.body.velocity.x > 0)
      this.setFlipX(true); //derecha
    else if (this.body.velocity.x < 0)
      this.setFlipX(false); //izquierda

  }

  throwCharmFire() {
    let charm = new CharmFire(this.scene, this.x, this.y, this);
    this.addMusicCharm();
  }
  throwCharmIce() {
    let charm = new CharmIce(this.scene, this.x, this.y, this);
    this.addMusicCharm();
  }
  throwCharmThunder() {
    let charm = new CharmThunder(this.scene, this.x, this.y, this);
    this.addMusicCharm();
  }
  addMusicCharm(){
    let music = this.scene.sound.add("charmMusic");
    music.play();
  }
  addMusicJump(){
    let music = this.scene.sound.add("jumpMusic");
    music.play();
  }
}