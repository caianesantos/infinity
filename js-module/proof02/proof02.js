/*
Crie um sistema em JavaScript que utilize os conceitos de operadores ternários, estruturas switch e operadores lógicos para classificar 
e exibir mensagens baseadas na idade e no status do usuário.

Requisitos do Projeto:

* Solicite ao usuário a idade e o status de registro (registrado ou não registrado) utilizando prompt().

* Use um operador ternário para determinar se o usuário é maior de idade ou menor de idade.

* Utilize uma estrutura switch para exibir uma mensagem personalizada com base no status do usuário:

- "registrado": Exibir mensagem de boas-vindas.
- "não registrado": Exibir mensagem para completar o registro.
- Qualquer outro valor: Exibir "Status desconhecido."
- Adicione uma lógica com operadores lógicos para verificar:
- Se o usuário é maior de idade e registrado, exiba uma mensagem de acesso completo.
- Se o usuário é menor de idade ou não registrado, exiba uma mensagem de acesso limitado.
*/

let idade = Number(prompt("Digite a idade do registro: "))
let status = prompt("Digite o status do registro (ex.: registrado/ não registrado): ")

const nivel = (idade >= 18) ? 'maior de idade' : 'menor de idade';

switch(status){
    case 'registrado':
        console.log("Seja bem vindo(a)!")
        break;
    case 'não registrado':
       console.log( "Por favor, complete seu registro.")
        break;
    default:
        console.log("Status desconhecido.")
}

if (idade >= 18 && status == 'registrado'){
    console.log("Acesso completo!")
}
else{
    console.log("Acesso limitado!")
}
