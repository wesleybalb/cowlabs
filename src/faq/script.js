//esse documento serve apenas para que quando o usuário abra o faq o primeiro acordeão não esteja pré-selecionado então não o exclua pf :)
    document.addEventListener("DOMContentLoaded", function() {  
        const firstAccordion = document.querySelector('#panelsStayOpen-collapseOne');  
        const button = firstAccordion.previousElementSibling.querySelector('button');  
        
        if (firstAccordion) {  
            // Garante que o acordeão esteja fechado  
            firstAccordion.classList.remove('show');   
            button.classList.add('collapsed');   
            button.setAttribute('aria-expanded', 'false');  
        }  
    });  