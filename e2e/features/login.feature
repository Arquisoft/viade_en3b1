Feature: Basic login process in the app

Scenario: The user is not logged in the site
  Given A not logged user
  When The user clicks the login button and fills the form
  Then A welcome message should be shown in the screen
