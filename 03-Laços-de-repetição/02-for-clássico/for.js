const numeros = [100,200,300,400,500,600]

for (let i = 0; i < numeros.length; i++){
    console.log(i, numeros[i])
}

const loopEach = numeros.forEach((num) => {
    console.log(`Olaaaaaá número ${num}, é um prazer renderizar você`);
})
