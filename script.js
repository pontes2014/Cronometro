var sec = 0
var min = 0
var hora = 0
var interval
var click = 0

function cronometro(acao) {
    if (acao == 'iniciar' && click < 1) {
        interval = setInterval(tempo, 1000)
        click++
        console.log(click)
    } else if (acao == 'parar') {
        clearInterval(interval)
        click = 0
    }
    else if (acao == 'reiniciar') {
        clearInterval(interval)
        sec = 0
        min = 0
        document.getElementById('tempo').innerText = '00:00:00'
        click = 0
    }
}

function tempo() {
    sec++
    if (sec == 60) {
        sec = 0
        min++
        if (min == 60) {
            min = 0
            hora++
        }
    }
    document.getElementById('tempo').innerText = `${doisNumeros(hora)}:${doisNumeros(min)}:${doisNumeros(sec)}`
}

function doisNumeros(numero) {
    if (numero < 10) {
        return ('0' + numero)
    } else {
        return (numero)
    }
}