# Estrutura de repetição (while)

"""
Você está criando um programa em Python para simular um jogo simples de adivinhação. O programa deve ter um número fixo, por exemplo, 7, que o jogador deve adivinhar. O jogador terá até 3 tentativas para acertar o número.
Implemente o jogo utilizando um loop while para permitir que o jogador faça múltiplas tentativas até acertar ou atingir o limite de tentativas. Utilize a estrutura else para exibir uma mensagem de encorajamento caso o jogador acerte e uma mensagem de consolo caso as 3 tentativas se esgotem sem sucesso.
"""

numero_correto = 7

acumulador_tentativas = 0

while True:
    palpite = int(input("Digite um número: "))
    acumulador_tentativas += 1
    
    if palpite == numero_correto:
        print("Parabéns, você acertou!")
        break
    
    else:
        print("Infelizmente você errou. Tente novamente!") 

    if acumulador_tentativas == 3:    
        print("Suas tentativas acabaram!")
        break
