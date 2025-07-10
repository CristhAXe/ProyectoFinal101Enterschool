// Guarda los elementos del html
const refs = {
  input: document.getElementById("userInput"),       // Caja para ingresar  el número
  mensaje: document.getElementById("mensaje"),       // Mensaje  para decir si está bien o mal
  contador: document.getElementById("contador"),     // Muuestra los intentos que vas usando
  meme: document.getElementById("memePerro")         // Meme que aparece si pierdes
};

// Variables para el juego
let numeroSecreto;
let intentos;
let acertado;

// Empieza el juego al cargar la página
iniciarJuego();

// Esta funcion inicia el juego y reinicia las variables
function iniciarJuego() {
  numeroSecreto = Math.floor(Math.random() * 100) + 1; // Número entre 1 y 100
  intentos = 3;     // Solo tienes 3 intentos
  acertado = false;

  console.clear();
  console.log("Se generó un número secreto.");

  // reinicia los elementos del HTML
  refs.input.disabled = false;
  refs.input.value = "";
  refs.mensaje.textContent = "";
  refs.contador.textContent = "Intentos usados: 0 / 3";
  refs.meme.style.display = "none";
}

// Esta es la función llama al hacer click en el botón "Adivinar"
function adivinar() {
  const valor = parseInt(refs.input.value);  // Convierte el valor ingresado a un número entero

  // Si no escribe un numero válido
  if (isNaN(valor) || valor < 1 || valor > 100) {
    alert("Escribe un número entre 1 y 100.");
    return;
  }

  console.log(`Intento ${4 - intentos}: escribiste ${valor}`);

  // Si adivina el número  secreto
  if (valor === numeroSecreto) {
    refs.mensaje.textContent = "Ganaste el juego , nos veremos pronto >-<";
    alert("¡Ganaste!");
    acertado = true;
    terminarJuego(); // Termina el juego con el resultado que ganaste
  } else {
    // Si el número es incorrecto
    refs.mensaje.textContent = valor < numeroSecreto ? "Muy bajo." : "Muy alto.";
    intentos--;
    refs.contador.textContent = `Intentos usados: ${3 - intentos} / 3`;

    // Si ya no tiene intentos
    if (intentos === 0) {
      refs.mensaje.textContent = `perdisteee ${numeroSecreto}.`;
      alert("perdiste?.");
      terminarJuego(true); // Si el jugador pierde, muestra el meme
    }
  }

  refs.input.value = ""; // borra el valor ingresado
  refs.input.focus(); // vuelve a enfocar la caja de entrada
}

// Esta función muestra los intentos usados en una ventana
function mostrarIntentos() {
  alert(refs.contador.textContent);
}

// Esta función termina el juego y muestra el meme si perdiste
function terminarJuego(mostrarMeme = false) {
  refs.input.disabled = true;

  if (mostrarMeme) {
    refs.meme.style.display = "block";
  }
}

// Esta función reinicia el juego al hacer click en el botón "Reiniciar"
function reiniciarJuego() {
  iniciarJuego();
}
