function validar() {
    var num = document.getElementById('txttab')
    var tab = document.getElementById('seltab')

    if (num.value.length == 0){
        alert('Digite um número.')
    
    } else {
        var r = Number(num)
        var c = 1 
        tab.innerHTML = ''
        while ( c <= 10 )
        var item = document.createElement('option')
        item.text = `${r} x ${c} = ${r*c}`
        text.innerHTML = `tab${c}`
        tab.appendChild(item)
        c++
    }


}



