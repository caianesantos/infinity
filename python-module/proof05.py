#Funções 2
"""
Crie uma função chamada maior_numero que receberá três números como argumentos.
Esta função deve comparar os três números e identificar qual deles é o maior.
Para isso, utilize uma estrutura de controle que verifique qual número é maior que os outros dois.
A função deve então retornar o maior número encontrado.
"""
def maior_numero(a,b,c):
    while True:
        if a >= b and a >= c:
            return a
        elif b >= a and b >= c:
           return b
        else:
            return c

            
num1 = int(input("Digite o 1° número: "))
num2 = int(input("Digite o 2° número: "))
num3 = int(input("Digite o 3° número: "))

resultado = maior_numero(num1, num2, num3)   

print(f"O maior número é o {resultado}")