const listaUsuarios = document.getElementById("lista-usuarios");
const btnEnviarDatos = document.getElementById("btn-enviar-datos");

function regListener() {
  const usuarios = JSON.parse(this.responseText);
  console.log(usuarios);
  const usuariosRender = usuarios
    .map(
      (usuario) =>
        `<li>${usuario.nombre} - ${usuario.apellido} - ${usuario.documento}</li>`
    )
    .join("");
  console.log(usuariosRender);
  listaUsuarios.innerHTML = usuariosRender;
}

var peticion = new XMLHttpRequest();
peticion.addEventListener("load", regListener);

function refrescar() {
  peticion.open(
    "GET",
    "https://veterinaria-backend-iang59mib-masmobile.vercel.app/duenos"
  );
  peticion.send();
}

function enviarDatos() {
  const datos = {
    nombre: "Olga",
    apellido: "Ordoñez",
    documento: "159741",
  };
  peticion.open(
    "POST",
    "https://veterinaria-backend-iang59mib-masmobile.vercel.app/duenos",
    true
  );
  peticion.setRequestHeader("Content-Type", "application/json");
  peticion.send(JSON.stringify(datos));
  setTimeout(refrescar, 3000);
}

btnEnviarDatos.onclick = enviarDatos;
