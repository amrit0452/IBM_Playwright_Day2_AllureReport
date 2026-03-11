// @ts-check
import { test, expect } from '@playwright/test';

test('contact page title', async ({ page }) => {
  await page.goto('http://localhost:3000/contact.html');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Contact/);
});


test('contact page submit', async ({page}) => {
  await page.goto('http://localhost:3000/contact.html');
  const email = page.getByPlaceholder(/Your Email/);
  const msg = page.locator("#message");

  const btn = page.getByText('Send');

  await email.fill('amrit@gmail.com');
  await msg.fill('some message');

  await btn.click();
  await msg.screenshot({type: 'png', path: './msg.png'});
  await page.screenshot({fullPage: true, type: 'png', path:'./img.png'});


});

[{email: "amrit@gmail.com", msg: "some message 1"} ,
  {email: "raj@gmail.com", msg: "some message 2"}
].forEach(obj =>{
  test(`localhost 3000 contact test for ${obj.email}`, async ({page}) =>{

    await page.goto('http://localhost:3000/contact.html');
    await page.getByRole('textbox', {name: 'Your Email'}).click();
    await page.getByRole('textbox', {name: 'Your Email'}).fill(obj.email);
    await page.locator('#message').click();
    await page.locator('#message').fill(obj.msg);
    page.once('dialog', dialog => {
      console.log(`Dialog message:  ${dialog.message()}`);
      dialog.dismiss().catch(() =>{

      })
    });
    await page.getByRole('button', {name: 'Send'}).click();
    })
})

test.skip('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});
