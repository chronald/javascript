function carregar(){
var msg = document.getElementById(' msg ')
var img = document.getElementById('imagem')
var data = new Date()
var hora = data.getHours()
var minutos = data.getMinutes()
var segundos = data.getSeconds()

msg.innerHTML = `Agora são ${hora}:${minutos}:${segundos} horas`
if (hora >= 0 && hora <=5) {

img.src = "noite.png"
document.body.style.background = 'rgb(4, 29, 32)'
}else if (hora<=12) {
img.src = "manha.png"
document.body.style.background = 'rgb(219, 194, 161)'
}else if (hora <=18) {
img.src = "tarde.png"
document.body.style.background = 'rgb(160, 104, 1 )'
} else {
img.src = "noite.png"
document.body.style.background = 'rgb(4, 29, 32)'
}
}





