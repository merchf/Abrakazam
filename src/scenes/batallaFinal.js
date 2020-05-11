
//opciones = ["fuego", "hielo", "rayo"];
var opciones = [0, 1, 2];
var vidaMaquina = 6;
var vidaUsuario = 6;
var eleccionUsuario;
var eleccionMaquina;
export default class BatallaFinal extends Phaser.Scene {

  constructor() {
    super({ key: 'batallaFinal' });
  }
  preload() { }

  create() {
    this.add.image(0, 0, "fondobatallafinal").setOrigin(0).setDepth(0);

    //botones
    let fuegoButton = this.add.image(this.game.renderer.width / 2, this.game.renderer.height / 2 - 50, "fuegoButton").setDepth(1);
    let hieloButton = this.add.image(this.game.renderer.width / 2, this.game.renderer.height / 2 + 50, "hieloButton").setDepth(1);
    let rayoButton = this.add.image(this.game.renderer.width / 2, this.game.renderer.height / 2 + 150, "rayoButton").setDepth(1);

    //hover botones
    let hoverBruja = this.add.image(this.game.renderer.width / 2 - 250, this.game.renderer.height / 2 + 80, "brujafinal").setDepth(1);
    let hoverBrujaF = this.add.image(this.game.renderer.width / 2 - 250, this.game.renderer.height / 2 + 80, "brujaF").setDepth(1);
    let hoverBrujaH = this.add.image(this.game.renderer.width / 2 - 250, this.game.renderer.height / 2 + 80, "brujaH").setDepth(1);
    let hoverBrujaR = this.add.image(this.game.renderer.width / 2 - 250, this.game.renderer.height / 2 + 80, "brujaR").setDepth(1);
    let hoverMrLion = this.add.image(this.game.renderer.width / 2 + 250, this.game.renderer.height / 2 + 80, "mrLion").setDepth(1);
    let hoverMrLionH = this.add.image(this.game.renderer.width / 2 + 250, this.game.renderer.height / 2 + 80, "MrLionHielo").setDepth(1);
    let hoverMrLionR = this.add.image(this.game.renderer.width / 2 + 250, this.game.renderer.height / 2 + 80, "MrLionRayo").setDepth(1);
    let hoverMrLionF = this.add.image(this.game.renderer.width / 2 + 250, this.game.renderer.height / 2 + 80, "MrLionFuego").setDepth(1);



    hoverBruja.setVisible(true);
    hoverBrujaF.setVisible(false);
    hoverBrujaH.setVisible(false);
    hoverBrujaR.setVisible(false);
    hoverMrLion.setVisible(true);
    hoverMrLionH.setVisible(false);
    hoverMrLionR.setVisible(false);
    hoverMrLionF.setVisible(false);
    //fuego
    fuegoButton.setInteractive();
    fuegoButton.on("pointerover", () => {
      hoverBruja.setVisible(false);
      hoverBrujaF.setVisible(true);
    });
    fuegoButton.on("pointerout", () => {
      hoverBruja.setVisible(true);
      hoverBrujaF.setVisible(false);
    });

    //hielo
    hieloButton.setInteractive();
    hieloButton.on("pointerover", () => {
      hoverBruja.setVisible(false);
      hoverBrujaH.setVisible(true);
    });
    hieloButton.on("pointerout", () => {
      hoverBruja.setVisible(true);
      hoverBrujaH.setVisible(false);
    });

    //rayo
    rayoButton.setInteractive();
    rayoButton.on("pointerover", () => {
      hoverBruja.setVisible(false);
      hoverBrujaR.setVisible(true);
    });
    rayoButton.on("pointerout", () => {
      hoverBruja.setVisible(true);
      hoverBrujaR.setVisible(false);
    });

    //acciones al clicar

    fuegoButton.on("pointerup", () => {
      this.usuario('0', hoverMrLion, hoverMrLionR, hoverMrLionH, hoverMrLionF);
    });
    hieloButton.on("pointerup", () => {
      this.usuario('1',hoverMrLion, hoverMrLionR, hoverMrLionH, hoverMrLionF);
    });
    rayoButton.on("pointerup", () => {
      this.usuario('2',hoverMrLion, hoverMrLionR, hoverMrLionH, hoverMrLionF);
    });
  }

