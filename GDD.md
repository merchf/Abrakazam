# ABRAKAZAM


Desarrollado por: 

| Esther Peñas Martinez |Mercedes Herrero Fernández|
|--|--|--|--|--|--|



**Resumen**:
El juego transcurre en el reino mágico de Abrakazam, donde un malvado hechicero, Mr Lion, ha abierto un portal, que ha traído varias criaturas desatando el caos.
Durante el juego, el protagonista tendrá que conseguir las siete gemas. Cada una de ellas se encuentra al final de cada nivel, por ello, el protagonista tendrá que enfrentarse a los diferentes enemigos de cada nivel y superarlo para conseguirlas.
Sólo consiguiendo las siete gemas el protagonista podrá adquirir suficiente poder para cerrar el portal y derrotar a Mr Lion y sus criaturas, salvando así al reino.

|**Géneros**:  Fantasía y aventura  |  **Modos:** Historia. Un jugador. Plataforma.|
|--|--|
|**Público objetivo**: +7  |**Plataformas**: PC|
|**Objetos**: 7 gemas, pociones curativas y llaves.|
|**Armas**: Magia: bolas de fuego, poder de congelación y rayos.|
|**Personajes**: 13|
|**Escenarios**: 7|



**Descripción**:

El juego transcurre en el mágico reino de Abrakazam, donde el malvado Mr Lion ha abierto un portal mágico trayendo el pánico y el terror a todas sus tierras.
Sólo consiguiendo el poder de las siete gemas astrales, nacidas de las mismísimas estrellas y repartidas por todo el reino, se podrá cerrar el portal y devolver la paz.
¿Serás lo suficientemente valiente como para enfrentarte a las malvadas criaturas que han atravesado el portal e invadido el reino? ¿Podrás conseguir las siete gemas para poder cerrar el portal y derrotar al poderoso Mr Lion? El futuro de Abrakazam está en tus manos. Suerte.

**Versiones del documento**

|**FECHA**|  **VERSIÓN**|
|--|--|
|16/02/2020| 1.0 |

 **1. Aspectos generales**
 
A través de Abrakazam se pretende que el jugador pase un buen rato y se entretenga. 
Sumiéndose en un aventura llena de magia y enemigos, a lo largo de los diferentes niveles.

El juego consta de 7 niveles, por lo que consta de 7 localizaciones distintas.
Todos los niveles serán plataforma. Contendrán pociones de curación y enemigos, a los que el jugador podrá derrotar con sus poderes mágicos o esquiva con sus acciones.
Además, al final de cada nivel, el jugador se enfrentará a un enemigo final para conseguir la gema y completar el nivel.


 **Vista general**
 ![Portada Juego]()
 |--|
 
1.1 Relato breve y parcial de una partida típica
- El jugador ingresa el nombre que quiere tener y da a JUGAR.
- Aparece la pantalla del primer nivel. En el juego habrá siete niveles, cada uno con temática diferente haciendo alusión al viaje que hará nuestro protagonista, desde su inicio hasta llegar al portal final. 
  Niveles: Tren-Castillo-Escaleras- Escoba-Laberinto-Bosque Oscuro- Lago negro.
- El nivel consta de:
    - Plataformas (tanto fijas como móviles): Donde el jugador podrá ir saltando.
    - Escaleras y enredaderas: Por las cuales el jugador podrá subir y bajar escalando.
    - Pociones de curación: que sanarán al personaje.
    - Enemigos: Depende de la temática del nivel habrá un enemigo u otro. El personaje podrá derrotarlos usando sus poderes o esquivarlos.
    - Llaves: para abrir puertas cerradas.
    - Puerta final: para pasar la la pantalla del jefe.
- Una vez pasada la puerta final, el personaje se enfrentará al jefe del nivel con el mítico juego de piedra, papel o tijera.
- Una vez derrotado al jefe final, el jugador obtendrá la gema y pasará al siguiente nivel.
- Cuando se llegue al último nivel el juego de piedra papel o tijera se pondrá más difícil, dejando más de tres opciones a elegir.

**2. Menús y modos de juego**

El juego contará con un menú inicial simple e intuitivo con:

- Botón JUGAR: iniciará el juego. Se tendrá que ingresar antes el nombre del personaje.
- Botón CRÉDITOS: mostrará los nombres de los creadores.
- Espacio para ingresar el nombre del personaje a gusto del jugador.

