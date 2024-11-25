"""
Crie um programa em Python que simule um sistema de login.

O programa deve permitir ao usuário três tentativas para acertar o nome de usuário e a senha corretos.
Caso o usuário erre as credenciais, o programa deve fornecer uma mensagem informando quantas tentativas restam.
Se o usuário acertar, uma mensagem de boas-vindas deve ser exibida, e o programa deve terminar imediatamente.

Se todas as três tentativas falharem, o programa deve usar um loop for para exibir uma mensagem de "Acesso bloqueado"
repetida três vezes.
"""

#cadastro de usuário + senha com input
#contador de tentativas em 0
# loop 

cadastro_usuario = input("Cadastre um usuário: ")
cadastro_senha = input("Cadastre uma senha: ")

tentativas = 3

while tentativas > 0:
    usuario = input("Digite seu nome de usuário: ")
    senha = input("Digite sua senha: ")

    if usuario != cadastro_usuario or senha != cadastro_senha:
        tentativas -= 1
        if tentativas > 0:
            print(f"Usuário ou senha incorretos. Tente novamente! Você ainda tem {tentativas} tentativas.")
        else:
            for i in range (3):
                print("Acesso Bloqueado!")
                
    else:
        print("Bem-vindo!")
        break 

