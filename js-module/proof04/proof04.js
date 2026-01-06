/*
Crie um programa em JavaScript que permita ao usuário gerenciar uma lista de compras utilizando arrays. 
O programa deve permitir a adição de itens, a remoção de itens e a exibição de todos os itens da lista.

Requisitos do Projeto:
* Adicionar Itens:
 - Utilize o método push() para permitir que o usuário adicione novos itens à lista de compras.

* Remover Itens:
 - Permita que o usuário remova um item específico utilizando o método splice().
 - O programa deve solicitar o índice do item a ser removido.

* Exibir Lista:
 - Use um loop for...of para percorrer e exibir os itens da lista. Cada item deve ser mostrado com seu respectivo índice.

* Atualizar Itens:
 - Permita que o usuário atualize um item da lista ao fornecer o índice e o novo valor.
*/

let lista = []
while(true){
    let opcao = prompt(`
    ESCOLHA UMA OPÇÃO:
        1. Adicionar item
        2. Remover item
        3. Listar itens
        4. Atualizar item
        5. Sair
    `)
    if(opcao == "1"){
        let item = prompt("Digite um item: ")
        lista.push(item)
    }
    else if (opcao == "2"){
        let removerItem = Number(prompt("Informe o índice do item a ser removido: "))
        lista.splice(removerItem, 1)
    }
    else if (opcao == "3"){
        let i = 0
        for (item of lista){
            alert(`${i}: ${item}`)
            i++
        }
    }
    else if (opcao == "4"){
        let atualizar = Number(prompt("Informe o índice do item a ser atualizado: "))
        let novoValor = prompt("informe o novo valor a ser adicionado: ")
        lista[atualizar] = novoValor
    }
    else if (opcao == "5"){
        break;
    }
}




