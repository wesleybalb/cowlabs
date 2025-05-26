function userInjection() {
    const usuariosRegistrados = JSON.parse(localStorage.getItem("RegisterUser"))

    const users = document.getElementById("usuarios")

    users.innerHTML = ""

    usuariosRegistrados.forEach(u => {
        users.innerHTML += `<li class="usuarios" type="button" data-bs-toggle="collapse" data-bs-target="#btnExpandirAlunos" aria-expanded="false" aria-controls="btnExpandirAlunos">
        <i class="bi bi-box-arrow-right"></i>
        ${u.name}</li>`
    });
    
    showUser()
}

console.log(document.getElementById("usuarios"))

function clearPainel() {
    const users = document.getElementById("usuarios")
    users.innerHTML = ``

}



function showUser() {
    const usuariosRegistrados = JSON.parse(localStorage.getItem("RegisterUser"))
    const userList = document.querySelectorAll(".usuarios")

    userList.innerHTML = ""



    userList.forEach(function (usuario, index) {
        usuario.addEventListener('click', function (e) {
            const usuarioSelecionado = usuariosRegistrados[index]
            console.log(usuario.name)
            const credenciaisAlunos = document.querySelector('.credenciaisAlunos')
            
            credenciaisAlunos.innerHTML = `
                <p class="d-none" id="UserSelected">${usuarioSelecionado.name}</p
                <br>${usuarioSelecionado.name}
                <br>${usuarioSelecionado.email}
                <br>${usuarioSelecionado.Realname}
                <br>${usuarioSelecionado.curso}
            `
        })
        
        
    })
    
}



function refresh() {
    clearPainel()
    userInjection()
}

userInjection()


//função que pode ser usada permanecendo na tela, ou para sumir fica a critério do grupo, deixei na tela, podemos colocar outra coisa tambem

function exibeNome() {
    const user = JSON.parse(localStorage.getItem("LogedUser"))

    const saudacao = document.querySelector('.saudacao')

    saudacao.innerHTML = `Olá Administrador ${user[0].realname}, bem vindo a sala de administração`

    saudacao.style.display = 'block'
}

exibeNome()

//função excluir usuario


document.querySelector(`.btn-excluir`).addEventListener(`click`, (e)=>{
    e.preventDefault()
    
    const UserSelected = document.querySelector("#UserSelected")
    
    userParameter = UserSelected.innerHTML
    console.log(userParameter)

    spliceUser(userParameter)
    
    

})

// function excluirUser() {
//     showUser()
//     const excluirUsuario = document.querySelector('.btn-excluir')

    
    
//     // const listaUsers = JSON.parse(localStorage.getItem("RegisterUser"))

//     // excluirUsuario.addEventListener('click', function () {

//     //     listaUsers.find(usuarioSelecionado.name) = {}
//     //     listaUsers.splice(posicao, 1)

//     //     localStorage.setItem("registerUser", JSON.stringify(listaUsers))

//     //     console.log(listaUsers)
//     // })
    
// }
function exluirAllDemandas() {
    const modal = new bootstrap.Modal(document.getElementById('meuModalDemandas'))
    modal.show()

    const btnExcluiDemandas = document.querySelector('.btnExcluiDemandas')

    btnExcluiDemandas.addEventListener('click', function(){
        excluirDemandas()
    })
}

function excluirDemandas(){
    localStorage.removeItem("DemandasFakeDB")
    localStorage.setItem("DemandasFakeDB", JSON.stringify({}))

    alert("Todas as demandas foram excluídas com sucesso.")
    

}

function exluirAll() {
    const modal = new bootstrap.Modal(document.getElementById('meuModal'))
    modal.show()

    const btnConfirma = document.querySelector('.btnConfirma')

    btnConfirma.addEventListener('click', limparUsers)
    refresh()
    

}


function getRegisterUser() {
    const getRegisterUser = JSON.parse(localStorage.getItem("RegisterUser"))
    return getRegisterUser
}

function limparUsers() {

    // pegar a informação do usuário logado. O único usuário que ficará no registro
    const userLoged = JSON.parse(localStorage.getItem("LogedUser"))

    // montar um array com os dados do registro de usuário
    const getRegisterUser = JSON.parse(localStorage.getItem("RegisterUser"))

    // pega o nome do usuário
    const nomeUser = userLoged[0].name

    // monta um array apenas com o usuário logado
    const removeAll = getRegisterUser.filter(u => u.name === nomeUser)

    // grava o apenas o usuário logado no localstorage
    localStorage.setItem("RegisterUser", JSON.stringify(removeAll))

    refresh()

    addSavior()

    alert("Apenas o usuário logado foi mantido. Todos os demais foram excluídos")

}


