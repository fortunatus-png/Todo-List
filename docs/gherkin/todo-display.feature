Feature: Todo App Display
    As a user
    I want to see the todo app interface
    So that I know I'm in the right place

    Scenario: Loads with correct title and heading
        Given the user is on the Todo page
        Then the page title should be displayd
        And the heading should be visible

