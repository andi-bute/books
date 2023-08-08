import { When, Then } from '@badeball/cypress-cucumber-preprocessor';
import { getGreeting } from '../support/app.po';
import bookFixtureJSON from '../fixtures/books.json';

const ASC = 'ascending';

Then('I see a list of books', () => {
  getGreeting().contains('Welcome to books app');
  cy.get('table').should('have.length', 1);
  cy.get('table tbody tr').should('have.length', 3);
});

When(
  'I choose to sort on {string} {int} times',
  (sortBy: string, clickCount: number) => {
    let header = '.header-';
    if (sortBy === 'publication date') {
      header += 'published';
    } else {
      header += sortBy;
    }
    for (let i = 0; i < clickCount; i++) {
      cy.get(header).click();
    }
  }
);
Then(
  'I see a list of books sorted by publication date in {string} order',
  (sortOrder: string) => {
    const sortableBooks = [...bookFixtureJSON];
    if (sortOrder === ASC) {
      sortableBooks.sort(
        (a, b) => Date.parse(a.published) - Date.parse(b.published)
      );
    } else {
      sortableBooks.sort(
        (a, b) => Date.parse(b.published) - Date.parse(a.published)
      );
    }

    //assert table publish date at each index with sorted fixture data
    //using pipe date in the component causes issues converting strigns to Date objects
    //converting back from html rendered date to Date object causes time differences and test fails
    // cy.get('.cell-published').each(($el, $index) => {
    //   expect(new Date($el.text())).to.equal(
    //     new Date(sortableBooks[$index].published)
    //   );
    // });

    // check matching titles as a workaround
    cy.get('.cell-title').each(($el, $index) => {
      expect($el.text().trim()).to.equal(sortableBooks[$index].title);
    });
  }
);

Then(
  'I see a list of books sorted by title in {string} order',
  (sortOrder: string) => {
    const sortableBooks = [...bookFixtureJSON];
    if (sortOrder === ASC) {
      sortableBooks.sort((a, b) => a.title.localeCompare(b.title));
    } else {
      sortableBooks.sort((a, b) => b.title.localeCompare(a.title));
    }
    cy.get('.cell-title').each(($el, $index) => {
      expect($el.text().trim()).to.equal(sortableBooks[$index].title);
    });
  }
);
Then(
  'I see a list of books sorted by author in {string} order',
  (sortOrder: string) => {
    const sortableBooks = [...bookFixtureJSON];
    if (sortOrder === ASC) {
      sortableBooks.sort((a, b) => a.author.localeCompare(b.author));
    } else {
      sortableBooks.sort((a, b) => b.author.localeCompare(a.author));
    }
    cy.get('.cell-author').each(($el, $index) => {
      expect($el.text().trim()).to.equal(sortableBooks[$index].author);
    });
  }
);
