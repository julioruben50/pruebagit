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

// Procesar inicio de sesión
loginForm.addEventListener("submit", function (event) {

    // Evita que el formulario recargue la página
    event.preventDefault();

    const usuarioIngresado = username.value.trim();
    const contrasenaIngresada = password.value;

    // Usuario de prueba
    const usuarioCorrecto = "admin";
    const contrasenaCorrecta = "1234";

    if (
        usuarioIngresado === usuarioCorrecto &&
        contrasenaIngresada === contrasenaCorrecta
    ) {
        // Login correcto
        errorMsg.style.display = "none";

        // Ir al panel
        window.location.href = "../PanelCap/Panel.html";

    } else {
        // Login incorrecto
        errorMsg.style.display = "block";
    }
});
// ---- Envío del formulario ----
const form = document.getElementById('loginForm');
const errorMsg = document.getElementById('errorMsg');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const usuario = document.getElementById('username').value.trim();
  const contraseña = passwordInput.value;

  if (!usuario || !contraseña) {
    mostrarError('Completa tu usuario y contraseña para continuar.');
    return;
  }

  const encontrado = USUARIOS_VALIDOS.find(
    (u) => u.usuario === usuario && u.contraseña === contraseña
  );

  if (!encontrado) {
    mostrarError('Usuario o contraseña incorrectos.');
    return;
  }

  // Guarda una "llave de sesión" para que Panel.js pueda verificar
  // que el usuario entró por el login antes de mostrar el panel.
  sessionStorage.setItem('forjaSesion', JSON.stringify({
    usuario: encontrado.usuario,
    rol: encontrado.rol,
    ingreso: Date.now()
  }));

  window.location.href = RUTA_PANEL;
});

function mostrarError(texto) {
  errorMsg.textContent = texto;
  errorMsg.classList.add('show');
}
