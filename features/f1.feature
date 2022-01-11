Feature: search feature

  Scenario Outline: Test if input equals output
    Given I enter homepage
    When I give search input <searchTerm>
    Then Search output matches <searchTerm>
    Examples:
      | searchTerm |  |
      | chair      |  |
      | table      |  |