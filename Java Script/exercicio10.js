let vogais = "aeiouAEIOU"

function contagemvogais(str) {
    let contagem = 0
    for(let i = 0; i < srt.length; i++) {
        if(vogais.includes(srt[i])) {
            contagem += 1;
        }
    }
    return comtagem;
}

console.log('aparecem ${comtagemvogais("ola")} vogais na sua frase.')
