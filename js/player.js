
//Funciones

//Selección de personajes

let seleccion = (jugador) => {//jugador nro de 1 a 4
    if (grupo1 == "") {//grupo 1 y 2 se inicializan vacios
      grupo1 = arrayJugadores[jugador];// a traves de diccionario, seleccionara el personaje y lo guarda en grupo1
      let seleccionado = document.getElementById(jugador);//id tambien toman valores de 1 a 4 = q jugador
      let dataSeleccionado = document.getElementById("data1");//para que luego aparezca en pantalla 2 el nombre del personaje seleccionaje
      seleccionado.onclick = ""; //Bloqueo personaje, desactivando el onclick del id que coincida con el personaje seleccionado
      dataSeleccionado.innerHTML = `${grupo1.nombre}`;
    } else if (grupo2 == "") {
      grupo2 = arrayJugadores[jugador];
      let seleccionado = document.getElementById(jugador);
      let dataSeleccionado = document.getElementById("data2");
      seleccionado.onclick = ""; //bloqueo personaje
      dataSeleccionado.innerHTML = `${grupo2.nombre}`;
  
      setTimeout(() => {
        screenSwitch(3);
        pantallaJuego();
      }, 2000);
    }
  };
  
  //Limpieza del juego antes de inicio
  
  const limpiar = () => {
    window.location.reload();
  
    screenSwitch(1);
  };
  
  //Cambio de pantalla
  
  const screenSwitch = (cambiar) => {
    let pantallaSeleccionada = "pantalla" + cambiar;
  
    let arrayPantallas = ["pantalla1", "pantalla2", "pantalla3", "pantalla4"];
  
    //Le decimos a filter que si encuentra el valor que le pasamos, en el array no lo incluya
    arrayPantallas = arrayPantallas.filter((val) => !pantallaSeleccionada.includes(val));
    //Le ponemos display "block" a la pantalla deseada
    document.getElementById(pantallaSeleccionada).style.display = "block";
    //Recorremos el arrayPantallas para poner el display:none
    for (let pantalla of arrayPantallas) {
      document.getElementById(pantalla).style.display = "none";
    }
  };
  
  
  //Display jugadores elegidos en pantalla3
  let imagen1 = document.getElementById("imagenJugador1");
  let imagen2 = document.getElementById("imagenJugador2");
  
  let nivelVida1 = document.getElementById("stats1");
  let nivelVida2 = document.getElementById("stats2");
  
  let cantidadVida1 = document.getElementById("vida1");
  let cantidadVida2 = document.getElementById("vida2");

  let winner = document.getElementById("winner");
  
  const pantallaJuego = () => {
    imagen1.innerHTML = `<img class="fighter1" src="img/${grupo1.nombre}.png" alt="fighter1" >`;
    imagen2.innerHTML = `<img class="fighter2" src="img/${grupo2.nombre}.png" alt="fighter2" >`;
  
    nivelVida1.innerHTML = `<div class="lifeBar"><div id="lifeBar1"></div>`;
    nivelVida2.innerHTML = `<div class="lifeBar"><div id="lifeBar2"></div>`;

  };
  
  //Funcion pelea
  
  const pelear = () => {
    grupo1.ataque();
    grupo2.ataque();
  
    if (grupo1.vida <= 0) {
      screenSwitch(4);
  
      winner.innerHTML = `<img class="winner" src="img/final.jpg" alt="winner" > </br> The winner is Player 2 with ${grupo2.nombre}!`;
    }
    if (grupo2.vida <= 0) {
        screenSwitch(4);
  
      winner.innerHTML = `<img class="winner" src="img/final.jpg" alt="winner" > </br> The winner is Player 1 with ${grupo1.nombre}!`;
    }
    cantidadVida1.innerHTML = `${grupo1.vida}`;
    cantidadVida2.innerHTML = `${grupo2.vida}`;
    nivelVida1.innerHTML = `<div class="lifeBar"><div id="lifeBar1"></div>`;
    nivelVida2.innerHTML = `<div class="lifeBar"><div id="lifeBar2"></div>`;
    document.getElementById("lifeBar1").style.width = `${grupo1.vida}` + "%";
    document.getElementById("lifeBar2").style.width = `${grupo2.vida}` + "%";
  };
