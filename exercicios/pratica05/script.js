let num = document.getElementById('num')
let cad = document.getElementById('cadastrar')
let res = document.getElementById('res')
let vet = []
num.focus()

function isNumber(n){
    if(Number(n) > 0 && Number(n)<101){
        return true
    }
    else{
        return false
    }
}

function inList(n,l){
    if(vet.indexOf(Number(n)) != -1){
        return true
    }
    else{
        return false
    }
}


function adicionar(){
    if(isNumber(num.value) && !inList(num.value,vet)){
        vet.push(Number(num.value))
        var item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado.`
        cad.appendChild(item)
        res.innerHTML = ' '
    }
    else {
        window.alert('Valor inválido ou ja encontrado na lista')
    }

    num.value = ' '
    num.focus()
    // for(var i=0;i<vet.length;i++){
    //     vetor.innerHTML += (vet[i]+' ')
    // }
}

function calcular(){
    if(vet.length == 0){
        window.alert('Adicione valores.')
    }

    let quant = vet.length
    let maior = vet[0]
    let menor = vet[0]
    let soma = 0
    let media = 0

    for(var i=0;i<vet.length;i++){
        if(vet[i]>maior){
            maior=vet[i]
        }
        if(vet[i]<menor){
            menor=vet[i]
        }
        soma += vet[i]
    }
    media = soma/quant

    res.innerHTML = ' '    
    res.innerHTML = `Ao todo, temos ${quant} números cadastrados.<br><br>O maior valor informado foi ${maior}.<br><br>O menor valor informado foi ${menor}.<br><br>A soma de todos os valores é: ${soma}.<br><br>A média dos valores digitados é ${media}`
}