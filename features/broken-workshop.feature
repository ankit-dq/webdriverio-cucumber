Feature: The Broken Workshop Website

    Scenario Outline: As a user, I can open the workshop website and check it for a11y issues

        Given I am on the broken workshop page
        Then I check the page for a11y issues
        Then I click on the Recipe button
        Then I check the page for a11y issues