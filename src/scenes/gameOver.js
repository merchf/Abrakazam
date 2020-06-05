export default class gameOver extends Phaser.Scene {
    constructor() {
        super({ key: 'gameOver' });
    }
    create() {
        this.add.image(0, 0, "gameOver").setOrigin(0).setDepth(0);
        let nextButton = this.add.image(750,125, "next_button").setDepth(1);
        nextButton.setScale(0.5);
        nextButton.setInteractive();
        nextButton.on("pointerup", () => {
           // this.scene.start('batallafinal');
           //cargar batalla final
        });
    }
    update() {
        console.log("Game Over");
    }
}