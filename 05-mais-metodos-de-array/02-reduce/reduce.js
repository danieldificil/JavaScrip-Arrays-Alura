const salasJs = [7,8,8,7,10,6.5,4,10,7]
const salaJava = [6,5,8,9,5,6]
const salaPython = [7,3.5,8,9.5]

function mediaSala(notasDaSala){
    const somaDasNotas = notasDaSala.reduce((acumulador, atual) =>
        atual+acumulador,0)
        return console.log(somaDasNotas/notasDaSala.length)

}

mediaSala(salasJs)
mediaSala(salaJava)
mediaSala(salaPython)

const notas = [10, 6.5, 8, 7.5]

function media(nota){
    const somaDasNotas = nota.reduce((acumulador, atual) =>
    atual + acumulador,0)
    console.log(`a média da sala é: ${somaDasNotas/nota.length}`)
}

media(notas)