Feature: Example

  Scenario: FinishMe
    Given I navigate to the "Test Home Page" page
    And I click on the "More information..." link
    Then a link with text "RFC 2606" link must be present
    And a link with text "RFC 6761" must be present
    Then the "Domain Names" box must contains "Root Zone Management" at index "2"
