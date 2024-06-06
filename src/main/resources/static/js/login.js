$(document).ready(async function() {

});

async function iniciarSesion() {
    try {
    let datos = {};
    datos.email = document.getElementById('txtEmail').value;
    datos.password = document.getElementById('txtPassword').value;

        const request = await fetch('api/login', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(datos)
        });

        if (!request.ok) {
            throw new Error('No se pudo registrar el usuario.');
        }

        const response = await request.text();
        if(response != 'FAIL'){
        localStorage.token = response;
        localStorage.email = datos.email;
            window.location.href = 'usuarios.html'
        }else{
            alert("Las credenciales son incorrectas. Por favor intente nuevamente.")
        }
    } catch (error) {
        console.error('Error al registrar el usuario:', error);
    }
}