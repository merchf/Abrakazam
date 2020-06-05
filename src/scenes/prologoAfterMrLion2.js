export default class PrologoAfterMrLion extends Phaser.Scene {
    constructor() {
        super({ key: 'prologoAfterMrLion2' });
    }
    create() {
        this.add.image(0, 0, "afterMrLion2").setOrigin(0).setDepth(0);
        let nextButton = this.add.image(750,125, "next_button").setDepth(1);
        nextButton.setScale(0.5);
        nextButton.setInteractive();
        nextButton.on("pointerup", () => {
           //this.scene.start('level3');
           //cargar batalla final
        });
22222
    }
    update() {
        console.log("prologo 2 before final boss");
    }
}