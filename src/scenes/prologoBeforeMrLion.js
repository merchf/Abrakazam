export default class PrologoBeforeMrLion extends Phaser.Scene {
    constructor() {
        super({ key: 'prologoBeforeMrLion' });
    }
    create() {
        this.add.image(0, 0, "beforeMrLion").setOrigin(0).setDepth(0);
        let nextButton = this.add.image(750,125, "next_button").setDepth(1);
        nextButton.setScale(0.5);
        nextButton.setInteractive();
        nextButton.on("pointerup", () => {
            this.scene.start('batallaFinal');
        });

    }
    update() {
        console.log("prologo before final boss");
    }
}