export default class CharmThunder extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y,witch) {
        super(scene, x, y, 'thunderCharm');
        this.speed = 300;
        this.scene.add.existing(this);
        this.scene.physics.add.existing(this);
        this.body.allowGravity = false;

        this.distance=50;
        
        if (witch.flipX) {
            this.body.setVelocityX(this.speed);
        }
        else {
            this.body.setVelocityX(-this.speed);
        }

        scene.charmThunder.add(this);
    }
    preUpdate(t, dt) {
        super.preUpdate(t, dt);
        
    }

}