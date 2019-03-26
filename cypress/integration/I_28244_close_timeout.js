describe('SSM Dashboard test', function () {
    before(() => {
        cy.eyesOpen({ appName: 'Clarity SSM' });
    });

    after(() => {
        cy.eyesClose();
    });

    it('Nav to staging dashboard and screen shot', function () {

        // Cypress.config('eyesTimeout', 180000);

        // cy.stagingLogin();

        // cy.navigateToSSM();

        cy.visit('https://applitools.com/helloworld');
        cy.eyesCheckWindow('Student Success Dashboard');
    })
})