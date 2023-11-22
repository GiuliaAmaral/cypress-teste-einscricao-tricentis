/// <reference types="cypress" />


describe('Adquirir um ingresso quando o usuário continua a compra sem uma conta', () => {

  it('Acessando a página inicial para adquirir o ticket do evento', () => {
    cy.visit(`${Cypress.env("baseUrlEIscricao")}/?event_id=75524&apiUrl=https://www.e-inscricao.com&msApiUrl=https://safe2pay-paymentflow.einscricao.workers.dev/&LOG=false&receiptUrl=https://recibo.e-inscricao.tech&apiParticipantsUrl=https://ei-mysql-readonly.raise.workers.dev`)
  })

  it("Adicionando a quantidade de ingressos", () => {
    cy.get('.MuiButtonBase-root.MuiIconButton-root.MuiIconButton-colorSecondary').last().as("btnAddIngresso")
    cy.get("@btnAddIngresso").click()
  })

  it('Clicando no botão de continuar a compra', () => {
    cy.get('.MuiButtonBase-root.MuiButton-root.MuiButton-contained.MuiButton-containedSecondary.MuiButton-containedSizeLarge.MuiButton-sizeLarge.MuiButton-fullWidth').as("btnFinalizarCompra")
    cy.get("@btnFinalizarCompra").click()
  })

  it('Optando por continuar a compra sem uma conta no sistema', () => {
    cy.get('[href="/participants"]').click()
  })

  context("Preenchendo os campos do formulário", () => {

    it("Preenchendo nome completo", () => {
      cy.get('input').eq(0).type("Giulia Amaral")
    })

    it("Preenchendo tipo do documento", () => {
      cy.get('select').select("CPF")
    })

    it("Preenchendo número de cpf inválido", () => {
      cy.get('input').eq(1).type("0000000000000")
      cy.get('.MuiFormHelperText-root').contains('cpf inválido')
    })

    it("Preenchendo número de cpf válido", () => {
      cy.get('input').eq(1).clear().type("04795683247")
    })

    it("Preenchendo e-mail inválido", () => {
      cy.get('input').eq(2).type("giuliaamaral200")
      cy.get('button').last().filter("[disabled]")
    })

    it("Preenchendo e-mail válido", () => {
      cy.get('input').eq(2).clear().type("giuliaamaral200@gmail.com")
      cy.get('button').last().should('not.have.attr', 'disabled')
    })

    it("Enviando dados preenchidos no formulário", () => {
      cy.get('button').last().click()
    })

  })

  context("Válidação da tela de pedido feito com sucesso", () => {

    it("Esperando a tela carregar", () => {
      cy.wait(1000)
      cy.get(".MuiCircularProgress-svg", { timeout: 120000 }).should('not.exist')
      cy.wait(1000)
      cy.get("h6", { timeout: 120000 }).contains("Aguarde enquanto processamos sua compra.").should('not.exist')
      cy.wait(1000)
    })

    it("Verificando se o pedido foi bem sucedido", () => {
      cy.get('h6').contains('Pedido feito com sucesso!')
    })

    it("Verificando se o QRCode existe", () => {
      cy.get('canvas').should('be.visible');
    })

    it("Verificando sistema de avaliação", () => {
      cy.get('button').last().click()
      cy.get('p').contains("Obrigado por compartilhar sua experiência conosco!")
    })

    it("Verificando sistema de salvar comprovante", () => {
      cy.get('button').eq(0).invoke('attr', 'title').then((attrTitle) => {
        let urlPdf = attrTitle.split(" - ")[1];

        cy.request(urlPdf).then((response) => {
          expect(response.headers['content-type']).to.eq('application/pdf');
        })
      })
      cy.get('button').eq(0).click()
    })

    it("Verificando botao ver minhas inscrições", () => {
      cy.get('a[target="blank"]').eq(0).should('not.be.empty');
      cy.get('a').eq(0).click()
    })

    context("Verificando se os campos da inscrição estão visíveis", () => {

      it("Verificando o nome do participante", () => {
        cy.get('p').contains("Participante").next().should('not.be.empty');
      })

      it("Verificando o CPF", () => {
        cy.get('p').contains("CPF").next().should('not.be.empty');
      })

      it("Verificando código de inscrição", () => {
        cy.get('p').contains("Código da inscrição").next().should('not.be.empty');
      })

      it("Verificando tipo de inscrição", () => {
        cy.get('p').contains("Inscrição").next().should('not.be.empty');
      })

      it("Verificando o valor", () => {
        cy.get('p').contains("Valor").next().should('not.be.empty');
      })

    })

  })


})
