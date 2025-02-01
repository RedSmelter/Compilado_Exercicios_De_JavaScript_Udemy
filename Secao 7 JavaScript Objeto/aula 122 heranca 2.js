
Object.prototype.atributo0 = 'lala'


// o objeto avo não teve seu padrao de objeto mudado, então ele aponta para o __proto__
// mas podemos mudar esse padrão diretamente fazendo o esquema acima, logo,
// todos os objetos que criarmos e não mudarmos o padrão irão herdar oq definirmos acima


const avo = {
    atributo1 : 'A'
}

const pai = {
    __proto__ : avo,
    atributo2 : 'B'
}

const filho = {
    __proto__ : pai,
    atributo3 : 'C'
}

console.log(filho.atributo1)
// mesmo o filho não tendo o atributo 1, ele buscou no pai já que definimos que o __proto__
// é o objeto pai, então ele fez a busca por herança nele, mas ele tambem nao tinha
// porem o pai tambem aponta para outro objeto, ele vai buscando em todos
// o avo como não definimos o objeto prototype como outro, ele vai apontar para o padrão
// mesmo não contendo nada nele


console.log(filho.atributo0)
console.log(avo.__proto__)

const carro = {
    velAtual: 0,
    velMax: 160,

    acelerar(delta){
        if(this.velAtual + delta <= this.velMax){
            this.velAtual += delta
        }else{
            this.velAtual = this.velMax
        }
    },

    status() {
        return `${this.velAtual}Km/h de ${this.velMax}`
    }
}

const fiat = {
    modelo: 'Miller',
    velMax: 130, //shadowing (o valor que será utilizado na classe pai será esta ao invés da definida lá)
    __proto__ : carro
}

const toyota = {
    modelo: 'Corola',
    velMax: 200,

    status() {
        return `${this.modelo} --- ${super.status()}`

        /*
        Usamos o [super.método()] para chamar o método da superclasse do toyota
        superclasse do toyota é de quem ele está recebendo os metodos e atributos
        ele está apontando para a classe (carro) na linha 74, então a classe carro é
        a superclasse de toyota, quando colocamos o super ela vai chamar desta superclasse
        mesmo que tenha um metodo com o mesmo nome dentro da classe toyota.
        Neste caso isto impede que ele chame a propria classe status de toyota
        oq iria gerar uma recursividade se chamando novamente.
        */
    }
}



//Object.setPrototypeOf(fiat, carro) ---> metodo alternativo de mudar o __proto__
Object.setPrototypeOf(toyota, carro)

console.log(fiat)
console.log(toyota)

fiat.acelerar(80)
console.log(fiat.status())

console.log(toyota)
toyota.acelerar(160)
console.log(toyota.status())
