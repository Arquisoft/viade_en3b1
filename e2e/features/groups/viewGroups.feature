Feature: View a group of friends

Scenario: The user wants to check his groups of friends
  Given A logged user that has at least one group of friends
  When The user clicks the Groups button
  Then The name of the group should be shown in the screen