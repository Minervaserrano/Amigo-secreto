let nombre = [];

function agregarAmigo () {
    let amigo = document.getElementById('amigo').value;

    if (amigo !=="") {
        nombre.push(amigo);

        document.getElementById('listaAmigos').innerHTML = "";

        mostrarAmigos();

        document.getElementById('amigo').value = "";
    } else {
        alert ("Por favor, inserte un nombre.");
    }
}  
    function mostrarAmigos(){
        nombre.forEach(function(amigo){

            let li = document.createElement('li');
            li.textContent = amigo;
        
            document.getElementById('listaAmigos').appendChild(li);
        });
     
    }

function sortearAmigo (){
    if (nombre.length > 0) {
        
        let indiceAleatorio = Math.floor(Math.random() * nombre.length);
        let amigoSeleccionado = nombre[indiceAleatorio];
        document.getElementById('resultado').textContent = 'Amigo aleatorio seleccionado: ' + amigoSeleccionado;

    
    } 
}