export default class PrologoAfterMrLion extends Phaser.Scene {
    constructor() {
        super({ key: 'prologoAfterMrLion' });
    }
    create() {
        this.logic = this.scene.get('logicLevels');
        this.music = this.logic.addMusicScenes(this,"prologoAfterMrLion");
       // this.music.volume = 0.10;
        this.add.image(0, 0, "afterMrLion").setOrigin(0).setDepth(0);
        let nextButton = this.add.image(680, 550, "next_button").setDepth(1);
        nextButton.setScale(1);  
        nextButton.setInteractive();
        nextButton.on("pointerup", () => {
           this.music.destroy();
           this.scene.start('level2');
           //cargar batalla final
        });
22222
    }
    update() {
        console.log("prologo before final boss");
    }
}