// const saidaUsuario = document.getElementById('usuarios')
// const usuariosRegistrados = JSON.parse(localStorage.getItem("RegisterUser"))

// const { Button } = require("bootstrap");

// console.log(saidaUsuario)

// usuarioCredencial()

//     saidaUsuario.innerHTML = usuariosRegistrados.map(usuario => `<li class="usuarios" type="button" data-bs-toggle="collapse" data-bs-target="#btnExpandirAlunos" aria-expanded="false" aria-controls="btnExpandirAlunos">
//         <i class="bi bi-box-arrow-right"></i>
//     ${usuario.name}</li>`).join('')

// console.log(usuariosRegistrados)

// function usuarioCredencial(){
//     const saberMais = document.querySelectorAll('.usuarios')

//     saberMais.forEach((User) => {
//         User.addEventListener('click', function(){
//             const selectedUser = User.closest('.usuarios')
        
            
//             console.log(selectedUser)
//         })
//     })
    
// }


function userInjection(){
    const usuariosRegistrados = JSON.parse(localStorage.getItem("RegisterUser"))
    usuariosRegistrados.forEach(u => {
        document.querySelector("#UserList").innerHTML += `<li class="usuarios" type="button" data-bs-toggle="collapse" data-bs-target="#btnExpandirAlunos" aria-expanded="false" aria-controls="btnExpandirAlunos">
        <i class="bi bi-box-arrow-right"></i>
        ${u.name}</li>`
        showUser()
    });
    
}
function showUser(){
    const usuariosRegistrados = JSON.parse(localStorage.getItem("RegisterUser"))
    const userList = document.querySelectorAll(".usuarios")    
    userList.forEach(function(usuario, index){
        usuario.addEventListener('click', function(e){
            const usuarioSelecionado = usuariosRegistrados[index]
            console.log(usuario.name)
        const credenciaisAlunos = document.querySelector('.credenciaisAlunos')
        credenciaisAlunos.innerHTML = `
            
        <br>${usuarioSelecionado.name}
            <br>${usuarioSelecionado.email}
            <br>${usuarioSelecionado.Realname}
            <br>${usuarioSelecionado.curso}
        `        
        excluirUser()
        })
    })
}

userInjection()


//função que pode ser usada permanecendo na tela, ou para sumir fica a critério do grupo, deixei na tela, podemos colocar outra coisa tambem
function exibeNome(){
    const user = JSON.parse(localStorage.getItem("LogedUser"))

    const saudacao = document.querySelector('.saudacao')

    saudacao.innerHTML = `Olá Administrador ${user[0].name}, bem vindo a sala de administração`

    saudacao.style.display = 'block'

    setTimeout(() => {
        saudacao.style.display = 'none'
    }, 4000);
     console.log(user[0].name + 'aaaa')
}

exibeNome()

//função excluir usuario

function excluirUser(){
    showUser()
    const excluirUsuario = document.querySelector('.btn-excluir')
    
    const listaUsers = JSON.parse(localStorage.getItem("RegisterUser"))
        excluirUsuario.addEventListener('click', function() {

            listaUsers.find(usuarioSelecionado.name) ={}
            listaUsers.splice(posicao, 1)

            localStorage.setItem("registerUser", JSON.stringify(listaUsers))

            console.log(listaUsers)
        })
}

function exluirAll() {
    const modal = new bootstrap.Modal(document.getElementById('meuModal'))
    modal.show()

    const btnConfirma = document.querySelector('.btnConfirma')

    btnConfirma.addEventListener('click', function () {
        const user = JSON.parse(localStorage.getItem("LogedUser"))

            const usuarioLogado = user[0]

            localStorage.clear()
            localStorage.setItem("RegisterUser", JSON.stringify([usuarioLogado]))
            // Salva o usuario atual como o unico item da lista de usuarios cadastrados

            localStorage.setItem("LogedUser", JSON.stringify([usuarioLogado]))
            // Garante que o usuário continue logado após a limpeza do localStorage

            location.reload()
    })
}