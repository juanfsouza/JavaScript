function somar() {
    var inicio = window.document.getElementById('n1')
    var fim = window.document.getElementById('n2')
    var passo = window.document.getElementById('n3')
    var res = window.document.getElementById('res')

    if (inicio.value.lenght == 0 || fim.value.lenght == 0 || passo.value.lenght == 0) {
        window.alert('ERRO Faltam Dados!')
    } else {
        res.innerHTML = 'contadndo: '
        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passo.value)

        if(i < f) {
            //CRECENTE CONTADOR
            for(let c = i; c <= f; c += p) {
                res.innerHTML += `${c} \u{1F449}`
            }
        } else {
            // DECRESENTE CONTADOR
            for(let c = i; c >= f; c -= p) {
                res.innerHTML += `${c} \u{1F449}`
            }
        }
        
        res.innerHTML += `\u{1F3C1}`
    }
}