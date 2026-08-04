Feature: Data Persistence
    As a user
    I want my todos to be saved
    So that I don't lose them when I refresh the page

    Scenario: Saves tasks to localStorage
        Given the user is on the Todo page
        When the user adds the task "Learn testing"
        And the user adds the task "Write tests"
        Then localStorage should contain exactly 2 tasks
        And the first task should be "Learn testing"
        And the second task should be "Write tests"
