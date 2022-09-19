const nomes = ['João','Juliana','Ana', 'Caio',
    'Lara','Marjorie','Guilherme','Aline','Fabiana',
    'André', 'Carlos', 'Paulo', 'Bia', 'Viviam',
    'Isabela', 'Vinicius', 'Renan','Renata', 'Daisy', 'Camilo']

console.log(nomes);
const sala1 = nomes.slice(0, (nomes.length/2))
const sala2 = nomes.slice((nomes.length/2))

console.log("Alunos da Sala 1 são: " + sala1);
console.log("Alunos da Sala2 são: "+ sala2);
