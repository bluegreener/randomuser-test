import { expect, Locator, Page } from '@playwright/test';

/** 
 * Page object representing the initial landing page.
 */
export class LandingPage {

    readonly page: Page;
    readonly displayedValueTitle: Locator;
    readonly displayedValue: Locator;
    readonly valueButtons: Locator;
    readonly nameButton: Locator;
    readonly emailButton: Locator;
    readonly birthdayButton: Locator;
    readonly addressButton: Locator;
    readonly phoneButton: Locator;
    readonly passButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.displayedValueTitle = page.locator('css=#user_title');
        this.displayedValue = page.locator('css=#user_value');
        this.valueButtons = page.locator('css=#values_list');
        this.nameButton = page.getByTestId('name');
        this.emailButton = page.getByTestId('email');
        this.birthdayButton = page.getByTestId('birthday');
        this.addressButton = page.getByTestId('location');
        this.phoneButton = page.getByTestId('phone');
        this.passButton = page.getByTestId('pass');
    }

    /**
     * Navigates to the landing page of the site
     * 
     * @param waitForDataLoad if set page will wait until the default displayed value is replaced before continuing
     */
    async goto(waitForDataLoad?: boolean) {
        this.page.goto('./');
        if(waitForDataLoad) {
            await expect(this.displayedValue).not.toHaveText('...', { timeout: 15000 });
        }
    }

}