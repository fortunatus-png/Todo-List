import { test, expect } from '@playwright/test';
import { TodoPage } from './todoPage';

test.describe('To-Do App', () => {

  const firstTask = 'Learn testing';
  const secondTask = 'Write tests';
  const space = ' ';
  const empty = '';
  let todoPage;

  test.beforeEach(async ({ page }) => {
    todoPage = new TodoPage(page);
    await todoPage.goto();
  });

  test('Loads with correct title and heading', async () => {
    await todoPage.assertTitle();
    await todoPage.assertHeadingVisible();
  });

  test('Prevent adding empty tasks', async () => {
    await todoPage.addTask(space);
    await todoPage.addTask(empty);

    await expect(todoPage.checkBox).toHaveCount(0);
  });

  test('Add multiple todos and toggle their completion status', async () => {
    await todoPage.addTask(firstTask);
    await todoPage.addTask(secondTask);

    await todoPage.checkBox.first().check();
    await todoPage.checkBox.first().uncheck();
    await todoPage.checkBox.nth(1).check();

    await expect(todoPage.checkBox.first()).not.toBeChecked();
    await expect(todoPage.checkBox.nth(1)).toBeChecked();

    await todoPage.assertTaskVisible(firstTask);
    await todoPage.assertTaskVisible(secondTask);
  });

  test('Saves tasks to localStorage', async ({ page }) => {
    await todoPage.addTask(firstTask);
    await todoPage.addTask(secondTask);

    const tasks = await page.evaluate(() => {
      return JSON.parse(localStorage.getItem("tasks"));
    });

    expect(tasks).toHaveLength(2);
    expect(tasks[0].text).toBe(firstTask);
    expect(tasks[1].text).toBe(secondTask);
  });

  test('Delete a task', async () => {
    await todoPage.addTask(firstTask);
    await todoPage.addTask(secondTask);

    await todoPage.deleteTask(secondTask);

    await todoPage.assertTaskVisible(firstTask);
    await todoPage.assertTaskNotVisible(secondTask);
  });

  test('Clear all tasks', async () => {
    await todoPage.addTask(firstTask);
    await todoPage.addTask(secondTask);

    await todoPage.clearAllTasks();

    await todoPage.assertTaskNotVisible(firstTask);
    await todoPage.assertTaskNotVisible(secondTask);
    await expect(todoPage.checkBox).toHaveCount(0);
  });
});
