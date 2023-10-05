function obtenerNombre() {
  return "Juan";
}

function obtenerApellido() {
  return "Perez";
}

function obtenerNombreCompleto() {
  const nombre = obtenerNombre();
  const apellido = obtenerApellido();
  return `${nombre} ${apellido}`;
}

const nombreCompleto = obtenerNombreCompleto();
console.log(nombreCompleto);
