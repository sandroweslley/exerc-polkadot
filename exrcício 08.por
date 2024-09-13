programa {
  funcao inicio() {
    // declara uma variavel inteira para armazenar o ano
    inteiro ano
    // solicita ao usuario para digitar um ano
    escreva("digite um ano: ")
    // le o valor inserido pelo usuario e armazena na variavel 'ano'
    leia(ano)
    // verifica se o ano é bissexto usando a logica correta
    se (ano % 4 == 0)
    se (ano % 100 == 0)
    se (ano % 400 == 0)
    escreva("0 ano é bissexto")
    senao 
    escreva("o ano não é bissexto")
    senao
    escreva("o ano é bissexto")
    senao
    escreva("o ano não é bissexto")

    

  }
}
