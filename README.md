# cypress-learn

// For creating new project using cypress
npm init
npm install cypress --save-dev
npm install -D cypress-iframe

// To run cypress test runner
node_modules\.bin\cypress open

// To run cypress all specs in project (headless)
node_modules\.bin\cypress run

// To run cypress specific spec file (headless) in Electron browser by default
node_modules\.bin\cypress run --spec "cypress/integration/examples/test1.js"

// To run cypress specific spec file (headless) in Chrome browser
node_modules\.bin\cypress run --spec "cypress/integration/examples/test1.js" --browser chrome --headless --config viewportWidth=1920,viewportHeight=1080

// To run cypress specific spec file (headed)
node_modules\.bin\cypress run --spec "cypress/integration/examples/test1.js" --headed

// If you run into cross-origin errors, try the following configs inside cypress.json
"chromeWebSecurity": false
"experimentalSourceRewriting":true

// cypress glossary
// Note: for intellesnese of cypress script add at the beginning of the file /// <reference types="Cypress"/>
// Note: for intellesnese of cypress-iframe script add at the beginning of the file /// <reference types="cypress-iframe"/>
cy.visit('') -> Navigate to URL
cy.get('') -> Get element using CSS Selectors
cy.get('').should('',value) -> Assertion
cy.get('').should('').and('') -> Additional Assertion
cy.get('').find('') -> Nested find element
cy.get('').eq(0) -> element at index 0
cy.get('').contains('') -> element contains inner text
cy.wait(1000) -> Wait 1 second
cy.get('').text() -> get inner text of element
cy.get('').each(($el,index,$list)=>{}) -> iterate on each element in list of matching elements
cy.get('').then(($el)=>{}) -> handling promise of cypress call if needed
JQuery methods can't resolve promise by themselves, we need to handle promise manually i.e. text() method
cy.get('').as('') -> Alias an element to be used later on in the code without the need to write the locator
cy.get('@alias')
cy.get('').check() cy.get('').uncheck() -> checking/unchecking checkbox/radio button. Also, it can be used on multiple elements
cy.get('').select('') -> select option by text or value for static dropdown
cy.on('',(str)=>{}) -> event handler to assert the message of Alert or Confirm
cy.get('').invoke('','') -> invoke JQuery function on element
cy.go('') -> browser navigation commands
cy.url() -> get the current url of the browser
cy.get('').click({force:true}) -> click element even if not visible
cy.get('').then(($el)=>{const value=$el.prop('')}) -> get value of attribute of element
cy.frameLoaded('') -> switch to iframe
cy.iframe().find('') -> find element inside iframe
cy.fixture('').as('') -> load test data filepath and give it alias, this is recommended to be added in before() hook, in test use cy.get('@').then((json)=>{json.parameterName})
cy.get('').should('have.attr','attributeName',value) -> Assertion on attribute of element
cy.pause() -> Pause the test execution, this can be used for troubleshooting and debuging tests

// Cypress Limitations
1- No mouse hover actions
2- visit() don't allow multiple domains
3- CSS Selectors are only supported
4- No browser window switching