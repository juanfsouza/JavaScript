function somar() {
    var tab = window.document.getElementById('n1')
    var res = window.document.getElementById('res')

    if (tab.value.lenght == 0) {
        window.alert('por favor, digite um numero!')
    } else {
        let n = Number(tab.value)
        let i = 1
        res.innerHTML = ''
        while (i <= 10) {
        let item = document.createElement('option')
        item.text = `${n} x ${i} = ${n*i}`
        item.value = `tab${i}`
        res.appendChild(item)
        i++
    }
    }
}