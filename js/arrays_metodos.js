// > MÉTODOS DE ARRAYS

const arr1 = [30, 12, 45, 34, 29]
const arr2 = []

// Fatiamento: slice

console.log(arr1.slice(0, 2)) // a partir do 0, 2 elementos
console.log(arr1.slice(2)) // todos elementos a partir do 2
console.clear()

// Adicionando elementos: push | unshift

arr2.push(10, 20, 'teste', false)
arr2.push(40) // adiciona ao final
arr2.unshift(0) // adiciona no inicio
console.log(arr2)
console.clear()

// Removendo elementos: pop | shift

console.log('arr2 antes de remover: ', arr2)
arr2.pop() // remove o ultimo elemento
arr2.shift() // remove o primeiro elemento
console.log(arr2)
console.clear()

// Concatenando arrays: concat

console.log('arr1', arr1)
console.log('arr2', arr2)
console.log(arr1.concat(arr2))
console.log(arr2.concat(arr1))
console.clear()

// Buscando elementos: indexOf | lastIndexOf

console.log(arr1)
const indiceDoElemento34 = arr1.indexOf(34)
console.log(indiceDoElemento34) // caso o elemento não exista, esse método retorna -1
let arr3 = [1, 2, 3, 4, 5, 3]
console.log(arr3.indexOf(3)) // primeiro indice 
console.log(arr3.lastIndexOf(3)) // ultimo indice
console.clear()

// Descobrindo a existênmcia de um elemento: includes

console.log(arr1)
console.log(arr1.includes(10))
console.log(arr1.includes(45))
console.clear()

// Invertendo arrays: reverse

console.log('arr1 normal: ', arr1)
console.log('arr1 invertido: ', arr1.reverse())