La temática del menú será fantástica, mostrando las siete gemas y el portal mágico. Además de poner a algún personaje.

2.1.Configuración
No dispone de configuración. 
2.2 Interfaz y control
Para los controles se utilizará el teclado, ya que es un juego destinado a que se juego en PC.
La interfaz de juego se desarrollará en JavaScript con metodología html.
Se desarrollarán diferentes niveles con diseños diferentes y plataformas, en los que el personaje podrá saltar, atacar, 	escalar, moverse a la izquierda y derecha, meterse por puertas, recoger objetos e interactuar con objetos. Todo ello, 		utilizando las flechas del teclado y algunas letras.
	 
**3. Jugabilidad**

Durante el juego habrá que ir superando los niveles, derrotando enemigos y  jefes e ir  recolectando las gemas para cerrar el portal del nivel final.

3.1.Mecánica

- Saltar: espacio.
- Andar: flechas izquierda y derecha.
- Escalar: flechas arriba y abajo cuando se llegue a una escalera o enredadera.
- Atacar: Teclas Q, W y E para lanzar diferentes conjuros.
- Atravesar puerta: flecha para arriba cuando el personaje está frente a una puerta.
- Doble salto: doble espacio.
- Coger objetos:Llevar al personaje al objeto y este se coge automáticamente.

3.2.Dinámica

Para poder completar un nivel se deberá pasar el nivel plataforma hasta llegar a una puerta, que te lleva a la pantalla del jefe final.
Una vez ahí se establece el juego de piedra(Q), papel(W) o tijera(E), cada uno asignado a un hechizo. Si se supera se gana la gema, te pasas en nivel y puedes seguir jugando.

Para perder en el juego tu personaje se tiene que quedar sin vidas, en principio contará con seis corazones. Por cada enemigo que le ataque irá perdiendo medio corazón, excepto en la batalla final que irá perdiendo un corazón entero.
Si se queda sin vida, GAME OVER.

- Saltar: Le permite al personaje moverse entre plataformas o subir escalones.
- Andar: Le permite al personaje moverse por el nivel y recolectar los objetos, además de escapar de los enemigos.
- Escalar: Le permite al personaje subir y bajar entre los diferentes niveles que tenga el nivel, además de subir y bajar a    plataformas, que no se puedan alcanzar saltando.
- Atacar: Le permite al personaje defenderse contra sus enemigos (6 de vida).
	- Bolas de fuego (Q): - 1 de vida al enemigo. Recarga Total: 5 segundos.
	- Congelación (W): Mantiene al enemigo inmóvil 10 segundos. Recarga Total: 10 segundos.
	- Rayo (E): - 2 de vida. Recarga Total: 15 segundos.
- Atravesar puerta: Le permite al personaje pasar al nivel final del jefe.
- Doble salto: Le permite al personaje llegar a plataformas más elevadas.
- Coger objetos:  Le permite al personaje:
	- Ganar vida, en el caso que recoja una poción.
	- Abrir puertas y avanzar en el nivel, en el caso de que recoja una llave.
	- Pasar de nivel, en el caso que consiga la gema.

3.3.Estética

Modo pixel, basándonos en Alex Kidd.
Dependiendo del nivel, los escenarios serán claros u oscuros, aunque predominarán los oscuros.
	
**4.Contenido**
Mencionar el tipo de elementos que se van a necesitar (imágenes, sonidos, música…)

- Imágenes:
- Sonidos:
- Música:

4.1.Historia

El juego transcurre en el mágico reino de Abrakazam, donde el malvado Mr Lion ha abierto un portal mágico trayendo el pánico y el terror a todas sus tierras.
Sólo consiguiendo el poder de las siete gemas astrales, nacidas de las mismísimas estrellas y repartidas por todo el reino, se podrá cerrar el portal y devolver la paz.

El protagonista comenzará su aventura en un tren lleno de zombies, llegará a un castillo en ruinas, subirá un porrón de escaleras, echará a volar en su escoba para escapar de sus enemigos, aterrizará en un laberinto, que termina desembocando en el bosque oscuro, donde se encuentra el portal mágico en medio del lago negro. Todo esto venciendo a los enemigos, a sus jefes y ganando las siete gemas para cerrar el portal y vencer a Mr Lion.

	 
4.2.Niveles

Cada nivel cuenta con una pantalla extra, donde se enfrenta al jefe final (piedra, papel o tijera).

