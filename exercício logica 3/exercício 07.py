soma = 0
contador = 0

while True:
    nota = float(input("Digite uma nota (ou -1 para sair): "))

    if nota == -1:
        break
    soma += nota
    contador += 1

if contador > 0:
    media = soma / contador
    print("A média das notas digitadas é:", media)
else:
    print("Nenhuma nota foi digitada.")
