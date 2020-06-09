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
        let buttonPause = this.add.sprite(this.game.renderer.width / 2, this.game.renderer.height / 2, 'pause_button').setDepth(1);
        buttonPause.setInteractive();
        buttonPause.on("pointerup", () => {
            this.scene.resume(this.sceneName);
            this.scene.stop();
        });
    }
    update() {

    }
}