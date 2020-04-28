Feature: Delete an existing route

Scenario: The user wants to delete one of his routes
  Given The user is logged in and in the route details view of a route
  When The user aggrees to delete a route
  Then The user is redirected to the dashboard page