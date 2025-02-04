// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
//https://trello.com/b/uYJFSK04/trello-challenge-amigo-secreto-esp

//Lista a llenar 
let amigos = [];

//Agregar amigos a la lista
//Agregar amigos a lista
function agregarAmigo() {
   
    let ingreso = document.getElementById("amigo");
    let nombre = ingreso.value.trim();
    
    //No haya espacio en blanco
    if (nombre === "") {
        alert("¡¡Ingrese un nombre!!");
        return; 
    }
    
    
    // Agrega nombre a la lista array
    amigos.push(nombre);
    
    ingreso.value = "";
    nombresEnPantalla();
}

// Mostrar la lista
function nombresEnPantalla() {
    
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";
    
    
    amigos.forEach(nombre => {
        let li = document.createElement("li"); 
        li.textContent = nombre; 
        lista.appendChild(li); 
    });
}

//Seleccionar amigo al azar
function sortearAmigo() {
   
    if (amigos.length === 0) {
        alert(" Agregue más nombres antes de hacer el sorteo.");
        return; 
    }
    
    //Numero aleatorio entre nombres dentro del array
    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    let elegido = amigos[indiceAleatorio];
    
    
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `<li>El amigo secreto es: ${elegido}</li>`;
}