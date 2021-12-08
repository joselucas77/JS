function contar() {
    let ini = document.getElementById('txti')
    let fim = document.getElementById('txtf')
    let passo = document.getElementById('txtp')
    res = document.getElementById('res')

    if(ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        alert('[ERRO] faltam dados!')
        res.innerHTML = 'Impossivel contar!'
    } else {
        res.innerHTML = 'contando: <br>'
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if(p <= 0) {
            alert('Passo inválido! Considerando PASSO 1')
            p = 1
        }
        if(i < f){
            // Contagem crescente
            for(let c = i; c <= f; c += p) {
            res.innerHTML += ` ${c} \u{1F449}`
            }
        } else {
            // Contagem regressiva
            for(let c = i; c >= f; c -= p) {
                res.innerHTML += `${c} \u{1f449}`
            }
        }    
        res.innerHTML += `\u{1f3c1}`    
    }
}