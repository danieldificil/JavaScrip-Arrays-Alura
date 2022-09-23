const notas = [10,9,8,7]

const notasAtualizadas = notas.map((nota) => {
    if (nota < 10){
        return nota + 1
    }else if (nota === 10) {
        return nota
    } else{
        return "Número invalido"
    }
})
console.log(notasAtualizadas);



const notas2 = notas.map((nota) =>{
    if (nota === 10){
        return nota + 10
    }else{
        return nota+ 5
    }
})

console.log(notas2);

const frutas = ['limão', 'abacaxi', 'pera']

const cardápio = frutas.map((fruta) => {return fruta + ' delicioso' })

console.log(cardápio);