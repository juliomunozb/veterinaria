const ejemplo1 = () => {
  return new Promise((resolve, reject) => {
    //resolve("La promesa fue resuelta");
    //reject("La promesa fue rechazada");
    setTimeout(() => {
      reject("La promesa fue rechazada");
    }, 20000);
  });
};
/*ejemplo1().then(
  (respuesta) => console.log(`Promesa aceptada: ${respuesta}`),
  (razon) => console.log(`Promesa rechazada: ${razon}`)
);*/

const ejemplo2 = () => {
  return new Promise((resolve, reject) => {
    // Returns a random integer from 1 to 100:
    const tiempoRejected = Math.floor(Math.random() * 10000) + 1000;
    const tiempoResolved = Math.floor(Math.random() * 10000) + 1000;
    setTimeout(() => {
      resolve("La promesa fue resuelta");
    }, tiempoResolved);

    setTimeout(() => {
      reject("La promesa fue rechazada");
    }, tiempoRejected);
  });
};
/*ejemplo2().then(
  (respuesta) => console.log(`Promesa aceptada: ${respuesta}`),
  (razon) => console.log(`Promesa rechazada: ${razon}`)
);*/

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

let misPromesas = [];
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
});

/*Promise.all(misPromesas)
  .then((respuesta) => {
    respuesta.forEach((promesaActual) => {
      console.log(
        `Promesa [${promesaActual.indice}] aceptada:${promesaActual.error} - ${promesaActual.message}`
      );
    });
  })
  .catch((razon) => {
    console.log(
      `Promesa [${razon.indice}] rechazada:${razon.error} - ${razon.message}`
    );
  });
*/
console.log("procesando..");
