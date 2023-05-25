// > LAÇO NUMÉRICO: FOR

const input = require('readline-sync')

/*
const nota1 = Number(input.question('Informe a nota 1: '))
const nota2 = Number(input.question('Informe a nota 2: '))
const nota3 = Number(input.question('Informe a nota 3: '))
*/

let nota
let soma = 0

for (let i = 1; i <= 3 ; i++) {
    nota = Number(input.question(`Informe a nota ${i}: `))

    soma += nota
}

console.log(`A média das notas é: ${soma / 3}.`)