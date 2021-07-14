//Variables de campos
const formulario = document.querySelector('#enviar-mail')
const email = document.querySelector('#email')
const asunto = document.querySelector('#asunto')
const mensaje = document.querySelector('#mensaje')
//Variables de botones
const btnEnviar = document.querySelector('#enviar');
const btnReset = document.querySelector('#resetBtn')



eventListener();
function eventListener(){
    //Cuando la app arranca
    document.addEventListener('DOMContentLoaded', iniciarApp);

    //Campos del form
    email.addEventListener('blur', validarFormulario)
    asunto.addEventListener('blur', validarFormulario)
    mensaje.addEventListener('blur', validarFormulario)
}



//Funciones

function iniciarApp(){
    btnEnviar.disabled = true;
    btnEnviar.classList.add('cursor-not-allowed', 'opacity-50')
};

//Validar el form
function validarFormulario(e){
    if(e.target.value.length > 0 ){
        console.log("Si hay algo")
    }else{
        e.target.classList.add('border', 'border-red-500');

        mostrarError(); 
    }  
    if(e.target.type === 'email'){
        const resultado = e.target.value.indexOf('@')
        console.log(resultado);
        }
}

function mostrarError(){
    const mensajeError = document.createElement('p');
    mensajeError.textContent = ("Todos los campos son obligatorios")
    mensajeError.classList.add('border', 'border-red-500', 'background-red-100', 'text-red-500', 'p-3', 'mt-5', 'text-center', 'error')

    const errores = document.querySelectorAll('.error')
    if(errores.length === 0){
        formulario.appendChild(mensajeError);
    }

    
}


