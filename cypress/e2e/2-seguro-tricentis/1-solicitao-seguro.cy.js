/// <reference types="cypress" />


describe('Adquirir uma cotação de seguro de veículo', () => {

    it('Acessando a página inicial para adquirir o ticket do evento', () => {
        cy.visit(`${Cypress.env("baseUrlTricentis")}/101/app.php`)
        cy.get("#nav_automobile").click();
    })

    context('Preenchendo o formulário de dados do veículo', () => {

        it('Selecionando a fabricante do veículo', () => {
            cy.get("select#make").select("BMW")
        })

        it('Preenchendo a KW', () => {
            let numeroAletorio = Math.floor(Math.random() * (1000 - 1 + 1)) + 1;
            cy.get("input#engineperformance").type(numeroAletorio)
        })

        it('Preenchendo a data', () => {
            const data = new Date();
            const dia = data.getDate();
            const mes = data.getMonth() + 1;
            const ano = data.getFullYear();
            cy.get("input#dateofmanufacture").type(`${mes}/${dia}/${ano}`)
        })

        it('Número de assentos do veículo', () => {
            cy.get("select#numberofseats").select("5")
        })

        it('Tipo de combustível', () => {
            cy.get("select#fuel").select("Petrol")
        })

        it('Tabela de preço do veículo', () => {
            let numeroAletorio = Math.floor(Math.random() * (10000 - 500 + 1)) + 1;
            cy.get("input#listprice").type(numeroAletorio)
        })

        it('Número da Placa', () => {
            cy.get("input#licenseplatenumber").type("ABC1234")
        })

        it('Quilometragem', () => {
            let numeroAletorio = Math.floor(Math.random() * (100000 - 100 + 1)) + 1;
            cy.get("input#annualmileage").type(numeroAletorio)
        })

        it('Ir para a próxima etapa do formulário', () => {
            cy.get("button#nextenterinsurantdata").click()
        })
    })

    context('Inserindo os dados do seguro', () => {

        it('Preenchendo o primeiro nome', () => {
            cy.get("input#firstname").type("Giulia")
        })

        it('Preenchendo o sobrenome', () => {
            cy.get("input#lastname").type("Amaral")
        })

        it('Data de nascimento', () => {
            cy.get("input#birthdate").type("08/21/1990")
        })

        it('Selecionando o gênero', () => {
            cy.get("input#genderfemale").next().click()
        })

        it('Preenchendo endereço', () => {
            cy.get("input#streetaddress").type("Rua Girassol, Jardim das Flores")
        })

        it('Selecionando o país', () => {
            cy.get("select#country").select("Brazil")
        })

        it('CEP', () => {
            cy.get("input#zipcode").type("12236540")
        })

        it('Cidade', () => {
            cy.get("input#city").type("São Paulo")
        })

        it('Ocupação', () => {
            cy.get("select#occupation").select("Employee")
        })

        it('Hobbies', () => {
            cy.get("input#speeding").next().click()
            cy.get("input#bungeejumping").next().click()
            cy.get("input#cliffdiving").next().click()
            cy.get("input#skydiving").next().click()
            cy.get("input#other").next().click()
        })

        it('Website', () => {
            cy.get("input#website").type("www.google.com.br")
        })


        it('Ir para a próxima etapa do formulário', () => {
            cy.get("button#nextenterproductdata").click()
        })

    })


    context('Inserindo os dados do seguro', () => {

        it('Preenchendo a data do inicio do seguro', () => {
            const data = new Date();
            const mes = data.getMonth() + 1;
            const dia = data.getDate();
            const ano = data.getFullYear();

            cy.get("input#startdate").type(`${mes + 1}/${dia + 1}/${ano}`)
        })

        it('Valor do seguro', () => {
            cy.get("select#insurancesum").select("3000000")
        })

        it('Merit Rating', () => {
            cy.get("select#meritrating").select("Super Bonus")
        })

        it('Seguro contra danos', () => {
            cy.get("select#damageinsurance").select("Full Coverage")
        })

        it('Aplicando produtos adicionais', () => {
            cy.get("input#EuroProtection").next().click()
            cy.get("input#LegalDefenseInsurance").next().click()

        })

        it('Carro adicional', () => {
            cy.get("select#courtesycar").select("Yes")

        })

        it('Ir para a próxima etapa do formulário', () => {
            cy.get("button#nextselectpriceoption").click()
        })

    })


    context('Selecionando o preço do seguro em uma tabela', () => {

        it('Optando pelo plano Silver', () => {
            cy.get("input#selectsilver").next().click()

        })

        it('Optando pelo plano Gold', () => {
            cy.get("input#selectgold").next().click()

        })

        it('Optando pelo plano Platinum', () => {
            cy.get("input#selectplatinum").next().click()

        })

        it('Optando pelo plano Ultimate', () => {
            cy.get("input#selectultimate").next().click()

        })


        it('Ir para a próxima etapa do formulário', () => {
            cy.get("button#nextsendquote").click()
        })

    })


    context('Preenchendo o formulário de cotação', () => {

        it('Preenchendo e-mail', () => {
            cy.get("input#email").type("giuliaamaral200@gmail.com")
        })

        it('Preenchendo telefone', () => {
            cy.get("input#phone").type("11981009876")

        })

        it('Preenchendo um username', () => {
            cy.get("input#username").type("giuliaamaral")

        })


        it('Definindo a senha', () => {
            cy.get("input#password").type("Abc123")

        })

        it('Confirmando a senha', () => {
            cy.get("input#confirmpassword").type("Abc123")

        })

        it('Enviar formulário', () => {
            cy.once('uncaught:exception', () => false);
            cy.get("button#sendemail").click()
        })

        it("Esperando a tela carregar", () => {
            cy.wait(1000)
            cy.get("#LoadingPDF", { timeout: 120000 }).should('not.exist')
            cy.wait(1000)
        })

        it('Verificando se email foi enviado com sucesso!', () => {
            cy.get("h2").contains("Sending e-mail success!");
        })

    })


})