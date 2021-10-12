// Capturamos todos los nodos
const $$circles = document.querySelectorAll(".b-circle");
const $$mole = document.querySelectorAll(".mole");
const $$timer = document.querySelector("#countdown");
const $$score = document.querySelector("#score");
const $$hits = document.querySelector("#hits");
const $$btnStart = document.querySelector('#start');
const $$btnRestart = document.querySelector('#restart');

//Tiempo inicial
let timer = 60;
//Resultado inicial
let result = 0;
//Acietos iniciales
let hits = 0;
//Creamos una variabel igualandola a null para detener el intervalo de tiempo
let timerId = null;
//Declaramos la variable para que tenga un alcance global
let hitPosition;

//Función para recorrer cada circulo de forma aleatoria--------------------------->

const randomCircle = () => {
  $$circles.forEach((circle) => {
    // console.log(circle) Obtenemos cada circulo.
    //Obtenemos cada cuadrado y eliminamos la clase 'mole' par el circulo que la contenga
    circle.classList.remove("mole");
  });
  //Obtenemos cada circulo de forma eleatoria
  //Con $$circles y corchetes [] --> acedemos a la posición del array y le pasamos un numero aleatorio entre 0 multiplicado por el total de circulos(14)
  let randomCircle = $$circles[Math.floor(Math.random() * 14)];
  //console.log(randomPosition); Circulo aleatorio
  //console.log(Math.floor(Math.random() * 14)) Numero aleatorio entre cero y 14

  //Para cada circulo aleatorio añadimos la clase mole
  randomCircle.classList.add("mole");

  //obtenemos el id del circulo aleatorio igualandolo a la variabel y almacenandola de forma global sin inicializar para acceder a ella.
  hitPosition = randomCircle.id;
};

//Recorremos cada circulo y agregamos un eventListener--------------------------->

//MouseDown se activa cuando con el raton presionamos un elemento. Recorremos cada circulo.
$$circles.forEach((circle) => {
  //Cramos una función en el evento para indicarle lo que sucedera en cada iteracción
  circle.addEventListener("mousedown", () => {
    //Si el id del circulo es igual al id del circulo aleatorio(htiPosition) añadimos uno al resultado
    if (circle.id == hitPosition) {
      result += 15;
      //Llevamos el resultado(+15) al score
      $$score.textContent = result;
      //Sumamos uno hist por cada acierto
      hits++;
      hitPosition = hits;
      $$hits.textContent = hitPosition;
      //console.log(hitPosition);
    }
  });
});

//Creamos una función que recoge el intervalo de tiempo para el movimiento de cada caja aleatoria
const moveMole = () => {
  timerId = setInterval(randomCircle, 500);
};

//Función que almacena la cuenta regresiva---------------------------------------->

const countDown = () => {
  timer--;
  $$timer.textContent = timer;
  //Detener la cuenta regresiva
  if (timer == 0) {
    //Detenemos la cuenta regresiva pasandole la variable que almacena el intervalo
    clearInterval(contDownTimer);
    //Detenemos el intervalo de los circulos aleatorios
    clearInterval(timerId)
    //Mostramos con un alert el resultado final
    alert(`GAME OVER! FINAL SCORE: ${result}`);
  }
};

//Creamos una variable igualandola al intervalo y le pasamos la función que almacena la cuenta regresiva;
let contDownTimer = setInterval(countDown, 1000);



/* const start = () =>{
 if(moveMole){
    moveMole()
 }
}

$$btnStart.addEventListener('click', start)  */


window.onload = function () {
    moveMole()
};
