const fiat = {
    modelo: 'Miller',
    velMax: 120
}

const moto = {
    modelo: 'harley',
    velMax: 260,
}

const automovel = {
    
    marcha : 0,

    subirMarcha : function() {
        if(this.marcha <= 5){
            this.marcha += 1,
            console.log('Subindo marcha!')
        }else{
            console.log('marcha maxima')
        }
    },

    descerMarcha : function() {
        if(this.marcha > 0){
            this.marcha -= 1,
            console.log('Descendo marcha!')
        }else{
            console.log('marcha minima')
        }
    }


}



console.log(fiat.modelo)
console.log(Object.keys (fiat))
console.log(Object.entries (moto))



console.log(fiat.__proto__)
console.log(moto.__proto__ === Object.prototype) 
// todos os objetos apontam para um object.prototype, podendo fazer esquema de herança com ele
// podemos também definir diretamente que ele aponta para algum objeto que criamos 
// para ele conseguir herdar os parametros e métodos deste objeto

Object.setPrototypeOf(moto, automovel) // fazendo o objeto moto hedar os metodos e atributos do objeto automovel

console.log(moto.marcha)
moto.subirMarcha()
console.log(moto.marcha)
moto.descerMarcha()
moto.descerMarcha()
console.log(moto.marcha)