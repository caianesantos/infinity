# Listas e tuplas
"""
Crie uma lista contendo seis frutas de sua escolha. Depois de ter a lista pronta, converta essa lista em uma tupla. 
Por fim, exiba o conteúdo da tupla resultante para verificar as frutas que foram armazenadas.
"""

frutas = ["maçã", "banana", "abacaxi", "pêra", "uva", "morango"] #criando lista
print(frutas) #exibindo lista
print(type(frutas)) #exibindo classe

frutas = tuple(frutas) #convertendo lista em tupla
print(frutas) #exibindo tupla
print(type(frutas)) #exibindo classe convertida
