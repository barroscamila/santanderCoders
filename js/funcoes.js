// > FUNÇÕES

function saudacao() {
    console.log('Olá, seja bem-vindo(a) ao nosso curso de JavaScript!')
}
saudacao()
console.clear()

// Enviando parâmetros para as funções

function saudacao(nome, curso='JavaScript') {
console.log(`Olá, ${nome}! Seja bem-vindo(a) ao nosso curso de ${curso}!`)
}
saudacao('Camila')
console.clear()

// Retorno da função

function soma(n1, n2) {
    return n1 + n2 // O return encerra a função
}
console.log(soma(10, 20))
console.clear()

function maiorDoQue50(n) {
    if (n > 50) {
        return true
    } else {
        return false
    }
}
console.log(maiorDoQue50(51))