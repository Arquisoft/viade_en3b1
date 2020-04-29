Feature: Add a new route

Scenario: The user wants to create a new route
  Given The user is logged in and in the create new route form
  When The user fills the Create New route stepper form
  Then The user can create and upload the new route