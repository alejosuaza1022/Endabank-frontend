Feature: User registration
              As a new User
              I want to be able to have access to the endabank application


        Scenario: The user should be allowed to create a new account
            Given the user is on the Login page
             When the user clicks on the "create an account" link
             Then the user should be redirected to the Register page

        
        Scenario: The user should complete an successful happy path for a new user
            Given the user that has clicked on the "create an account" link in the Login page
              And the user has been redirected to the Register page
             When the user enters correct values in all fields
              And the user clicks on the "Submit" button
             Then the user should see a pop-up with the next information "User registered"

        Scenario: The user tries to correct fields after writing wrong value
            Given the user has been redirected to the Register page
              And the user has entered a wrong value in a field
             Then an error message should be displayed
             When the user is correcting value in a field
             Then the error message should dissappear

        Scenario: A new user has registered and is awaiting approval
            Given the admin user has logged in
             When the admin user clicks on "Users management"
             Then the new users are visible
              And the new users are not approved yet
        
        Scenario: The user should be able to confirm password
            Given the user is filling the password and confirm password fields
             When the user writes different values on those fields
             Then the field will be highlighted in red
              And  a  message is shown indicating "Passwords do not match"

        
        Scenario: The user tries to submit an incomplete form
            Given the user has not filled all mandatory fields
             When the user clicks on submit button
             Then an error message should be visible

        Scenario: The user not should register an existing email
            Given the user has been redirected to the Register page
             When the user is entering data into the registration form fields
              And  the user enters an email that is already in another account
             Then the user should see "There is already a user registered with this email"  error message

        Scenario: The user not should register an existing identifier
            Given the user has been redirected to the Register page
             When the user is entering data into the registration form fields
              And  the user enters an identifier that is already in another account
             Then the user should see "There is already a user registered with this identifier" error message

        Scenario Outline: Validate the mandatory fields in the User Registration page
            Given the user has been redirected to the Register page
             When the user types a wrong "<value>" into the "<field_name>"
              And the user tries to fill another
             Then the following "<error_message>" should be displayed
              And the "<field_name>" should be highlighted
	
        Examples:

                  | value   | field_name   | error_message                                                          |
                  | jaime   | #identifier  | This field must be just numbers with a length between 6 and 20         |
                  | 52      | #firstName   | This field must be just letters with a length between 2 and 20         |
                  | 97      | #lastName    | This field must be just letters with a length between 2 and 20         |
                  | celular | #phoneNumber | This field must be just numbers with a length between 10 and 20        |
                  | asi.com | #email       | This field must be a valid email                                       |
                  | 25d     | #password    | 1 Capital, 1 lowercase, 1 number, 1 special character, 8-20 characters |
                  | 25e     | #rePassword  | Passwords do not match                                                 |