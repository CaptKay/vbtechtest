Feature: As an API I can delete an objects

  Scenario: As an API I can partially update an object
    Given I delete an "objects"
    And the response was successful
    Then the response status code is 200