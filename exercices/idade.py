# Peça a idade do usuário com base na idade fornecida, 
# o programa deve classificar a pessoa em uma das seguintes categorias:
# Se a idade for menor que 12 anos, imprimir "Criança".
# Se a idade estiver entre 12 e 17 anos (inclusive), imprimir "Adolescente".
# Se a idade estiver entre 18 e 59 anos (inclusive), imprimir "Adulto".
# Se a idade for igual ou superior a 60 anos, imprimir "Idoso".

idade = float(input('Digite a sua idade: '))

if idade <= 12:
    print("Criança")

elif idade >= 12 and idade <= 17:
    print("Adolescente")

elif idade >= 18 and idade <=59:
    print("Adulto")

else:
    print("Idoso")