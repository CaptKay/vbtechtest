Feature: As an API I can retrieve objects

  Scenario: As an API I can retrieve the object
    Given I retrieve the "objects"
    And the response was successful
    Then the response status code is 200


   Scenario: As an API I cannot retrieve blue
    Given I cannot retrieve "blue"
    And the response was unsuccessful
    Then the response status code is 404