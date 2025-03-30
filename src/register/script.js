
// eventlistener, adicionado para prevenir que o formumlário serja enviado por padrão
document.querySelector("#registerForm").addEventListener("submit", register)

// a função a seguir deve pegar os valores inseridos no registro e colocar em um objeto no local storage
function register(e){
    // chama o preventDefault para evitar que o form seja enviado por padrão
    e.preventDefault();


    // busca as infrormações de cada elemento do form e grava em uma constante
    const Nome = document.querySelector("#User").value
    const Realname = document.querySelector("#Realname").value
    const CPF = document.querySelector("#CPF").value
    const Email = document.querySelector("#Email").value
    const Curso = document.querySelector("#curso").value
    const Senha = document.querySelector("#Senha").value 
    const ConfirmSenha = document.querySelector("#ConfirmSenha").value
    const InfoUser  = document.querySelector("#InfoUser")
    
    // aviso de que as senhas não conferem
    const AdviseWrongPassword = `<div class="alert alert-danger d-flex align-items-center alert-dismissible fade show" role="alert">
    <strong> As senhas precisam ser iguais!
    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close" id="AdviseCloseBtn"></button></div>`

    // validação se as senhas conferem
    if(Senha !== ConfirmSenha){

        // insere na página o aviso ao usuário de que a senha não confere
        InfoUser.innerHTML = AdviseWrongPassword

        // função para fechar a informação automaticamente em 1,5 segundos
        closeAdvise()

    }else{

        // validação se os campos estão vazios depois da conferência se as senhas conferem, por que dois campos vazios são iguais.
        if(Nome === "" || Realname === "" || CPF === "" || Email === "" || Curso === ""){
            // aviso para que os campos sejam preenchidos
            alert("Preencha todos os campos")
        }else{
            
            // agora que tudo está certo, precisamos buscar as informações de registros de usuários default que gravamos em localstorage quando acessamos a home para teste. O código abaixo puxa esse vetor, para gravar um novo usuário com o metodo push
            let users = JSON.parse(localStorage.getItem("RegisterUser")) || [];

            // construção de um novo usuário
            const newUser = {
                name: Nome,
                Realname: Realname,
                CPF: CPF,
                email: Email,
                curso: Curso,
                Senha: Senha
            };

            // gravação do novo usuário ao final do vetor
            users.push(newUser);

            // método usado para regravar o vetor no local storage, após a inserção de um novo usuário
            localStorage.setItem("RegisterUser", JSON.stringify(users));
            
            // após o registro ter sido realizado com sucesso será chamada uma função para sinalizar isso ao usuário
            registerDone()
        } 
    }

   
}


//função que avisa que o registro foi efetuado e chama o redirecionamento
function registerDone(){
    
    // esse é o aviso ao usuário de que deu tudo certo com o registro e ele será redirecionado
    const AdviseRegisterDone = `
    
        <div class="alert alert-success d-flex align-items-center" role="alert">
            <div>
            Registro Efetuado com sucesso. Você será redirecionado para login.
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close" id="AdviseCloseBtn"></button>
            </div>
        </div>
    `
    const InfoUser  = document.querySelector("#InfoUser")
    
    InfoUser.innerHTML = AdviseRegisterDone
   
    // como o registro foi realizado com sucesso, o usuário será redirecionado automaticamente em 3 segundos.

    redirectLogin()

}

// função que fecha automaticamente o botão do aviso de que as senhas não conferem
function closeAdvise(){
    setTimeout(()=>{
        document.getElementById("AdviseCloseBtn").click();

    }, 1500);

}

// essa função será chamada para redirecionar o usuário.
function redirectLogin(){
    setTimeout(()=>{
        window.location.href = '../login/index.html';
      
    }, 3000);
    
}