- Nivel 1-Tren:
	- Descripción: Al inicio el protagonista está en un tren camino a su destino, tendrá que atravesar los vagones hasta 		llegar a la locomotora.
	- Metodología: Plataformas Horizontal, donde se utilizarán movimientos arriba, abajo, derecha e izquierda.
	- Enemigos: Zombies y Jefe Zombie.
	- Objetos: poción curativa y gema amarilla.

- Nivel 2-Castillo:
	- Descripción: Tras el viaje en tren nuestro protagonista llega al castillo, ahora en ruinas y entra en él en busca del 	malvado Mr Lion y la gema.
	- Metodología: Plataformas Horizontal, donde se utilizarán movimientos arriba, abajo, derecha e izquierda.
	- Enemigos: Trolls y Jefe Troll.
	- Objetos: poción curativa y gema roja.

- Nivel 3- Escaleras:
- Descripción: Nuestro personaje tiene que huir del castillo, los enemigos son demasiados, por ello, comienza a subir las escaleras del castillo.
- Metodología: Plataformas Vertical, donde se utilizarán movimientos arriba, abajo, derecha e izquierda.
- Enemigos: Trolls y Jefe Troll.
- Objetos: poción curativa y gema morada.

- Nivel 4- Escoba/Cielo:
- Descripción: Nuestro personaje llega al final de las escaleras, su única opción para escapar de sus enemigos y continuar su viaje es echar a volar. Por ello llama a su escoba y salta.
- Metodología: Plataformas Horizontal, donde se utilizarán movimientos arriba, abajo, derecha e izquierda para esquivar.
- Enemigos: Dragones y Jefe Dragón.
- Objetos: poción curativa y gema azul.

- Nivel 5- Laberinto:
	- Descripción: Tras volar en su escoba, nuestro personaje aterriza a las puertas de un laberinto, que lo separa del bosque 	oscuro al que debe entrar.
	- Metodología: Laberinto de una pantalla, donde se utilizarán movimientos arriba, abajo, derecha e izquierda. Debe 	encontrar tres llaves para poder abrir la puerta y pasar.
	- Enemigos: Espantapájaros y Jefe Espantapájaros.
	- Objetos: poción curativa, llaves y gema naranja.

- Nivel 6- Bosque Oscuro:
	- Descripción: Atravesado el laberinto nuestro personaje se adentra en el bosque oscuro, guiándose por sus instintos hacia 	la próxima gema.
	- Metodología: Plataformas Horizontal, donde se utilizarán movimientos arriba, abajo, derecha e izquierda.
	- Enemigos: Arañas y Jefe Araña.
	- Objetos: poción curativa y gema verde.

- Nivel 7- Lago negro
	- Descripción: A sólo una gema nuestro personaje desemboca en el lago negro, donde se encuentra el portal mágico y a Mr 	Lion. 
	Sólo le queda conseguir la última gema para poder cerrar el portal y salvar el reino de Abrakadam.
	- Metodología: Plataformas Horizontal, donde se utilizarán movimientos arriba, abajo, derecha e izquierda.
	- Enemigos: Medusas y Mr Lion.
	- Objetos: poción curativa y gema negra.

	 
	 4.3. **Personajes**

	 
 - El personaje principal es Sandra, chica de 18 años que quiere dedicarse a la informática.
 -De izquierda a derecha tenemos a el mejor amigo de Sandra llamado Dani que será un apoyo a lo largo del juego, aunque al principio no se muestre muy de acuerdo.  Julia y Mario son los compañeros de clase con los que Sandra tiene más confianza.
 
 
