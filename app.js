let nombres = [];

function agregarNombre() {
    const inputNombre = document.getElementById("nombre");
    const nuevoNombre = inputNombre.value;

    if (nuevoNombre === ""){
        alert("Por favor ingrese un nombre");
        return;
    }

    nombres.push(nuevoNombre);
    inputNombre.value = "";
    listarNombres()
    //inputNombre.focus(); 

    //Verificar el array por la consola  
    //console.log(nombres);
}

function listarNombres() {
    let listaNombres = document.getElementById("listaNombres");
    listaNombres.innerHTML = "";

    for (let i = 0; i < nombres.length; i++){
        let item = document.createElement("li");
        item.textContent = nombres[i];
        listaNombres.appendChild(item);
    }
}

function elegirNombreAleatorio() {
    if (nombres.length < 2) {
        alert("Tiene que haber un mínimo de dos nombres para poder seleccionar uno al azar.");
        return;
    }
    const nombreAleatorio = Math.floor(Math.random() * nombres.length);
    const nombreSeleccionado = nombres[nombreAleatorio];

    //Muestra el amigo seleccionado
    const resultado = document.getElementById("resultado");
    resultado.textContent = `Tu amigo secreto es: ${nombreSeleccionado}`;
    resultado.style.color = "green";
}

function reiniciarJuego() {
    nombres.length = 0;
    document.getElementById("listaNombres").innerHTML = "";
    document.getElementById("resultado").textContent = "";
}

