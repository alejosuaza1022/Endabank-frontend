Feature: Log in Form
	As an old merchant
	I want to have access a portal using my email and the password set in the registration
	
	@focus
	Background:
		Given I open Endabank login page and wants to sing in

	Scenario: Access the portal
		When I need to write an email as "Email" and password as "Password"
		Then I click on Login
		Then I see "portal" displayed

	Scenario: Log in with incorrect password
		When I need to write an email as "Email" and password as "IncorrectPassword"
		Then I click on Login
		Then I see "Credential Error. Verify User and password" message error displayed

	Scenario: Log in with incorrect email
		When I need to write an email as "IncorrectEmail" and password as "Password"
		Then I click on Login
		Then I see "Credential Error. Verify User and password" message error displayed