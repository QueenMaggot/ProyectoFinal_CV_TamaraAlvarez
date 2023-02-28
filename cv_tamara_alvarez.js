
let fotito = document.getElementById("img_perfil"); //selecciono la foto de perfil

let elementocheckbox = document.querySelector('#switch input[type="checkbox"]'); //selecciono el checkbox

function cambiarfoto(e){
    if(e.target.checked){

        fotito.src="./imagenes/yuu.png"
        }
        else {
          
            fotito.src="./imagenes/nunu.png"
        }
    }
        elementocheckbox.addEventListener('change', cambiarfoto);
