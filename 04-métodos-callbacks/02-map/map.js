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