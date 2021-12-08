let num = [5,8,2,9,3]
//num[3] = 5  // Adicionando um número em um espaço específico.
num.push(1) // Adicionando um número na ultima posicão do vetor.
//num.length  // Mostra o comprimentos de elementos do vetor.
num.sort()  // Organiza os elementos em orde crescente.

console.log(`Nosso vetor tem ${num.length} elementos.`)
console.log(`Os elementos são: ${num}`)
console.log(`O primeiro elemento é o número ${num[0]}`)
// o comando indexOf serve para encontrar a posicão em que um vetor se encontra
// No caso do vetor não existir, ele retona -1
let pos = num.indexOf(8)
if (pos == -1) {
    console.log('Valor não encontrado')
} else {
    console.log(`O valor 8 está na posicão ${pos}`)
}
