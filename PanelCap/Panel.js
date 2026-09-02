const inscripciones = [
    {
        participante: "Ana Gómez",
        curso: "Introducción a HTML",
        fecha: "24/05/2026",
        estado: "Activa"
    },

    {
        participante: "Carlos Ruiz",
        curso: "JavaScript Básico",
        fecha: "23/05/2026",
        estado: "Activa"
    },

    {
        participante: "María López",
        curso: "Diseño Web",
        fecha: "22/05/2026",
        estado: "Completada"
    },

    {
        participante: "Luis Torres",
        curso: "Base de Datos SQL",
        fecha: "21/05/2026",
        estado: "Activa"
    }
];


const cursos = [
    {
        nombre: "HTML y CSS",
        inscritos: 120,
        progreso: 90
    },

    {
        nombre: "JavaScript Básico",
        inscritos: 98,
        progreso: 75
    },

    {
        nombre: "Diseño Web",
        inscritos: 75,
        progreso: 60
    },

    {
        nombre: "Base de Datos SQL",
        inscritos: 45,
        progreso: 40
    }
];


const tabla = document.getElementById("tablaInscripciones");


inscripciones.forEach(function(inscripcion) {

    let claseEstado;

    if (inscripcion.estado === "Activa") {
        claseEstado = "estado-activo";
    } else {
        claseEstado = "estado-completado";
    }


    tabla.innerHTML += `
        <tr>

            <td>${inscripcion.participante}</td>

            <td>${inscripcion.curso}</td>

            <td>${inscripcion.fecha}</td>

            <td>
                <span class="${claseEstado}">
                    ${inscripcion.estado}
                </span>
            </td>

        </tr>
    `;
});

if (!sessionStorage.getItem('forjaSesion')) {
  window.location.href = '../Login/login.html';
}

const listaCursos = document.getElementById("listaCursos");


cursos.forEach(function(curso) {

    listaCursos.innerHTML += `
        <div class="curso">

            <div class="curso-info">
                <span>${curso.nombre}</span>
                <span>${curso.inscritos} inscritos</span>
            </div>

            <div class="barra">
                <div
                    class="progreso"
                    style="width: ${curso.progreso}%">
                </div>
            </div>

        </div>
    `;
});