const listaUsuarios = document.getElementById("body-usuarios");
const boton = document.getElementById("boton");
const nombre = document.getElementById("nombre");
const apellido = document.getElementById("apellido");
const documento = document.getElementById("documento");
const indice = document.getElementById("indice");
const limpiar = document.getElementById("reset");
const titulo = document.getElementById("titulo");
let url = "https://veterinaria-backend-iang59mib-masmobile.vercel.app/duenos";
let usuarios = [];
let botonesEliminar = null;
let botonesEditar = null;

function render() {
  const usuariosRender = usuarios
    .map((usuario, indice) => {
      return (
        `<tr><td>${usuario.nombre ? usuario.nombre : "vacio"}</td>` +
        `<td>${usuario.apellido ? usuario.apellido : "vacio"}</td>` +
        `<td>${usuario.documento ? usuario.documento : "vacio"}</td>` +
        `<td><a class="button button--show" href="consultar.html?indice=${indice}" target="_blank">ver</a></td>` +
        `<td><button class="button button--edit" data-indice=${indice}>Editar</button></td>` +
        `<td><button class="button button--delete" data-indice=${indice}>Eliminar</button></td></tr>`
      );
    })
    .join("");
  listaUsuarios.innerHTML = usuariosRender;
  botonesEditar = document.getElementsByClassName("button--edit");
  botonesEliminar = document.getElementsByClassName("button--delete");
  /*convertir collection a array*/
  Array.from(botonesEditar).forEach((botonEditar) => {
    botonEditar.onclick = editarUnUsuario;
  });
  /*convertir collection a array*/
  Array.from(botonesEliminar).forEach((botonEliminar) => {
    botonEliminar.onclick = eliminarUnUsuario;
  });
}

function refrescar() {
  fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((respuestaUsuarios) => {
      usuarios = respuestaUsuarios;
      render();
    })
    .catch((error) => {
      console.log("Error", error);
    });
}

function enviarDatos(e) {
  e.preventDefault();
  const accion = e.target.innerText;
  let urlRequest = null;
  let method = null;

  if (accion === "Crear") {
    urlRequest = url;
    method = "POST";
  } else if (e.target.innerText === "Editar") {
    if (indice.value) {
      urlRequest = `${url}/${indice.value}`;
      method = "PUT";
    } else {
      return;
    }
  } else {
    return;
  }
  const datos = {
    nombre: nombre.value,
    apellido: apellido.value,
    documento: documento.value,
  };
  const options = {
    method,
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(datos),
  };

  fetch(urlRequest, options)
    .then((response) => {
      console.log("response: ", response);
      return response.json();
    })
    .then((data) => {
      console.log("Success: ", data);
      refrescar();
      restaurarBoton();
    })
    .catch((error) => {
      console.log("Error: ", error);
    });
}

function editarUnUsuario(e) {
  e.preventDefault();
  //En el evento se captura el valor del indice asociado al registro a liminar
  console.log("Indice:", e.target.dataset.indice);
  if (e.target.dataset.indice) {
    const usuario = usuarios[e.target.dataset.indice];
    nombre.value = usuario.nombre ? usuario.nombre : "";
    apellido.value = usuario.apellido ? usuario.apellido : "";
    documento.value = usuario.documento ? usuario.documento : "";
    indice.value = e.target.dataset.indice;
    boton.innerText = "Editar";
    titulo.innerText = "Editar Usuario";
    boton.classList.remove("button--create");
    boton.classList.add("button--edit");
    console.log("EDITANDO:", e);
  } else {
    titulo.innerText = "Crear usuario";
    boton.innerText = "Crear";
    boton.classList.remove("button--edit");
    boton.classList.add("button--create");
  }
}

function eliminarUnUsuario(e) {
  e.preventDefault();
  //En el evento se captura el valor del indice asociado al registro a liminar
  const urlEliminar = `${url}/${e.target.dataset.indice}`;
  const options = {
    method: "DELETE",
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
  };

  fetch(urlEliminar, options)
    .then((response) => {
      console.log("Eliminar response: ", response);
      refrescar();
    })
    .catch((error) => {
      console.log("Eliminar Error: ", error);
    });
}

function restaurarBoton() {
  boton.innerText = "Crear";
  boton.classList.remove("button--edit");
  boton.classList.add("button--create");
  nombre.value = "";
  apellido.value = "";
  documento.value = "";
}

boton.onclick = enviarDatos;
limpiar.onclick = restaurarBoton;
refrescar();
