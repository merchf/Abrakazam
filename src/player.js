//import Star from './star.js'

export default class Player extends Phaser.GameObjects.Sprite {
  constructor(scene, x, y) {
    super(scene, x, y, 'bruja');
    this.scene.add.existing(this);
    this.scene.physics.add.existing(this);
    this.body.setCollideWorldBounds();
    this.speed = 300;
    this.jumpSpeed = -400;
    this.health = 5;
    //la llave tiene que estar a true para acabar cada nivel
    this.keyDoor = false;
    this.label = this.scene.add.text(10, 10);
    this.cursors = this.scene.input.keyboard.createCursorKeys();
    //ataques y salto
    this.cursorsExtra = this.scene.input.keyboard.addKeys({
      fireAttack: Phaser.Input.Keyboard.KeyCodes.Q,
      iceAttack: Phaser.Input.Keyboard.KeyCodes.W,
      thunderAttack: Phaser.Input.Keyboard.KeyCodes.E,
      jump: Phaser.Input.Keyboard.KeyCodes.SPACE
    });
  }

  createAnims() {
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
      key: 'attackFireIB',
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
      frameRate: 2,
    });
    this.scene.anims.create({
      key: 'jumpBrujaI',
      frames: this.scene.anims.generateFrameNames('bruja', {
        prefix: 'Brujita_',
        suffix: '.png',
        start: 26,
        end: 27
      }),
      frameRate: 2,
    });
  }

  update() {
    this.body.setSize(0, 85);
    //saltar
    if (this.cursorsExtra.jump.isDown && this.body.onFloor()) {
      this.body.setVelocityY(this.jumpSpeed);
      this.play('jumpBrujaD', true);
      //cuando tengamos lods audios aqui habría que meterlo

    }
    //escalar
    if (this.cursors.up.isDown && this.onLadder == true) {
      this.body.setVelocityY(-100);
      this.play('climbBruja', true);
      //cuando tengamos los audios aqui habría que meterlo
    } else if (this.cursors.down.isDown && this.onLadder == true) {
      this.body.setVelocityY(100);
      this.play('climbBruja', true);
      //cuando tengamos los audios aqui habría que meterlo
    }

    //moverse
    if (this.cursors.left.isDown) {
      this.body.setVelocityX(-this.speed);
      this.play('walkIzqBruja', true);
    }
    else if (this.cursors.right.isDown) {
      this.body.setVelocityX(this.speed);
      this.play('walkDchaBruja', true);
    }
    else {
      this.body.setVelocityX(0);

    }

    //attack
    if (Phaser.Input.Keyboard.JustDown(this.cursorsExtra.fireAttack) && this.body.onFloor()) {
      this.body.setVelocityX(0);
      this.play('attackFireDB', true);
      //meter audio fuego
    } else if (Phaser.Input.Keyboard.JustDown(this.cursorsExtra.iceAttack) && this.body.onFloor()) {
      this.body.setVelocityX(0);
      this.play('attackIceDB', true);
      //meter audio hielo
    } else if (Phaser.Input.Keyboard.JustDown(this.cursorsExtra.thunderAttack) && this.body.onFloor()) {
      this.body.setVelocityX(0);
      this.play('attackThunderDB', true);
      //meter audio trueno
    }
  }


}