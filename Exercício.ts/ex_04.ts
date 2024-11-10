const calcularMedia = (numeros: number[]): number => {
  const total = numeros.reduce((acc, numero) => acc + numero, 0);
  return total / numeros.length;
};
console.log(calcularMedia([2, 3, 4, 5])); 
console.log(calcularMedia([2, -3, 4.5, -5])); 
