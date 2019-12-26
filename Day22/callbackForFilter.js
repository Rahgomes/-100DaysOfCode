let numeros = [10, 50, 5, 25, 2, 3, 6, 100, 69, 22, 1, 9]

numerosG = []
numerosB = []

for(let i in numeros){
    if(numeros[i] <= 10){
        numerosG.push(numeros[i])
    } else {
        numerosB.push(numeros[i])
    }    
}
console.log(`Números menores ou iguais a 10 FOR IN: ${numerosG}`)
console.log(`Números maiores ou iguais a 10 FOR IN: ${numerosB}`)

numerosG1 = numeros.filter(function(numero){
    return numero <= 10
})

numerosB1 = numeros.filter(function (numero) {
    return numero > 10
})
console.log(`Números menores ou iguais a 10 FILTER: ${numerosG1}`)
console.log(`Números menores ou iguais a 10 FILTER: ${numerosB1}`)

numerosG2 = numeros.filter(numero => numero <= 10)
console.log(`Números menores ou iguais a 10 FILTER + ARROW FUNCTION: ${numerosG1}`)

numerosB2 = numeros.filter(numero => numero > 10)
console.log(`Números menores ou iguais a 10 FILTER + ARROW FUNCTION: ${numerosB1}`)