// par nome/valor
const saudacao = 'Opa' // contexto lexico 1

function exec() {
    const saudacao = 'Faaala' // contexto lexico 2
    return saudacao
}


// Objetos sao grupos aninhados de pares nome/valor
const cliente = {
    nome: 'pedro',
    idade: 32,
    peso: 90,
    endereco: {
        logadouro: 'Rua muito legal',
        numero: 123
    }
}

console.log(saudacao)
console.log(exec())
console.log(cliente)
