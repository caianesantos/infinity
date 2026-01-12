/*
Crie um programa em JavaScript que gerencie uma lista de nomes utilizando diversos métodos auxiliares de arrays para realizar operações como adicionar, 
filtrar, encontrar e transformar os dados.

Requisitos do Projeto:
* Adicionar Nomes:
 - Permita ao usuário adicionar nomes à lista utilizando o método push().
 - Exiba a lista atualizada no console.

* Filtrar Nomes:
- Use o método filter() para criar uma nova lista contendo apenas os nomes que começam com uma letra específica fornecida pelo usuário.
 - Exiba os nomes filtrados no console.

* Buscar um Nome Específico:
- Use o método find() para localizar o primeiro nome na lista que corresponde exatamente a um valor fornecido pelo usuário.
 - Exiba o resultado no console ou uma mensagem informando que o nome não foi encontrado.

* Transformar Nomes:
- Utilize o método map() para transformar todos os nomes da lista em letras maiúsculas.
 - Exiba a nova lista no console.

* Verificar Condições:
 - Use o método every() para verificar se todos os nomes têm mais de três caracteres.
 - Exiba a resposta (true ou false) no console.

* Interação Contínua: 
 - Implemente um loop while para permitir que o usuário escolha realizar várias operações consecutivas (adicionar, filtrar, buscar, transformar ou verificar).
*/

const nomes = []

function adicionarNome(){
    nome = prompt("Digite um nome: ")
    nomes.push(nome)
    console.log(nomes)
}

function filtrarNomes(){
    const inicial = prompt("Digite a inicial dos nome que gostaria de pesquisar: ")
    const nomesFiltrados = nomes.filter(nome => nome.startsWith(inicial))
    console.log(nomesFiltrados)
}

function procurarNome(){
    const nomeProcurado = prompt("Digite o nome que está buscando: ")
    const usuarioEncontrado = nomes.find(nomes =>{
        return nomes.toLowerCase() === nomeProcurado.trim().toLowerCase()
    });
    if (usuarioEncontrado){
        console.log(`Usuário encontrado: Nome: ${usuarioEncontrado}`)
    }

}


while(true){
    let opcao = prompt(`
    ESCOLHA UMA OPÇÃO:
        1. Adicionar nome
        2. Filtrar nome
        3. Procurar nome
        4. Transformar nome
        5. Verificar nome
        6. Sair
    `)
     if(opcao == "1"){
        adicionarNome()
    }
    else if (opcao == "2"){
        filtrarNomes()
    }
    else if (opcao == "3"){
        procurarNome()
    }
    else if (opcao == "4"){
        const novoNome = nomes.map(nomes => nomes.toUpperCase());
        console.log(novoNome)
    }   
    else if (opcao == "5"){
        const caracteresNomes = nomes.every(nome => nome.length > 3);
        console.log(caracteresNomes)
    }   
    else if (opcao == "6"){
        break;
    }    

}