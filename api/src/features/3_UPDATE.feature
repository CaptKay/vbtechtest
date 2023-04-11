Feature: As an API I can update objects

  Scenario: As an API I can update an object
    Given I update an "objects"
    And the response was successful
    Then the response status code is 200