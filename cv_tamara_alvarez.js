
let fotito = document.getElementById("img_perfil"); //selecciono la foto de perfil

let elementocheckbox = document.querySelector('#switch input[type="checkbox"]'); //selecciono el checkbox

//funcion cambiarfoto, cambia la img de perfil segun el checkbox. 
//(En el live server en mi pc me funciona bien, en github tambien pero cuando lo subi a githubpages no me carga la 2da imagen)
function cambiarfoto(e){
    if(e.target.checked){

        fotito.src="https://github.com/QueenMaggot/ProyectoFinal_CV_TamaraAlvarez/tree/master/imagenes/yuu.PNG"
        }
        else {
          
            fotito.src="https://github.com/QueenMaggot/ProyectoFinal_CV_TamaraAlvarez/tree/master/imagenes/nunu.PNG"
        }
    }
        elementocheckbox.addEventListener('change', cambiarfoto);
