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


    function inicialization(){
        if(!localStorage.getItem("RegisterUser")){
            localStorage.setItem("RegisterUser", JSON.stringify(
                [
                    {
                        name: "WesleyBalbino",
                        Realname: "Wesley Pinheiro Balbino",
                        CPF: "00000000000",
                        email: "202420243@unifoa.edu.br",
                        curso: "Sistemas de Informação",
                        Senha: "202420243",
                        Tipo: "Admin",
                        uf: "uf",
                        cidade: "cidade",
                        endereco: "endereco",
                        numero: "numero",
                        complemento: "complemento"
                    },
                    {
                        name: "LucasAndrade",
                        Realname: "Lucas Nogueira Andrade",
                        CPF: "00000000000",
                        email: "202420312@unifoa.edu.br",
                        curso: "Sistemas de Informação",
                        Senha: "202420312",
                        Tipo: "Admin",
                        uf: "uf",
                        cidade: "cidade",
                        endereco: "endereco",
                        numero: "numero",
                        complemento: "complemento"
                    },
                    {
                        name: "MarceloReis",
                        Realname: "Marcelo Ferreira Reis",
                        CPF: "00000000000",
                        email: "202420542@unifoa.edu.br",
                        curso: "Sistemas de Informação",
                        Senha: "202420542",
                        Tipo: "Admin",
                        uf: "uf",
                        cidade: "cidade",
                        endereco: "endereco",
                        numero: "numero",
                        complemento: "complemento"
                    },
                    {
                        name: "PedroVieira",
                        Realname: "Pedro Vieira Carvalho",
                        CPF: "00000000000",
                        email: "202410630@unifoa.edu.br",
                        curso: "Sistemas de Informação",
                        Senha: "202410630",
                        Tipo: "Admin",
                        uf: "uf",
                        cidade: "cidade",
                        endereco: "endereco",
                        numero: "numero",
                        complemento: "complemento"
                    },
                    {
                        name: "YuriMarch ",
                        Realname: "Yuri Rocha March",
                        CPF: "00000000000",
                        email: "202420752@unifoa.edu.br",
                        curso: "Sistemas de Informação",
                        Senha: "202420752",
                        Tipo: "Admin",
                        uf: "uf",
                        cidade: "cidade",
                        endereco: "endereco",
                        numero: "numero",
                        complemento: "complemento"
                    },
                    {
                        name: "MestreYoda ",
                        Realname: "Jedi Master",
                        CPF: "00000000000",
                        email: "mestreYoda2@unifoa.edu.br",
                        curso: "Sistemas de Informação",
                        Senha: "maytheforcebewithyou",
                        Tipo: "Professor",
                        uf: "uf",
                        cidade: "cidade",
                        endereco: "endereco",
                        numero: "numero",
                        complemento: "complemento"
                    },
                    {
                        name: "SkyWalker",
                        Realname: "LukeSkywalker",
                        CPF: "00000000000",
                        email: "skywalker@unifoa.edu.br",
                        curso: "Sistemas de Informação",
                        Senha: "r2d2",
                        Tipo: "Aluno",
                        uf: "uf",
                        cidade: "cidade",
                        endereco: "endereco",
                        numero: "numero",
                        complemento: "complemento"
                    },
                ]
            ))
        }
    }
    
    inicialization()
    