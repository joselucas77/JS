// Número é impar ou par?

function parimpa(n) {
    if(n%2==0) {
        return 'Par'
    } else {
        return 'Ímpar'
    }
}

let res = parimpa(10)
console.log(`${res}`)