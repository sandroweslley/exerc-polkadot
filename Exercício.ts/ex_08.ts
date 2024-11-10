enum DiasSemana {
  Segunda = "Segunda-feira",
  Terca = "Terça-feira",
  Quarta = "Quarta-feira",
  Quinta = "Quinta-feira",
  Sexta = "Sexta-feira",
  Sabado = "Sábado",
  Domingo = "Domingo",
  Natal = "Natal",
  AnoNovo = "Ano Novo",
  Independencia = "Dia da Independência"
}

function ehDiaEspecial(dia: DiasSemana): boolean {
  return (
    dia === DiasSemana.Sabado ||
    dia === DiasSemana.Domingo ||
    dia === DiasSemana.Natal ||
    dia === DiasSemana.AnoNovo ||
    dia === DiasSemana.Independencia
  );
}

console.log(ehDiaEspecial(DiasSemana.Domingo));    
console.log(ehDiaEspecial(DiasSemana.quinta)); 
console.log(ehDiaEspecial(DiasSemana.natal)); 
console.log(ehDiaEspecial(DiasSemana.independencia)); 
