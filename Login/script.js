const loginForm = document.getElementById("loginForm");
const username = document.getElementById("username");
const password = document.getElementById("password");
const errorMsg = document.getElementById("errorMsg");
const toggleBtn = document.getElementById("toggleBtn");

// Mostrar / ocultar contraseña
toggleBtn.addEventListener("click", function () {

    if (password.type === "password") {
        password.type = "text";
        toggleBtn.textContent = "Ocultar";
    } else {
        password.type = "password";
        toggleBtn.textContent = "Ver";
    }

});

// LOGIN
loginForm.addEventListener("submit", function (event) {

    event.preventDefault();

    const usuarioIngresado = username.value.trim();
    const contrasenaIngresada = password.value;

    // Credenciales de prueba
    if (
        usuarioIngresado === "admin" &&
        contrasenaIngresada === "1234"
    ) {

        // Guardar sesión
        sessionStorage.setItem("forjaSesion", JSON.stringify({
            usuario: usuarioIngresado,
            rol: "Administrador",
            ingreso: Date.now()
        }));

        // Ir al panel
        window.location.href = "../PanelCap/Panel.html";

    } else {

        errorMsg.textContent = "Usuario o contraseña incorrectos.";
        errorMsg.classList.add("show");

    }

});

