document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault(); 
    
 
    const user = document.getElementById('user').value;
    const password = document.getElementById('senha').value;

    if (user && password) {
        window.location.href = '../main page/index.html';
    } else {
        alert('Por favor, preencha todos os campos.');
    }
});