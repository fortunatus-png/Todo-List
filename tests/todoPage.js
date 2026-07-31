import { expect } from '@playwright/test';

export class TodoPage {
    constructor(page) {
        this.page = page;
        this.heading = page.getByRole('heading', { name: 'To-Do\'s 📜' });
        this.addButton = page.getByRole('button', { name: '✚' });
        this.clearButton = page.getByRole('button', { name: 'Clear All' });
        this.checkBox = page.getByRole('checkbox');
        this.textBox = page.getByRole('textbox');
        this.taskContainer = page.locator('.task-container');
    }

    async goto() {
        await this.page.goto('/');
    }

    async assertTitle() {
        await expect(this.page).toHaveTitle("To-Do's");
    }

    async assertHeadingVisible() {
        await expect(this.heading).toBeVisible();
    }

    async addTask(text) {
        await this.textBox.fill(text);
        await this.addButton.click();
    }

    async deleteTask(text) {
        await this.taskContainer
            .filter({ hasText: text })
            .getByRole('button', { name: '' })
            .click();
    }

    async clearAllTasks() {
        await this.clearButton.click();
    }

    async assertTaskVisible(text) {
        const task = this.taskContainer.filter({ hasText: text });
        await expect(task).toHaveCount(1);
        await expect(task.first()).toBeVisible();
    }

    async assertTaskNotVisible(text) {
        await expect(this.taskContainer.filter({ hasText: text })).toHaveCount(0);
    }
}
