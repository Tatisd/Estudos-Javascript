function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = window.document.getElementById('txtano')
    var res = window.document.querySelector('div#res')
    if (fano.value.length ==0 || Number(fano.value) > ano){
        window.alert('[ERRO] Verifique os dados e tente novamente!') 
    } else{
        var fsex = window.document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            gênero = 'Homem'
            if(idade >= 0 && idade < 10){
                //criança
                img.setAttribute('src', 'bebe-menino.png')
            } else if (idade < 21) {
                //jovem
                img.setAttribute('src', 'jovem-homem.png')
            } else if (idade < 50){
                //adulto
                img.setAttribute('src', 'adulto-homem.png')
            } else {
                //idoso
                img.setAttribute('src', 'idoso.png')
            }
        } else if (fsex[1].checked) {
            gênero = 'Mulher'
            if(idade >= 0 && idade < 10){
                    //criança
                img.setAttribute('src', 'bebe-menina.png')
                } else if (idade < 21) {
                    //jovem
                img.setAttribute('src', 'jovem-mulher.png')
                } else if (idade < 50){
                    //adulto
                img.setAttribute('src', 'adulto-mulher.png')
                } else {
                    //idoso
                img.setAttribute('src', 'idosa.png')
                }
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos`
        res.appendChild(img)
    }

