# Estrutura de repetição (for)

"""
Você está desenvolvendo um programa em Python para calcular a soma dos números pares dentro de um intervalo determinado pelo usuário. 
O programa deve solicitar ao usuário que insira dois números inteiros, representando o início e o fim do intervalo (inclusive).

Utilize um loop 'for' para iterar sobre todos os números no intervalo e somar apenas os números pares. 
Implemente a estrutura 'else' para exibir uma mensagem indicando que não há números pares no intervalo, caso seja o caso.

Ao final, exiba a soma dos números pares encontrados.
"""

numero1 = int(input("Digite um número inteiro para o início: "))
numero2 = int(input("Digite um número inteiro para o fim: "))

soma = 0
par = False

for numero in range (numero1, numero2 + 1):
    print(numero)
        
    if numero % 2 == 0:
        soma += numero
        par = True

if par:
    print(f"A soma dos números pares é = {soma}")

else:
    print("Não existem números pares no intervalo.")

