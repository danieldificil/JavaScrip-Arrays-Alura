const arrayVazia = [];

console.log(arrayVazia)
console.log(arrayVazia.length)
console.log(arrayVazia[0]) // undefined

// mais um exemplo para ficar claro

const arrayVazia2 = [,,,];
console.log(arrayVazia2.length)
console.log(arrayVazia2[0])
console.log(arrayVazia2[1])
console.log(arrayVazia2[2])

// gavetas vazias
const arrayVazia3 = [,,,];
console.log(arrayVazia3.length)
arrayVazia3.push(50)
console.log(arrayVazia3)
console.log(arrayVazia3.length)