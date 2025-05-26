document.addEventListener("DOMContentLoaded", function () {
    const dados = JSON.parse(localStorage.getItem("demandaSelecionada"));

    if (dados) {
        document.querySelector("#nomeUsuario").textContent = dados.usuario;
        document.querySelector("#tituloDemanda").textContent = dados.titulo;
        document.querySelector("#descricaoDemanda").textContent = dados.descricao;
    }
});


document.querySelector("#comentar").addEventListener("click", comentar)

function comentar(e){
    e.preventDefault();

    const comentarios = document.querySelector(".newcoments")
    const msg = document.querySelector("#msg")

    const user = JSON.parse(localStorage.getItem("LogedUser"))

    comentarios.innerHTML += `
        <div class="card card_coment m-2">
            <div class="name_user m-2">
                <span>
                    <img src="/assets/img/ImagemUser.jpg" class="imagem-user rounded-circle" alt="">
                    <span class="fs-5 fw-bold user_name">${user[0].name}</span>
                </span>
                </div>
                    <p class="card-text  descricao m-2">${msg.value}</p>
                </div>
    
    `
    console.log(msg.value)
}


document.querySelector("#back").addEventListener("click", back)

function back(){
    localStorage.removeItem("demandaSelecionada")
    window.location.href="/src/demandas/index.html"
}