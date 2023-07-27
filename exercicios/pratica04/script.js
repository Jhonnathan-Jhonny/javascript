function gerar(){
    var num = document.getElementById('num').value
    var res =  document.getElementById('res')
    res.innerHTML = ''
    if(num.length == 0){
        window.alert('Digite um valor')
        return
    }
    for (var i = 0; i<=10; i++){
        var item = document.createElement('option')
        item.text = `${i} x ${num} = ${num*i}`
        res.appendChild(item)
    }
}