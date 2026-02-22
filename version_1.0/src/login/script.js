document.querySelector("#login-form").addEventListener("submit", validaLogin)


function validaLogin(e) {

    e.preventDefault();

    const user = document.querySelector("#user").value
    const senha = document.querySelector("#Senha").value

    let userReg = JSON.parse(localStorage.getItem("RegisterUser"))

    const chekDefUser = userReg.find(p=>p.name===user)
    
    if(chekDefUser.name == user){
        
        if(chekDefUser.Senha == senha){
            meuDialogo()
            localStorage.setItem("LogedUser", JSON.stringify([
                {
                    name: chekDefUser.name,
                    realname:chekDefUser.Realname,
                    tipo: chekDefUser.Tipo,
                    curso: chekDefUser.curso,
                    email: chekDefUser.email,
                }
            ]));

            
                

        }else{
            alert("As senhas não conferem")
        }

    }else{
        alert("Erro")
    }
    console.log(chekDefUser)
    console.log(chekDefUser.name)
    console.log(chekDefUser.Senha)
}



function meuDialogo(){
    document.getElementById("meuDialogo").showModal()

    setTimeout(()=>{
      window.location.href = '../demandas/index.html';

    }, 2000);


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
    
 
    // const user = document.getElementById('user').value;
    // const password = document.getElementById('password').value;

    // if (user && password) {
    //     window.location.href = '../demandas/index.html';
    // } else {
    //     alert('Por favor, preencha todos os campos.');
    // }
// });




