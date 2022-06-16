//juego de preguntas, te respondera si acertaste y te pondra un puntale
// Array bidimensional donde se guardarán las preguntas junto a sus respuestas correctas correspondientes...
let preguntas = [
    ["¿Cuánto es 3 elevado al cubo?", "27"],
    ["¿Qué color resulta al mezclar el azul con el amarillo?","Verde"],
    ["¿Cuál es el río más largo del mundo?", "Amazonas"],
    ["¿Qué cantidad de huesos tiene una persona?", "206"],
    ["¿Qué año empezó la II guerra mundial?", "1939"],
    ["¿Qué año termino la II guerra mundial?", "1945"],
    ["¿Cuál es el océano más grande?", "Pacífico"],
    ["¿Cuál es el país más grande del mundo?", "Rusia"],
    ["¿Cuál es la montaña más alta del mundo?", "Everest"],
    ["¿Cuál es el lugar más frío de la tierra?", "Antártida"],
]
//variables para el programa
let pregunta, respuesta
let formuladas = 0
let acertadas = 0

hazpregunta()

/*
	Se programa que al pulsarse el botón "Siguiente Pregunta" se compruebe si se ha acertado la pregunta, en cuyo caso, se incrementa en una unidad 'acertadas'.
	También se comprueba si ya se han realizado las 5 preguntas, en cuyo caso, se llama a 'muestraResultado()' que mostrará el resultado del juego y terminará el programa, de lo contrario, se formula una nueva pregunta.
*/

document.getElementById("boton").addEventListener("click",function(){
    var entrada = document.getElementById("dato").value
    //se compara las variables
    if(entrada == respuesta){
        acertadas++
    }
    //cuantas se formularan
    if(formuladas < 10){
        hazpregunta()
    }
    else{
        muestraResultado()
    }
})

//formula un pregunta al usuario

function hazpregunta(){
    let e    //variable auxiliar
    // se extrae una pregunta/respuestaal azar del array
    e = preguntas.splice(numAleat(0, preguntas.length-1), 1);
    pregunta = e [0][0];
    respuesta = e [0][1];

    //se muestra la pregunta
    document.getElementById("pregunta").innerHTML=pregunta
    //se borra lo escrito anteriormente por el usuario
    document.getElementById("dato").value=""
    //contara cada pregunta que se realise
    formuladas++
}

function muestraResultado(){
    let resultado   //variable auxiliar
    switch (acertadas) {
        case 0:
            resultado = "debes estudiar mas"
            break;
        
        case 1:
            resultado = "acertaste poco"
            break;
        
        case 2:
            resultado = "regular"
            break;
        
        case 3:
            resultado = "vamos, puedes más"
            break;

        case 4:
            resultado = "sigue mejorando"
            break;

        case 5:
            resultado = "masomenos"
            break;

        case 6:
            resultado = "vas bien"
            break;

        case 7:
            resultado = "puedes mejorar"
            break;

        case 8:
            resultado = "sigue intentando"
            break;

        case 9:
            resultado = "casi lo logras"
            break;

        default:
            resultado = "excelente, buen trabajo"
            break;
    }
    document.getElementById("salida").innerHTML=resultado 
}

//devuelve un numero aleatorio entero entre "min" y "max" (ambos inclusive)
function numAleat(max,min){
    return Math.floor( Math.random() * (max - min + 1) ) + min;
}





