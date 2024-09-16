def converter_temperatura(celsius):
   fahrenheit = (c*9/5 + 32)
   kelvin = celsius + 273.15
   return fahrenheit, kelvin

   temperatura_celsius= float(input("Digite a temperatura atual em celsius:"))

   temperatura_fahrenheit, temperatura_kelvin = converter_temperatura(temperatura_celsius)

   print(temperatura_celsius, "°C é equivalente a",temperatura_fahrenheit, "e",temperatura_kelvin,"°F" )
