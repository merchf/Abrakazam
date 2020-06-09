export default class gameOver extends Phaser.Scene {
    constructor() {
        super({ key: 'gameOver' });
    }

    create() {

        this.logic = this.scene.get('logicLevels');
        this.music = this.logic.addMusicScenes(this, "gameOver");

        this.add.image(0, 0, "gameOver").setOrigin(0).setDepth(0);
        let nextButton = this.add.image(680, 550, "next_button").setDepth(1);
        nextButton.setScale(1);
        nextButton.setInteractive();
        nextButton.on("pointerup", () => {
            this.music.destroy();
            this.scene.start("batallaFinal");
        });
    }
    update() {
        console.log(this.key);
    }
}