Feature: Transaction
              As an user
              I want to complete a successful transaction


        Scenario: The user should be able to transfer money succesfully
            Given the user has logged in
             When the user has entered the "transfer transaction" page
             Then the user should be able to complete the form succesfully
              And  the user should see the transaction confirmation and summary