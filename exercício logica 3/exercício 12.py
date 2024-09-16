import random 

print("esse é um jogo de adivinhação")

sorte = 0

numero = random.randint(1,10)

while sorte != numero:
          sorte = int(input("tente adivinhar qual é o número. Digite um número de 1 a 100:"))


          if sorte == numero:
              print(f"Parabéns, você acertou! O numero é o", numero)
          else:
              print("você errou, tente novamente! Você consegue")
