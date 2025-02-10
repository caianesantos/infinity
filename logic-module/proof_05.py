# Introdução à inteligência artificial

"""
Desenvolva um programa em Python para calcular a média de notas de alunos em uma disciplina. 
O programa deve solicitar ao usuário o número de alunos e, em seguida, para cada aluno, pedir o nome e três notas. 
Utilize um loop 'for' para iterar sobre os alunos e suas notas.

Além disso, implemente uma estrutura condicional para verificar se cada aluno foi aprovado ou reprovado, considerando que a média mínima para aprovação é 7.0. 
Exiba o nome do aluno, suas notas, média e a indicação de aprovação ou reprovação.

Ao final, exiba a média geral da turma.
"""

# Pegue o número de alunos que será inserido
num_alunos = int(input("Informe a quantidade de alunos: "))

# Variáveis para armazenar os dados
soma_turma = 0

# Loop para cada aluno
for i in range(num_alunos):
    nome = input(f"Informe o nome do {i+1}º aluno: ")
    
    # Inicializa a soma das notas do aluno
    soma_notas = 0
    
    # Pega 3 notas do aluno
    for j in range(3):
        nota = float(input(f"Informe a {j+1}ª nota do aluno {nome}: "))
        soma_notas += nota
    
    # Calcula a média individual do aluno
    media_aluno = soma_notas / 3
    soma_turma += media_aluno  # Acumula a média do aluno para a média da turma
    
    # Verifica se o aluno está aprovado ou reprovado
    if media_aluno >= 7:
        print(f"{nome} está APROVADO com média {media_aluno:.2f}")
    else:
        print(f"{nome} está REPROVADO com média {media_aluno:.2f}")

# Calcula a média da turma
media_turma = soma_turma / num_alunos
print(f"\nMédia da turma: {media_turma:.2f}")