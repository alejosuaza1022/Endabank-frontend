Feature: Mock merchant website in order to a customer can buy something on a merchant website

              As a Merchant
              I want to mock the website
              And let the customer buy something

        Background:
            Given the products are shown on the merchant website

        Scenario: The customer should be allowed to add products to buy
             When the customer want to select one or many products
             Then the products will be added to the shopping car
              And change the value of the total amount

        Scenario: The admin should be allowed to remove products to buy
              And the customer want to select some products
              And the products will be displayed at the shopping car
              And change the value of the amount
             When the customer want to unselect one or many products
             Then the products will be removed from the shopping car
              And change the value of the total

       