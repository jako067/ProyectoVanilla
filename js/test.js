//declaraciones

let btnn = document.getElementById('send');

let Pre = document.getElementById('Pregunta');
let Res = document.getElementById('Respuesta');
let Pun = document.getElementById('Puntuacion');

let Est = document.getElementById('Estado');
let back = document.getElementById('atras');
let atras= document.getElementById('atras');

let puntuacionArray = new Array();
let preguntaArray = new Array();
let respuestaArray = new Array();
//
function obtener() {
    atras.style.display="none"
  let pregunta = document.createElement('p');
  let ans = document.createElement('p');
  let score = document.createElement('p');
  let estado = document.createElement('p');

  pregunta.textContent = document.getElementById('quest').value;
  ans.textContent = document.querySelector('input[name="opcion"]:checked').value;
  score.textContent = document.getElementById('score').value;
  estado.textContent = 'guardando...';

  //Forma de hacer con vector
let b=document.querySelector('input[name="opcion"]:checked').value;
let a=document.getElementById('quest').value;
let c=document.getElementById('score').value;

  //
  Pre.appendChild(pregunta);
  Res.appendChild(ans);
  Pun.appendChild(score);
  Est.appendChild(estado);
  setTimeout(() => (estado.textContent = 'OK'), 3000);

  preguntaArray.push(a);

  respuestaArray.push(b);

  puntuacionArray.push(c);

  localStorage.setItem('pregunta', preguntaArray);
  localStorage.setItem('ans', respuestaArray);
  localStorage.setItem('score', puntuacionArray);

    setTimeout(() => (atras.style.display="inline"), 3000);
}

//botones
btnn.addEventListener('click', obtener);
back.addEventListener('click', () => {
  window.location.href = 'screen2.html';
});