  update() {
    console.log("update");

  }


  //Función para generar la respuesta aleatoria de la máquina
  aleatorio(minimo, maximo) {
    var numero = Math.floor(Math.random() * (maximo - minimo + 1) + minimo);
    return numero;
  }

  //Función para controlar el juego
  // fuego->hielo->rayo

  usuario(eleccionUsuario, hoverMrLion, hoverMrLionR, hoverMrLionH, hoverMrLionF) {
    hoverMrLion.setVisible(false);
    hoverMrLionH.setVisible(false);
    hoverMrLionR.setVisible(false);
    hoverMrLionF.setVisible(false);
    eleccionUsuario = parseInt(eleccionUsuario);
    eleccionMaquina = this.aleatorio(0, 2);
    if (eleccionUsuario == 0) {//el usuario eligio fuego 
      if (opciones[eleccionMaquina] == 1) {//si la maquina eligio hielo 
        hoverMrLionH.setVisible(true);
        vidaMaquina = vidaMaquina - 1;
      } else {
        if (opciones[eleccionMaquina] == 2) {//si la máquina eligio rayo
          hoverMrLionR.setVisible(true);
          vidaUsuario = vidaUsuario - 1;
        } else {
          if (opciones[eleccionMaquina] == 0) {//si la máquina eligio fuego
            hoverMrLionF.setVisible(true);
          }
        }
      }
      this.resultado(vidaMaquina, vidaUsuario);
    }

    if (eleccionUsuario == 1) {//el usuario eligio hielo 
      if (opciones[eleccionMaquina] == 2) {//si la maquina elige rayo
        hoverMrLionR.setVisible(true);
        vidaMaquina = vidaMaquina - 1;
      } else {
        if (opciones[eleccionMaquina] == 0) {//si la maquina elige fuego
          hoverMrLionF.setVisible(true);
          vidaUsuario = vidaUsuario - 1;
        } else {
          if (opciones[eleccionMaquina] == 1) {//si la máquina elige hielo
            hoverMrLionH.setVisible(true);
          }
        }
      }
      this.resultado(vidaMaquina, vidaUsuario);
    }

    if (eleccionUsuario == 2) {//el usuario eligio rayo 
      if (opciones[eleccionMaquina] == 1) {//si la maquina elige hielo
        hoverMrLionH.setVisible(true);
        vidaUsuario = vidaUsuario - 1;

      } else {
        if (opciones[eleccionMaquina] == 0) {//si la maquina elige fuego
          hoverMrLionF.setVisible(true);
          vidaMaquina = vidaMaquina - 1;
        } else {
          if (opciones[eleccionMaquina] == 2) {//si la maquina elige rayo
            hoverMrLionR.setVisible(true);
          }
        }
      }
    }
    this.resultado(vidaMaquina, vidaUsuario);
  }

  //Función para generar el mensaje correspondiente
  resultado(vidaMaquina, vidaUsuario) {
    if (vidaMaquina == 0) {
      //document.getElementById('efecto').innerHTML ='<h1>¡GANASTE!</h1>';
      console.log("GANAS");
    } else if (vidaUsuario == 0) {
      //document.getElementById('efecto').innerHTML ='<h1>¡PERDISTE!</h1>';
      console.log("PIERDES");
    } else {
      // document.innerHTML ='<h1>Sigue luchando</h1>';
      console.log(vidaMaquina, vidaUsuario);
    }
    //document.getElementById('efecto').style.display = "";
    //Document.style.display="NONE";
  }

  pointerUp(boton, escena) {
    boton.on("pointerup", () => {
      this.scene.start(escena);
    });
  }


  quitarEfecto() {
    document.getElementById('efecto').style.display = "none";
  }


}



