Feature: User registration
              As a new User
              I want to be able to have access to the endabank application

        
        Scenario: The user should be allowed to create a new account
            Given the user is on the Login page
             When the user tries to enter the registration form via the "create an account" link
             Then the user should be redirected to the Register page

        
        Scenario: The user should be able to register successfully
            Given the user that has entered the registration form via the "create an account" link
              And the user is on the Register page
             When the user writes the requested information in each field
              And the user clicks on the "Submit" button
             Then the user should see a pop-up with the next information "User registered"

        Scenario: The user tries to correct fields after typing wrong information
            Given the user is on the Register page
              And the user has typed wrong information in a field
             Then an error message should be displayed
             When the user is correcting the information
             Then the error message should disappear

        Scenario: A new user has registered and is awaiting approval
            Given the admin user has logged in
             When the admin user enters to the "Users management" page
             Then the new users are visible
              And the new users are not approved yet
        
        Scenario: The user should be able to confirm password
            Given the user is creating and confirming his password
             When the confirm password information does not match with password information
             Then the field will be highlighted in red
              And  a  message should be visible indicating "Passwords do not match"

        
        Scenario: The user tries to submit an incomplete form
            Given the user has not completed the mandatory fields
             When the user tries to submit the incomplete information
             Then an error message should be visible
        
        Scenario: The user should not be able to register with an email already in use
            Given the user is on the Register page
             When the user is typing information into the registration form
              And the user tries to register with an email that is already in use
             Then the user should see the error message "There is already a user registered with this email"
        
        Scenario: The user should not be able to register with an identifier already in use
            Given the user is on the Register page
             When the user is typing information into the registration form
              And the user tries to register with an identifier that is already in use
             Then the user should see the error message "There is already a user registered with this identifier"

        Scenario Outline: The user should complete all mandatory fields in the User Registration page
            Given the user is on the Register page
             When the user types a wrong "<value>" into the "<field_name>"
              And the user tries to move on the next field
             Then the error message "<error_message>"  should be displayed
              And the "<field_name>" field should be highlighted
	
        Examples:

                  | value   | field_name   | error_message                                                          |
                  | jaime   | #identifier  | This field must be just numbers with a length between 6 and 20         |
                  | 52      | #firstName   | This field must be just letters with a length between 2 and 20         |
                  | 97      | #lastName    | This field must be just letters with a length between 2 and 20         |
                  | celular | #phoneNumber | This field must be just numbers with a length between 10 and 20        |
                  | asi.com | #email       | This field must be a valid email                                       |
                  | 25d     | #password    | 1 Capital, 1 lowercase, 1 number, 1 special character, 8-20 characters |
                  | 25e     | #rePassword  | Passwords do not match                                                 |