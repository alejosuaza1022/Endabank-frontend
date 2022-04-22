Feature: Log in Form
	As an old merchant
	I want to have access a portal using my email and the password set in the registration
	
Background:
	Given I open Endabank login page and wants to sing in

Scenario: Access the portal
	When I need to login with email as "Email" and password as "Password"
	Then I see "portal" displayed