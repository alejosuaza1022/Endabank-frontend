Feature: Validate the activation of a user

Scenario: Validate the activation of a user
Given Logged user as admin in the approval section
When The toggle is activated
Then Change to true and the color turns blue