Feature: The user should be able login to endabank

              As an old merchant
              I want to access the portal using my email and the password set in the registration

        Background:
            Given the user is on the endabank login page


        Scenario: The user should be allowed to login
             When the user types in a valid email
             Then the user types in a password
              And the user clicks on login buttton
              And the user has to be allowed to see their profile, password management and Logout in the page

        Scenario: The user should be warned when the email format is incorrect
             When the user types in an email with an incorrect format
              And the user types in a password
             Then the user should see a highlight error message "This field must be a valid email"