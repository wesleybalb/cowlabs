$(document).ready(function() {
    
    $('form').on('submit', function(e) {
        e.preventDefault()
        
        
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
                        <span class="fs-5 fw-bold" id="user_name">"Nome do usuário"</span>
                        </span>
                        </div>
                            <h4>${novaDemanda}</h4>
                            <p class="card-text mb-0">${textoDemanda}</p>
                        </div>
                        <img src="${imagemURL}" alt="" class="card-img-bottom">
                        <div class="btn-group mt-auto">
                                <button type="button" class="btn btn btn-outline-secondary">Ver demanda</button>
                                <button type="button" class="btn btn btn-outline-secondary" data-bs-toggle="" data-bs-target="">Começar demanda</button>
                            </div>
                    </div>
                </div>
            `

        //prepend faz com que a postagem mais rescente aparecça primeiro
        $('.cards .row').prepend(novoCard)
        $('#novaDemanda').val('')
        $('#textoDemanda').val('')
        $('#imagemDemanda').val('')

        const modalElement = bootstrap.Modal.getInstance(document.getElementById('modalDemanda'))
        modalElement.hide()
    })
})

