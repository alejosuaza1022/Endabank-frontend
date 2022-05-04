Feature: Verify that a non-admin user can't see the user approval section
	
Background:
	Given I open Endabank login page and wants to login

Scenario: Verify that a non-admin user can't see the user approval section
    When I need to login with email as "dbnaer71@gmail.com" and password as "Alexis17*" 
	Then the user tries to enter in the approval section
   	Then tries to enter trough the url "http://localhost:3000/activate-account" its redirected to home