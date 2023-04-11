Feature: As an API I can partially update objects

  Scenario: As an API I can partially update an object
    Given I partially update an "objects"
    And the response was successful
    Then the response status code is 200