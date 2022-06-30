Feature: Mock merchant website in order to a customer can buy something on a merchant website

              As a Merchant
              I want to mock the website
              And let the customer buy something

        Background:
            Given the products are shown on the merchant website

        Scenario: The user should be able to select products to buy into the merchant website
             When the user want to select one or many products
             Then the products will be added to the shopping car
              And change the value of the total amount

        Scenario: The user should be able to add products into the merchant website and remove products into the shopping summary
              And the user want to select some products
              And the products will be displayed at the shopping car
              And change the value of the amount
             When the user want to unselect one or many products
             Then the products will be removed from the shopping car
              And change the value of the total

        Scenario: The user should be allowed to increase or decrease the quantity of products in the shopping summary
              And the user want to select some products at the merchant website
              And all the products will be displayed at the shopping car
              And the value should change
             When the user want to add by 1 and remove of a specific product at the shopping car
             Then the products will be added and removed
              And the total payable value should increase due to the increase in the quantity of products

       