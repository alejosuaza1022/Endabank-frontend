Feature: Admin Accounts Approval

     As an admin user of the Endabank,
     I want to be able to approve or disapprove an account,
     So that only allowed users will be able to sign into the application

     Scenario Outline: <status> an account under admin approval
          Given the user is logged in as an '<userType>' user
          And the user is on the Admin Panel section
          When the user toggles to '<status>' an account under review


          Examples:
               | userType | status     | accountStatus |
               | Admin    | Deactivate | Deactivated   |
               | Admin    | Activate   | Activated     |

     Scenario Outline: The Admin user should see the users table with the proper columns order
          Given the user is logged in as an '<userType>' user
          When the user is on the Admin Panel section
          Then the user should see the user table columns with the following order
               | Titles     |
               | First Name |
               | Last Name  |
               | Email      |
               | Approve    |
          Examples:
               | userType |
               | Admin    |

     Scenario Outline: Non-admin user can't see the user approval section
          Given the user is logged in as an '<userType>' user
          Then the user tries to enter in the approval section
          And tries to enter trough the url '<url>' its redirected to home

          Examples:
               | userType   | url                                                            |
               | NormalUser | http://level-strategy-346315.uc.r.appspot.com/activate-account |
