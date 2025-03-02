// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

// esta parte no tiene que ir: prompt ('Me indicas el nombre de tus amigos por favor');

let nombreDeAmigo = [];

// despues del array usar: document.getElementById o document.querySelector para obtener el texto ingresado por el usuario
let titulo = document.queryselector ('h1');
titulo.innerHTML = 'Amigo Secreto';

let parrafo = document.queryselector ('p');
parrafo.innerHTML = 'Digite el nombre de sus amigos';

function agregarAmigo() {
    console.log ('hola');
 }

//faltaria aqui agregar un while
while (nombreDeAmigo != '') {
    console.log (nombreDeAmigo);

    if (nombreDeAmigo == '') {
        alert ('Ingresa un dato valido');
    }
}

// Puedo usar tambien la frase sugerida: "Por favor, inserte un nombre"

// Actualizar el array de amigos: Si el valor es válido, añadirlo al arreglo que almacena los nombre de amigos usando el método.push().
// Limpiar el campo de entrada: Después de añadir el nombre, restablecer el campo de texto a una cadena vacía.

// crear funcion para llamar la funcion de los botones