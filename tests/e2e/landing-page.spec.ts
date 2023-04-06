import { test, expect } from '@playwright/test';

test('page updates on hover of data items with correct data', async ({ page }) => {
  await page.goto('./');

  // wait for API call to finish and page to populate
  await expect(page.locator('css=#user_value')).not.toHaveText('...', { timeout: 10000 });
  
  for (const item of await page.locator('css=#values_list').getByRole('listitem').all()) {
    // hover over UI control
    await item.hover();
    // capture data value
    const expectedValue = await item.getAttribute('data-value') + "";
    // compare to UI display
    await expect(await page.locator('css=#user_value')).toHaveText(expectedValue);
  }
  
});
