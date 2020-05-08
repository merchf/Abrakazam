


export default class State extends Phaser.Scene {
    constructor() {
        super({ key: 'State' });
    }

    preload() {

    }
    create() {

    }



    checkLadder(player) {

        player.onLadder = true;
    }
    //cada vez que toque la capa suelo reseteo y resto vida
    resetPlayer(player, obj2) {

        console.log("MUERTEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE");
        player.body.setVelocity(0, 0);
        player.setX(50);
        player.setY(300);
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
    catchKeyDoor(player, object1) {

        console.log("COGE LLAVEEEEEEEEEEEEEEEEEEEEEEE");
        this.player.keyDoor = true;
        this.object1.setVisible(false);
    }
    nextScene() {
        this.scene.start('beforeFigthMrLion');
    }
}