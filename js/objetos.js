// > OBJETOS

// Criando um objeto

let pessoa = {
    nome: 'Camila',  // se for uma chave de nome composto, é preciso colocar entre aspas, ex: 'nome-da-pessoa'
    idade: 25
}
console.log(pessoa)
console.log(pessoa.nome) // outra forma: pessoa['nome']
console.log(pessoa.idade) // pessoa['idade']
console.clear()

// Adicionando um par chave-valor

pessoa.altura = 1.57
console.log(pessoa)

// Removendo um par chave-valor

delete pessoa.altura
console.log(pessoa)
console.clear()

// Percorrendo objetos

for (let chave in pessoa) {
    console.log(chave)
}