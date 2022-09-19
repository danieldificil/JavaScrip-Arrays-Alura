const salaPython = ['Melisaa', 'Hellena', 'Rodrigo']
const salaJavascript = ['Leo', 'Ju', 'Raquel']
const ex1= [1, 2, 3]
const ex3 = [4, 5, 6]
const ex4 = [7, 8, 9]

const salaúnicas = [...salaPython, ...salaJavascript,...ex1,...ex3,...ex4]
console.log(salaúnicas);


// ou

const salaúnicas2 = salaPython.concat(salaJavascript,ex1,ex3,ex4)
console.log(salaúnicas2);