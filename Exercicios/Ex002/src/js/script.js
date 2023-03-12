function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')


    if(fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[Erro] Verifique os dados e tente novamente')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        var fasevida = ' '
        img.setAttribute('id', 'foto')



        if(fsex[0].checked){
            genero = 'Homem'
        } else if (fsex[1].checked){
            genero = 'Mulher'
        }



        if(idade >= 0 && idade < 10){
            fasevida = 'crianca'
        } else if (idade >= 10 && idade < 21){
            fasevida  = 'jovem'
        } else if (idade >= 21 && idade < 50){
           fasevida = 'adulto'
        } else {
            fasevida  = 'idoso'
        }
        
        var foto_res = `foto_${fasevida}_${genero.toLowerCase()}.jpg`
        img.setAttribute('src', foto_res)
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)

    }
}