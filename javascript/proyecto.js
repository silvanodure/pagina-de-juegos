
console.log("hola mundo");

document.getElementById('telefono').onclick = function () {
    document.getElementById('telefono').innerHTML = "2494356040";
    
}
document.getElementById('email').onclick = function () {
    document.getElementById('email').innerHTML = "silvanodure08@gmail.com";
}
document.getElementById('direccion').onclick = function () {
    document.getElementById('direccion').innerHTML = "Juarez 2140, Tandil";
}
 
 
let menu = document.querySelector('.menu');
let enlaces = document.querySelector('.enlacesMenu');

menu.addEventListener('click', ()=>{
    enlaces.classList.toggle('activado');

});

let btnFormulario = document.getElementById('botonFormulario');
let formulario = document.getElementById('formulario');

btnFormulario.addEventListener('click', ()=>{
    formulario.classList.toggle('activado');
});