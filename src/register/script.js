// a função a seguir deve pegar os valores inseridos no registro e colocar em um objeto no local storage

function inicialization(){
    if(!localStorage.getItem("RegisterUser")){
        localStorage.setItem("RegisterUser", JSON.stringify([""]))
    }
}

inicialization()


function register(){
    const nome = document.querySelector("#User").value
    const Realname = document.querySelector("#Realname").value
    const CPF = document.querySelector("#CPF").value
    const Email = document.querySelector("#Email").value
    const curso = document.querySelector("#curso").value
    const Senha = document.querySelector("#Senha").value 
    const ConfirmSenha = document.querySelector("#ConfirmSenha").value
    const InfoUser  = document.querySelector("#InfoUser")
    
    const AdviseWrongPassword = `<div class="alert alert-danger d-flex align-items-center alert-dismissible fade show" role="alert">
    <strong> As senhas precisam ser iguais!
    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></div>`

    


    if(Senha !== ConfirmSenha){
        InfoUser.innerHTML = AdviseWrongPassword
    }else{
        if(nome == "" || Realname == "" || CPF == "" || Email == "" || curso == ""){
            alert("Preencha todos os campos")
        }else{
            
            let users = JSON.parse(localStorage.getItem("RegisterUser")) || [];

            const newUser = {
                name: nome,
                Realname: Realname,
                CPF: CPF,
                email: Email,
                curso: curso,
                Senha: Senha
            };
            users.push(newUser);

            localStorage.setItem("RegisterUser", JSON.stringify(users));
        }
    }
}




