//Se crea la clase "Encuesta" que incluye 2 propiedades, nombre (de la encuesta) y opciones, 
//esta última es un array vacío que se llenará con las opciones que el usuario escogerá para
//su encuesta, los objetos tienen 2 propiedades: nombre y votos, estos último se irán modificando
//según la votación a lo largo del programa.
class Encuesta {
    constructor(nombre){
        this.nombre = nombre;
        this.opciones = [];
    }
    //Método que utilizaremos para que el usuario ingrese opciones
    agregarOpcion(nombreOpcion, numVotos){
        const nuevoObjeto = { nombre: nombreOpcion, votos: numVotos };
        this.opciones.push(nuevoObjeto);
    }
    //Método que utilizaremos en el momento de la votación
    votar(numOpcion){
        const opcionEscogida = this.opciones[numOpcion];
        opcionEscogida.votos = opcionEscogida.votos + 1;
        console.log('Haz votado por: ' + opcionEscogida.nombre);
        console.log('Votos actuales: ' + opcionEscogida.votos);
    }
}


//Se inicia el programa, ocupamos el prompt para interactuar con el usuario y guardar los datos que nos entregue
const nombreEncuesta = prompt('¡Bienvenido al creador de encuestas! Escribe el nombre de la encuesta que desear crear: ');
//Llamamos a la clase "Encuesta" y creamos nuestro objeto
const nuevaEncuesta = new Encuesta(nombreEncuesta);
let numeroOpciones = prompt('¿Cuantas opciones tendrá tu encuesta?');
//Validamos que sea un número
while(isNaN(numeroOpciones) || numeroOpciones === ''){
    alert('Debes ingresar un número');
    numeroOpciones = prompt('¿Cuantas opciones tendrá tu encuesta?');
}
//Validamos que sea mayor a 1, pues necesitamos al menos 2 opciones para la encuesta
while(numeroOpciones < 2){
    alert('Debes tener más de 1 opción');
    numeroOpciones = prompt('¿Cuantas opciones tendrá tu encuesta?')
}
//Creamos un ciclo for para crear todas las opciones que el usuario anteriormente nos dijo que su encuesta tendría 
for(let i = 0 ; i < numeroOpciones ; i++){
    let opcion = prompt(`Ingresa la opcion número ${i+1}`);
    //Si todo esta validado se llama al método .agregarOpcion() para crear un nuevo objeto en el array del objeto 
    //creado por la clase "Encuesta"
    nuevaEncuesta.agregarOpcion(opcion, 0);
}
//Una vez ingresadas todas las opciones, lanzamos un alert anunciando que se iniciará la votación
alert('Ingresaste todas las opciones. Se iniciará el sistema de votación');

//Le solicitamos al usuario que ingrese el número de la opción escogida y la guardamos en la variable contadorVotos
//El prompt llama a la función textoVotación, la cual es simplemente un generador de texto que da las instrucciones 
//y va mostrando la votación en tiempo real.
let contadorVotos = prompt(textoVotacion());

//El siguiente while se ejecutará hasta que el usrio digite "END" y además valida si el número por el cual el usuario
//esta votando, es una opción existente.
//En este bucle se esta llamando también al método .votar() cuando la opción es válida, y este método suma 1 voto 
//a la opción señalada. Se le resta 1 (-1) ya que el array recorre desde 0, por lo tanto la opción 1 en el array es 0.
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

//Cuando el usuario escribe "END" en el bucle anterior, se muestran en un alert() los resultados de la votación.
//También se muestran por consola.
alert(resultadosVotacion());
console.log(resultadosVotacion());

//Función para generar el texto que se le mostrará al usuario
function textoVotacion(){
    let textoOpciones = nuevaEncuesta.nombre + `.\nEscribe el número de la opción a la cual le entregarás tu voto: \n `;
    for(let i = 0 ; i < numeroOpciones ; i++){
        textoOpciones = textoOpciones + (i+1) + '. ' + nuevaEncuesta.opciones[i].nombre + `\n       ` + 'Votos = ' + nuevaEncuesta.opciones[i].votos + `\n `;
    }
    textoOpciones = textoOpciones + `\n` + 'Escribe "END" para finalizar la votación.';
    return textoOpciones;
}

//Función para generar el texto con los resultados finales
function resultadosVotacion(){
    let textoFinal = 'Votación finalizada. resultados: \n';
    for(let i = 0 ; i < numeroOpciones ; i++){
        textoFinal = textoFinal + (i+1) + '. ' + nuevaEncuesta.opciones[i].nombre + '\n       ' + 'Votos = ' + nuevaEncuesta.opciones[i].votos + '\n ';
    }
    return textoFinal;
}
