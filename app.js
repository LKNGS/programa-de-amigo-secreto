// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let nombres = [];

// Función para agregar un amigo al listado
function agregarAmigo() {
    let inputAmigo = document.getElementById("amigo");
    let amigo = inputAmigo.value.trim();

    if (amigo) {
        nombres.push(amigo);
        inputAmigo.value = ""; 
        mostrarAmigos(); 
    } else {
        alert("Por favor, ingresa un nombre");
    }
}

// Función para mostrar la lista de amigos
function mostrarAmigos() {
    let listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = ""; 

    // Crear un elemento <li> para cada amigo y añadirlo a la lista
    nombres.forEach((nombre, index) => {
        let li = document.createElement("li");
        li.textContent = `${index + 1}. ${nombre}`;
        listaAmigos.appendChild(li);
    });
}

// Función para seleccionar un amigo de forma aleatoria
function sortearAmigo() {
    if (nombres.length === 0) {
        alert("No hay nombres para seleccionar. Agrega nombres, por favor.");
        return;
    }

    let amigoAleatorio = Math.floor(Math.random() * nombres.length);
    let amigoSeleccionado = nombres[amigoAleatorio];

    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `<li>Amigo seleccionado: <strong>${amigoSeleccionado}</strong></li>`;
}