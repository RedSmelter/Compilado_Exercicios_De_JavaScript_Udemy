//Armazenando uma função em uma variável
const imprimirSoma= function (a, b) {
    console.log(a + b)
}

imprimirSoma(2, 4)

// Armazenando uma função arrow em uma variavel
const soma = (a,b) => {
    return a + b
}

console.log(soma(4,4))

// retorno implicito
const subtracao = (a,b) => a - b
console.log(subtracao(10, 9))


