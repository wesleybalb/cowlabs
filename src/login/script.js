// Adiciona um evento de submissão ao formulário de login
document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio padrão do formulário

    // Obtém os valores dos campos de usuário e senha
    const user = document.getElementById('user').value;
    const password = document.getElementById('senha').value;

    // Verifica se os campos foram preenchidos
    if (user && password) {
        // Redireciona para a página principal se os campos estiverem preenchidos
        window.location.href = '../main page/index.html';
    } else {
        // Exibe uma mensagem de erro se algum campo estiver vazio
        alert('Por favor, preencha todos os campos.');
    }
});
