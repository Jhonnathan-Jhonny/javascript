function contar(){
    var inicio = document.getElementById('inicio').value
    var fim = document.getElementById('fim').value
    var passo = document.getElementById('passo').value
    var resp = document.getElementById('res')

    if(inicio.length == 0 ||fim.length == 0){
        resp.innerHTML = 'Impossível contar!'
        return
    }
    else {
        resp.innerHTML = 'CONTANDO:<br>'
        if(passo.length == 0){
            window.alert('[INVALIDO] Considerando passo = 1')
            passo++
        }
        let i = Number(inicio)
        let f = Number(fim)
        let p = Number(passo)
        if(i < f){
            for(let c = i; c<=f; c+=p){
                resp.innerHTML += ` ${c} \u{1F449}`
            }
        }
        else {
            for(let c = i; c>=f; c-=p){
                resp.innerHTML += ` ${c} \u{1F449}`
            }
        }
        resp.innerHTML += `\u{1F3C1}`
    }

    
}