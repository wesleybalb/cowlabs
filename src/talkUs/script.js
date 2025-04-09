function inicialization (){
    const logedCheker = document.getElementById("logedCheker")
    
    const LogedUser = localStorage.getItem("LogedUser")

    if(LogedUser){
        
        logedCheker.innerHTML = `
            <li class="nav-item nav justify-content-end dropdown none">
            <a class="nav-link dropdown-toggle btn profile_img" data-bs-toggle="dropdown" role="button" aria-expanded="false" id="profile_img" ><img  src="/assets/img/ImagemUser.jpg" alt="" srcset="" ></a>
            <ul class="dropdown-menu" >
            <div id="profile_list">
        
            </div>
            <li><hr class="dropdown-divider"></li>
            <li><button class="dropdown-item" role="button" id="logout" onclick="logout()">Logout</button></li>
            </ul>
            </li> 
        `
        profileConstructor()
        return
    }else{
        
        
        logedCheker.innerHTML = `
          <div class="col-md-3 text-end">
          <a href="/src/login/index.html" class="btn personal_btn me-2">Login</a>
            </div>
        `
    }
    
 
}


inicialization()

function profileConstructor(){
    const user = JSON.parse(localStorage.getItem("LogedUser"))

    const profileList = document.querySelector("#profile_list")

    
    let profileImg = document.getElementById("profile_img");

    
    if(user[0].tipo == "Admin"){
        profileImg.innerHTML = '<img class="Admin" src="/assets/img/profile_img/Admin.png" alt="" srcset="">'

    }else{
        if(user[0].tipo == "Professor"){
            profileImg.innerHTML = '<img class="professor" src="/assets/img/profile_img/Professor.png" alt="" srcset="">'
            
        }else{
            switch(user[0].curso) {
                case "Sistemas de Informação":
                    profileImg.innerHTML = '<img class="aluno" src="/assets/img/profile_img/SI.png" alt="" srcset="">'
                    break;
                case "Administração":
                    profileImg.innerHTML = '<img class="aluno" src="/assets/img/profile_img/administration.png" alt="" srcset="">'
                    break;
                case "Ciências Biológicas":
                    profileImg.innerHTML = '<img class="aluno" src="/assets/img/profile_img/biological.png" alt="" srcset="">'
                    break;
                case "Ciências Contábeis":
                    profileImg.innerHTML = '<img class="aluno" src="/assets/img/profile_img/accounting.png" alt="" srcset="">'
                    break;
                case "Direito":
                    profileImg.innerHTML = '<img class="aluno" src="/assets/img/profile_img/Direito.png" alt="" srcset="">'
                    break;
                case "Design":
                    profileImg.innerHTML = '<img class="aluno" src="/assets/img/profile_img/Design.png" alt="" srcset="">'
                    break;
                case "Educação Física":
                    profileImg.innerHTML = '<img class="aluno" src="/assets/img/profile_img/educacao_fisica.png" alt="" srcset="">'
                    break;
                case "Engenharia ABI":
                    profileImg.innerHTML = '<img class="aluno" src="/assets/img/profile_img/Engenharia.png" alt="" srcset="">'
                    break;
                case "Engenharia Ambiental":
                    profileImg.innerHTML = '<img class="aluno" src="/assets/img/profile_img/Engenharia_Ambiental.png" alt="" srcset="">'
                    break;
                case "Engenharia Civil":
                    profileImg.innerHTML = '<img class="aluno" src="/assets/img/profile_img/Engenharia_Civil.png" alt="" srcset="">'
                    break;
                case "Engenharia de Produção":
                    profileImg.innerHTML = '<img class="aluno" src="/assets/img/profile_img/Engenharia_de_Producao.png" alt="" srcset="">'
                    break;
                case "Engenharia Elétrica":
                    profileImg.innerHTML = '<img class="aluno" src="/assets/img/profile_img/Engenharia_Eletrica.png" alt="" srcset="">'
                    break;
                case "Engenharia Mecânica":
                    profileImg.innerHTML = '<img class="aluno" src="/assets/img/profile_img/Engenharia_Mecanica.png" alt="" srcset="">'
                    break;
                case "Enfermagem":
                    profileImg.innerHTML = '<img class="aluno" class="aluno" src="/assets/img/profile_img/Enfermagem.png" alt="" srcset="">'
                    break;
                case "Medicina":
                    profileImg.innerHTML = '<img class="aluno" src="/assets/img/profile_img/Medicina.png" alt="" srcset="">'
                    break;
                case "Nutrição":
                    profileImg.innerHTML = '<img class="aluno" src="/assets/img/profile_img/Nutricao.png" alt="" srcset="">'
                    break;
                case "Odontologia":
                    profileImg.innerHTML = '<img class="aluno" src="/assets/img/profile_img/Odonto.png" alt="" srcset="">'
                    break;
                case "Publicidade e Propaganda":
                    profileImg.innerHTML = '<img class="aluno" src="/assets/img/profile_img/Publicidade_e_Propaganda.png" alt="" srcset="">'
                    break;
                case "Serviço Social":
                    profileImg.innerHTML = '<img class="aluno" src="/assets/img/profile_img/Servico_Social.png" alt="" srcset="">'
                    break;
                case "Técnico em Enfermagem":
                    profileImg.innerHTML = '<img class="aluno" src="/assets/img/profile_img/Tecnico_em_Enfermagem.png" alt="" srcset="">'
                    break;
                default:
                    text = "I have never heard of that fruit...";
            }
        }
    
    }

    profileList.innerHTML = `
        <li><a class="dropdown-item text-end" href="#">${user[0].name}</a></li>
        <li><a class="dropdown-item text-end" href="#">${user[0].curso}</a></li>
        <li><a class="dropdown-item text-end" href="#">${user[0].tipo}</a></li>

    `
    console.log(user[0].name)
}



$(document).ready(function() {



    $('#telefone').mask('(00)00000-0000', {

        placeholder:'(00)00000-0000'
    })

    $('form').validate({
        rules: {
            nome: {
                required: true
            },
            email: {
                required: true,
                email: true 
            },
            mensagem: {
                required: true
            }
        },
        messages: {
            nome: 'Por favor, insira o seu nome',
            email: 'Por favor, insira um e-mail válido', 
            mensagem: 'Por favor, insira sua mensagem' 
        },
        submitHandler: function(form, evento){
            console.log(form)
            $('#success').text("Obrigado por entrar em contato, recebemos seu formulário e vamos o responder em breve!")
            $('#success').removeClass('d-none')
            $('#alerta').addClass('d-none')
        },
        invalidHandler: function(evento, validador){
            let camposIncorretos = validador.numberOfInvalids()
            if(camposIncorretos)
            $('#alerta').removeClass('d-none')
            $('#alerta').text(`Existem ${camposIncorretos} campos incorretos. Preencha-os corretamente para falar`)
            $('#success').addClass('d-none')
        } 
    })
})

