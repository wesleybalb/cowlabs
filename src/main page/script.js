$(document).ready(function() {
    // Ao submeter o formulário, a ação padrão é impedida
    $('form').on('submit', function(e) {
        e.preventDefault(); 
        
        // Captura os valores dos campos de entrada
        const novaDemanda = $('#novaDemanda').val();  
        const textoDemanda = $('#textoDemanda').val();  
        const imagemInput = $('#imagemDemanda')[0].files[0];  
        const imagemURL = imagemInput ? URL.createObjectURL(imagemInput) : 'https://via.placeholder.com/320x320'; // URL da imagem, padrão se não houver imagem
        
        // Verifica se os campos obrigatórios foram preenchidos
        if (!novaDemanda || !textoDemanda) {
            alert('Por favor, preencha todos os campos obrigatórios.');
            return;
        }

        // Criação do novo card com os dados preenchidos
        const novoCard = `
            <div class="col-md-4">
                <div class="card mb-4 shadow-sm">
                    <img class="bd-placeholder-img img-320" src="${imagemURL}" />
                    <div class="card-body d-flex flex-column">
                        <h4>${novaDemanda}</h4>
                        <p class="card-text">${textoDemanda}</p>
                        <div class="btn-group mt-auto">
                            <button type="button" class="btn btn-sm btn-outline-secondary">Ver demanda</button>
                            <button type="button" class="btn btn-sm btn-outline-secondary">Começar demanda</button>
                        </div>
                    </div>
                </div>
            </div>
        `;

        // Adiciona o novo card à lista de tarefas
        $('.album .row').append(novoCard);

        // Limpa os campos do formulário após o envio
        $('#novaDemanda').val('');
        $('#textoDemanda').val('');
        $('#imagemDemanda').val('');

        // Fecha o modal após o envio da demanda
        const modalElement = bootstrap.Modal.getInstance(document.getElementById('modalDemanda'));
        modalElement.hide();
    });
});
