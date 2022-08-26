function contar() {
    var inicio = document.getElementById('txtini')
    var fim = document.getElementById ('txtfim')
    var passo = document.getElementById('txtpas')
    var res = document.getElementById('res')

    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        alert('[ERRO] Faltam dados!')
        res.innerHTML = 'Impossivel Contar!'
    } else {
        res.innerHTML = 'Contando : <br>'
        var i = Number(inicio.value)
        var f = Number(fim.value)
        var p = Number(passo.value)
    if (p <= 0){
        window.alert('Passo inválido! Considerando Passo 1')
        p = 1
    }
    if ( i < f) {
        //Contagem crescente
        for(var c = i; c <= f; c += p) {
            res.innerHTML += ` ${c} \u{2705}` 
        }     
    } else {
        //Contagem regressiva
        for(var c = i; c >= f; c -= p){
            res.innerHTML += ` ${c} \u{1F449}`
        }
        res.innerHTML += `\u{1F3C1}`
    } 
}
}