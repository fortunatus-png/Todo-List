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
    await page.goto('/');
  });

  test('saves tasks to localStorage', async ({ page }) => {
    await todoPage.addTask(firstTask);
    await todoPage.addTask(secondTask);

    const tasks = await page.evaluate(() => {
      return JSON.parse(localStorage.getItem("tasks"));
    });

    expect(tasks).toHaveLength(2);
    expect(tasks[0].text).toBe(firstTask);
    expect(tasks[1].text).toBe(secondTask);
  });

  test('has title', async ({ page }) => {
    await expect(page).toHaveTitle("To-Do's");
    await expect(page.getByRole('heading', { name: 'To-Do\'s 📜' })).toBeVisible();
  });

  test('does not add empty task', async ({ page }) => {
    await todoPage.addTask(space);
    await todoPage.addTask(empty);

    await expect(page.getByRole('checkbox')).toHaveCount(0);
  });

  test('add task', async ({ page }) => {
    await todoPage.addTask(firstTask);
    await todoPage.addTask(secondTask);

    await page.getByRole('checkbox').first().check();
    await page.getByRole('checkbox').first().uncheck();
    await page.getByRole('checkbox').nth(1).check();

    await expect(page.getByRole('checkbox').first()).not.toBeChecked();
    await expect(page.getByRole('checkbox').nth(1)).toBeChecked();

    await expect(page.getByText(`${firstTask}`)).toBeVisible();
    await expect(page.getByText(`${secondTask}`)).toBeVisible();
  });

  test('delete task', async ({ page }) => {
    await todoPage.addTask(firstTask);
    await todoPage.addTask(secondTask);

    await todoPage.deleteTask(secondTask);

    await expect(page.getByText(`${firstTask}`)).toBeVisible();
    await expect(page.getByText(`${secondTask}`)).not.toBeVisible();
  });

  test('clear all tasks', async ({ page }) => {
    await todoPage.addTask(firstTask);
    await todoPage.addTask(secondTask);

    await todoPage.clearAllTasks();

    await expect(page.getByText(`${firstTask}`)).not.toBeVisible();
    await expect(page.getByText(`${secondTask}`)).not.toBeVisible();
    await expect(page.getByRole('checkbox')).toHaveCount(0);
  });
});

