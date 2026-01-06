/*
 Crie um programa em que permita ao usuário gerenciar uma lista de tarefas usando arrays e loops.
 O programa deve oferecer as opções de adicionar, remover, listar e concluir tarefas, enquanto manipula o array de tarefas e utiliza loops para percorrê-lo.

Requisitos do Projeto:
* Adicionar Tarefas:
 - Solicite ao usuário o nome de uma tarefa e adicione-a ao final do array usando o método push().

* Listar Tarefas:
 - Use um loop for ou for...of para percorrer o array de tarefas e exibi-las com seus índices.

* Remover Tarefas:
 - Solicite ao usuário o índice da tarefa que deseja remover e utilize o método splice() para removê-la do array.

* Concluir Tarefas (Opcional):
- Peça ao usuário o índice de uma tarefa e marque-a como concluída, modificando a string para algo como "✅ Lavar a louça".

* Interação Contínua:
 - Utilize um loop while para continuar solicitando ações do usuário (adicionar, listar, remover, concluir) até que ele escolha sair.

*/

let tarefas = []

while(true){
    let opcao = prompt(`
    ESCOLHA UMA OPÇÃO:
        1. Adicionar tarefa
        2. Listar tarefas
        3. Remover tarefa
        4. Concluir tarefa
        5. Sair
    `)
    if(opcao == "1"){
        let tarefa = prompt("Digite uma tarefa: ")
        tarefas.push(tarefa)
    }
        else if (opcao == "2"){
        let texto = "";
        let i = 0
        for (tarefa of tarefas){
            texto += `${i}: ${tarefa}\n`;
            i++;
        }
        alert(texto);
    }
     else if (opcao == "3"){
        let removerTarefa = Number(prompt("Informe o índice da tarefa a ser removido: "))
        tarefas.splice(removerTarefa, 1)
    }
    else if (opcao == "4"){
        let atualizar = Number(prompt("Informe o índice da tarefa a ser concluída: "))
        tarefas[atualizar] = `✅ ${tarefas[atualizar]}`
    }
    else if (opcao == "5"){
        break;
    }    
}