let imagenes = [
    {
        "url": "/css/img/hombreAraña.jpg",
        "nombre": "Spider Man",
        "descripcion": "Ultimo lanzamiento de este 2023, el hombre araña sale para diferentes plataformas entre ellas Pc, xbox, play station 4 y play station 5"

    },
    {
        "url": "/css/img/ragnarok.jpg",
        "nombre": "God of war",
        "descripcion": "Lanzado a principios del año, es la novena y ultima entrega de la franquicia. Tres años después de los sucesos de God of War, los Nueve Reinos sufren el Fimbulwinter, que cuando este acabe comenzará el Ragnarök, es decir, la batalla del fin del mundo"

    },
    {
        "url": "/css/img/horizon.jpg",
        "nombre": "horizon forbidden west",
        "descripcion": "Explora tierras remotas, enfréntate a máquinas más grandes e imponentes y descubre increíbles tribus en tu regreso a un futuro lejano en el mundo apocalíptico de Horizon"

    },
]


let atras = document.getElementById('atras');
let adelante = document.getElementById('adelante');
let imagen = document.getElementById('img');
let puntos = document.getElementById('puntos');
let texto = document.getElementById('texto')
let actual = 0
posicionCarrusel()

atras.addEventListener('click', function(){
    actual -=1

    if (actual == -1){
        actual = imagenes.length - 1
    }

    imagen.innerHTML = ` <img class="img" src="${imagenes[actual].url}" alt="logo pagina" loading="lazy"></img>`
    texto.innerHTML = `
    <h3>${imagenes[actual].nombre}</h3>
    <p>${imagenes[actual].descripcion}</p>
    `
    posicionCarrusel()
})  
adelante.addEventListener('click', function(){
    actual +=1

    if (actual == imagenes.length){
        actual = 0
    }

    imagen.innerHTML = ` <img class="img" src="${imagenes[actual].url}" alt="logo pagina" loading="lazy"></img>`
    texto.innerHTML = `
    <h3>${imagenes[actual].nombre}</h3>
    <p>${imagenes[actual].descripcion}</p>
    `
    posicionCarrusel()
})  

function posicionCarrusel() {
    puntos.innerHTML = ""
    for (var i = 0; i <imagenes.length; i++){
        if(i == actual){
            puntos.innerHTML += '<p class="bold">.<p>'
        }
        else{
            puntos.innerHTML += '<p>.<p>'
        }
    } 
}