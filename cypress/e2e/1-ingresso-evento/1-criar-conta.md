# Caso de Teste: Adquirir um ingresso ao criar uma conta durante a compra

### Objetivo:

O objetivo deste teste automatizado é verificar o processo de aquisição de ingressos para um evento quando o usuário continua a compra criando uma conta no sistema.


### Passos do Teste:

1.  Acesso à Página Inicial

    -   Acessar a URL relacionada ao ticket do evento.
    -   Verificar se a página é carregada corretamente.
2.  Adicionar Quantidade de Ingressos

    -   Localizar e clicar no botão "+" para adicionar a quantidade de ingressos.
    -   Verificar se a quantidade de ingressos é incrementada corretamente.
3.  Continuar a Compra

    -   Clicar no botão de continuar a compra após adicionar os ingressos ao carrinho.
    -   Limpar a sessão para evitar conflitos com dados de sessão anteriores.
4.  Criar Nova Conta

    -   Optar por criar uma nova conta no sistema para continuar a compra.
5.  Preencher Campos do Formulário

    -   Preencher o formulário com diferentes cenários, validando o preenchimento dos campos (nome, e-mail, documentos, senha).
    -   Verificar se a validação dos campos é realizada corretamente.
6.  Validação da Tela de Confirmação de Participantes

    -   Aguardar a tela carregar após o preenchimento dos dados do participante.
    -   Selecionar o participante apropriado.
    -   Finalizar o preenchimento da tela de participantes.
7.  Validação da Tela de Pedido

    -   Aguardar a tela carregar após o envio do formulário.
    -   Verificar se a mensagem "Pedido feito com sucesso!" é exibida.
    -   Verificar se o QRCode é gerado e exibido corretamente.
    -   Verificar se o sistema de avaliação é apresentado após o pedido ser concluído.
    -   Verififcar se foi gerado o arquivo PDF do ingresso
8.  Ver Minhas Inscrições

    -   Verificar se o botão "Ver Minhas Inscrições" está presente e funcional.

### Resultados Esperados:

-   O sistema deve permitir adicionar ingressos à compra.
-   A criação de conta deve ser realizada com sucesso.
-   Os campos do formulário devem ser validados corretamente.
-   A conclusão da compra deve resultar na exibição da mensagem de sucesso, na geração do QRCode, acesso às informações de inscrição e no arquivo PDF

## Vídeo do teste:

- [Adquirir um ingresso ao criar uma conta durante a compra](https://onelineplayer.com/player.html?url=https://github.com/GiuliaAmaral/cypress-teste-einscricao-tricentis/raw/main/cypress/videos/1-ingresso-evento/1-criar-conta.cy.js.mp4&autoplay=false&autopause=false&muted=false&loop=true&poster=&time=true&progressBar=true&overlay=true&muteButton=true&fullscreenButton=true&style=light&quality=auto&playButton=true)


