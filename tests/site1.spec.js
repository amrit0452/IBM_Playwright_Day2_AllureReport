// @ts-check
import { test, expect } from '@playwright/test';

test('orange hrm title', async({page}) =>{
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    await expect(page).toHaveTitle(/OrangeHRM/);
})


test.beforeEach(async({page})=>{
//     test('login validation', async({page}) =>{
   
// });
 await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    await page.getByRole('textbox', { name: 'Username' }).click();
    await page.getByRole('textbox', { name: 'Username' }).fill('Admin');
    await page.getByRole('textbox', { name: 'Password'}).click();
    await page.getByRole('textbox', { name: 'Password'}).fill('admin123');
    await page.getByRole('button', { name: 'Login' }).click();
    await expect(page).toHaveURL(/dashboard/);
})

test('add orange admin', async({page})=>{
    // await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/admin/viewSystemUsers');
     await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

    // await page.locator('/html/body/div/div[1]/div[1]/aside/nav/div[2]/ul/li[1]/a').click();
    page.getByText('Admin').click();
    await expect(page).toHaveURL(/admin/);
});



