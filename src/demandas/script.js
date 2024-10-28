$(document).ready(function() {
    
    $('form').on('submit', function(e) {
        e.preventDefault()
        
        
        const novaDemanda = $('#novaDemanda').val()
        const textoDemanda = $('#textoDemanda').val()
        const imagemInput = $('#imagemDemanda')[0].files[0]
        const imagemURL = imagemInput ? URL.createObjectURL(imagemInput) : 'https://via.placeholder.com/320x320'

        
        if (!novaDemanda || !textoDemanda) {
            alert('Por favor, preencha todos os campos obrigatórios.')
            return;
        }


        const novoCard = `
            <div class="col-md-3">
                <div class="card shadow-sm">
                    <div class="card-body d-flex flex-column">
                    <strong>
                    <img id="imagem-user" src="/assets/img/ImagemUser.jpg" class="rounded-circle" alt="">
                    "Nome do usuário    "
                    </strong>
                        <h4>${novaDemanda}</h4>
                        <p class="card-text mb-0">${textoDemanda}</p>
                    </div>
                    <img src="${imagemURL}" alt="" class="card-img-bottom">
                </div>
            </div>
        `

        $('.album .row').append(novoCard)
        $('#novaDemanda').val('')
        $('#textoDemanda').val('')
        $('#imagemDemanda').val('')

        const modalElement = bootstrap.Modal.getInstance(document.getElementById('modalDemanda'))
        modalElement.hide()
    })
})

