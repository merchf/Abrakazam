export default class PrologoAfterMrLion3 extends Phaser.Scene {
    constructor() {
        super({ key: 'prologoAfterMrLion3' });
    }
    create() {
        this.add.image(0, 0, "afterMrLion3").setOrigin(0).setDepth(0);
        let nextButton = this.add.image(400, 550, "next_button").setDepth(1);
        nextButton.setScale(1);
        nextButton.setInteractive();
        nextButton.on("pointerup", () => {
           this.scene.start('continue');
           //cargar batalla final
        });
    }
    update() {
        console.log("prologo 3 before final boss");
    }
}