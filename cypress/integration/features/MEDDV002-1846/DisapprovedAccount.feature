Feature: Validate the deactivation of a user

Scenario: Validate the deactivation of a user
Given Logged user as admin in the approval section
When The toggle change to disable
Then Toggle change to false and the color turns grey