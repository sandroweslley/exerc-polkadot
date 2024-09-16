 frase = input("digite uma frase")

 vogais = ("aeiouAEIOU")
 contador = 0
for letra in frase:
  if letra in vogais:
    contador +=1
print("há", contador,"vogais na frase")
