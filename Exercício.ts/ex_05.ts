class Animal {
    nome: string;
    som: string;
  
    constructor(nome: string, som: string) {
      this.nome = nome;
      this.som = som;
    }
  
    emitirSom(): string {
      return `${this.nome} faz ${this.som}`;
    }
  }
  
  class Cachorro extends Animal {
  raca: string;
  
  constructor(nome: string, som: string, raca: string) {
      super(nome, som);
      this.raca = raca;
    }
    latirForte(): string {
      const somForte = this.som.toUpperCase() + "!";
      return `${this.nome} da raça ${this.raca} faz ${somForte}`;
    }
  }
  
  const rex = new Cachorro("Rex", "au au", "Labrador");
  console.log(rex.emitirSom());
  console.log(`Raça: ${rex.raca}`);
  console.log(rex.latirForte());
  
}
