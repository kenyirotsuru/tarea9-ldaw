describe('Pruebas para la tarea 9, https://www.nafin.com/portalnf/content/herramientas-de-negocio/simulador-de-creditos/simulador-de-creditos.do', () => {
    describe('Page loads', () => {
        it('should load the page ', () => {
            cy.visit('https://www.nafin.com/portalnf/content/herramientas-de-negocio/simulador-de-creditos/simulador-de-creditos.do');
        })
    })

    describe('Text inputs', () => {
        it('should fill the text inputs', () => {
            cy.visit('https://www.nafin.com/portalnf/content/herramientas-de-negocio/simulador-de-creditos/simulador-de-creditos.do');

            cy.get('#dispDate')
                .type('05/05/2020')
                .type('{enter}');
            
            cy.get('#creditAmount')
                .clear()
                .type('20000');

            cy.get('#rate')
                .clear()
                .type('15.0');
        })
    })
    
    describe('Select inputs', () => {
        it('should select an option ', () => {
            cy.visit('https://www.nafin.com/portalnf/content/herramientas-de-negocio/simulador-de-creditos/simulador-de-creditos.do');

            cy.get('#paymentMethod')
                .select('1');

            cy.get('#period')
                .select('2');
        })
    })
    
    describe('Click on calcular', () => {
        it('should click on "Calcular"', () => {
            cy.visit('https://www.nafin.com/portalnf/content/herramientas-de-negocio/simulador-de-creditos/simulador-de-creditos.do');

            cy.get('#dispDate')
                .type('05/05/2020')
                .type('{enter}');
            
            cy.get('#creditAmount')
                .clear()
                .type('20000');

            cy.get('#rate')
                .clear()
                .type('15.0');

            cy.get('#paymentMethod')
                .select('1');

            cy.get('#period')
                .select('2');

            cy.contains('Calcular')
                .click();
        })
    })
    
    describe('Check number of rows', () => {
        const numRows = 24;
        it('should have ' + numRows + ' rows', () => {
            cy.visit('https://www.nafin.com/portalnf/content/herramientas-de-negocio/simulador-de-creditos/simulador-de-creditos.do');

            cy.get('#dispDate')
                .type('05/05/2020')
                .type('{enter}');
            
            cy.get('#creditAmount')
                .clear()
                .type('20000');

            cy.get('#rate')
                .clear()
                .type('15.0');

            cy.get('#paymentMethod')
                .select('1');

            cy.get('#period')
                .select('2');

            cy.contains('Calcular')
                .click();

            cy.contains('Ahora no')
                .click();
            
            cy.get('#resultadosSimulador')
                .find('tbody>tr')
                .should('have.length', numRows);

        })
    })
    
})
