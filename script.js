const textarea_texto = document.getElementById("texto");

const boton_encriptar = document.getElementById("encriptar");
const boton_desencriptar = document.getElementById("desencriptar");
const p_resultado = document.getElementById("texto-resultado");
const boton_copiar = document.getElementById("copiar");

const div_con_datos = document.querySelector(".con-datos");
const div_sin_datos = document.querySelector(".sin-datos");

const toast = document.querySelector(".toast");
const selector_metodo = document.getElementById("metodo"); // Selector para elegir el método

// Agrega los listeners para los botones
boton_encriptar.addEventListener("click", () => {
  console.log("Encriptar");
  if (!validarTexto()) {
    return;
  }
  encriptar();
});
boton_desencriptar.addEventListener("click", () => {
  console.log("Desencriptar");
  if (!validarTexto()) {
    return;
  }
  desencriptar();
});
boton_copiar.addEventListener("click", copiar);

function validarTexto() {
  if (textarea_texto.value.trim() !== "") {
    div_con_datos.classList.add("mostrar-datos");
    div_sin_datos.classList.add("mostrar-datos");
    return true;
  }
  return false;
}

// Función de encriptar
function encriptar() {
  const texto = textarea_texto.value;
  const metodo = selector_metodo.value; // Obtener el método seleccionado

  let resultado = "";

  if (metodo === "base64") {
    resultado = window.btoa(texto);
  } else if (metodo === "desafio") {
    resultado = encriptarDesafio(texto);
  }

  p_resultado.textContent = resultado;
}

// Función de desencriptar
function desencriptar() {
  const texto = textarea_texto.value;
  const metodo = selector_metodo.value; // Obtener el método seleccionado

  let resultado = "";

  if (metodo === "base64") {
    resultado = window.atob(texto);
  } else if (metodo === "desafio") {
    resultado = desencriptarDesafio(texto);
  }

  p_resultado.textContent = resultado;
}

// Función para encriptar usando el método del desafío
function encriptarDesafio(texto) {
  let encriptado = texto
    .replace(/e/g, "enter")
    .replace(/i/g, "imes")
    .replace(/a/g, "ai")
    .replace(/o/g, "ober")
    .replace(/u/g, "ufat");
  return encriptado;
}

// Función para desencriptar usando el método del desafío
function desencriptarDesafio(texto) {
  let desencriptado = texto
    .replace(/enter/g, "e")
    .replace(/imes/g, "i")
    .replace(/ai/g, "a")
    .replace(/ober/g, "o")
    .replace(/ufat/g, "u");
  return desencriptado;
}

// Función para copiar el resultado al portapapeles
function copiar() {
  const texto = p_resultado.textContent;
  navigator.clipboard.writeText(texto);
  mostrarToast();
}

// Función para mostrar un mensaje toast
function mostrarToast() {
  toast.classList.add("mostrar-toast");
  setTimeout(() => {
    toast.classList.remove("mostrar-toast");
  }, 3100);
}
