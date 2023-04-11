Feature: As an API I can retrieve objects

  Scenario: As an API I can retrieve all the posts
    Given I retrieve the "objects"
    And the response was successful
    Then the response status code is 200