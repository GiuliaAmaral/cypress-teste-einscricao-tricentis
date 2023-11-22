# Cypress-teste-einscricao-tricentis
Este repositório contém testes automatizados end2end desenvolvidos com Cypress para simular uma experiência de usuário ao realizar a inscrição em um evento e preencher um formulários de seguro de um veículo

## Requisitos de Software
- NodeJs (Versão 18.17.1 ou acima);

## Como usar em ambiente dev:
- Se for sua primeira vez, abra o diretório, e digite `npm install` no terminal para baixar as dependências do projeto;
- Use o comando `npm start` para iniciar a interface do Cypress por onde poderá ver e executar cada arquivo de testes;
- Caso preferir, poderá rodar todos o testes pelo terminal sem abrir a interface do Cypress usando o comando `npm run test`.

## Documentação dos testes e-Inscrição
Clique sobre um teste para ver sua documentação detalhada
- [Adquirir um ingresso ao criar uma conta durante a compra](cypress/e2e/1-ingresso-evento/1-criar-conta.md)
- [Adquirir um ingresso ao fazer login com conta existente](cypress/e2e/1-ingresso-evento/2-login-conta.md)
- [Adquirir um ingresso sem criar uma conta](cypress/e2e/1-ingresso-evento/3-sem-conta.md)

## Documentação dos testes Tricents
Clique sobre um teste para ver sua documentação detalhada
- [Adquirir uma cotação de seguro de veículo](cypress/e2e/2-seguro-tricentis/1-solicitacao-seguro.md)

## Vídeos de resultado dos testes:
- [Execução do e2e completo no terminal](https://onelineplayer.com/player.html?url=https://github.com/GiuliaAmaral/cypress-teste-einscricao-tricentis/raw/main/video-e2e-terminal.mp4&autoplay=false&autopause=false&muted=false&loop=true&poster=&time=true&progressBar=true&overlay=true&muteButton=true&fullscreenButton=true&style=light&quality=auto&playButton=true)
- [Adquirir um ingresso ao criar uma conta durante a compra](https://onelineplayer.com/player.html?url=https://github.com/GiuliaAmaral/cypress-teste-einscricao-tricentis/raw/main/cypress/videos/1-ingresso-evento/1-criar-conta.cy.js.mp4&autoplay=false&autopause=false&muted=false&loop=true&poster=&time=true&progressBar=true&overlay=true&muteButton=true&fullscreenButton=true&style=light&quality=auto&playButton=true)
- [Adquirir um ingresso ao fazer login com conta existente](https://onelineplayer.com/player.html?url=https://github.com/GiuliaAmaral/cypress-teste-einscricao-tricentis/raw/main/cypress/videos/1-ingresso-evento/2-login-conta.cy.js.mp4&autoplay=false&autopause=false&muted=false&loop=true&poster=&time=true&progressBar=true&overlay=true&muteButton=true&fullscreenButton=true&style=light&quality=auto&playButton=true)
- [Adquirir um ingresso sem criar uma conta](https://onelineplayer.com/player.html?url=https://github.com/GiuliaAmaral/cypress-teste-einscricao-tricentis/raw/main/cypress/videos/1-ingresso-evento/3-sem-conta.cy.js.mp4&autoplay=false&autopause=false&muted=false&loop=true&poster=&time=true&progressBar=true&overlay=true&muteButton=true&fullscreenButton=true&style=light&quality=auto&playButton=true)
- [Adquirir uma cotação de seguro de veículo](https://onelineplayer.com/player.html?url=https://github.com/GiuliaAmaral/cypress-teste-einscricao-tricentis/raw/main/cypress/videos/2-seguro-tricentis/1-solicitao-seguro.cy.js.mp4&autoplay=false&autopause=false&muted=false&loop=true&poster=&time=true&progressBar=true&overlay=true&muteButton=true&fullscreenButton=true&style=light&quality=auto&playButton=true)

# Report de melhorias encontradas
Enquanto realizava os testes automatizados nas telas da e-Inscrição, pude observar alguns
pontos de melhoria e estou repassando para a equipe

- [Acessar arquivo PDF](https://drive.google.com/drive/u/0/folders/1UoDg-XJZke-9i22dMQ8bygW2IbQv0d7N)


# Resumo dos testes realizados

Após rodar os testes via terminal, temos como resumo:
- Spec: Os arquivos de especificação (spec files) que contêm os testes escritos usando Cypress;
- Tests: A quantidade de testes realizados em cada arquivo;
- Failing (Falha): A quantidade de testes que falharam durante a execução;
- Pending (Pendente): Testes que ainda não foram executados, mas estão listados para futura revisão ou implementação;
- Skipped (Ignorado): Testes que são ignorados na execução temporiamente sem removê-los dos specs;
- Tempo de execução: O tempo que levou para executar todos os testes de um spec.

![Resultado do test e2e](/resultado-testes.jpg "Resultado do test e2e")
