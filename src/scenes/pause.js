export default class Pause extends Phaser.Scene {

    constructor() {
        super({ key: 'pause' });
    }
    init(scene) {
        this.sceneName = scene.levelName;
    }
    preload() {
    }

    create() {
        let buttonPlay = this.add.sprite(180, 20, 'pause_button').setDepth(2);

        buttonPlay.setScale(0.5);
        buttonPlay.setInteractive();
        buttonPlay.on("pointerup", () => {
            this.scene.resume(this.sceneName);
            this.scene.stop();
        });
    }
    update() {

    }
}