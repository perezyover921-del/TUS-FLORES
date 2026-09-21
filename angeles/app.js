//DIRECION HACIA LA OTRA PAGINA

const inputPAssword =document.getElementById('contraseña');

const botonEnviar = document.getElementById('enviar');

function validarYRedirigir(){
    const password = inputPAssword.value.toLowerCase().trim();
    if (password === "mi mocosita" || 
        password === "mocosita" || 
        password === "mi mocosa" || 
        password === "mocosa") {
        
        window.location.href = "index2.html";
    }
    else if ( password === ""){
        alert("Por favor, escribe una contraseña");
    }
    else {
        alert("Contraseña incorrecta");
    }
}

botonEnviar.addEventListener('click', validarYRedirigir);

inputPAssword.addEventListener('keydown', function(event){
    if (event.key === 'Enter'){
        validarYRedirigir();
    }
})