function filtrarPrecosAltos(precos: number[], corte: number = 100, mapeamento?: (preco: number) => number): number[] {
  let precosFiltrados = precos.filter(preco => preco > corte);
  if (mapeamento) {
    precosFiltrados = precosFiltrados.map(mapeamento);
  }
  return precosFiltrados;
}

console.log(filtrarPrecosAltos([50, 150, 200, 30])); 
console.log(filtrarPrecosAltos([50, 150, 200, 30], 150)); 
console.log(filtrarPrecosAltos([50, 150, 200, 30], 100, preco => preco * 1.1)); 
