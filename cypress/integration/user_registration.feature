Feature: User registration
	As user
	I want to have a section where I can register my data
	And with this data create an account in endabank
	
		
	
	Scenario: Verify that the user can use the "Create an account" link
		When an user enter to the login page using the url
		Then the page loads correctly
		And the create an account link exists
		And it is working

   
	Scenario Outline: validate the mandatory fields in the User Registration page
		Given an user goes to the register page url site
		When the user types a wrong "<value>" in the "<field_name>"
		And the user tries to fill another
		Then the following "<error_message>" should be displayed
		And the "<field_name>" should be highlighted
	
		Examples:

			| value | field_name		 | error_message 															|
			|  jd	| #identifier		 | This field must be just numbers with a length between 10 and 20			|
			|  52 	| #firstName	     | This field must be just letters with a length between 2 and 20			|
			|  89  	| #lastName		     | This field must be just letters with a length between 2 and 20			|
			|  js 	| #phoneNumber		 | This field must be just numbers with a length between 10 and 20			|
			|  asi	| #email			 | This field must be a valid email											|
			|  25d	| #password			 | 1 Capital, 1 lowercase, 1 number, 1 special character, 8-20 characters	|
			|  25e 	| #rePassword	 	 | Passwords do not match													|


	Scenario: Validate the happy path for a new user
		Given an user that has clicked on the "Create an account" link in the Login page
		And the Registration page loaded correctly
		When the user enters value in all fields
		And the user clicks on the "Submit" button
		Then the information is saved and sent correctly.

	Scenario: Submit form
		Given the user has filled the registration form correctly
		When the user clicks on the "submit" button
		Then the page will commit the information
		And the field Approved will remain with the value [False]
	
	
	Scenario: User submits incomplete form
		Given the user has filled some mandatory fields but not all
		When the user clicks on submit button
		Then an error message should be visible

	Scenario: Validate if the user types the same in the password and confirm password fields
		Given the user is filling the password and confirm password fields
		When the user writes different values on those fields
		Then the fields will be highlighted in red
		And a label message is shown indicating "Passwords do not match"

	Scenario: Email in the form is already registered
		Given the user is entering data in the Registration form
		When the user enters an email that is already in use
		Then an error message should be shown

	Scenario: User tries to correct fields after writing wrong value
		Given an user has entered a wrong value in a field
		Then an error message should be displayed
		When the user is correcting value in a field
		Then the error message should dissappear 
