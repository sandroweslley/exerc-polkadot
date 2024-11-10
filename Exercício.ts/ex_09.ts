wfunction reverterArray<T>(
  items: T[],
  filtro?: (item: T) => boolean,
  mapa?: (item: T) => T
): T[] {
  if (filtro) {
    items = items.filter(filtro);
  }
  if (mapa) {
    items = items.map(mapa);
  }
  return items.reverse();
}

console.log(reverterArray([1, 2, 3]));                      
console.log(reverterArray(["a", "b", "c"]));                
console.log(reverterArray([1, 2, 3, 4, 5], x => x > 2));     
console.log(reverterArray([1, 2, 3, 4, 5], undefined, x => x * 2));
