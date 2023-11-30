function arrancarJuego(){
    document.getElementById("inicio").style.display="none";
    document.getElementById("pantalla_del_juego").style.display="block";
}


let cargar_pregunta_por_indice=0;

let puntos = 0;

subirPreguntas(cargar_pregunta_por_indice)

function subirPreguntas(index){
     cuestionario = preguntasYrespuestas[index]
     opciones =[...cuestionario.opciones]  //aca usa spread operator para acceder//
    opciones.push(cuestionario.respuesta)
   
    opciones.sort(()=>Math.random()-0.5);

    document.getElementById("pregunta").innerHTML = cuestionario.pregunta
    document.getElementById("opcion1").innerHTML = opciones[0]
    document.getElementById("opcion2").innerHTML = opciones[1]
    document.getElementById("opcion3").innerHTML = opciones[2]
    document.getElementById("opcion4").innerHTML = opciones[3]
}

function seleccionar(index){
        let comprobar_Respuesta = opciones[index] == cuestionario.respuesta;
    
        if (comprobar_Respuesta){
        
        alert("respuesta correcta, segui asi que vas bien!");
        puntos++;
        } else{
       alert("le erraste negri, te falta intrusos!");
     };
     
    cargar_pregunta_por_indice++;
    if (cargar_pregunta_por_indice >= preguntasYrespuestas.length){  
        document.getElementById("pantalla_del_juego").style.display="none";
        document.getElementById("ultimaPantalla").style.display="block";
        document.getElementById("cantidadCorrectas").innerHTML=puntos;
        document.getElementById("cantidadIncorrectas").innerHTML=preguntasYrespuestas.length - puntos;
    }else{
        subirPreguntas(cargar_pregunta_por_indice)
    }
}
function volverAlInicio(){
    document.getElementById("ultimaPantalla").style.display="none";
    document.getElementById("inicio").style.display="block";
}
