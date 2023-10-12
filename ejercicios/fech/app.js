const listaUsuarios = document.getElementById("body-usuarios");
const btnEnviarDatos = document.getElementById("btn-enviar-datos");
const nombre = document.getElementById("nombre");
const apellido = document.getElementById("apellido");
const documento = document.getElementById("documento");
const url = "https://veterinaria-backend-iang59mib-masmobile.vercel.app/duenos";
let usuarios = [];

function render() {
  const usuariosRender = usuarios
    .map(
      (usuario) =>
        `<tr><td>${usuario.nombre}</td>` +
        `<td>${usuario.apellido}</td>` +
        `<td>${usuario.documento}</td></tr>`
    )
    .join("");
  console.log(usuariosRender);
  listaUsuarios.innerHTML = usuariosRender;
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
  const datos = {
    nombre: nombre.value,
    apellido: apellido.value,
    documento: documento.value,
  };
  const options = {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(datos),
  };

  fetch(url, options)
    .then((response) => {
      console.log("response: ", response);
      return response.json();
    })
    .then((data) => {
      console.log("Success: ", data);
      refrescar();
    })
    .catch((error) => {
      console.log("Error: ", error);
    });
}

btnEnviarDatos.onclick = enviarDatos;
refrescar();
