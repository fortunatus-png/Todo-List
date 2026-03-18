import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('/');
  await expect(page).toHaveTitle("To-Do's");
  await expect(page.getByRole('heading', { name: 'To-Do\'s 📜' })).toBeVisible();
});

test('add task', async ({ page }) => {
  await page.goto('/');
  await page.getByRole('textbox').fill('aaa');
  await page.getByRole('button', { name: '✚' }).click();
  await page.getByRole('textbox').fill('bbb');
  await page.getByRole('button', { name: '✚' }).click();

  await page.getByRole('checkbox').first().check();
  await page.getByRole('checkbox').first().uncheck();
  await page.getByRole('checkbox').nth(1).check();
  
  await expect(page.getByRole('checkbox').first()).not.toBeChecked();
  await expect(page.getByRole('checkbox').nth(1)).toBeChecked();
  
  await expect(page.getByText('aaa')).toBeVisible();
  await expect(page.getByText('bbb')).toBeVisible();
});

test('delete task', async ({ page }) => {
  await page.goto('/');
  await page.getByRole('textbox').fill('aaa');
  await page.getByRole('button', { name: '✚' }).click();
  await page.getByRole('textbox').fill('bbb');
  await page.getByRole('button', { name: '✚' }).click();
  await page.getByText('').nth(1).click();

  await expect(page.getByText('aaa')).toBeVisible();
  await expect(page.getByRole('').nth(1)).not.toBeVisible();
  await expect(page.getByText('bbb')).not.toBeVisible();
});

test('clear all tasks', async ({ page }) => {
  await page.goto('/');
  await page.getByRole('textbox').fill('aaa');
  await page.getByRole('button', { name: '✚' }).click();
  await page.getByRole('button', { name: 'Clear All' }).click();
  await expect(page.getByText('aaa')).not.toBeVisible();
});

