function botaoUm(){
   
var sorteioDadoUm = Math.floor(Math.random() * 6 + 1)

switch(sorteioDadoUm){

    case 1: document.getElementById('face01').scr='face1.png'
    break

    case 2: document.getElementById('face01').src='face2.png'
    break

    case 3: document.getElementById('face01').src='face3.png'
    break

    case 4: document.getElementById('face01').src='face4.png'
    break

    case 5:document.getElementById('face01').src='face5.png'
    break

    case 6: document.getElementById('face01').src='face6.png'
    break   

    default:
        break

    }
}

function botaoDois (){

    var sorteioDadoDois = Math.floor(Math.random() * 6 + 1)

    switch(sorteioDadoDois){

    case 1: document.getElementById('face02').scr='face1.png'
    break

    case 2: document.getElementById('face02').src='face2.png'
    break

    case 3: document.getElementById('face02').src='face3.png'
    break

    case 4: document.getElementById('face02').src='face4.png'
    break

    case 5:document.getElementById('face02').src='face5.png'
    break

    case 6: document.getElementById('face02').src='face6.png'
    break   

    default:
        break
    
    }
}


