

let hola=document.createElement('h1');

hola.innerText ='Sea bienvenido: ' + localStorage.getItem("usuario");

document.getElementById("main").appendChild(hola);;

let ultima = localStorage.getItem("ultimaVisita");
if (ultima) {
  let p = document.createElement('p');
  p.innerText = 'Última vez que ingresó: ' + ultima;
  document.getElementById("main").appendChild(p);
}

localStorage.setItem("ultimaVisita", new Date().toLocaleString());