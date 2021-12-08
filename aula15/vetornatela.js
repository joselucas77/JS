let valores = [8,1,7,4,2,9]

//console.log(valores) // Forma tradicional.

/* // Forma trabalhosa
console.log(valores[0])
console.log(valores[1])
console.log(valores[2])
console.log(valores[3])
console.log(valores[4])
console.log(valores[5])
*/

/*
// Forma simplificada
for(let pos = 0; pos < valores.length; pos++) {
    console.log(`A posicão ${pos} tem o valor ${valores[pos]}`)
}
*/

// Forma mais simple ainda
for(let pos in valores) {
    console.log(`A posicão ${pos} tem o valor ${valores[pos]}`)
}