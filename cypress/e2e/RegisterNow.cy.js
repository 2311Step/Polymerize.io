/// <reference types ="cypress" />

it('Register Now' , function(){

    cy.visit('https://polymerize.io/solutions/polymerize-for-startups/');

    cy.get('#cookiescript_injected').then(($popUp)  => {

        if($popUp.length){
            cy.get('#cookiescript_accept').click()
        }
    });    

    cy.get('.max-w-screen-xl > .gap-6 > .flex > .px-4').should('be.visible').click({force:true});

     // Locate the input field for the company name and type 'Polymerize'
cy.get('input[name="companyName"]').type('Polymerize');

// Click on the date picker input to select a date
cy.get('.react-datepicker__input-container > .w-full').click();

// Choose the first day of the month from the date picker
cy.get(':nth-child(1) > .react-datepicker__day--001').click();

// Locate and type the address details in the specified field
cy.get(':nth-child(3) > .flex > .rounded-md').type('Pune, Maharashtra.');

// Wait for 1 second to ensure the previous action is completed
cy.wait(1000);

// Locate and type additional address details in the specified field
cy.get(':nth-child(4) > :nth-child(1) > .rounded-md').type('Viman Nagar, Pune.');

// Select the option 'No Funding' from the dropdown menu
cy.get('div.w-full > div.relative > .rounded-md').select('No Funding');

// Click on the button with text 'Next Step' to proceed further
cy.contains('Next Step').click();

//Contact Information
cy.get('.flex > div.relative > .rounded-md').select('India');

cy.get(':nth-child(1) > .flex > input.rounded-md').type('9561002170');

cy.get('.\} > .rounded-md').type('Quality Analyst');

cy.get(':nth-child(3) > .flex > .rounded-md').type('stepkurane@gmail.com');

cy.get(':nth-child(4) > .flex > div.w-full > div.relative > .rounded-md').select('English');


    });