#Revisão Geral II
"""
Importe o módulo 'os' e use a função 'listdir' para listar todos os arquivos e pastas presentes no diretório
onde o script Python está sendo executado. 
A função 'listdir' retornará uma lista contendo os nomes dos arquivos e pastas. 
Após obter essa lista, exiba cada item da lista individualmente na saída do console.
"""

import os 

try:
    lista = os.listdir()
    print("Arquivos e pastas encontrados no diretório: ")
    for item in lista:
        print(item)

except FileNotFoundError:
    print("Erro: O diretório não foi encontrado.")

except PermissionError:
    print("Erro: Sem permissão para ler o diretório.")