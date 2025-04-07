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
                                <button type="button" class="btn demanda_btn" onclick="montademanda()">
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


function montademanda(){
    
    // vamos usar o queryselectorall para aplicar a função a todos os botões que já existem na página
    const botoes = document.querySelectorAll(".demanda_btn");
    console.log(botoes)
    // a query selector cria um vetor com cada um dos botões. Por isso, vamos usar um forEach para incluir um escutador de evento click nesses botões
    botoes.forEach((botao) => {
        botao.addEventListener("click", function () {
        
        // vamos usar o closest para buscar o elemento pai a que está vinculado o botão, assim poderemos pegar os dados dentro do card selecionado 
        const card = botao.closest(".card");
    
        // Vamos capturar os dados que transportaremos para a página criada
        const nomeUsuario = card.querySelector(".user_name").innerHTML;
        const titulo = card.querySelector(".titulo").innerHTML;
        const descricao = card.querySelector(".descricao").innerHTML;
        
    
        // Para não perdermos a informação e podermos usá-la na próxima página vamos criar um objeto para gravar no localstorage
        const dadosDemanda = {
            usuario: nomeUsuario,
            titulo: titulo,
            descricao: descricao,
        
        };
    
        // Agora que o objeto foi criado, vamos salvá-lo no local storage
        localStorage.setItem("demandaSelecionada", JSON.stringify(dadosDemanda));
    
        // depois que o objeto foi gravado, podemos chamar a próxima página, que conterá uma função para carregar as informações já salvas no localstorage
        window.location.href="/src/demanda_view/index.html"

        });
    });
}

    




montademanda()