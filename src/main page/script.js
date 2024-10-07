$(document).ready(function() {
    
    $('form').on('submit', function(e) {
        e.preventDefault(); 
        
        
        const novaDemanda = $('#novaDemanda').val();  
        const textoDemanda = $('#textoDemanda').val();  
        const imagemInput = $('#imagemDemanda')[0].files[0];  
        const imagemURL = imagemInput ? URL.createObjectURL(imagemInput) : 'https://via.placeholder.com/320x320'; padrão

        
        if (!novaDemanda || !textoDemanda) {
            alert('Por favor, preencha todos os campos obrigatórios.');
            return;
        }

      
        const novoCard = `
            <div class="col-md-4">
                <div class="card mb-4 shadow-sm">
                    <img class="bd-placeholder-img img-320"  src="${imagemURL}" />
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

       
        $('.album .row').append(novoCard);

       
        $('#novaDemanda').val('');
        $('#textoDemanda').val('');
        $('#imagemDemanda').val('');

        const modalElement = bootstrap.Modal.getInstance(document.getElementById('modalDemanda'));
modalElement.hide();
       
    });
});
   
