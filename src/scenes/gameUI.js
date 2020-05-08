
export default class GameUI extends Phaser.Scene {

  constructor() {
    super({ key: 'gameUI' });
  }
 
  create() {

    const hearts = this.add.group({
        classType: Phaser.GameObjects.Image
    })
    hearts.createMultiple({
        key: 'hearthUI',
        setXY:{
            x:10,
            y:10,
            stepX:40
        },
        quantity: 3
    })
  }
}