var agora = new Date()
var hora = agora.getHours()
console.log(`Agora sao exatamente ${hora} horas.`)
if (hora > 6) {
    console.log('Bom dia')
} else if (hora >= 12 ) {
    console.log('Boa tarde')
} else if (hora >= 18 ) {
    console.log('Boa noite')
} else if (hora >= 0 ) {
    console.log('Boa Madrugada')
} else {
    console.log('Algo nao esta certo com seu horario!')
}