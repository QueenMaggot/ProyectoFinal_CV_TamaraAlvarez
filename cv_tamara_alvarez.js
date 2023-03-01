
let fotito = document.getElementById("img_perfil"); //selecciono la foto de perfil

let elementocheckbox = document.querySelector('#switch input[type="checkbox"]'); //selecciono el checkbox

//funcion cambiarfoto, cambia la img de perfil segun el checkbox. 
//(En el live server en mi pc me funciona bien, en github tambien pero cuando lo subi a githubpages no me carga la 2da imagen)
function cambiarfoto(e){
    if(e.target.checked){

        fotito.src="https://scontent.frga1-1.fna.fbcdn.net/v/t1.6435-9/30715869_10155351035096911_214536575667666944_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=84a396&_nc_eui2=AeFhEh7BUy9OEHeSrgb2nSjNgyRNGLPNAgiDJE0Ys80CCGV7HjvTKGVptBzGjEfKnkA&_nc_ohc=XUBnbv2oU48AX94WkJc&_nc_ht=scontent.frga1-1.fna&oh=00_AfAbOaaLA-Bbg9_KMjvRatlBy7MmA8W1TVar6VFf8EQd7Q&oe=642605C9"
        }
        else {
          
            fotito.src="https://scontent.frga1-1.fna.fbcdn.net/v/t1.6435-9/67215251_10156254668736911_673699550619238400_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=84a396&_nc_eui2=AeHe8LzqqIiF__tL4UluiPBaJJ-Pd_j3D6skn493-PcPqx44eGTjrXOMV82t_aou3L0&_nc_ohc=RfHUdv3iRfkAX8guan9&_nc_oc=AQn2BROu6bnOyV8zoepZJwgWtUSVJFWnUeG4ceMuv10nI4NoTG4ON9sL5p3rZvrjnro&_nc_ht=scontent.frga1-1.fna&oh=00_AfDPLeP54RGgPhV28HyT4FP8jQgFjPe2fN3jiASiEiY5hQ&oe=64261329"
        }
    }
        elementocheckbox.addEventListener('change', cambiarfoto);
