document.querySelector(`form`).addEventListener(`submit`, (e)=>{
    e.preventDefault()
    // buscar informações do usuário logado
    const user = JSON.parse(localStorage.getItem("LogedUser"))
    
    // buscar as informaçoes do que está sendo inserido no forms
    const textoDemanda = $('#textoDemanda').val()
    const tituloDemanda = $('#novaDemanda').val()
    const filesLocation = $('#fileLocation')[0].files[0]
    const filesLocInput = filesLocation ? URL.createObjectURL(filesLocation) : ''
    
    // agora, vamos buscar o vetor de demandas salvo em localstorage
    let demandasExistentes = JSON.parse(localStorage.getItem("DemandasFakeDB")) || [];

    // a seguir, montaremos um novo objeto de demandas
    const newDemanda = {
            data_curso: user[0].curso,
            user_demanda: user[0].name,
            demanda_title: tituloDemanda,
            demanda_content: textoDemanda,
            demanda_tag: user[0].curso,
            file_location: filesLocInput
    }

    
    // agora, inserir no novo vetor, a nova demanda
    demandasExistentes.unshift(newDemanda);

    // agora vamos regravar o localstorage com as alterações do vetor
    localStorage.setItem("DemandasFakeDB", JSON.stringify(demandasExistentes));


    const modalElement = bootstrap.Modal.getInstance(document.getElementById('modalDemanda'))

    modalElement.hide()

    cardConstructor()
    montademanda()

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


function cardConstructor(){
    const cardFakeDB = JSON.parse(localStorage.getItem("DemandasFakeDB"))
    
    const cards = document.querySelector(".row_cards")
    
    cards.innerHTML = ""

    cardFakeDB.forEach((d)=>{



        cards.innerHTML += `
                <div class="col-12" data-curso="${d.data_curso}">
                  <div class="card mb-4">
                    <div class="card-body">
                      <div class="name_user">
                        <span>
                          <img  class="imagem-user"  src="/assets/img/ImagemUser.jpg" class="rounded-circle" alt="">
                          <span class="fs-5 fw-bold user_name">${d.user_demanda}</span>
                        </span>
                      </div>
                      <h4 class="titulo">${d.demanda_title}</h4>
                      <p class="card-text mb-0 descricao">${d.demanda_content}</p>
                      <span class="curso-tag d-none">${d.demanda_tag}</span>
                    </div>
                    <div class="row justify-content-end m-2">
                      <div class="btn-group col-auto mt-auto">
                        <button type="button" class="btn demanda_btn">Ver demanda</button>
                      </div>
                    </div>
                  </div>
                </div>
        `

    })

    
}



function getCheckedValues() {
  const form = document.getElementById('form_filter');

  // Seleciona todos os checkboxes marcados dentro do formulário
  const checkedBoxes = form.querySelectorAll('input[type="checkbox"]:checked');

  // Mapeia os elementos e retorna um array com os valores
  const values = Array.from(checkedBoxes).map(checkbox => checkbox.value);

  return values;
}



function filter(formID) {
  const demandas = JSON.parse(localStorage.getItem("DemandasFakeDB")) || [];
  const cards = document.querySelector(".row_cards");
  const form = document.getElementById(formID);

  const cursosSelecionados = Array.from(
    form.querySelectorAll('input[type="checkbox"]:checked')
  ).map(checkbox => checkbox.value);

  cards.innerHTML = ``;

  const noCards = `
    <div style="display: flex; flex-direction: column; align-items: center; text-align: center; min-height: 50vh" class="">
        <p>Oops. Nenhuma demanda encontrada!</p>
        <img src="/assets/img/sad_cow.gif" style="width: 80px; height: auto;">
    </div>`;

  let encontrouAlguma = false;

  demandas.forEach((d) => {
    if (cursosSelecionados.length === 0 || cursosSelecionados.includes(d.data_curso)) {
      encontrouAlguma = true;
      cards.innerHTML += `
        <div class="col-12" data-curso="${d.data_curso}">
          <div class="card mb-4">
            <div class="card-body">
              <div class="name_user">
                <span>
                  <img class="imagem-user" src="/assets/img/ImagemUser.jpg" class="rounded-circle" alt="">
                  <span class="fs-5 fw-bold user_name">${d.user_demanda}</span>
                </span>
              </div>
              <h4 class="titulo">${d.demanda_title}</h4>
              <p class="card-text mb-0 descricao">${d.demanda_content}</p>
              <span class="curso-tag d-none">${d.demanda_tag}</span>
            </div>
            <div class="row justify-content-end m-2">
              <div class="btn-group col-auto mt-auto">
                <button type="button" class="btn demanda_btn">Ver demanda</button>
              </div>
            </div>
          </div>
        </div>
      `;
    }
  });

  
  if (!encontrouAlguma) {
    cards.innerHTML = noCards;
  }

  
  montademanda();
}



document.getElementById("form_filter_sidebar").addEventListener('change', () => {
  filter("form_filter_sidebar");
});
document.getElementById("form_filter_dropdown").addEventListener('change', () => {
  filter("form_filter_dropdown");
});


document.querySelector("#clear_filter").addEventListener('click', () => {
  document.getElementById("form_filter_sidebar").reset();
  cardConstructor();
});

document.querySelector("#filter_btn_sm").addEventListener('click', () => {
  document.getElementById("form_filter_dropdown").reset();
  cardConstructor();
});



cardConstructor()


montademanda()