//Primera Pagina
let bienvenida = document.getElementById("welcome");
let pag1 = document.getElementById("pag1");

function show(){
    bienvenida.style.display = "none";
    pag1.style.display="block"
    document.body.style.backgroundColor="rgb(167, 208, 245)";
}

function hide(event) {
  if (event.key == 'h' || event.key == 'j') {
    show();
  }
}

addEventListener('keypress', hide);

setTimeout(show,5000);

//Validacion Usuario

let value=getElementById('email').value

function esEmail(cadena) {
  return (
    cadena.includes("@") &&
    cadena.includes(".") &&
    cadena.indexOf("@") < cadena.lastIndexOf(".")
  );
}
let validar=document.getElementById("validasion");
function validamos(){

if(!esEmail(value)){

    validar.innerText("Ha de introducir un correo válido");
}
}

addEventListener('hover',validamos);