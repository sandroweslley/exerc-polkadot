lista = []
i = 0

while i != -1:
    a = int(input("Digite um número para colocar na lista(ou -1 para sair) "))
    i = a
    if a != -1:
        lista.append(a)

menor = min(lista)
maior = max(lista)
soma = sum(lista)
quantidade = len(lista)

media = soma / quantidade

print(f"O menor número da lista é o: {menor} o maior é o :{maior} A média dos números: {media}")
