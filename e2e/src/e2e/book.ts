import { When, Then } from '@badeball/cypress-cucumber-preprocessor';

When(
  'I  add a new book with title {string} and author {string} published in {string}',
  (title: string, author: string, publishedDate: string) => {
    title ? cy.get('.input-title').type(title) : null;
    author ? cy.get('.input-author').type(author) : null;
    publishedDate ? cy.get('.input-published').type(publishedDate) : null;
    cy.get('.add-book').click();
  }
);

Then('I see the book {string} in the book listing', (title: string) => {
  cy.get('.cell-title').contains(title);
});

Then(
  'I see a field required error message for the {string} field',
  (field: string) => {
    const capitalizedField = field[0].toUpperCase() + field.substring(1);
    cy.get('.invalid-feedback').contains(`${capitalizedField} is required`);
  }
);
