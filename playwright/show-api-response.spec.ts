import { test, expect } from '@playwright/test';

test('shows API response', async ({ page }) => {
  await page.goto('http://localhost:4200/show-api-response');
  await expect(page.getByTestId('api-response')).toHaveText("Hello World!");
});
