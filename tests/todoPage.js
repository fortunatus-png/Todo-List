import { expect } from '@playwright/test';

export class TodoPage {
    constructor(page) {
        this.page = page;
        this.addButton = page.getByRole('button', { name: '✚' });
        this.clearButton = page.getByRole('button', { name: 'Clear All' });
        this.checkBox = page.getByRole('checkbox');
        this.textBox = page.getByRole('textbox');
        this.taskContainer = page.locator('.task-container');
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
}
