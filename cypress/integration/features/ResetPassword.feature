Feature: Password Reset

    I want to reset my forgotten password

    Background:
        Given the user is on the Login page
        * the user clicks on "Forgot password?" link

    @focus
    Scenario: Happy path reset password
        When the user fills in the "Email"
        * clicks in the "Submit" button on the pop up
        * the user opens the recovery link
        * the user fills in the fields for the recovery password
        * clicks in the "Submit" button on the reset password page
        Then the user should see a green message that says "Password updated successfully"

    @skip
    Scenario: See the send email for recovery password form
        When the user clicks on "Forgot password?" link
        # Then the user should see "Please, type your email:" in the pop-up
        Then the user should see the following elements:
            # Examples:
            | Element name   | Type   | Value                    | is mandatory? | Status   |
            | Recovery label | Text   | Please, type your email: |               |          |
            | Recovery email | Input  | email                    | Yes           | Enabled  |
            | Submit         | Button | Submit                   |               | Disabled |
            | Cancel         | Button | Close                    |               | Enabled  |

    @skip
    Scenario Outline: User fills in incorrect email
        When user fills in the "Recovery email" field
        But the email format is incorrect
        Then the field is highlighted in red and says "Invalid email"

    @skip
    Scenario Outline: User leaves email field empty
        When user leaves in the "Recovery email" field empty
        And clicks  "Submit" button
        Then an <Error message> is shown to the user
            | Element name   | Type   | is mandatory? | Status   | Value                      |
            | Recovery email | Input  | Yes           | Enabled  |                            |
            | Submit         | Button |               | Disabled |                            |
            | Error message  | Text   |               | Visible  | This field cannot be empty |

    @skip
    Scenario Outline: User enters new password and it doesn't meet the security requirements
        Given the user is in the "Set up a new password page"
        When the user fills in the <New password> field
        And fills in the <Confirm password> field
        But <New password> field does not meet the password security requirements
        And clicks on the <Submit> button
        Then a <Error message> is shown to the user
            | Element name         | Type   | is mandatory? | Status   | Value                                              |
            | New password         | Input  | Yes           | Enabled  |                                                    |
            | Confirm new password | Input  | Yes           | Enabled  |                                                    |
            | Submit               | Button |               | Disabled |                                                    |
            | Error message        | Text   |               | Visible  | The password must follow the next requirements:... |

    @skip
    Scenario Outline: User entered the new password and it's the same as the old one
        Given the user is in the "Set up a new password page"
        When the user fills in the <New password> field
        And fills in the <Confirm password> field
        But <New password> is the same as the user's "old password"
        And clicks on the <Submit> button
        Then a <Error message> is shown to the user
            | Element name         | Type   | is mandatory? | Status   | Value                                          |
            | New password         | Input  | Yes           | Enabled  |                                                |
            | Confirm new password | Input  | Yes           | Enabled  |                                                |
            | Submit               | Button |               | Disabled |                                                |
            | Error message        | Text   |               | Visible  | New password cannot be the same as the old one |

    @skip
    Scenario Outline: User leaves 1 or more fields empty on set up new password page
        Given the user is in the "Set up a new password page"
        When the user leaves the <New password> or <Confirm password> field(s) empty
        And clicks on the <Submit> button
        Then a <Error message> is shown to the user
            | Element name         | Type   | is mandatory? | Status   | Value                        |
            | New password         | Input  | Yes           | Enabled  |                              |
            | Confirm new password | Input  | Yes           | Enabled  |                              |
            | Submit               | Button |               | Disabled |                              |
            | Error message        | Text   |               | Visible  | All fields must be filled in |

    @skip
    Scenario Outline: User entered a different password in new and confirm password fields
        Given the user is in the "Set up a new password page"
        When the user fills in the <New password> field
        And fills in the <Confirm password> field
        But <Confirm password> field doesn't match with <New password> field
        And clicks on the <Submit> button
        Then a <Error message> is shown to the user
            | Element name         | Type   | is mandatory? | Status   | Value                                          |
            | New password         | Input  | Yes           | Enabled  |                                                |
            | Confirm new password | Input  | Yes           | Enabled  |                                                |
            | Submit               | Button |               | Disabled |                                                |
            | Error message        | Text   |               | Visible  | Confirm password and new password should match |