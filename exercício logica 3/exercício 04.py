def eh_palindromo(texto):
 texto = texto.replace(" "," ").lower()
 return texto == texto[::-1]
entrada=input("Digite uma palavra ou uma frase:")
if eh_palindromo(entrada):
 print(f'"{entrada}" é um palíndromo')
else:
 print(f'"{entrada}" não é um palíndromo')
