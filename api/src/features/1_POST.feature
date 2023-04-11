Feature: As an API I can create objects

  Scenario: As an API I can create an object
    Given I create an "objects"
    And the response was successful
    Then the response status code is 200


# Scenario: As an API I can retrieve all the posts
#     Given I retrieve the "objects"
#     And the response was successful
#     Then the response status code is 200