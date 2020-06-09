var escena = 1;
export default class PrologoAfterMrLion extends Phaser.Scene {
    constructor() {
        super({ key: 'prologoAfterMrLion' });
    }
    create() {
        this.logic = this.scene.get('logicLevels');
        this.music = this.logic.addMusicScenes(this,"prologoAfterMrLion");
       // this.music.volume = 0.10;
        if(escena===1){
            this.add.image(0, 0, "afterMrLion").setOrigin(0).setDepth(0);  
        }else if(escena===2){
            this.add.image(0, 0, "afterMrLion2").setOrigin(0).setDepth(0);
        }else if (escena===3){
            this.add.image(0, 0, "afterMrLion3").setOrigin(0).setDepth(0);
        }

        let nextButton = this.add.image(680, 550, "next_button").setDepth(1);
        nextButton.setScale(1);  
        nextButton.setInteractive();
        nextButton.on("pointerup", () => {
           this.music.destroy();
           
           if(escena===1){
            escena++;
            this.scene.start('level2');
           }else if(escena===2){
            escena++;
            this.scene.start('level3');
           }else if(escena===3){
            escena=1;
            this.scene.start('continuara');
           }
           
           //cargar batalla final
        });
    }
    update() {
        console.log("prologo before final boss");
    }
}