const produto = Object.preventExtensions(
    {
        nome: 'qualquer',
        preco: 1.99,
        tag: 'promocao'
    }
)

console.log('Extensivel: ', Object.isExtensible(produto))

/* quando usamos o preventExtensions, o objeto não aceita que sejam adicionados novos
atributos ou metodos, mas é possivel modificar os valores de atributos existentes
e é possivel excluir coisas

*/

const pessoa = { nome: 'Juliana', idade: 35}
Object.seal(pessoa)

console.log('Selado: ', Object.isSealed(pessoa))

/* já o object.seal não permite que sejam excluidos nem adicionados novos atributos/
metodos, apenas modificar os existentes
*/