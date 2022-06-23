Feature: The admin should be able to see merchant approval log section

              As an admin
              I want to have a log to trace the approvals done by the admins
              And a grid to see this traceability

        Background:
            Given the admin is on the endabank login page

        Scenario: The admin should be allowed to see the merchant approval log section
              And the admin types in a valid email
              And the admin types in a password
              And the admin clicks on login buttton
             When the admin clicks on merchant approval log button
             Then the admin is allowed to see the merchant approval log section

        Scenario: The admin should be allowed to filter logs using merchant filter in merchant approval log section
              And the admin types in a valid email
              And the admin types in a password
              And the admin clicks on login buttton
              And the admin clicks on merchant approval log button
              And the admin is allowed to see the merchant approval log section
             When the admin uses the merchant filter
              And the admin clicks on submit filter button
             Then the grid will show the information according to the merchant filter

        Scenario: The admin should be allowed to filter logs using reviewing user in merchant approval log section
              And the admin types in a valid email
              And the admin types in a password
              And the admin clicks on login buttton
              And the admin clicks on merchant approval log button
              And the admin is allowed to see the merchant approval log section
             When the admin uses the reviewing user filter
              And the admin clicks on submit filter button
             Then the grid will show the information according to the reviewing user filter

        Scenario: The admin should be allowed to filter logs using merchant and reviewing user in merchant approval log section
              And the admin types in a valid email
              And the admin types in a password
              And the admin clicks on login buttton
              And the admin clicks on merchant approval log button
              And the admin is allowed to see the merchant approval log section
             When the admin uses the reviewing user filter and the merchant filter
              And the admin clicks on submit filter button
             Then the grid will show the information according to the merchant and reviewing user filters

        Scenario: The admin should not be allowed to filter logs using wrong data in merchant approval log section
              And the admin types in a valid email
              And the admin types in a password
              And the admin clicks on login buttton
              And the admin clicks on merchant approval log button
              And the admin is allowed to see the merchant approval log section
             When the admin uses the merchant filter with wrong data
              And the admin clicks on submit filter button
             Then the grid will show the information according to the criteria

            


         
         