| ![Dani](https://github.com/amprubio/JS-uAdventure/blob/master/PrimerPrototipo/Recursos/juegos%20serios%20%28personajes%20sin%20fondo%29/chicos/chicos1_frente.png?raw=true) | ![Julia](https://github.com/amprubio/JS-uAdventure/blob/master/PrimerPrototipo/Recursos/juegos%20serios%20%28personajes%20sin%20fondo%29/chicas/chicas2_lado.png?raw=true) |	![Mario](https://github.com/amprubio/JS-uAdventure/blob/master/PrimerPrototipo/Recursos/juegos%20serios%20%28personajes%20sin%20fondo%29/chicos/chicos4_frente.png?raw=true) |
|--|--|--|


 - **Compañeros de clase.**
 
|  ![Compañero1](https://github.com/amprubio/JS-uAdventure/blob/master/PrimerPrototipo/Recursos/juegos%20serios%20%28personajes%20sin%20fondo%29/chicos/chicos3_frente.png?raw=true)| ![Compañera2](https://github.com/amprubio/JS-uAdventure/blob/master/PrimerPrototipo/Recursos/juegos%20serios%20%28personajes%20sin%20fondo%29/chicas/chicas3_lado.png?raw=true) | ![Compañero3](https://github.com/amprubio/JS-uAdventure/blob/master/PrimerPrototipo/Recursos/juegos%20serios%20%28personajes%20sin%20fondo%29/chicos/chicos2_frente.png?raw=true) |
|--|--|--|


 - Profesor y tutor de la clase de Sandra


![Profesor](https://github.com/amprubio/JS-uAdventure/blob/master/PrimerPrototipo/Recursos/juegos%20serios%20%28personajes%20sin%20fondo%29/adultos/profesor-explicando.png?raw=true)

 - Los padres de Sandra, que no se opondrán a ella para estudiar la carrera.

|  ![Padre](https://github.com/amprubio/JS-uAdventure/blob/master/PrimerPrototipo/Recursos/juegos%20serios%20%28personajes%20sin%20fondo%29/adultos/padre.png?raw=true)| ![Madre](https://github.com/amprubio/JS-uAdventure/blob/master/PrimerPrototipo/Recursos/juegos%20serios%20%28personajes%20sin%20fondo%29/adultos/madre.png?raw=true) |
|--|--|

 4.4. **Objetos**
 
|![Libros](https://github.com/amprubio/JS-uAdventure/blob/master/PrimerPrototipo/Recursos/otros/Libros-Mesa.png?raw=true)|![cartera](https://github.com/amprubio/JS-uAdventure/blob/master/PrimerPrototipo/Recursos/escenarios/habitaci%C3%B3n/cartera.png?raw=true)  |  ![llaves](https://github.com/amprubio/JS-uAdventure/blob/master/PrimerPrototipo/Recursos/escenarios/habitaci%C3%B3n/llaves.png?raw=true)|	![bolso](https://github.com/amprubio/JS-uAdventure/blob/master/PrimerPrototipo/Recursos/escenarios/habitaci%C3%B3n/bolso.png?raw=true) |
| -- |--|--|--|

 - Los libros los recoge Sandra al principio del juego cuando se va a ir de clase para quedar con sus amigos en el Burger. Es un objeto necesario para salir de la clase.
 -  Las llaves es un objeto necesario para salir de la casa.
 - La cartera se debe de usar obligatoriamente el segundo día para salir de la habitación, ya que Sandra debe dinero a Dani del Burguer.
 -  El bolso es un objeto secundario.

| ![ánimo 6](https://github.com/amprubio/JS-uAdventure/blob/master/PrimerPrototipo/Recursos/Barra%20de%20vida/Vida%206.png?raw=true) | ![ánimo 5](https://github.com/amprubio/JS-uAdventure/blob/master/PrimerPrototipo/Recursos/Barra%20de%20vida/Vida%205.png?raw=true) |![ánimo 4](https://github.com/amprubio/JS-uAdventure/blob/master/PrimerPrototipo/Recursos/Barra%20de%20vida/Vida%204.png?raw=true)	|	![ánimo 3](https://github.com/amprubio/JS-uAdventure/blob/master/PrimerPrototipo/Recursos/Barra%20de%20vida/Vida%203.png?raw=true)|	![ánimo 2](https://github.com/amprubio/JS-uAdventure/blob/master/PrimerPrototipo/Recursos/Barra%20de%20vida/Vida%202.png?raw=true)|![ánimo 1](https://github.com/amprubio/JS-uAdventure/blob/master/PrimerPrototipo/Recursos/Barra%20de%20vida/Vida%201.png?raw=true)	| ![ánimo 0](https://github.com/amprubio/JS-uAdventure/blob/master/PrimerPrototipo/Recursos/Barra%20de%20vida/Vacia%20.png?raw=true)|
|--|--|--|--|--|--|--|



Las barra de ánimo muestra el ánimo del personaje de Sandra en todo momento, pudiendo variar dependiendo de las respuestas que pongamos y dependiendo del ánimo que tenga el personaje al final del juego, se alcanzará un final y otro.

