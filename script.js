let manuVisible = false;
//funcion que oculta o muestra el menu
function mostrarOcultarMenu(){
    if(manuVisible){
        document.getElementById("nav").classList = "";
        manuVisible = false;
    }else{
        document.getElementById("nav").classList = "responsive"
        manuVisible = true;
    }
}

function seleccionar(){
    //ocultar el menu uma vez que selecciono um opcion
    document.getElementById("nav").classList = "";
    manuVisible =false
}

//funcion que aplica las animaciones de las habilidades
function efect0Habilidades(){
    var skills = document.getElementById('skills');
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if(distancia_skills >= 300){
        let habilidades = document.getElementsByClassName("progreso");
        habilidades[0].classList.add("javascript");
        habilidades[1].classList.add("htmlcss");
        habilidades[2].classList.add("python");
        habilidades[3].classList.add("React-js-React-native");
        habilidades[4].classList.add("bootstrap");
        habilidades[5].classList.add("Comunicacion");
        habilidades[6].classList.add("Trabajo-Equipo");
        habilidades[7].classList.add("Criatividad");
        habilidades[8].classList.add("Dedicacion");
        habilidades[9].classList.add("Wordpress");
    }
}

//detecto el scrollig para aplicar el animacion de el barra de habilidades
window.onscroll = function(){
    efect0Habilidades();
}

// validacao de formulario (verificar se o nome esta vazio)
const form = document.getElementById('form');
const campos = document.querySelectorAll('.required');

