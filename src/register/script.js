// antes de realizar o login, temos que verificar se o usuário já existe
// para isso desativamos o botão de registro e só iremos ativá-lo quando todas as informações de usuário, CPF e e-mail forem novas entradas no banco de dados. Isso previne a existência de dois nomes de usuários iguais, e que duas pessoas tenham mais de uma conta e que sejam enviadas mensagens de recuperação de senha (a serem implementadas futuramente) para uma outra pessoa.

// inseren event listener nos campos trackeados
document.getElementById("User").addEventListener("change", () => inputCompare("User"));
document.getElementById("Email").addEventListener("change", () => inputCompare("Email"));
document.getElementById("CPF").addEventListener("change", () => inputCompare("CPF"));


// mensagem de erro de poucos caracteres
const UserMinCharact = `
<div>
<p class ="LoginMsg">O nome do usuário deve ter mais do que cinco caracteres.</p>
</div>
`

function inputCompare(inputId){
    
    const campoId = document.getElementById(inputId);
    
    
    // primeiro vamos comparar se o usário possui mais do que cinco caracteres. Entendemos que menos do que isso não é um nome razoável
    const minCaract = 5
    
    const loginMsg = document.getElementById("UserCheckerMsg")
    
    if( campoId.id == "User" && campoId.value.length <= minCaract){
        loginMsg.innerHTML = UserMinCharact
        return;
    }else{
        loginMsg.innerHTML = ``
        
        // recupera as informações do LocalStorage
        let users = JSON.parse(localStorage.getItem("RegisterUser"));
        
        const FindUser = users.find(p=>p.name == campoId.value)
        
        if(FindUser){
            
            loginMsg.innerHTML = `
            <div>
                <p class ="LoginMsgError">Este usuário já existe.</p>
            </div>
            `
        }else{
            loginMsg.innerHTML = ``
        }
    }

    

    if( campoId.id == "" && campoId.value.length <= minCaract){
        loginMsg.innerHTML = UserMinCharact
        return;
    }else{
        loginMsg.innerHTML = ``
        
        // recupera as informações do LocalStorage
        let users = JSON.parse(localStorage.getItem("RegisterUser"));
        
        const FindUser = users.find(p=>p.name == campoId.value)
        
        if(FindUser){
            
            loginMsg.innerHTML = `
            <div>
                <p class ="LoginMsgError">Este usuário já existe.</p>
            </div>
            `
        }else{
            loginMsg.innerHTML = ``
        }
    }
    if( campoId.id == "User" && campoId.value.length <= minCaract){
        loginMsg.innerHTML = UserMinCharact
        return;
    }else{
        loginMsg.innerHTML = ``
        
        // recupera as informações do LocalStorage
        let users = JSON.parse(localStorage.getItem("RegisterUser"));
        
        const FindUser = users.find(p=>p.name == campoId.value)
        
        if(FindUser){
            
            loginMsg.innerHTML = `
            <div>
                <p class ="LoginMsgError">Este usuário já existe.</p>
            </div>
            `
        }else{
            loginMsg.innerHTML = ``
        }
    }
    


}



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
                Senha: Senha,
                Tipo: "Aluno",
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


