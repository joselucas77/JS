function carregar(){
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var min = data.getMinutes()
    msg.innerHTML = `Agora são ${hora}:${min}`
    if(hora >= 0 && hora < 12){
        //Bom dia!
        img.src = 'fotomanha.png'
        document.body.style.background = '#e2cd9f'
    }else if(hora >= 12 && hora <= 18){
        //Boa tarde!
        img.src = 'fototarde.png'
        document.body.style.background = '#b9846f'
    }else{
        //Boa noite!
        img.src = 'fotonoite.png'
        document.body.style.background = '#11679a'
    }
}
