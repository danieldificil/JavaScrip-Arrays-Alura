const alunos = ['João', 'Juliano', 'Caio', 'Amanda']
const mediaDeAlunos = [10,7,9,6]
const listaDeNotasDeAlunos = [alunos, mediaDeAlunos]

const exibeNomeNota = (nomeDoAluno) => {
    if(listaDeNotasDeAlunos[0].includes(nomeDoAluno)){
        let indice = listaDeNotasDeAlunos[0].indexOf(nomeDoAluno)
        return console.log(`A média de ${listaDeNotasDeAlunos[0][indice]} é ${listaDeNotasDeAlunos[1][indice]}`);
    }else{
        return console.log("Aluno não encontrado")
    }
}
exibeNomeNota("jon")