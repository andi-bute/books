import { Given, When } from '@badeball/cypress-cucumber-preprocessor';

Given('I have a few books in the collection', () => {
  cy.fixture('books.json').then((json) => {
    cy.intercept('GET', '/api/books/**', json);
  });
});

When('I visit the site', () => {
  cy.visit('/');
});
