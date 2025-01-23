const pessoa = {
    nome : 'Rebeca',
    idade : 2,
    peso: 13
}

console.log(Object.keys(pessoa))
console.log(Object.values(pessoa))
console.log(Object.entries(pessoa))



Object.defineProperty(pessoa, 'dataDeNascimento',{
    enumerable: true, // Se poderá ser listada nos comandos acima ( keys,values...)
    writeable: false, // Se poderá ser modificado ou não
    value : '01/01/2025'
})

console.log(pessoa)
console.log(Object.keys(pessoa))
