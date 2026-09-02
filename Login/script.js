 /* ==========================================================================
   AUTENTICACIÓN — Instituto Forja
   ==========================================================================
   Esto es un repositorio ESTÁTICO (sin servidor real), así que no existe
   una base de datos verdadera. Esta validación ocurre en el navegador y
   sirve para maquetas, prácticas escolares o demos en GitHub Pages.

   Si más adelante quieres un backend de verdad (usuarios en base de datos,
   contraseñas encriptadas, sesiones seguras), eso requiere un servidor
   (Node/Express, Firebase, Supabase, etc.) — dímelo y te ayudo a montarlo.
   ========================================================================== */

// ---- "Base de datos" de usuarios (cámbiala aquí) ----
const USUARIOS_VALIDOS = [
  { usuario: "admin", contraseña: "admin123", rol: "admin" }
];

// Ruta del panel relativa a este archivo (Login/ -> PanelCap/Panel.html)
const RUTA_PANEL = "../PanelCap/Panel.html";

// ---- Mostrar / ocultar contraseña ----
const toggleBtn = document.getElementById('toggleBtn');
const passwordInput = document.getElementById('password');

toggleBtn.addEventListener('click', () => {
  const isPassword = passwordInput.type === 'password';
  passwordInput.type = isPassword ? 'text' : 'password';
  toggleBtn.textContent = isPassword ? 'Ocultar' : 'Ver';
  toggleBtn.setAttribute('aria-label', isPassword ? 'Ocultar contraseña' : 'Mostrar contraseña');
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
