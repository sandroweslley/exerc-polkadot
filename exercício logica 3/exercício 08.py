num = int(input("digite um número para ver a sequencia de Fibonacci: "))
num2 = 0 
num3 = 1

for i in range(num):
    print(num2,num3,end=" ")
    num2 = num2 + num3
    num3 = num2 + num3
