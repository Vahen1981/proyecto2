class Encuesta {
    constructor(nombre){
        this.nombre = nombre;
        this.opciones = [];
    }
    agregarOpcion(nombreOpcion, numVotos){
        const nuevoObjeto = { nombre: nombreOpcion, votos: numVotos };
        this.opciones.push(nuevoObjeto);
    }
    votar(numOpcion){
        const opcionEscogida = this.opciones[numOpcion];
        opcionEscogida.votos = opcionEscogida.votos + 1;
        console.log('Haz votado por: ' + opcionEscogida.nombre);
        console.log('Votos actuales: ' + opcionEscogida.votos);
    }
}
//Esta es una prueba

const nombreEncuesta = prompt('¡Bienvenido al creador de encuestas! Escribe el nombre de la encuesta que desear crear: ');
const nuevaEncuesta = new Encuesta(nombreEncuesta);
let numeroOpciones = prompt('¿Cuantas opciones tendrá tu encuesta?');
while(isNaN(numeroOpciones) || numeroOpciones === ''){
    alert('Debes ingresar un número');
    numeroOpciones = prompt('¿Cuantas opciones tendrá tu encuesta?');
}
if(numeroOpciones < 2){
    alert('Debes tener más de 1 opción');
    numeroOpciones = prompt('¿Cuantas opciones tendrá tu encuesta?')
}
for(let i = 0 ; i < numeroOpciones ; i++){
    let opcion = prompt(`Ingresa la opcion número ${i+1}`);
    nuevaEncuesta.agregarOpcion(opcion, 0);
}
alert('Ingresaste todas las opciones. Se iniciará el sistema de votación');


let contadorVotos = prompt(textoVotacion());

while(contadorVotos !== 'END'){
    if(contadorVotos > numeroOpciones || contadorVotos < 1){
        alert('Opción no válida');
        contadorVotos = prompt(textoVotacion());
    }
    else{
        nuevaEncuesta.votar(contadorVotos-1);
        contadorVotos = prompt(textoVotacion());
    }
}

alert(resultadosVotacion());


function textoVotacion(){
    let textoOpciones = nuevaEncuesta.nombre + `.\nEscribe el número de la opción a la cual le entregarás tu voto: \n `;
    for(let i = 0 ; i < numeroOpciones ; i++){
        textoOpciones = textoOpciones + (i+1) + '. ' + nuevaEncuesta.opciones[i].nombre + `\n       ` + 'Votos = ' + nuevaEncuesta.opciones[i].votos + `\n `;
    }
    textoOpciones = textoOpciones + `\n` + 'Escribe "END" para finalizar la votación.';
    return textoOpciones;
}

function resultadosVotacion(){
    let textoFinal = 'Votación finalizada. resultados: \n';
    for(let i = 0 ; i < numeroOpciones ; i++){
        textoFinal = textoFinal + (i+1) + '. ' + nuevaEncuesta.opciones[i].nombre + '\n       ' + 'Votos = ' + nuevaEncuesta.opciones[i].votos + '\n ';
    }
    return textoFinal;
}
