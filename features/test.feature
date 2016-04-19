Feature: Post page

  Background:
    Given I browse "https://thomas.rabaix.net/"

  Scenario: Go on post 1
    Given I am on homepage
    And I follow "Resume"
    Then I should be on "/resume/fr"
    And I should see "Compétences professionnelles"