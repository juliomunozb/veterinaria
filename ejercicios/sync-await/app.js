const fabricaDePromesas = (indice) => {
  return new Promise((resolve, reject) => {
    // Returns a random integer from 1 to 100:
    const tiempoRejected = Math.floor(Math.random() * 10000) + 1000;
    const tiempoResolved = Math.floor(Math.random() * 10000) + 1000;
    setTimeout(() => {
      resolve({
        error: true,
        indice: indice,
        message: `${indice} resuelta`,
      });
    }, tiempoResolved);

    setTimeout(() => {
      reject({
        error: false,
        indice: indice,
        message: `${indice} rechazada`,
      });
    }, tiempoRejected);
  });
};

/*let misPromesas = [];
for (let i = 0; i < 10; i++) {
  misPromesas = [...misPromesas, fabricaDePromesas(i)];
}

misPromesas.forEach((promesaActual) => {
  promesaActual
    .then((respuesta) =>
      console.log(
        `Promesa [${respuesta.indice}] aceptada:${respuesta.error} - ${respuesta.message}`
      )
    )
    .catch((razon) =>
      console.log(
        `Promesa [${razon.indice}] rechazada:${razon.error} - ${razon.message}`
      )
    );
});*/
async function miFuncionAsincrona() {
  try {
    const miPromesa = await fabricaDePromesas(1);
    console.log("Asincrona. Este es el valor de mi promesa:", { miPromesa });
  } catch (error) {
    console.log("hubo un error");
  }
}
function miFuncionSincrona() {
  const miPromesa = fabricaDePromesas(2)
    .then((response) => console.log(response))
    .catch((razon) => console.log(razon));
}
console.log("procesando..");
