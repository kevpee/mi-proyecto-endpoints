function guardar(){

    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    event.preventDefault();

    let raw = JSON.stringify({
        "nombre": document.getElementById("nombre").value,
        "email": document.getElementById("correo").value
    });

    let requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow"
    };

    fetch("http://localhost:3000", requestOptions)
        .then((response) => response.text())
        .then((result) => console.log(result))
        .catch((error) => console.error(error));
}


function cargar(resultado){

    let transformado = JSON.parse(resultado);

    var salida = "";
    var elemento = "";

    for (let vc in transformado){

        elemento = "ID: " + transformado[vc].id;
        elemento = elemento + "<br>Nombre: " + transformado[vc].nombre;
        elemento = elemento + "<br>Correo electrónico: " + transformado[vc].email;

        salida = salida + elemento + "<br><br>";
    }

    document.getElementById("rta").innerHTML = salida;
}


function listar(){

    event.preventDefault();

    const requestOptions = {
        method: "GET",
        redirect: "follow"
    };

    fetch("http://localhost:3000", requestOptions)
        .then((response) => response.text())
        .then((result) => cargar(result))
        .catch((error) => console.error(error));
}


function respuesta_actualizar(resultado){

    document.getElementById("rtaA").innerHTML = resultado;
}


function actualizar(){

    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    event.preventDefault();

    let raw = JSON.stringify({
        "nombre": document.getElementById("updateName").value,
        "email": document.getElementById("updateEmail").value
    });

    let requestOptions = {
        method: "PUT",
        headers: myHeaders,
        body: raw,
        redirect: "follow"
    };

    let elid = document.getElementById("updateId").value;

    fetch("http://localhost:3000/" + elid, requestOptions)
        .then((response) => response.text())
        .then((result) => respuesta_actualizar(result))
        .catch((error) => console.error(error));
}


function cargarLE(resultado){

    let transformado = JSON.parse(resultado);

    var salida = "";

    salida = "ID: " + transformado.id;
    salida = salida + "<br>Nombre: " + transformado.nombre;
    salida = salida + "<br>Correo electrónico: " + transformado.email;

    document.getElementById("rtaLE").innerHTML = salida;
}


function listar_estudiante(){

    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    event.preventDefault();

    const requestOptions = {
        method: "GET",
        headers: myHeaders,
        redirect: "follow"
    };

    let elid = document.getElementById("iDLE").value;

    fetch("http://localhost:3000/" + elid, requestOptions)
        .then((response) => response.text())
        .then((result) => cargarLE(result))
        .catch((error) => console.error(error));
}


function cargarEE(resultado){

    document.getElementById("rtaEE").innerHTML = resultado;
}


function eliminar_estudiante(){

    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    event.preventDefault();

    const requestOptions = {
        method: "DELETE",
        headers: myHeaders,
        redirect: "follow"
    };

    let elid = document.getElementById("idEE").value;

    fetch("http://localhost:3000/" + elid, requestOptions)
        .then((response) => response.text())
        .then((result) => cargarEE(result))
        .catch((error) => console.error(error));
}

