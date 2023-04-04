function calcular() {
    var txtv = window.document.querySelector('input#txtvel');
    var res = window.document.querySelector('div#res');
    var vel = txtv.value;
    res.innerHTML = `<p>Seu pais de origem <strong>${vel}</strong></p>`;
    if (vel == "Brasil" || vel == "brasil") {
        res.innerHTML += `<p> Voce e <strong>Brasileiro</strong>!`;
    } else
    res.innerHTML += `<p> Voce e <strong>Estrangeiro</strong>!`;
}