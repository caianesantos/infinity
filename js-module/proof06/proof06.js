/*
Crie um programa que utiliza funções anônimas, arrow functions e funções de callback para gerenciar e processar uma lista de tarefas.
Requisitos do Projeto:
* Criação de Funções Anônimas:
 - Use uma função anônima para adicionar tarefas a uma lista. A função deve ser atribuída a uma variável e permitir adicionar uma nova tarefa ao array de tarefas.

* Uso de Arrow Functions:
 - Implemente uma arrow function para listar todas as tarefas, exibindo cada tarefa com seu índice no console.

* Funções de Callback:
 - Crie uma função que receba outra função como callback. Essa função deve permitir executar diferentes operações com a lista de tarefas, como:
 - Remover uma tarefa.
 - Atualizar uma tarefa.
 - Concluir uma tarefa.

* Interação com o Usuário:
 - Utilize métodos como prompt() para receber ações do usuário e exiba os resultados no console usando console.log(). 
*/
let tarefas = ['estudar js']
const adicionarTarefa = function(tarefa = prompt("Digite uma nova tarefa: ")){
    tarefas.push(tarefa)
}

const listarTarefas = (tarefas) => {
    tarefas.forEach((tarefa, indice) =>{
        console.log(`${indice}: ${tarefa}`);
    })
}

const processarTarefa = (id, callback) =>{
    callback(id);
}

const removerTarefa = (id) =>{
    tarefas.splice(id, 1)
}

const atualizarTarefa = (id) =>{
    let novaDescricao = prompt("Digite o novo nome da tarefa:");
    tarefas[id] = novaDescricao; 
    console.log("Tarefa atualizada com sucesso!");
}

const concluirTarefa = (id) =>{
    tarefas[id] = "✅ " + tarefas[id]
}


while (true){
    let opcao = prompt("Escolha uma opção: 1- adicionar; 2- listar;  3- remover; 4- atualizar; 5- concluir; 6- sair ")

    if (opcao === "1"){
        adicionarTarefa()
    }

    else if (opcao === "2"){
        listarTarefas(tarefas)
    }

    else if (opcao === "3"){
        let indice = prompt("Qual o número da tarefa?: ")
        processarTarefa(indice, removerTarefa)
    }

    else if (opcao === "4"){
        let indice = prompt("Qual o número da tarefa?: ")
        processarTarefa(indice, atualizarTarefa)
    }

    else if (opcao === "5"){
        let indice = prompt("Qual o número da tarefa?: ")
        processarTarefa(indice, concluirTarefa)
    }
    else if (opcao == "6"){
        break;
    }    
}