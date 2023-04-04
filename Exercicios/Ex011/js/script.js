function calcular() {
    var txtv = window.document.querySelector('input#txtvel')
    var res = window.document.querySelector('div#res')
    var vel = Number(txtv.value)
    res.innerHTML = `<p>Sua velocidade atual e de <strong> ${vel} km/h</strong></p>`
    if (vel > 60) {
        res.innerHTML += `<p> Voce esta <strong>MULTADO</strong> por excesso de velocidade`
    }
    res.innerHTML += `Dirija com cuidado!`
}