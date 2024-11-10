interface Produto {
    nome: string;
    preco: number;
    disponivel: boolean;
    categoria?: string;
   }
   function filtrarDisponiveis(produtos: Produto[], categoria?: string): Produto[]{
    return produtos.filter(produto => produto.disponivel && (!categoria || produto.categoria === categoria));
   }
   const produtos: Produto[] = [
    { nome: "Teclado", preco: 100, disponivel: true, categoria: "Teclados"},
    { nome: "Mouse", preco: 50, disponivel: false, categoria: "Mouse" },
    { nome: "Monitor", preco: 300, disponivel: true , categoria:"Monitores"},
   ];
   console.log(filtrarDisponiveis(produtos));
   console.log(filtrarDisponiveis(produtos, "Mouse"));
