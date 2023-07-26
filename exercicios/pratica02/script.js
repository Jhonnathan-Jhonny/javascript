function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('idata')
    var res = document.getElementById('res')

    if (fano.value > ano || fano.value.length == 0){
        window.alert('Verifique os dados e tente novamente!')
    }
    else {
        var fsex = document.getElementsByName('nsexo')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked){
            genero = 'HOMEM'
            if(idade < 10){
                img.setAttribute('src','imagens/criançaM.png')
            } else if (idade < 21){
                img.setAttribute('src', 'imagens/jovemM.png')
            }
            else if (idade < 50){
                img.setAttribute('src', 'imagens/adultoM.png')
            }
            else {
                img.setAttribute('src', 'imagens/idosoM.png')
            }
        }
        else {
            genero = 'MULHER'
            if(idade < 12){
                img.setAttribute('src', 'imagens/criançaF.png')
            }
            else if (idade < 21){
                img.setAttribute('src', 'imagens/jovemF.png')
            }
            else if (idade < 50){
                img.setAttribute('src', 'imagens/adultoF.png')
            }
            else {
                img.setAttribute('src', 'imagens/idosoF.png')
            }
        }
    }
    res.style.textAlign = 'center'
    res.innerHTML = `Detectamos ${genero} com ${idade} anos`
    res.appendChild(img)
}