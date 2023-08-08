Feature: Book creation and editing

    Users need a basic way to add to their book collection

    Background:
        Given I have a few books in the collection
        When I visit the site


    Scenario: I can add a new book to the collection
        And I  add a new book with title "The Hobbit" and author "J.R.R. Tolkien" published in "1937-09-21"
        Then I see the book "The Hobbit" in the book listing

    Scenario: The book won't submit if it's missing the title
        And I  add a new book with title "" and author "J.R.R. Tolkien" published in "1937-09-21"
        Then I see a field required error message for the "title" field

    Scenario: The book won't submit if it's missing the author
        And I  add a new book with title "The Hobbit" and author "" published in "1937-09-21"
        Then I see a field required error message for the "author" field

    Scenario: The book won't submit if it's missing the publish date
        And I  add a new book with title "The Hobbit" and author "J.R.R. Tolkien" published in ""
        Then I see a field required error message for the "publish date" field
