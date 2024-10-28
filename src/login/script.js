$(document).ready(function() {
    // Inicializa a validação do formulário com jQuery
    $('#login-form').validate({
        rules: {
            user: {
                required: true
            },
            password: {
                required: true
            }
        },
        messages: {
            user: 'Por favor, insira o seu nome',
            password: 'Por favor, insira sua senha'
        }
    })
})

document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault(); 
    
 
    const user = document.getElementById('user').value;
    const password = document.getElementById('password').value;

    if (user && password) {
        window.location.href = '../demandas/index.html';
    } else {
        alert('Por favor, preencha todos os campos.');
    }
});