console.log(document.querySelector("#buttons"))

const botao = document.getElementById("Savior")
console.log(botao)

function addSavior() {
    const botao = document.getElementById("Savior")
    botao.classList.toggle("d-none")
    refresh()
}


function retoreDefault() {
    localStorage.setItem("RegisterUser", JSON.stringify(
        [
            {
                name: "WesleyBalbino",
                Realname: "Wesley Pinheiro Balbino",
                CPF: "00000000000",
                email: "202420243@unifoa.edu.br",
                curso: "Sistemas de Informação",
                Senha: "202420243",
                Tipo: "Admin",
                uf: "uf",
                cidade: "cidade",
                endereco: "endereco",
                numero: "numero",
                complemento: "complemento"
            },
            {
                name: "LucasAndrade",
                Realname: "Lucas Nogueira Andrade",
                CPF: "00000000000",
                email: "202420312@unifoa.edu.br",
                curso: "Sistemas de Informação",
                Senha: "202420312",
                Tipo: "Admin",
                uf: "uf",
                cidade: "cidade",
                endereco: "endereco",
                numero: "numero",
                complemento: "complemento"
            },
            {
                name: "MarceloReis",
                Realname: "Marcelo Ferreira Reis",
                CPF: "00000000000",
                email: "202420542@unifoa.edu.br",
                curso: "Sistemas de Informação",
                Senha: "202420542",
                Tipo: "Admin",
                uf: "uf",
                cidade: "cidade",
                endereco: "endereco",
                numero: "numero",
                complemento: "complemento"
            },
            {
                name: "PedroVieira",
                Realname: "Pedro Vieira Carvalho",
                CPF: "00000000000",
                email: "202410630@unifoa.edu.br",
                curso: "Sistemas de Informação",
                Senha: "202410630",
                Tipo: "Admin",
                uf: "uf",
                cidade: "cidade",
                endereco: "endereco",
                numero: "numero",
                complemento: "complemento"
            },
            {
                name: "YuriMarch ",
                Realname: "Yuri Rocha March",
                CPF: "00000000000",
                email: "202420752@unifoa.edu.br",
                curso: "Sistemas de Informação",
                Senha: "202420752",
                Tipo: "Admin",
                uf: "uf",
                cidade: "cidade",
                endereco: "endereco",
                numero: "numero",
                complemento: "complemento"
            },
            {
                name: "MestreYoda ",
                Realname: "Jedi Master",
                CPF: "00000000000",
                email: "mestreYoda2@unifoa.edu.br",
                curso: "Sistemas de Informação",
                Senha: "maytheforcebewithyou",
                Tipo: "Professor",
                uf: "uf",
                cidade: "cidade",
                endereco: "endereco",
                numero: "numero",
                complemento: "complemento"
            },
            {
                name: "SkyWalker",
                Realname: "LukeSkywalker",
                CPF: "00000000000",
                email: "skywalker@unifoa.edu.br",
                curso: "Sistemas de Informação",
                Senha: "r2d2",
                Tipo: "Aluno",
                uf: "uf",
                cidade: "cidade",
                endereco: "endereco",
                numero: "numero",
                complemento: "complemento"
            },
        ]
    ))
    alert("Registro de usuários restaurado para o padrão")
    addSavior()
    refresh()
}


function spliceUser(name) {
  const user = getRegisterUser();

  const trimmedName = (name || "").toString().trim();

  const userFind = user.find(u => u.name.trim() === trimmedName);

  const logedUser = JSON.parse(localStorage.getItem("LogedUser")) || [];
  const logedName = logedUser[0]?.name?.trim();

  if (trimmedName === logedName) {
    alert(`Você não pode excluir o usuário atualmente logado (${logedName}).`);
    return user;
  }

  if (userFind) {
    const newUserList = user.filter(u => u.name.trim() !== trimmedName);

    localStorage.setItem("RegisterUser", JSON.stringify(newUserList));

    alert(`Usuário "${userFind.name}" foi excluído.`);

    location.reload(); 

    return newUserList;
  } else {
    alert(`Usuário "${trimmedName}" não encontrado.`);
    return user;
  }
}





function getName (){
    const div = document.querySelector(".credenciaisAlunos")

    console.log(div)
}