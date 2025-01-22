function criarProduto(nomeEnviado, preco) {
    return{
        nome: nomeEnviado,
        preco: preco,
        desconto: 0.1
    }
}

console.log(criarProduto('Bola', 30))
console.log(criarProduto('Casaco', 55))