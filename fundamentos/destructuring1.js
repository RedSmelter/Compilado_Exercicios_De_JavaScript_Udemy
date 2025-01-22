const pessoa = {
    nome: 'Ana',
    idade: 5,
    enderecos: {
        logadouro: 'Rua abc',
        numero: 1000
    }
    
}

const { nome, idade } = pessoa
console.log(nome, idade)

const { nome: n, idade: i} = pessoa
console.log(n, i)

const { sobrenome, bemHumorada = true} = pessoa
console.log(sobrenome, bemHumorada)

const {enderecos: { logadouro, numero, cep}} = pessoa
console.log(logadouro, numero, cep)




