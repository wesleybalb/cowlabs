Bem-vindo(a) ao nosso projeto! Siga este guia para contribuir de forma eficiente e manter o projeto organizado.

1. Requisitos Básicos
Git e GitHub instalados.
Conhecimento básico de HTML, CSS, Bootstrap, e jQuery.
2. Trabalhando em uma Nova Funcionalidade ou Correção de Bug
Faça o Fork do Repositório:

Clique no botão "Fork" no topo da página do repositório para criar uma cópia no seu GitHub.
Clone o Repositório para Sua Máquina:

Abra o terminal e use o comando:
bash
Copiar código
git clone https://github.com/seu-usuario/nome-do-repositorio.git
Crie um Novo Branch:

Crie um branch para a funcionalidade ou bug em que você vai trabalhar:
bash
Copiar código
git checkout -b nome-do-branch
Exemplo: git checkout -b feature/nova-funcionalidade.
Faça suas Alterações:

Trabalhe normalmente e faça alterações no código.
Comite Suas Alterações:

Adicione e faça o commit com uma mensagem descritiva:
bash
Copiar código
git add .
git commit -m "Descrição do que foi feito"
Envie suas Alterações para o GitHub:

Envie o branch para o GitHub:
bash
Copiar código
git push origin nome-do-branch
Abra um Pull Request:

No GitHub, vá para a página do repositório e clique em "Compare & Pull Request".
Descreva suas alterações e peça uma revisão.
Revisão e Mesclagem:

Um colega de equipe revisará suas alterações. Assim que tudo estiver aprovado, o branch será mesclado ao main.
3. Padrões de Código
HTML/CSS: Seguir as boas práticas de semântica e acessibilidade.
JavaScript/jQuery: Utilize funções claras e nomeie variáveis de forma descritiva.
Commits: Utilize mensagens claras e objetivas, preferencialmente no formato:
add: para adicionar algo novo.
fix: para corrigir algo.
update: para atualizações.
4. Revisão de Código
Sempre revise os pull requests de outros membros com atenção.
Sugira melhorias de código ou faça perguntas se algo não estiver claro.
