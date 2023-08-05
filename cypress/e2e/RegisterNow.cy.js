/// <reference types ="cypress" />

it('Register Now', () => {
    // Visit the website
    cy.visit('https://polymerize.io/solutions/polymerize-for-startups/');
  
    // Close the cookie popup if it exists
    cy.get('#cookiescript_injected').then(($popUp) => {
      if ($popUp.length) {
        cy.get('#cookiescript_accept').click();
      }
    });
  
    // Click on the button to start the registration process
    cy.get('.max-w-screen-xl > .gap-6 > .flex > .px-4').should('be.visible').click({ force: true });
  
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
  
    // Contact Information
    cy.get('.flex > div.relative > .rounded-md').select('India');
  
    // Type the contact number
    cy.get(':nth-child(1) > .flex > input.rounded-md').type('9988776658');
  
    // Wait for 1 second to ensure the previous action is completed
    cy.wait(1000);
  
    // Type the job title
    cy.get('input[name="jobTitle"]').type('Quality Analyst');
  
    // Type the business email
    cy.get('input[name="businessEmail"]').type('rohit1@gmail.com');
  
    // Select 'English' from the language dropdown menu
    cy.get(':nth-child(4) > .flex > div.w-full > div.relative > .rounded-md').select('English');
  
    // Click on the button with text 'Next Step' to proceed further
    cy.contains('Next Step').click();
  
    // Expectations and challenges
    cy.get('div.w-full > div.relative > .rounded-md').select('0-20');
  
    // Type the expectation in the specified field
    cy.get(':nth-child(3) > .flex > .rounded-md').type('The change was impeded by the lack of order in the polymer chains.');
  
    // Type the challenges in the specified field
    cy.get(':nth-child(4) > .flex > .rounded-md').type('Expectation from this platform is to improve the quality of polymers used.');
  
    // Click on the button with text 'Submit' to complete the registration
    cy.contains('Submit').should('exist').click();



  });