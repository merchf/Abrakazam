# Descripción organización repositorio

 - **assets:** Carpeta con todos los recursos de imágenes utilizados en el proyecto. Para más información acceder a [assets.md](https://github.com/merchf/Abrakazam/blob/master/assets.md)
 - **public:** Carpeta con recursos para proporcionar imágenes al [GDD](https://github.com/merchf/Abrakazam/blob/master/GDD.md), recursos musicales utilizados en el proyecto, estilos y js utilizados en la[ \[página principal del proyecto\]](https://merchf.github.io/Abrakazam/)
 - **src:** Carpeta que contiene todo el código del proyecto.
 - **slides:** Se guardarán los recursos que se hayan usado en las presentaciones de los hitos.
 - **architecture.md:** Indicación de la estructura del proyecto.
 - **assets.md:** Descripción de los assets y las decisiones de dirección artística.
 - **gdd.md:** Game design document.
 - **game.html:**  Página que inicia el juego.
 - **index.html:** [página web del proyecto.](https://merchf.github.io/Abrakazam/)
 - **readme.md:** Archivo que se verá en la raíz de la página del repositorio explicando una descripción general del proyecto.

# Arquitectura
Los archivos .js dentro de la carpeta /src darán toda la lógica y funcionalidad al juego.

 - **preloader.js:** Carga todos los recursos que se van a utilizar en el juego.
 - **mainMenu.js:** Menú principal donde se podrá comenzar la historia del juego, acceder a las reglas y a los créditos.
 - **rules.js:** Escena que indica las reglas y controles del juego.
 - **credits.js:** Escena de créditos indicando los recursos utilizados y creadoras del juego.
 - **prologo.js:** Escena de introducción a la historia del juego.
 - **prologoBeforeMrLion.js:** Escena antes de la batalla final.
 - **prologoAfterMrLion.js:** Escena al ganar la batalla final.
 - **pause.js:** Escena para añadir la lógica necesaria para pausar el juego.
 - **gameOver.js:** Escena que se muestra cuando el personaje pierde la batalla final.
 - **level1.js, level2.js, level3.js:** Escenas de cada nivel donde se cargan los distintos mapas y enemigos y se atiende al comportamiento del jugador para actualizar en todo momento el estado del juego.
 - **continuara.js:** Escena final del juego.
 - **logicLevels.js:** Lógica del juego que coincide entre niveles. Se ha creado con intención de evitar la repetición de código y optimizar recursos.
 - **charmFire.js:** Define el hechizo de fuego que lanza la brujita y asi poder quitar vida al enemigo.
 - **charmIce.js:** Define el hechizo de hielo que lanza la brujita y asi poder congelar al enemigo.
 - **charmThunder.js:** Define el hechizo de trueno que lanza la brujita y asi poder ralentizar y quitar vida al enemigo.
 - **zombie.js:** Sprite del primer enemigo que nos encontramos en el nivel 1.
 - **ogro.js:**  Sprite del segundo enemigo que nos encontramos en el nivel 2 y 3.
 - **player.js:**  Sprite del protagonista del juego, nuestro main. Incluye sus animaciones y la lógica del movimiento y ataque. 
