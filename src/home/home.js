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
    



function demandasFakeDB(){

        const demandas = [
        {
            data_curso: "Administração",
            user_demanda: "João Silva",
            demanda_title: "Criar um plano de negócios para uma startup de tecnologia",
            demanda_content: "Criar um plano de negócios para uma startup de tecnologia fictícia, abordando missão, visão, análise de mercado e projeções financeiras.",
            demanda_tag: "Administração",
            file_location: ""
        },
        {
            data_curso: "Arquitetura e Urbanismo",
            user_demanda: "Ana Souza",
            demanda_title: "Projetar um espaço urbano sustentável",
            demanda_content: "Projetar um espaço urbano sustentável com áreas verdes, mobiliário urbano acessível e soluções ecológicas.",
            demanda_tag: "Arquitetura e Urbanismo",
            file_location: ""
        },
        {
            data_curso: "Ciência da Computação",
            user_demanda: "Carlos Oliveira",
            demanda_title: "Desenvolver um sistema web de gerenciamento de tarefas",
            demanda_content: "Desenvolver um sistema web que permita o cadastro, edição e exclusão de tarefas com autenticação de usuários.",
            demanda_tag: "Ciência da Computação",
            file_location: ""
        },
        {
            data_curso: "Direito",
            user_demanda: "Fernanda Lima",
            demanda_title: "Redigir uma petição inicial para uma ação de indenização por danos morais",
            demanda_content: "Redigir uma petição inicial com base em um caso fictício de danos morais, citando jurisprudência e fundamentação legal.",
            demanda_tag: "Direito",
            file_location: ""
        },
        {
            data_curso: "Educação Física",
            user_demanda: "Gustavo Almeida",
            demanda_title: "Elaborar um plano de treino funcional para idosos",
            demanda_content: "Elaborar um plano de treino funcional voltado para idosos, priorizando mobilidade, equilíbrio e resistência.",
            demanda_tag: "Educação Física",
            file_location: ""
        },
        {
            data_curso: "Enfermagem",
            user_demanda: "Helena Martins",
            demanda_title: "Criar um protocolo de cuidados para pacientes com diabetes",
            demanda_content: "Criar um protocolo de cuidados de enfermagem para pacientes com diabetes tipo 2, considerando orientações da SBEM.",
            demanda_tag: "Enfermagem",
            file_location: ""
        },
        {
            data_curso: "Engenharia Ambiental",
            user_demanda: "Igor Costa",
            demanda_title: "Propor soluções para redução de resíduos sólidos em um bairro",
            demanda_content: "Propor soluções para redução e reaproveitamento de resíduos sólidos em um bairro com base em dados coletados.",
            demanda_tag: "Engenharia Ambiental",
            file_location: ""
        },
        {
            data_curso: "Engenharia Civil",
            user_demanda: "Isabela Ferreira",
            demanda_title: "Projetar uma estrutura de ponte para travessia de pedestres",
            demanda_content: "Projetar uma estrutura de ponte para travessia de pedestres, considerando aspectos de resistência dos materiais e normas técnicas.",
            demanda_tag: "Engenharia Civil",
            file_location: ""
        },
        {
            data_curso: "Engenharia de Alimentos",
            user_demanda: "José Henrique",
            demanda_title: "Desenvolver um novo produto alimentício funcional",
            demanda_content: "Desenvolver um novo produto alimentício funcional que atenda às normas da Anvisa e promova benefícios à saúde.",
            demanda_tag: "Engenharia de Alimentos",
            file_location: ""
        },
        {
            data_curso: "Engenharia de Computação",
            user_demanda: "Larissa Silva",
            demanda_title: "Criar um sistema de reconhecimento facial com Python",
            demanda_content: "Criar um sistema de reconhecimento facial com Python utilizando bibliotecas de visão computacional.",
            demanda_tag: "Engenharia de Computação",
            file_location: ""
        },
        {
            data_curso: "Engenharia de Produção",
            user_demanda: "Marcos Paulo",
            demanda_title: "Mapear e melhorar o fluxo de produção de uma linha de montagem",
            demanda_content: "Mapear e melhorar o fluxo de produção de uma linha de montagem de uma fábrica fictícia com base em conceitos de Lean Manufacturing.",
            demanda_tag: "Engenharia de Produção",
            file_location: ""
        },
        {
            data_curso: "Engenharia Elétrica",
            user_demanda: "Natália Borges",
            demanda_title: "Projetar um circuito de iluminação residencial eficiente",
            demanda_content: "Projetar um circuito de iluminação residencial eficiente, considerando normas técnicas e consumo energético.",
            demanda_tag: "Engenharia Elétrica",
            file_location: ""
        },
        {
            data_curso: "Engenharia Mecânica",
            user_demanda: "Otávio Ramos",
            demanda_title: "Simular o funcionamento de um sistema de transmissão automotiva",
            demanda_content: "Simular o funcionamento de um sistema de transmissão automotiva, utilizando softwares de modelagem mecânica.",
            demanda_tag: "Engenharia Mecânica",
            file_location: ""
        },
        {
            data_curso: "Engenharia Química",
            user_demanda: "Patrícia Nogueira",
            demanda_title: "Desenvolver um processo de purificação de água utilizando carvão ativado",
            demanda_content: "Desenvolver um processo de purificação de água utilizando carvão ativado e avaliar sua eficiência em laboratório.",
            demanda_tag: "Engenharia Química",
            file_location: ""
        }];

      if(!localStorage.getItem("DemandasFakeDB")  || localStorage.getItem("DemandasFakeDB") === "{}" ){
        localStorage.setItem("DemandasFakeDB", JSON.stringify(demandas))
        }

    
    }
  

    inicialization()
    demandasFakeDB()