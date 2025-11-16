//declaraciones
let btnn = document.getElementById('send');

let Pre = document.getElementById('Pregunta');
let Res = document.getElementById('Respuesta');
let Pun = document.getElementById('Puntuacion');
let esc= document.getElementById('score');
let Est = document.getElementById('Estado');
let back = document.getElementById('atras');

let usu = localStorage.getItem('usuario');
let preguntasLocal =[];
let preguntasUsu = localStorage.getItem(usu);

let puntuacionArray = new Array();
let preguntaArray = new Array();
let respuestaArray = new Array();
//

esc.addEventListener('input', validar);

function validar(){

  if(isNaN(this.value)){
    this.value="";
  }

  if(this.value>9){
    this.value="";
  }

}
if (preguntasUsu) {
  try {
    preguntasLocal = JSON.parse(preguntasUsu);
  } catch(e) {
    console.warn('JSON corrupto en', usu, e);
    preguntasLocal = [];
  }
}
setTimeout(() =>{
    let complete =document.getElementById("complete");
    let carga =document.getElementById('carga');
    complete.style.display="flex";
    carga.style.display="none";
    if (preguntasLocal.length) {
    preguntasLocal.forEach(q => {
       apendizar(q) 
        //Y el estado también, los marcamos todos como OK
       const s = document.createElement('p');
        s.textContent = 'OK';
        Est.appendChild(s);
    });
    //Aquí arriba
}}, 2000);

function obtener() {
    back.style.display="none"
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

  const qObj = { question: a, answer: b, score: c, date: new Date().toISOString() };
  preguntasLocal.push(qObj);
  localStorage.setItem(usu, JSON.stringify(preguntasLocal));

  setTimeout(() => (estado.textContent="OK"), 3000);
  setTimeout(() => (back.style.display="inline"), 3000);
}

//botones
btnn.addEventListener('click', obtener);
back.addEventListener('click', () => {
  window.location.href = 'screen2.html';
});



function apendizar(p){
  const preguntaAp = document.createElement('p');
    const  opcionAp= document.createElement('p');
    const  pointAp= document.createElement('p');

    preguntaAp.textContent = p.question || '';
    opcionAp.textContent = p.answer ?? 'No seleccionado'; //esto es simplemente para que si no se ha clicado en ninguno, entonces ponemos "no seleccionado"
    pointAp.textContent = p.score || '';

    Pre.appendChild(preguntaAp);
    Res.appendChild(opcionAp);
    Pun.appendChild(pointAp);
}