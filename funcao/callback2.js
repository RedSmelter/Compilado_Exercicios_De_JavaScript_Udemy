const notas = [7.7, 6.5, 5.2, 8.9, 3.6, 7.1, 9.0]

// Sem callback

let notasBaixas1 = []
for (let i in notas){
    if(notas[i] < 7){
        notasBaixas1.push(notas[i])
    }
}
console.log(notasBaixas1)

// com callback

const notasBaixas2 = notas.filter(function (notass){
    return notass < 7
})
console.log(notasBaixas2)

// Com callback e arrow

const notasBaixas3 = notas.filter(nossta => nossta < 7)
console.log(notasBaixas3)

// COm callback, arrow e função podendo ser utilizada em outros lugares do codigo

const notasMenoresQue7 = notaDoArray => notaDoArray < 7
const notasBaixas4 = notas.filter(notasMenoresQue7)
console.log(notasBaixas4)


