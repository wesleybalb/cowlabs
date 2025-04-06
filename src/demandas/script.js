$(document).ready(function() {
    
    $('form').on('submit', function(e) {
        e.preventDefault()
        
        const user = JSON.parse(localStorage.getItem("LogedUser"))
        
        const novaDemanda = $('#novaDemanda').val()
        const textoDemanda = $('#textoDemanda').val()
        const imagemInput = $('#imagemDemanda')[0].files[0]
        const imagemURL = imagemInput ? URL.createObjectURL(imagemInput) : ' '

            const novoCard = `
                <div class="col-12">
                    <div class="card mb-4">
                        <div class="card-body">
                        <div class="name_user">
                        <span>
                        <img id="imagem-user" src="/assets/img/ImagemUser.jpg" class="rounded-circle" alt="">
                        <span <span class="fs-5 fw-bold user_name" id="user_name">${user[0].name}</span>
                        </span>
                        </div>
                            <h4 class="titulo">${novaDemanda}</h4>
                            <p class="card-text mb-0 descricao">${textoDemanda}</p>
                        </div>
                        <img src="${imagemURL}" alt="" class="card-img-bottom">
                        <div class="row justify-content-end m-2">
                            <div class="btn-group col-4 mt-auto">
                                <button type="button" class="btn demanda_btn">
                                    Ver demanda
                                </button>
                            </div>
                        </div>
                    
                </div>
            `

        //prepend faz com que a postagem mais rescente aparecça primeiro
        $('.row_cards').prepend(novoCard)
        $('#novaDemanda').val('')
        $('#textoDemanda').val('')
        $('#imagemDemanda').val('')

        const modalElement = bootstrap.Modal.getInstance(document.getElementById('modalDemanda'))
        modalElement.hide()
    })
})


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

profileConstructor()


// Espera o DOM carregar
document.addEventListener("DOMContentLoaded", function () {
    // Seleciona todos os botões
    const botoes = document.querySelectorAll(".demanda_btn");
    
    botoes.forEach((botao) => {
        botao.addEventListener("click", function () {
        // Sobe até o card onde o botão está
        const card = botao.closest(".card");
    
        // Captura os dados
        const nomeUsuario = card.querySelector(".user_name").innerHTML;
        const titulo = card.querySelector(".titulo").innerHTML;
        const descricao = card.querySelector(".descricao").innerHTML;
        
    
        // Cria o objeto com os dados
        const dadosDemanda = {
            usuario: nomeUsuario,
            titulo: titulo,
            descricao: descricao,
        
        };
    
        // Salva no localStorage
        localStorage.setItem("demandaSelecionada", JSON.stringify(dadosDemanda));
    
        
        window.location.href="/src/demanda_view/index.html"


        });
    });
});
    




function logout(){
    localStorage.removeItem("LogedUser")

    document.getElementById("logoutDialog").showModal();
    
    setTimeout(()=>{

        window.location.href = '../home/index.html';
    
    }, 3000);
    
}



