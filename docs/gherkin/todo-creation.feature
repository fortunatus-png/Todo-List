Feature: Todo Creation
    As a user
    I want to create new todos
    So that I can track my tasks

    Scenario: Prevent adding empty tasks
        Given the user is on the Todo page
        When the user tries to add an empty task
        Then the todo list should remain empty

    Scenario: Add multiple todos and toggle their completion status
        Given the user is on the Todo page
        When the user adds the task "Learn testing"
        And the user adds the task "Write tests"
        And the user checks the first task as completed
        And the user unchecks the first
        And the user checks the second task as completed
        Then the first task should not be marked as completed
        And the second task should be marked as completed
        And "Learn testing" should be visible in the list
        And "Write tests" should be visible in the list