Feature: Todo Deletion
    As a user
    I want to delete todos
    So that I can remove completed or unwanted tasks

    Scenario: Delete a task
        Given the user is on the Todo page
        And the user has added the tasks "Learn testing" and "Write tests"
        When the user deletes the task "Write tests"
        Then "Learn testing" should still be visible
        And "Write tests" should not be visible anymore

    Scenario: Clear all tasks
        Given the user is on the Todo page
        And the user has added the tasks "Learn testing" and "Write tests"
        When the user clears all tasks
        Then "Learn testing" should not be visible anymore
        And "Write tests" should not be visible anymore
        And the checkbox count should be 0
