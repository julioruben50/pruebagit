    const toggleBtn = document.getElementById('toggleBtn');
    const passwordInput = document.getElementById('password');
    toggleBtn.addEventListener('click', () => {
      const isPassword = passwordInput.type === 'password';
      passwordInput.type = isPassword ? 'text' : 'password';
      toggleBtn.textContent = isPassword ? 'Ocultar' : 'Ver';
      toggleBtn.setAttribute('aria-label', isPassword ? 'Ocultar contraseña' : 'Mostrar contraseña');
    });

    const form = document.getElementById('loginForm');
    const errorMsg = document.getElementById('errorMsg');
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const email = document.getElementById('email').value.trim();
      const password = passwordInput.value;

      if (!email || !password) {
        errorMsg.textContent = 'Completa tu correo y contraseña para continuar.';
        errorMsg.classList.add('show');
        return;
      }

      // Aquí se conectaría con tu backend de autenticación real.
      errorMsg.classList.remove('show');
      alert('Formulario listo — conecta este envío a tu API de autenticación.');
    });