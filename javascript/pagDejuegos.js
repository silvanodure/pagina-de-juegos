let menu= document.querySelector("#iconomenu");
let menuDeNav= document.querySelector(".menu");

menu.addEventListener("click", function(){
    menuDeNav.classList.toggle("active");
});

window.onscroll = ()=>{
    menuDeNav.classList.remove("active");
};




document.getElementById('telefono').onclick = function () {
    document.getElementById('telefono').innerHTML = "2494356040";
    
}
document.getElementById('email').onclick = function () {
    document.getElementById('email').innerHTML = "silvanodure08@gmail.com";
}
document.getElementById('direccion').onclick = function () {
    document.getElementById('direccion').innerHTML = "Juarez 2140, Tandil";
}