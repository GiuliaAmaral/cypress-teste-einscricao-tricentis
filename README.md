# Cypress-teste-einscricao-tricentis
Este repositório contém testes automatizados desenvolvidos com Cypress para simular a experiência de usuário ao realizar a inscrição em um evento e preencher um formulários de seguro

![Resultado do test e2e](/resultado-testes.jpg "Resultado do test e2e")

## Requisitos
- NodeJS
- NPM

## Como usar em ambiente dev:
- Se for sua primeira vez digite `npm install` no diretorio raiz para baixar as depencias do projeto.
- Use o comando `npm start` para iniciar a interface do Cypress por onde poderá ver e executar cada arquivo de cenário de teste.
- Caso preferir poderá rodar todos o test e2e pelo terminal sem abrir a interface do Cypress usando o comando `npm run test`.

## Documentação dos testes e-Inscrição
- [Adquirir um ingresso ao criar uma conta durante a compra](cypress/e2e/1-ingresso-evento/1-criar-conta.md)
- [Adquirir um ingresso ao fazer login com conta existente](cypress/e2e/1-ingresso-evento/2-login-conta.md)
- [Adquirir um ingresso sem criar uma conta](cypress/e2e/1-ingresso-evento/3-sem-conta.md)

## Documentação dos testes Tricents
- [Adquirir uma cotação de seguro de veículo](cypress/e2e/2-seguro-tricentis/1-solicitacao-seguro.md)

## Vídeos de resultado do test:
- [Execução do e2e completo no terminal](https://onelineplayer.com/player.html?url=https://github.com/GiuliaAmaral/cypress-teste-einscricao-tricentis/raw/main/video-e2e-terminal.mp4&autoplay=false&autopause=false&muted=false&loop=true&poster=&time=true&progressBar=true&overlay=true&muteButton=true&fullscreenButton=true&style=light&quality=auto&playButton=true)
- [Adquirir um ingresso ao criar uma conta durante a compra](https://onelineplayer.com/player.html?url=https://github.com/GiuliaAmaral/cypress-teste-einscricao-tricentis/raw/main/cypress/videos/1-ingresso-evento/1-criar-conta.cy.js.mp4&autoplay=false&autopause=false&muted=false&loop=true&poster=&time=true&progressBar=true&overlay=true&muteButton=true&fullscreenButton=true&style=light&quality=auto&playButton=true)
- [Adquirir um ingresso ao fazer login com conta existente](https://onelineplayer.com/player.html?url=https://github.com/GiuliaAmaral/cypress-teste-einscricao-tricentis/raw/main/cypress/videos/1-ingresso-evento/2-login-conta.cy.js.mp4&autoplay=false&autopause=false&muted=false&loop=true&poster=&time=true&progressBar=true&overlay=true&muteButton=true&fullscreenButton=true&style=light&quality=auto&playButton=true)
- [Adquirir um ingresso sem criar uma conta](https://onelineplayer.com/player.html?url=https://github.com/GiuliaAmaral/cypress-teste-einscricao-tricentis/raw/main/cypress/videos/1-ingresso-evento/3-sem-conta.cy.js.mp4&autoplay=false&autopause=false&muted=false&loop=true&poster=&time=true&progressBar=true&overlay=true&muteButton=true&fullscreenButton=true&style=light&quality=auto&playButton=true)
- [Adquirir uma cotação de seguro de veículo](https://onelineplayer.com/player.html?url=https://github.com/GiuliaAmaral/cypress-teste-einscricao-tricentis/raw/main/cypress/videos/2-seguro-tricentis/1-solicitao-seguro.cy.js.mp4&autoplay=false&autopause=false&muted=false&loop=true&poster=&time=true&progressBar=true&overlay=true&muteButton=true&fullscreenButton=true&style=light&quality=auto&playButton=true)