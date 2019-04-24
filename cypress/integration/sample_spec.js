beforeEach(function () {
    cy.visit('https://applitools.com/helloworld?diff1');

    cy.eyesOpen({
        appName: 'Hello World!',
        testName: 'My first JavaScript test!',
        // browser: { width: 800, height: 600 },
        browser: {
            deviceName: 'iPhone 6/7/8',
            screenOrientation: 'portrait',
        },
    });
});

afterEach(function () {
    cy.eyesClose();
});

describe('Hello world', () => {
    it('test one', () => {
        cy.eyesCheckWindow('Main Page');
    });

    it('test two', () => {
        cy.eyesCheckWindow('Main Page');
        cy.get('button').click();
        cy.eyesCheckWindow('Click!');
    });
});
