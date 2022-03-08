const bissexto = (ano) => {
	if(ano % 4 == 0 || ano % 100 != 0 || ano % 400 == 0){
  	return true
    }
else{
    return false
    }
}
console.log(bissexto(2016))
console.log(bissexto(2000))
console.log(bissexto(1700))
console.log(bissexto(1800))
console.log(bissexto(100))
