import { test, expect } from '@playwright/test';
import { LandingPage } from '../../pages/landing-page';

test('page updates on interaction with data items with correct data', async ({ page }, workerInfo) => {
  
  const landingPage = new LandingPage(page);

  // wait for page to populate
  await landingPage.goto(true);
  
  for (const item of await landingPage.valueButtons.getByRole('listitem').all()) {
    if(workerInfo.project.name.includes('Mobile')) {
        // click UI control on mobile
        await item.click();
    } else {
        // hover over UI control on desktop
        await item.hover();
    }
    
    // capture title and value
    const expectedTitle = await item.getAttribute('data-title') + "";
    const expectedValue = await item.getAttribute('data-value') + "";
    // compare to UI display
    await expect(landingPage.displayedValueTitle).toHaveText(expectedTitle);
    await expect(landingPage.displayedValue).toHaveText(expectedValue);
  }
  
});
