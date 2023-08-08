import { Given, Then } from '@badeball/cypress-cucumber-preprocessor';
import { getGreeting } from '../support/app.po';

Given('I go to homepage', () => {
  cy.visit('/');
});

Then('the page is displayed', () => {
  getGreeting().contains('Welcome to books app');
});
