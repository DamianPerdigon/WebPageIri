window.addEventListener('load', iniciar, false);

function iniciar(){
  var imagen=document.getElementById('vangoh');
  imagen.addEventListener('mouseover', peligro, false);
}

function peligro(){
  var imagen=document.getElementById('vangoh').innerHTML="frida.png";
}