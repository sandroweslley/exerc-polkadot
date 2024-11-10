const buscarDados = (tempo: number): Promise<string> =>{
  return new Promise(resolve => {
    setTimeout(() => resolve(`Dados carregados em ${tempo}ms`), tempo);
  });
}

const exibirDados = async (tempo: number) => {
  const dados = await buscarDados(tempo);
  console.log(dados);
}

exibirDados(20000);
exibirDados(100);
