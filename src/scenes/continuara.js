

export default class Continuara extends Phaser.Scene {
    constructor() {
        super({ key: 'continuara' });
    }
    create() {
        this.logic = this.scene.get('logicLevels');
        this.music = this.logic.addMusicScenes(this, "prologo");

        this.add.image(0, 0, "continue").setOrigin(0).setDepth(0);
        let backButton = this.add.image(770, 50, "flecha_button").setDepth(1);
        backButton.setScale(1);
        backButton.setInteractive();
        backButton.on("pointerup", () => {
            this.music.destroy();
            let musicMenu = this.sound.add("mainMenuMusic");
            musicMenu.play();
            musicMenu.setLoop(true);
            this.scene.start('mainMenu', musicMenu);
        });

    }
    update() {
        console.log(this.key);
    }
}