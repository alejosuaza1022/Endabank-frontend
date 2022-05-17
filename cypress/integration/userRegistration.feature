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