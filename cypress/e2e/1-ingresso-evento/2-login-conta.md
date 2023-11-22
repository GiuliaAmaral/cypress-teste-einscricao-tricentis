# Caso de Teste: Adquirir um ingresso ao fazer login com conta existente

### Objetivo:

O objetivo deste teste automatizado é verificar o processo de aquisição de ingressos para um evento quando o usuário possui uma conta e faz login para realizar a compra.


### Passos do Teste:

1.  Acesso à Página Inicial

    -   Acessar a página inicial do sistema para adquirir o ticket do evento.
    -   Verificar se a página inicial é carregada corretamente.
2.  Adicionar Quantidade de Ingressos

    -   Localizar e clicar no botão "+" para adicionar a quantidade de ingressos desejada.
    -   Verificar se a quantidade de ingressos é incrementada corretamente.
3.  Continuar a Compra

    -   Clicar no botão de continuar a compra após adicionar os ingressos ao carrinho.
    -   Limpar a sessão para evitar conflitos com dados de sessão anteriores.
4.  Fazer Login na Conta Existente

    -   Optar por fazer login com uma conta existente no sistema.
    -   Preencher o formulário com e-mail e senha válidos.
    -   Verificar se a autenticação é feita corretamente.
5.  Validação da Tela de Confirmação de Participantes

    -   Aguardar a tela carregar após o preenchimento dos dados do participante.
    -   Selecionar o participante apropriado.
    -   Finalizar o preenchimento da tela de participantes.
6.  Validação da Tela de Pedido

    -   Aguardar a tela carregar após o envio do formulário.
    -   Verificar se a mensagem "Pedido feito com sucesso!" é exibida.
    -   Verificar se o QRCode é gerado e exibido corretamente.
    -   Verificar se é gerado o PDF do ingresso.
    -   Verificar se o sistema de avaliação é apresentado após o pedido ser concluído.
7.  Ver Minhas Inscrições

    -   Verificar se o botão "Ver Minhas Inscrições" está presente e funcional.
    -   Verificar se os campos de inscrição estão visíveis na página seguinte.

### Resultados Esperados:

-   O sistema deve permitir adicionar ingressos à compra.
-   O login com a conta existente deve ser realizado com sucesso.
-   A conclusão da compra deve resultar na exibição da mensagem de sucesso, na geração do QRCode, acesso às informações de inscrição e no PDF do ingresso

### Vídeo do teste:

- [Adquirir um ingresso ao fazer login com conta existente](https://onelineplayer.com/player.html?url=https://github.com/GiuliaAmaral/cypress-teste-einscricao-tricentis/raw/main/cypress/videos/1-ingresso-evento/2-login-conta.cy.js.mp4&autoplay=false&autopause=false&muted=false&loop=true&poster=&time=true&progressBar=true&overlay=true&muteButton=true&fullscreenButton=true&style=light&quality=auto&playButton=true)
