//Primera Pagina
let bienvenida = document.getElementById('welcome');
let pag1 = document.getElementById('pag1');

function show() {
  bienvenida.style.display = 'none';
  pag1.style.display = 'block';
  document.body.style.backgroundColor = 'rgb(167, 208, 245)';
}

function hide(event) {
  if (event.key == 'h' || event.key == 'j') {
    show();
  }
}

addEventListener('keypress', hide);

setTimeout(show, 5000);

//Validacion Usuario


let email = document.getElementById('email');
function esEmail(cadena) {

  return (
    cadena.includes('@') &&
    cadena.includes('.') &&
    cadena.indexOf('@') < cadena.lastIndexOf('.')
  );
}
let validar = document.getElementById('validasion');
function validamos() {
  let value = document.getElementById('email').value;
  if (!esEmail(value)) {
    validar.innerText = 'Ha de introducir un correo válido';
    //Tuvimos un problema y buscando, encontramos que añadiendo un delay al select, se solucionaba
    setTimeout(() => { email.select(); }, 0);
    console.log('sada');
    document.getElementById("enviar").disabled = true;
  }
  else{
      validar.innerText = 'Este correo si es valido';
      document.getElementById("enviar").disabled = false;
  }
}
email.addEventListener('blur', validamos);

//Validación completada.

let send=document.getElementById('enviar');

send.addEventListener('click',usu);

function usu(){

  let value = document.getElementById('email').value;
  localStorage.setItem("usuario", value);

}