export default class PrologoAfterMrLion2 extends Phaser.Scene {
    constructor() {
        super({ key: 'prologoAfterMrLion2' });
    }
    create() {
        this.add.image(0, 0, "afterMrLion2").setOrigin(0).setDepth(0);
        let nextButton = this.add.image(400, 550, "next_button").setDepth(1);
        nextButton.setScale(1);
        nextButton.setInteractive();
        nextButton.on("pointerup", () => {
           this.scene.start('level3');
           //cargar batalla final
        });
    }
    update() {
        console.log("prologo 2 before final boss");
    }
}