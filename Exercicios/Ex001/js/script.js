function carregar(){
    const img = document.getElementById('image')
    const data = new Date()
    const hora = data.getHours()
    const msg = document.getElementById('msg')
    msg.innerText = `São ${hora}hs.`
    
    if (hora >= 0 && hora < 12){
        // dia!
        img.src = './image/dia.jpg';

    } else if (hora >= 12 && hora < 18){
        // tarde!
        img.src = './image/tarde.jpg';
        
    } else{
        //noite!
        img.src = './image/noite.jpg';   
        
       }
    }
    
    carregar();