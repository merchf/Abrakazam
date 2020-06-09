export default class CharmIce extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, witch) {
        super(scene, x, y, 'iceCharm');
        this.speed = 300;
        this.scene.add.existing(this);
        this.scene.physics.add.existing(this);
        this.body.allowGravity = false;
        if (witch.flipX) {
            this.body.setVelocityX(this.speed);
        }
        else {
            this.body.setVelocityX(-this.speed);
        }

        scene.charmIce.add(this);
    }
    preUpdate(t, dt) {
        super.preUpdate(t, dt);

    }

}