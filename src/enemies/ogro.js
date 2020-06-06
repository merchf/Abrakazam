
export default class Ogro extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y) {
      super(scene, x, y, 'ogro');
      this.health = 5;
      this.speed=30;
      this.delay =2000;
      this.hurtFire =false;
      this.hurtIce =false;
      this.hurtThunder =false;
    }
    create() {
      this.scene.add.existing(this);
      this.scene.physics.add.existing(this);
      this.body.setCollideWorldBounds(true);
      this.body.setVelocityX(this.speed);
      this.setScale(0.65);
    }
    createAnims() {
      this.scene.anims.create({
        key: 'def',
        frames: [{ key: 'ogro', frame: 'Ogro_1'}],
        frameRate: 10,
      });
      this.scene.anims.create({
        key: 'walkDchaOgro',
        frames: this.scene.anims.generateFrameNames('ogro', {
            prefix: 'Ogro_',
            suffix: '.png',
            start: 2,
            end: 7
        }),
      frameRate:10,
     });

     this.scene.anims.create({
        key: 'attackOgro',
        frames: this.scene.anims.generateFrameNames('ogro', {
            prefix: 'Ogro_',
            suffix: '.png',
            start: 8,
            end: 11
        }),
      frameRate:10,
     });

     this.scene.anims.create({
        key: 'deadOgro',
        frames: [{ key: 'ogro', frame: 'Ogro_13'}],
        frameRate: 10,
      });
      //Mazo es el 'Ogro_12'
    }
  
    someHurts(){
      if(this.hurtFire || this.hurtIce || this.hurtThunder){
        return true;
      }else{
        return false;
      }
    }
  
    preUpdate(t, dt) {
      super.preUpdate(t, dt)
      if(this.health<=0){
        this.destroy();
        return
      }
      //mirror para los sprites
      if(!this.someHurts()){
        this.play("walkDchaOgro");
        if (this.body.velocity.x > 0){
          this.setFlipX(false); 
        }else if (this.body.velocity.x < 0){
          this.setFlipX(true);
        }
        //girar a la izq si toca limites
        if (this.body.touching.right || this.body.blocked.right) {
          this.body.setVelocityX(-this.speed);
          console.log("gira a la izq")
        }
        //dcha
        else if (this.body.touching.left || this.body.blocked.left) {
          this.body.setVelocityX(this.speed);
          console.log("gira")
        } 
      }
      
      
      if(this.hurtFire){
        this.play("burnedDZ",false);
      }
      if(this.hurtIce){
        this.play("burnedDZ",false);
        this.body.setVelocityX(0);
      }
      if(this.hurtThunder){
        this.play("burnedDZ",false);
        this.body.setVelocityX(this.speed-15);
      }
  
  
    }
  
  }