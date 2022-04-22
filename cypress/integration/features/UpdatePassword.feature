Feature: Update password

    I want to update my current password

    Background:
        Given the user is logged in

    @focus
    Scenario: Happy path change password
        When the user clicks on the "Password management" left side button
        * the user fills in the old, new and confirmation password
        * the user clicks the "Submit" button on the update password page
        Then the user should see a green message that says "Password updated successfully"

    Scenario Outline: User leaves 1 or more fields empty on change my password page
        Given the user is in the "Change my password page"
        When the user leaves the <Old password>, <New password> or <Confirm password> field(s) empty
        And clicks on the <Submit> button
        Then a <Error message> is shown to the user
            | Element name         | Type   | isMandatory? | Status   | Value                      |
            | Old password         | Input  | Yes          | Enabled  |                            |
            | New password         | Input  | Yes          | Enabled  |                            |
            | Confirm new password | Input  | Yes          | Enabled  |                            |
            | Submit               | Button |              | Disabled |                            |
            | Error message        | Text   |              | Visible  | This field cannot be empty |

    Scenario Outline: Logged user enters new password and it doesn't meet the security requirements
        Given the user is in the "Change my password page"
        When the user fills in the <Old password> field
        * fills in the <New password> field
        * fills in the <Confirm password> field
        But <New password> field doesn't meet the password security requirements
        And clicks on the <Submit> button
        Then a <Error message> is shown to the user
            | Element name         | Type   | isMandatory? | Status   | Value                                              |
            | Old password         | Input  | Yes          | Enabled  |                                                    |
            | New password         | Input  | Yes          | Enabled  |                                                    |
            | Confirm new password | Input  | Yes          | Enabled  |                                                    |
            | Submit               | Button |              | Disabled |                                                    |
            | Error message        | Text   |              | Visible  | The password must follow the next requirements:... |

    Scenario Outline: Logged user entered a different password in new and confirm password fields
        Given the user is in the "Change my password page"
        When the user fills in the <Old password> field
        * fills in the <New password> field
        * fills in the <Confirm password> field
        But <Confirm password> field doesn't match with <New password> field
        And clicks on the <Submit> button
        Then a <Error message> is shown to the user
            | Element name         | Type   | isMandatory? | Status   | Value                                          |
            | Old password         | Input  | Yes          | Enabled  |                                                |
            | New password         | Input  | Yes          | Enabled  |                                                |
            | Confirm new password | Input  | Yes          | Enabled  |                                                |
            | Submit               | Button |              | Disabled |                                                |
            | Error message        | Text   |              | Visible  | Confirm password and new password should match |

    Scenario Outline: Logged user entered the old password as the new one
        Given the user is in the "Change my password page"
        When the user fills in the <Old password> field
        * fills in the <New password> field
        * fills in the <Confirm password> field
        But <New password> is the same as the user's "old password"
        And clicks on the <Submit> button
        Then a <Error message> is shown to the user
            | Element name         | Type   | isMandatory? | Status   | Value                                          |
            | Old password         | Input  | Yes          | Enabled  |                                                |
            | New password         | Input  | Yes          | Enabled  |                                                |
            | Confirm new password | Input  | Yes          | Enabled  |                                                |
            | Submit               | Button |              | Disabled |                                                |
            | Error message        | Text   |              | Visible  | New password cannot be the same as the old one |