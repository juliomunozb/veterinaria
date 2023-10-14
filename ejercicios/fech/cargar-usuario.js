const listaUsuario = document.getElementById("body-usuario");
let url = "https://veterinaria-backend-iang59mib-masmobile.vercel.app/duenos";
let usuario = {};

function tomarIndiceUsuario() {
  return location.search.replace("?", "").split("=")[1];
}

function render() {
  const usuariosRender =
    `<tr><td class="table__body--td">Nombre</td><td>${
      usuario.nombre ? usuario.nombre : "vacio"
    }</td></tr>` +
    `<tr><td class="table__body--td">Apellido</td><td>${
      usuario.apellido ? usuario.apellido : "vacio"
    }</td></tr>` +
    `<tr><td class="table__body--td">Documento</td><td>${
      usuario.documento ? usuario.documento : "vacio"
    }</td></tr>`;

  listaUsuario.innerHTML = usuariosRender;
}

function obtenerUsuario() {
  const urlRequest = `${url}/${tomarIndiceUsuario()}`;
  fetch(urlRequest)
    .then((response) => {
      return response.json();
    })
    .then((respuestaUsuario) => {
      usuario = respuestaUsuario;
      render();
    })
    .catch((error) => {
      console.log("Error", error);
    });
}
obtenerUsuario();
tomarIndiceUsuario();
