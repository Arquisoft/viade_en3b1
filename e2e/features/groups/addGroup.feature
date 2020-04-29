Feature: Add a group of friends

Scenario: The user wants to create a new group of friends
  Given A logged user with one friend
  When The user clicks the create group button
  Then The name of the group should be shown in the screen