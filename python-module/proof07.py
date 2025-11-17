#Módulos e Bibliotecas
"""
Crie uma função chamada lancar_dados que utilizará o módulo random para simular o lançamento de dois dados. 
Cada dado deve gerar um número aleatório entre 1 e 6. 
A função deve somar os resultados desses dois lançamentos e retornar o valor total.
"""

import random

def lancar_dados():
    dado1 = random.randint(1,6)
    print(f"1° dado gerado: {dado1}")
    dado2 = random.randint(1,6)
    print(f"2° dado gerado: {dado2}")
    soma = dado1 + dado2
    print(f"{dado1} + {dado2} = {soma}")   
    return soma

lancar_dados()