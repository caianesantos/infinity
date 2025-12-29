#Interface Grafica Flet I
"""
 Desenvolva uma aplicação utilizando o framework Flet que permita ao usuário adicionar itens a uma lista de tarefas. 
 A interface da aplicação deve incluir um campo de entrada de texto para o usuário digitar o nome da tarefa 
 e um botão para adicionar a tarefa à lista. Quando o usuário clicar no botão, 
 o item deve ser adicionado a uma lista exibida na tela, mostrando todas as tarefas que foram incluídas até o momento. 
 A lista de tarefas deve ser atualizada dinamicamente sempre que um novo item for adicionado.
"""
import flet as ft

def main(page: ft.Page):
    tarefa = ft.TextField(hint_text="Digite um item")
    lista_tarefas = ft.Column()

    def adicionar(e):
        novo_item = ft.Text(value=tarefa.value)
        lista_tarefas.controls.append(novo_item)
        tarefa.value= ""
        page.update()

    btn_adicionar = ft.ElevatedButton("Adicionar", on_click=adicionar)
    page.add(tarefa, btn_adicionar, lista_tarefas)

ft.app(target=main)