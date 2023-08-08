Feature: Books listing

    I want to be able to brows existing books in our collection

    Background:
        Given I have a few books in the collection
        When I visit the site


    Scenario: I can view the boook listing
        Then I see a list of books

    Scenario: I can sort the boook listing ascending by publishing date
        And I choose to sort on "publication date" 1 times
        Then I see a list of books sorted by publication date in "ascending" order

    Scenario: I can sort the boook listing descending by publishing date
        And I choose to sort on "publication date" 2 times
        Then I see a list of books sorted by publication date in "descending" order

    
    Scenario: I can sort the boook listing ascending by title
        And I choose to sort on "title" 1 times
        Then I see a list of books sorted by title in "ascending" order

    Scenario: I can sort the boook listing descending by title
        And I choose to sort on "title" 2 times
        Then I see a list of books sorted by title in "descending" order
   
    Scenario: I can sort the boook listing ascending by author
        And I choose to sort on "author" 1 times
        Then I see a list of books sorted by author in "ascending" order

    Scenario: I can sort the boook listing descending by author
        And I choose to sort on "author" 2 times
        Then I see a list of books sorted by author in "descending" order