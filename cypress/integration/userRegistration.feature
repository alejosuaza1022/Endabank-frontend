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

        Scenario: A new User has registered and is awaiting approval
            Given the admin user has logged in
             When the admin user clicks on "Users management"
             Then the new users are visible
              And the new users are not approved yet
        
        Scenario: The user should be able to confirm password
            Given the user is filling the password and confirm password fields
             When the user writes different values on those fields
             Then the field will be highlighted in red
              And  a  message is shown indicating "Passwords do not match"
