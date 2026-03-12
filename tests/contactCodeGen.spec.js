import { test, expect } from '@playwright/test';

test.skip('test', async ({ page }) => {
  await page.goto('http://localhost:3000/contact.html');
  await page.getByRole('heading', { name: 'Contact Us' });// without click() also work
  await page.getByRole('textbox', { name: 'Your Email' }).click();
  await page.getByRole('textbox', { name: 'Your Email' }).fill('amrit@gmail.com');
  await page.getByRole('textbox', { name: 'Message' }).click();
  await page.getByRole('textbox', { name: 'Message' }).fill('Hi this is a test message');
  page.once('dialog', dialog => {
    console.log(`Dialog message: ${dialog.message()}`);
    dialog.dismiss().catch(() => {});
  });
  await page.getByRole('button', { name: 'Send' }).click();
});