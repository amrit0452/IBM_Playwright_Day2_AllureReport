const {test, exprect} = require('@playwright/test');

test.describe('Checking UI interactions', () => {
    test.beforeEach(async ({page}) => {
        await page.goto('https://practice-automation.com/?utm_source=copilot.com');
        
    });

    test('1. Popups and Alerts', async ({page}) =>{
        
    })
})