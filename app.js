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
        for (let i = 0; i <nombre.length; i++){
            let li = document.createElement('li');
            li.textContent = nombre[i];
            document.getElementById('listaAmigos').appendChild(li);
        }
  
        }
     
function sortearAmigo (){
    document.getElementById('listaAmigos').innerHTML = "";
        if (nombre.length > 0) {
        
        let indiceAleatorio = Math.floor(Math.random() * nombre.length);
        let amigoSeleccionado = nombre[indiceAleatorio];
        document.getElementById('resultado').textContent = 'Amigo aleatorio seleccionado: ' + amigoSeleccionado;
   
    } 

}  