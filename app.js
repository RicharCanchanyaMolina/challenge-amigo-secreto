// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
//Array
let listaAmigos = [];
let yaSorteado = false;

function agregarAmigo(){
    let input = document.getElementById('amigo');
    let nombre = input.value.trim();

    if (nombre === ""){
        alert("Por favor, inserte un nombre");
        return;
    }

    listaAmigos.push(nombre);
    actualizarLista();
    input.value = "";
}
    
function actualizarLista() {
    let listaElement = document.getElementById('listaAmigos');
    listaElement.innerHTML = "";

    for (let i = 0; i < listaAmigos.length; i++) {
        let li = document.createElement('li');
        li.textContent = (i+1) + "." + listaAmigos[i];
        listaElement.appendChild(li);
    }
}

function sortearAmigo() {
    if (yaSorteado) {
        listaAmigos = [];
        yaSorteado = false;

document.getElementById('listaAmigos').innerHTML = "";

document.getElementById('resultado').innerHTML = "";

    alert("Reiniciaste el juego. Ahora puedes agregar nuevos amigos!");
    return;
    }

    if (listaAmigos.length === 0) {
        alert("No hay amigos en la lista para realizar el sorteo.")
        return;
    }

    let indiceAleatorio = Math.floor(Math.random() * listaAmigos.length);
    let amigoSorteado = listaAmigos[indiceAleatorio];

    let resultadoElement = document.getElementById('resultado');
    resultadoElement.innerHTML = "<li>¡El amigo sorteado es: <strong>" + amigoSorteado + "</strong>!</li>";

    yaSorteado = true;
}