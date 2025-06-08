function profileConstructor(){
    const user = JSON.parse(localStorage.getItem("LogedUser"))

    const profileList = document.querySelector("#profile_list")
    
    const loginOrLoged = document.querySelector("#loginOrLoged")

    let profileImg = document.getElementById("profile_img");

    if(!user){
        loginOrLoged.innerHTML = `
            <a type="button" href="../login/index.html" class="btn personal_btn me-2">
                Login
            </a>
        
        `
    }

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
                    text = "I'm a Cow in a Lab Cowlaborating with my fellow cows to create the best milk products in the world!";
            }
        }
    
    }

    profileList.innerHTML = `
        <li><a class="dropdown-item text-end" href="../demandas/index.html">Ver Demandas</a></li>
        <li><a id = "perfil" class="dropdown-item text-end" href="#">${user[0].name}</a></li>
        <li><a class="dropdown-item text-end" href="#">${user[0].curso}</a></li>
        <li><a class=" admin dropdown-item text-end" href="#">${user[0].tipo}</a></li>
    `
    console.log(user[0].name)

    console.log(user[0].tipo)

    const admin = document.querySelector(".admin")

    admin.addEventListener('click', function(){
        location.href = "/src/adminView/index.html"

    })

    document.querySelector("#perfil").addEventListener('click', function(){
        location.href = "/src/profile/dist/index.html"})
}

const LogoutDialog = `
    <dialog class=" login_dialog" id="logoutDialog">
      <p class=" fs-5">Poxa, já vai?</p>
      <img src="/assets/img/sad_cow.gif" alt="" srcset="">
    </dialog>
` 


function logout(){
    document.body.innerHTML += LogoutDialog


    localStorage.removeItem("LogedUser")

    document.getElementById("logoutDialog").showModal();
    
    setTimeout(()=>{

        window.location.href = '../home/index.html';
    
    }, 3000);
    
}

profileConstructor()

