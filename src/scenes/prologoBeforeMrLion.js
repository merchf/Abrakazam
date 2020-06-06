export default class PrologoBeforeMrLion extends Phaser.Scene {
    constructor() {
        super({ key: 'prologoBeforeMrLion' });
    }
    create() {
        this.logic = this.scene.get('logicLevels');
        this.music = this.logic.addMusicScenes(this,"prologoBeforeMrLion");
        //this.music.volume = 0.10;
        this.add.image(0, 0, "beforeMrLion").setOrigin(0).setDepth(0);
        let nextButton = this.add.image(770, 50, "flecha_button").setDepth(1);
        nextButton.setScale(1);
        nextButton.setInteractive();
        nextButton.on("pointerup", () => {
            this.music.destroy();
            this.scene.start('batallaFinal');
        });

    }
    update() {
        console.log("prologo before final boss");
    }
}