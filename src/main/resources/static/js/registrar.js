$(document).ready(async function() {

});

async function registrarUsuarios() {
    try {
    let datos = {};
    datos.nombre = document.getElementById('txtNombre').value;
    datos.apellido = document.getElementById('txtApellido').value;
    datos.email = document.getElementById('txtEmail').value;
    datos.password = document.getElementById('txtPassword').value;

    let repetirPassword = document.getElementById('txtRepeatPassword').value;

    if(repetirPassword != datos.password){
        alert('Las contraseñas no coinciden');
        return;
    }
        const response = await fetch('api/usuarios', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(datos)
        });
        alert("La cuenta fue creada con exito");
        window.location.href = "login.html";
        if (!response.ok) {
            throw new Error('No se pudo registrar el usuario.');
        }
    } catch (error) {
        console.error('Error al registrar el usuario:', error);
    }
}