// @ts-check
import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('http://127.0.0.1:5501/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/To-Do's/);
});

test('user can add a task', async ({ page }) => {
  await page.goto('http://127.0.0.1:5501/');

  // Click the get started link.
  await page.getByRole('button', { name: '✚' }).click();
  
});

test('has heading', async ({ page }) => {
  await page.goto('http://127.0.0.1:5501/');

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'To-Do\'s 📜' })).toBeVisible();
});
