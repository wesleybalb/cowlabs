$(document).ready(function() {



        $('#telefone').mask('(00)00000-0000', {

            placeholder:'(00)00000-0000'
        })

        $('form').validate({
            rules: {
                nome: {
                    required: true
                },
                email: {
                    required: true,
                    email: true 
                },
                mensagem: {
                    required: true
                }
            },
            messages: {
                nome: 'Por favor, insira o seu nome',
                email: 'Por favor, insira um e-mail válido', 
                mensagem: 'Por favor, insira sua mensagem' 
            },
            submitHandler: function(form, evento){
                console.log(form)
                $('#success').text("Obrigado por entrar em contato, recebemos seu formulário e vamos o responder em breve!")
                $('#success').removeClass('d-none')
                $('#alerta').addClass('d-none')
            },
            invalidHandler: function(evento, validador){
                let camposIncorretos = validador.numberOfInvalids()
                if(camposIncorretos)
                $('#alerta').removeClass('d-none')
                $('#alerta').text(`Existem ${camposIncorretos} campos incorretos. Preencha-os corretamente para falar`)
                $('#success').addClass('d-none')
            } 
        })
    })
