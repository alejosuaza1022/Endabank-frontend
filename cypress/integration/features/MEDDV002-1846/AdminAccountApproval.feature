Feature: Admin Accounts Approval

              As an admin user of the Endabank,
              I want to be able to approve or disapprove an account,
    So that only allowed users will be able to sign into the application

        Scenario Outline: <status> an account under admin approval
            Given the user is logged in as an '<userType>' user
              And the user is on the Admin Panel section
             When the user toggles to '<status>' an account under review
             Then the account should be '<accountStatus>'

        Examples:
                  | userType | status     | accountStatus |
                  | Admin    | Activate   | Activated     |
                  | Admin    | Deactivate | Deactivated   |

        Scenario: The Admin user should see the users table with the proper columns order
            Given the user is logged in as an 'Admin' user
             When the user is on the Admin Panel section
             Then the user should see the user table columns with the following order
                  | FIRST NAME |
                  | LAST NAME  |
                  | EMAIL      |
                  | APPROVED   |
        

