Feature: Log in Form
	As an old merchant
	I want to have access a portal using my email and the password set in the registration
	
	#@focus

	Background:
		Given I open Endabank login page and wants to sign in

	Scenario: Access the portal
		
		When I need to write an email as "nicolas.cardona@endava.com"
		Then I need to write a password as "Nicolas17*"
		Then I click on Log In
		Then I dont see Log-in in the page

	Scenario: Log in with incorrect password

		When I need to write an email as "nicolas.cardona@endava.com"
		Then I need to write a password as "Ni*colas17"
		Then I click on Log In
#		Then I see "Credential Error. Verify User and password" message error displayed

	Scenario: Log in with incorrect email

		When I need to write an email as "nicolas.cardonaendava.com"
		Then I need to write a password as "Nicolas17*"
		Then I click on Log In
#		Then I see "Credential Error. Verify User and password" message error displayed