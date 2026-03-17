import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('/');
  await expect(page).toHaveTitle("To-Do's");
});

test('add task', async ({ page }) => {
  await page.goto('/');
  await page.getByRole('button', { name: '✚' }).click();
  await expect(page.getByRole('heading', { name: 'To-Do\'s 📜' })).toBeVisible();
});

test('clear all tasks', async ({ page }) => {
  await page.goto('/');
  await page.getByRole('button', { name: 'Clear All' }).click();
});

test('input field', async ({ page }) => {
  await page.goto('/');
  await page.getByRole('textbox').fill('Add your task');
});
