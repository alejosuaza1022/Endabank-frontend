Feature: User registration
        As a new User
        I want to be able to have access to the endabank application


        Scenario: The user should be allowed to create a new account
                Given the user is on the Login page
                 When the user clicks on the "create an account" link
                 Then the user should be redirected to the Register page