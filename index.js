//Declaración de variables.
var rounds = prompt("¿Cuántas Rondas quieres jugar?");

var scorePlayer1 = 0;
var scorePlayer2 = 0;

var playerOneAccumulator = 0;
var playerTwoAccumulator = 0;

//Iteración del ciclo para realizar la cantidad de rondas del juego.
for (i = 0; i < rounds; i++) {
  //Establecer el valor de la puntuación de cada ronda.
  var scorePlayer1 = prompt("Puntuación Jugador 1, ronda: " + (i + 1));
  var scorePlayer2 = prompt("Puntuación Jugador 2, ronda: " + (i + 1));

  //Detectar el ganador de la ronda correspondiente.
  var roundWinnerScore = scorePlayer1 - scorePlayer2;

  //Establecer el valor del puntaje acumulado de cada jugador.
  var playerOneAccumulator = +scorePlayer1 + playerOneAccumulator;
  var playerTwoAccumulator = +scorePlayer2 + playerTwoAccumulator;

  //Mostrar datos del ganador de cada ronda.
  if (scorePlayer1 > scorePlayer2) {
    alert(
      "El ganador de esta ronda es el Jugador 1 con una diferencia de: " +
        roundWinnerScore +
        " puntos"
    );
  } else {
    alert(
      "El ganador de esta ronda es el Jugador 2 con una diferencia de: " +
        -roundWinnerScore +
        " puntos"
    );
  }

  //Mostrar datos del puntaje acumulado
  alert(
    "Puntuación hasta esta ronda: Jugador 1: " +
      playerOneAccumulator +
      " Jugador 2: " +
      playerTwoAccumulator
  );
}

//Mostrar datos sobre los totales de la partida y ganador del juego.
if (playerOneAccumulator > playerTwoAccumulator) {
  alert(
    "El ganador del juego: Jugador 1 con una diferencia de: " +
      (playerOneAccumulator - playerTwoAccumulator) +
      " puntos"
  );
} else {
  alert(
    "El ganador de esta ronda es el Jugador 2 con una diferencia de: " +
      (playerTwoAccumulator - playerOneAccumulator) +
      " puntos"
  );
}
