const defaultUsers = [
    {
        name: "WesleyBalbino",
        Realname: "Wesley Pinheiro Balbino",
        CPF: "00000000000",
        email: "202420243@unifoa.edu.br",
        curso: "Sistemas de Informação",
        Senha: "Raianymeumomo",
        Tipo: "Admin"
    },
    {
        name: "LucasAndrade",
        Realname: "Lucas Nogueira Andrade",
        CPF: "00000000000",
        email: "202420312@unifoa.edu.br",
        curso: "Sistemas de Informação",
        Senha: "202420312",
        Tipo: "Admin"
    },
    {
        name: "MarceloReis",
        Realname: "Marcelo Ferreira Reis",
        CPF: "00000000000",
        email: "202420542@unifoa.edu.br",
        curso: "Sistemas de Informação",
        Senha: "202420542",
        Tipo: "Admin"
    },
    {
        name: "PedroVieira",
        Realname: "Pedro Vieira Carvalho",
        CPF: "00000000000",
        email: "202410630@unifoa.edu.br",
        curso: "Sistemas de Informação",
        Senha: "202410630",
        Tipo: "Admin"
    },
    {
        name: "YuriMarch ",
        Realname: "Yuri Rocha March",
        CPF: "00000000000",
        email: "202420752@unifoa.edu.br",
        curso: "Sistemas de Informação",
        Senha: "202420752",
        Tipo: "Admin"
    },
    {
        name: "MestreYoda ",
        Realname: "Jedi Master",
        CPF: "00000000000",
        email: "mestreYoda2@unifoa.edu.br",
        curso: "Sistemas de Informação",
        Senha: "maytheforcebewithyou",
        Tipo: "Professor"
    },
    {
        name: "SkyWalker",
        Realname: "LukeSkywalker",
        CPF: "00000000000",
        email: "skywalker@unifoa.edu.br",
        curso: "Sistemas de Informação",
        Senha: "r2d2",
        Tipo: "Aluno"
    },
]


function validaLogin() {
    const user = document.querySelector("#user").value
    const senha = document.querySelector("#Senha").value

    const chekDefUser = defaultUsers.some(p=>p.name===user)
    
    if(chekDefUser == true){
        alert("Login Realizado")
    }else{
        alert("Erro")
    }

}






// $(document).ready(function() {
//     // Inicializa a validação do formulário com jQuery
//     $('#login-form').validate({
//         rules: {
//             user: {
//                 required: true
//             },
//             password: {
//                 required: true
//             }
//         },
//         messages: {
//             user: 'Por favor, insira o seu nome',
//             password: 'Por favor, insira sua senha'
//         }
//     })
// })

// document.getElementById('login-form').addEventListener('submit', function(event) {
//     event.preventDefault(); 
    
 
//     const user = document.getElementById('user').value;
//     const password = document.getElementById('password').value;

//     if (user && password) {
//         window.location.href = '../demandas/index.html';
//     } else {
//         alert('Por favor, preencha todos os campos.');
//     }
// });




