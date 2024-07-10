const textarea_texto = document.getElementById("texto");

const boton_encriptar = document.getElementById("encriptar");
const boton_desencriptar = document.getElementById("desencriptar");
const p_resultado = document.getElementById("texto-resultado");
const boton_copiar = document.getElementById("copiar");

const div_con_datos = document.querySelector(".con-datos");
const div_sin_datos = document.querySelector(".sin-datos");

const toast = document.querySelector(".toast");

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

function encriptar() {
  const texto = textarea_texto.value;
  const encriptado = window.btoa(texto);
  p_resultado.textContent = encriptado;
}

function desencriptar() {
  const texto = textarea_texto.value;
  const desencriptado = window.atob(texto);
  p_resultado.textContent = desencriptado;
}

function copiar() {
  const texto = p_resultado.textContent;
  navigator.clipboard.writeText(texto);
  mostrarToast();
}

function mostrarToast() {
  toast.classList.add("mostrar-toast");
  setTimeout(() => {
    toast.classList.remove("mostrar-toast");
  }, 3100);
}
