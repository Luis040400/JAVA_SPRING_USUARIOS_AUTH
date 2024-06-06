$(document).ready(async function() {
    await cargarUsuarios();
    $('#dataTable').DataTable();
    actualizarEmailDelUsuario();
});

function actualizarEmailDelUsuario(){
    document.getElementById('txt-email-usuario').outerHTML = localStorage.email;
}

async function cargarUsuarios() {
    try {
        const response = await fetch('api/usuarios', {
            method: 'GET',
            headers: getHeaders()
        });

        if (!response.ok) {
            throw new Error('No se pudo cargar la lista de usuarios.');
        }

        const users = await response.json();
        let listadoHTML = '';

        for (let usuario of users) {
            let usuarioHTML =
                `<tr>
                    <td>${usuario.id}</td>
                    <td>${usuario.nombre} ${usuario.apellido}</td>
                    <td>${usuario.email}</td>
                    <td>${usuario.telefono}</td>
                    <td>
                        <button onClick="eliminarUsuario(${usuario.id})" class="btn btn-danger btn-circle btn-sm">
                            <i class="fas fa-trash"></i>
                        </button>
                    </td>
                </tr>`;
            listadoHTML += usuarioHTML;
        }
        document.querySelector("#dataTable tbody").innerHTML = listadoHTML;
    } catch (error) {
        console.error('Error al cargar usuarios:', error);
    }
}

function getHeaders(){
    return {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
     'Authorization': localStorage.token
    }
}

async function eliminarUsuario(id){

    if(!confirm('¿Desea eliminar este usuario?')){
        return;
    }

    const response = await fetch('api/usuarios/' + id, {
        method: 'DELETE',
        headers: getHeaders()
    });
    location.reload();
}