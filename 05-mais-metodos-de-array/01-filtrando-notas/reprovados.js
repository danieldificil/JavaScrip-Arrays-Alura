const nomes = ['Daniel', 'Eric', 'Dennis', 'Alan']
const notas = [7, 4.5,8,7.5]

const reprovados = nomes.filter((nome,indice) => notas[indice] < 5 )
console.log(`lista de reprovados: ${reprovados}`);