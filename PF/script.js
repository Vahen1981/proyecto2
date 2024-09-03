//Aquí le pedimos al usuario el nombre que le asignará a su encuesta, y luego lo mostramos por consola
const nombreEncuesta = prompt('¡Bienvenido al creador de encuestas! Escribe el nombre de la encuesta que desear crear: ');
console.log('Nombre de la encuesta: ' + nombreEncuesta);


//Declaramos las variables que utilizaremos para crear la encuesta, opciones[] será un array de objetos, 
//los objetos contendrán el nombre de la opción y el número de votos.
//La variable numeroOpciones almacenará un número que representa la cantidad de opciones que el usuario desea 
//ingresar, esto sirve para luego hacer correr un for y crear el array con la cantidad exacta de opciones que 
//el usuario quiere. 
let opciones = [];
let numeroOpciones;


//En esta función solicitamos el número de opciones al usuario y verificamos que sea mayor a 1 opción (para que 
//la votación tenga sentido), que sea un número, que sea positivo y que no sea una cadena vacía.
function creadorOpciones(){
    numeroOpciones = prompt('¿Cuantas opciones tendrá tu encuesta?');
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
}

//En esta función hacemos correr un for, basado en el número de opciones entregado por el usuario y le vamos 
//solicitando al usuario que ingrese los nombres de las opciones. Las opciones se van guardando en el array opciones[]
//Aquí también aprovechamos de crear la propiedad "votos" de cada objeto, inicializandola en 0, para después modificarla
//en la función de votación
function creadorEncuesta(numOpciones) {
    for (let i = 0; i < numOpciones; i++) {
        let opcion = {
            nombre: prompt(`Ingresa la opción número ${i + 1}`),
            votos: 0
        };
        opciones.push(opcion);
    }
    console.log(`${numOpciones} opciones agregadas: `);
    for (let i = 0 ; i < numOpciones ; i++){
        console.log(`Opción ${i+1}: ${opciones[i].nombre}`)
    }
    console.log(opciones);
}

//Esta función genera un texto para guiar al usuario en la votación. Además el texto va mostrando los votos en tiempo real
//a través de prompt. La usaremos dentro de la función votacion()
function textoVotacion(){
    let textoOpciones = nombreEncuesta + `.\nEscribe el número de la opción a la cual le entregarás tu voto: \n `;
    for(let i = 0 ; i < numeroOpciones ; i++){
        textoOpciones = textoOpciones + (i+1) + '. ' + opciones[i].nombre + `\n       ` + 'Votos = ' + opciones[i].votos + `\n `;
    }
    textoOpciones = textoOpciones + `\n` + 'Escribe "END" para finalizar la votación.';
    return textoOpciones;
}

//Esta función solo retorna un texto y la utilizaremos dentro de la función votacion() para mostar la votación en tiempo real por consola
function mostrarVotos(){
    let votacionTiempoReal = 'Votación actual: \n'
    for(let i = 0 ; i < numeroOpciones ; i++){
        votacionTiempoReal = votacionTiempoReal + `${opciones[i].nombre}: ${opciones[i].votos} votos\n`;
    }
    return votacionTiempoReal;
}

//Esta función se encarga de crear una variable (contadorVotos) que almacena el número de la opción por la cual el usuario desea votar
//la variable se modificará muchas veces, ya que se procesará en un bucle while hasta que el usuario escriba "END".
//Se le sumará 1 voto al índice de la opción que representa la variable. Los resultados se van mostrando en tiempo real tanto en
//el prompt, como en consola.
function votacion(){
    console.log('Se inicia la votación');
    alert('Ingresaste todas las opciones. Se iniciará el sistema de votación');
    let contadorVotos = prompt(textoVotacion());
    while(contadorVotos !== 'END'){
        if(contadorVotos > numeroOpciones || contadorVotos < 1 || isNaN(contadorVotos)){
            alert('Opción no válida');
            console.log('Opción no válida');
            contadorVotos = prompt(textoVotacion());
        }
        else{
            opciones[contadorVotos-1].votos = opciones[contadorVotos-1].votos + 1;
            console.log(mostrarVotos());
            contadorVotos = prompt(textoVotacion());
        }
    }
}

//Esta función retorna un texto que mostraremos una vez finalizada la votación
function resultadosVotacion(){
    let textoFinal = 'Votación finalizada. resultados: \n ';
    for(let i = 0 ; i < numeroOpciones ; i++){
        textoFinal = textoFinal + (i+1) + '. ' + opciones[i].nombre + '\n       ' + 'Votos = ' + opciones[i].votos + '\n ';
    }
    return textoFinal;
}


//Aquí ejecutamos la aplicación.
creadorOpciones();
creadorEncuesta(numeroOpciones);
votacion();
console.log(resultadosVotacion());
alert(resultadosVotacion());