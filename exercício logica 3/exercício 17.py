n = int(input("digite um número: "))
d = 1
soma = 0
while d <= 1/2:
  if n % d == 0:
     soma += d
     d += 1
if n == soma :
  print(f"{n} é perfeito")
else :
  print(f"{n} não é perfeito") 
