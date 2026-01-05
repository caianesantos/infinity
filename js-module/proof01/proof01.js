/*
Crie uma calculadora simples em JavaScript que utilize os conceitos de entrada de dados, operadores aritméticos e operadores de atribuição.

Requisitos do Projeto:

Solicite ao usuário dois números utilizando o método prompt().
Realize as operações aritméticas básicas (adição, subtração, multiplicação, divisão e resto) e exiba os resultados.
Utilize operadores de atribuição (como +=, -=, *=, etc.) para atualizar/reatribuir o valor de uma variável com os resultados das operações.
Mostre os resultados no console utilizando console.log().
*/

let num1 = Number(prompt("Digite um número: "))
let num2 = Number(prompt("Digite o segundo número: "))

let result1 = num1 + num2
let result2 = num1 - num2
let result3 = num1 * num2
let result4 = num1 / num2
let result5 = num1 % num2


console.log(`A soma é: ${result1}`)
console.log(`A subtração é: ${result2}`)
console.log(`A multiplicação é: ${result3}`)
console.log(`A divisão é: ${result4}`)
console.log(`O resto é: ${result5}`)



num1 += result1
console.log(num1)

num1 -= result1
console.log(num1)

num1 *= result1
console.log(num1)

num1 /= result1
console.log(num1)

