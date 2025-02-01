const pai = { nome: 'Rodolfo', corCabelo: 'Preto'}


const filha1 = Object.create(pai)

/* quando usamos a função object.create(objeto) ele irá criar um objeto com o nome
   filha1 já com todos os atributos e métodos definidos no objeto que passamos, que foi
   o objeto (pai) então ela terá a mesma estrutura que o pai
*/
filha1.nome = 'Ana'

console.log(filha1.nome, filha1.corCabelo)


const filha2 = Object.create(
    pai, 
    {   nome: { value: 'Bia', writable: false, enumerable: true},
        idade: { value: 21, writable: true, enumerable: true}
    }
)

const filha3 = Object.create(filha2)

/*aqui eu já passei o pai como estrutura para filha2 e modifiquei um atributo já herdado
além de adicionar um novo na estrutura do objeto (idade)

*/
console.log(`${filha2.nome} tem cabelo ${filha2.corCabelo} e tem ${filha2.idade}anos`)
console.log(filha3.idade)
filha3.idade = 25
console.log(filha3.idade)