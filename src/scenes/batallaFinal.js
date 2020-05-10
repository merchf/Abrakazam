export default class BatallaFinal extends Phaser.Scene {

    constructor() {
      super({ key: 'batallaFinal' });
    }
    preload() { }
  
    create() {
      //opciones = ["fuego", "hielo", "rayo"];
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
  
      //hover botones
   
    fuegoButton.setInteractive();
   
    hieloButton.setInteractive();
 
    rayoButton.setInteractive();
  
      //acciones al clicar

      fuegoButton.on("pointerup", () => {
        this.add.image(this.game.renderer.width/2-250, this.game.renderer.height / 2 + 80, "brujaF").setDepth(1);
        this.start.usuario(0); 
            });
      hieloButton.on("pointerup", () => {
        this.add.image(this.game.renderer.width/2-250, this.game.renderer.height / 2 + 80, "brujaH").setDepth(1);
        this.start.usuario(1);
            });
      rayoButton.on("pointerup", () => {
        this.add.image(this.game.renderer.width/2-250, this.game.renderer.height / 2 + 80, "brujaR").setDepth(1);
        this.start.usuario(2);
      });
  }

  update() {
    console.log("update");
  }


}

//Función para generar la respuesta aleatoria de la máquina
function aleatorio(minimo, maximo){
  var numero = Math.floor(Math.random() * (maximo - minimo +1) + minimo);
  return numero;
}

//Función para generar el mensaje correspondiente
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

//Función para controlar el juego
// fuego->hielo->rayo
function usuario(eleccionUsuario){
  eleccionUsuario = parseInt(eleccionUsuario);
  eleccionMaquina = aleatorio(0,2);
      if(eleccionUsuario == 0){//el usuario eligio fuego 
          if(opciones[eleccionMaquina] == 1){//si la maquina eligio hielo
              this.add.image(this.game.renderer.width / 2+250, this.game.renderer.height / 2 + 80, "MrLionHielo").setDepth(1);
              vidaMaquina=vidaMaquina-1;
          }else{
              if(opciones[eleccionMaquina] == 2){//si la máquina eligio rayo
                this.add.image(this.game.renderer.width / 2+250, this.game.renderer.height / 2 + 80, "MrLionRayo").setDepth(1);
                vidaUsuario=vidaUsuario-1;
              }else{
                  if(opciones[eleccionMaquina] == 0){//si la máquina eligio fuego
                    this.add.image(this.game.renderer.width / 2+250, this.game.renderer.height / 2 + 80, "MrLionFuego").setDepth(1);
                  }
              }
          } 
          resultado(vidaMaquina,vidaUsuario);
      }

      if(eleccionUsuario == 1){//el usuario eligio hielo 
          if(opciones[eleccionMaquina] == 2){//si la maquina elige rayo
              this.add.image(this.game.renderer.width / 2+250, this.game.renderer.height / 2 + 80, "MrLionRayo").setDepth(1);
              vidaMaquina=vidaMaquina-1;
          }else{
              if(opciones[eleccionMaquina] == 0){//si la maquina elige fuego
                  this.add.image(this.game.renderer.width / 2+250, this.game.renderer.height / 2 + 80, "MrLionFuego").setDepth(1);
                  vidaUsuario=vidaUsuario-1;
              }else{
                  if(opciones[eleccionMaquina] == 1){//si la máquina elige hielo
                  this.add.image(this.game.renderer.width / 2+250, this.game.renderer.height / 2 + 80, "MrLionHielo").setDepth(1);
                }
              }
          }
          resultado(vidaMaquina,vidaUsuario);
      }

      if(eleccionUsuario == 2) {//el usuario eligio rayo 
          if(opciones[eleccionMaquina] == 1){//si la maquina elige hielo
              this.add.image(this.game.renderer.width / 2+250, this.game.renderer.height / 2 + 80, "MrLionHielo").setDepth(1);
              vidaUsuario=vidaUsuario-1; 
          
          }else{
              if(opciones[eleccionMaquina] == 0){//si la maquina elige fuego
                  this.add.image(this.game.renderer.width / 2+250, this.game.renderer.height / 2 + 80, "MrLionFuego").setDepth(1);
                  vidaMaquina=vidaMaquina-1;
              }else{
                  if(opciones[eleccionMaquina] == 2) {
                  this.add.image(this.game.renderer.width / 2+250, this.game.renderer.height / 2 + 80, "MrLionRayo").setDepth(1);
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

  
  function quitarEfecto() {
    document.getElementById('efecto').style.display = "none";
}