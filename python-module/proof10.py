#
"""
Desenvolva uma aplicação utilizando o framework Flet que permita ao usuário preencher um formulário de contato. 
O formulário deve incluir três campos: um campo de texto para o nome, um campo de texto para o email 
e um campo de texto para a mensagem. Após o usuário preencher esses campos, deve haver um botão de envio. 
Quando o usuário clicar no botão de envio, os dados devem ser processados e uma mensagem de confirmação deve ser exibida na tela,
indicando que o formulário foi enviado com sucesso.
"""

import flet as ft

def main(page: ft.Page):
    nome = ft.TextField(label="Nome")
    email = ft.TextField(label="E-mail")
    mensagem = ft.TextField(label="Mensagem")
    resultado = ft.Text(value="", visible=False)

    def processar_formulario(evento):
        resultado.value = f"Sucesso! Recebemos a mensagem de {nome.value}"
        resultado.visible = True

        nome.value = ""
        email.value = ""
        mensagem.value = ""

        page.update()

    botao = ft.ElevatedButton("Enviar", on_click=processar_formulario)
    page.add(nome, email, mensagem, botao, resultado)

ft.app(target=main)

