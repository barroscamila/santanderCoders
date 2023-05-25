// ---> ARRAYS

const input = require('readline-sync')

let arr = ['Camila', 22, 1.77, true]

// console.log(typeof arr) // objeto

console.log('Primeiro elemento: ', arr[0])
console.log('Segundo elemento: ', arr[1])
console.log('Terceiro elemento: ', arr[2])
console.log('Quarto elemento: ', arr[3])

// tamanho do array
console.log('Tamanho do array: ', arr.length)

// Percorrendo o array
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i])
}

// Outra forma de percorrer arrays: for of
for (let elemento of arr) {
    console.log(elemento)
}

console.clear()

// Percorrer os índices do array: for in
for (let indice in arr) {
    console.log(indice)
}



