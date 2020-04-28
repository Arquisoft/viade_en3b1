Feature: List routes of a user

Scenario: The user wants to list his routes
  Given The user is logged in and in the dashboard
  When The user clicks on My Routes button
  Then The user can view his routes