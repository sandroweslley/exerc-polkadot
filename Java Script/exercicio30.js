const listaNumeros = [1, 2, 3, 4, 5,];

const quantosImpares = (lista) => {
  let c = 0;
  for (let i = 0; i < lista.length; i++) {
    if (lista[i] % 2 !== 0) {
      c += 1;
    }
  }
  return c;
};
