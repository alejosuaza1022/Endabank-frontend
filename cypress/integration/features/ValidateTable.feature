@focus
Feature: Validate the default table and layout of the user approval section

Scenario: Verification of the user interface will be performed
Given  Logged user as admin
When Im in the session User Approval
Then  I verify that the table user approval contains this: FIRST NAME, LAST NAME, EMAIL, APPROVED