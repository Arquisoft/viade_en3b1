Feature: Show profile info to user

Scenario: The user wants to see some information of his profile
  Given A logged user
  When The user clicks the profile button
  Then His name should be shown in the screen