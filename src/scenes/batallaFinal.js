export default class MainMenu extends Phaser.Scene {

    constructor() {
      super({ key: 'batallaFinal' });
    }
    preload() { }
  
    create() {
      //var opciones = ["fuego", "hielo", "rayo"];
      let opciones = [0, 1, 2];
      var eleccionMaquina, eleccionUsuario;
      var vidaMaquina= 3;
      var vidaUsuario= 6;

      this.add.image(0, 0, "fondobatallafinal").setOrigin(0).setDepth(0);

      //botones
      let fuegoButton = this.add.image(this.game.renderer.width / 2, this.game.renderer.height / 2-50, "fuegoButton").setDepth(1);
      let hieloButton = this.add.image(this.game.renderer.width / 2, this.game.renderer.height / 2+50, "hieloButton").setDepth(1);
      let rayoButton = this.add.image(this.game.renderer.width / 2, this.game.renderer.height / 2 +150, "rayoButton").setDepth(1);
      
      this.add.image(this.game.renderer.width/2-250, this.game.renderer.height / 2 + 80, "brujafinal").setDepth(1);
      this.add.image(this.game.renderer.width / 2+250, this.game.renderer.height / 2 +80, "mrLion").setDepth(1);

  
      //acciones al clicar

      fuegoButton.on("pointerup", () => {
        this.add.image(this.game.renderer.width/2-250, this.game.renderer.height / 2 + 80, "brujaF").setDepth(1);
        this.usuario(0); 
            });
      hieloButton.on("pointerup", () => {
        this.add.image(this.game.renderer.width/2-250, this.game.renderer.height / 2 + 80, "brujaH").setDepth(1);
        this.usuario(1);
            });
      rayoButton.on("pointerup", () => {
        this.add.image(this.game.renderer.width/2-250, this.game.renderer.height / 2 + 80, "brujaR").setDepth(1);
        this.usuario(2);
      });
  }

  update() {
    console.log("update");
  }


}

function usuario(eleccionUsuario){
  eleccionUsuario = parseInt(eleccionUsuario);
  eleccionMaquina = aleatorio(0,2);
      if(eleccionUsuario == 0){//el usuario eligio fuego 
          if(opciones[eleccionMaquina] == 1){//si la maquina eligio hielo
              //document.getElementById('efecto').innerHTML ='<h1>¡Perdiste!</h1> <h3>La maquina eligio papel y tu piedra.</h3>';
              this.add.image(this.game.renderer.width / 2+250, this.game.renderer.height / 2 + 80, "mrLion").setDepth(1);
              vidaUsuario=vidaUsuario-1;
          }else{
              if(opciones[eleccionMaquina] == 2){//si la máquina eligio rayo
                //document.getElementById('efecto').innerHTML ='<h1>¡Ganaste!</h1> <h3>La maquina eligio tijera y tu piedra.</h3>';
                this.add.image(this.game.renderer.width / 2+250, this.game.renderer.height / 2 + 80, "mrLion").setDepth(1);
                vidaMaquina=vidaMaquina-1;
              }else{
                  if(opciones[eleccionMaquina] == 0){//si la máquina eligio fuego
                    // document.getElementById('efecto').innerHTML ='<h1>¡Empate!</h1> <h3>Ambos eligieron FUEGO </h3>';
                    this.add.image(this.game.renderer.width / 2+250, this.game.renderer.height / 2 + 80, "mrLion").setDepth(1);
                  }
              }
          } 
          resultado(vidaMaquina,vidaUsuario);
      }

      if(eleccionUsuario == 1){//el usuario eligio hielo 
          if(opciones[eleccionMaquina] == 2){
              //document.getElementById('efecto').innerHTML ='<h1>¡Perdiste!</h1> <h3>La maquina eligio tijera y tu papel.</h3>';
              this.add.image(this.game.renderer.width / 2+250, this.game.renderer.height / 2 + 80, "mrLion").setDepth(1);
              vidaUsuario=vidaUsuario-1;
          }else{
              if(opciones[eleccionMaquina] == 0){
                  // document.getElementById('efecto').innerHTML ='<h1>¡Ganaste!</h1> <h3>La maquina eligio piedra y tu papel.</h3>';
                  this.add.image(this.game.renderer.width / 2+250, this.game.renderer.height / 2 + 80, "mrLion").setDepth(1);
                  vidaMaquina=vidaMaquina-1;
              }else{
                  if(opciones[eleccionMaquina] == 1){
                  //document.getElementById('efecto').innerHTML ='<h1>¡Empate!</h1> <h3>Ambos eligieron HIELO.</h3>'; 
                  this.add.image(this.game.renderer.width / 2+250, this.game.renderer.height / 2 + 80, "mrLion").setDepth(1);
                }
              }
          }
          resultado(vidaMaquina,vidaUsuario);
      }

      if(eleccionUsuario == 2) {//el usuario eligio rayo 
          if(opciones[eleccionMaquina] == 1){
              //document.getElementById('efecto').innerHTML ='<h1>¡Ganaste!</h1> <h3>La maquina eligio papel y tu tijera.</h3>';
              this.add.image(this.game.renderer.width / 2+250, this.game.renderer.height / 2 + 80, "mrLion").setDepth(1);
              vidaMaquina=vidaMaquina-1;
          
          }else{
              if(opciones[eleccionMaquina] == 0){
                  //document.getElementById('efecto').innerHTML ='<h1>¡Perdiste!</h1> <h3>La maquina eligio piedra y tu tijera.</h3>';
                  this.add.image(this.game.renderer.width / 2+250, this.game.renderer.height / 2 + 80, "mrLion").setDepth(1);
                  vidaUsuario=vidaUsuario-1; 
              }else{
                  if(opciones[eleccionMaquina] == 2) {
                  //document.getElementById('efecto').innerHTML ='<h1>¡Empate!</h1> <h3>Ambos eligieron RAYO.</h3>';
                  this.add.image(this.game.renderer.width / 2+250, this.game.renderer.height / 2 + 80, "mrLion").setDepth(1);
                }
              }
          }
      }
      resultado(vidaMaquina,vidaUsuario);
}
  function pointerUp(boton, escena) {
    boton.on("pointerup", () => {
      this.scene.start(escena);
    });
  }

  function aleatorio(minimo, maximo){
    var numero = Math.floor(Math.random() * (maximo - minimo +1) + minimo);
    return numero;
  }
  
  function resultado(vidaMaquina,vidaUsuario){
    if(vidaMaquina==0){
        document.getElementById('efecto').innerHTML ='<h1>¡GANASTE!</h1>';
    }else if(vidaUsuario==0){
        document.getElementById('efecto').innerHTML ='<h1>¡PERDISTE!</h1>';
    }else{
        document.getElementById('efecto').innerHTML ='<h1>Sigue luchando</h1>';
        console.log(vidaUsuario,vidaMaquina);
    }
    document.getElementById('efecto').style.display = "";
  }

  
  function quitarEfecto() {
    document.getElementById('efecto').style.display = "none";
}