Feature: Account Summary section

        Scenario: The Users should see the account summary table with the proper columns order
            Given the user is logged in Endabank
             When the user is on the Account summary section
             Then the user should see the following information
                  | Account Number   |
                  | Founds available |
                  | Transactions     |
              And a maximum of 10 transactions per page