//Relógio

var agora = new Date() // pega a hora atual do cliente
var hora = agora.getHours()
var min = agora.getMinutes()

console.log(`Agora são exatamente ${hora}:${min} horas!`)
if(hora >= 1   && hora < 12){
    console.log('Bom dia!')
}else if(hora >= 12 && hora < 19){
    console.log('Boa tarde!')
}else{
    console.log('Boa noite!')
}