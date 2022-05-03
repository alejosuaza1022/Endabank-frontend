@focus
Feature: Verify that the user is approved

Scenario: when activating a user the toggle behaves as expected, changed to activated and blue
Given Logged user as admin in the approval section
When The toggle change to disable
Then Toggle change to false and the color turns grey