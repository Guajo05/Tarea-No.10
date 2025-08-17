// Validación básica del formulario de login
document.addEventListener('DOMContentLoaded', function() {
    // Login reporteros
    const loginForm = document.getElementById('login-form');
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;
            
            // Validación simple
            if (!email || !password) {
                alert('Por favor, complete todos los campos.');
                return;
            }
            
            // Simulación de inicio de sesión exitoso
            alert('Inicio de sesión exitoso. Redirigiendo...');
            window.location.href = 'index.html';
        });
    }
    
    // Registro reporteros
    const signupForm = document.getElementById('signup-form');
    if (signupForm) {
        signupForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;
            const confirmPassword = document.getElementById('confirm-password').value;
            
            // Validación
            if (!name || !email || !password || !confirmPassword) {
                alert('Por favor, complete todos los campos.');
                return;
            }
            
            if (password !== confirmPassword) {
                alert('Las contraseñas no coinciden.');
                return;
            }
            
            // Simulación de registro exitoso
            alert('Registro exitoso. Ahora puedes iniciar sesión.');
            window.location.href = 'login.html';
        });
    }
    
    // Login validadores
    const validatorLoginForm = document.getElementById('validator-login-form');
    if (validatorLoginForm) {
        validatorLoginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;
            
            // Validación simple
            if (!username || !password) {
                alert('Por favor, complete todos los campos.');
                return;
            }
            
            // Simulación de inicio de sesión exitoso
            alert('Acceso validador concedido. Redirigiendo...');
            window.location.href = 'dashboard.html';
        });
    }
    
    // Simulación de inicio de sesión con Google
    const googleBtns = document.querySelectorAll('.social-btn.google');
    googleBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            alert('Iniciando sesión con Google...');
            // Aquí iría la integración con Google OAuth
            window.location.href = 'index.html';
        });
    });
    
    // Simulación de inicio de sesión con Microsoft
    const microsoftBtns = document.querySelectorAll('.social-btn.microsoft');
    microsoftBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            alert('Iniciando sesión con Office 365...');
            // Aquí iría la integración con Microsoft OAuth
            window.location.href = 'index.html';
        });
    });
});