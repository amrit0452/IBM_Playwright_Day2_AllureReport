import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.amazon.in/');
  await page.getByRole('link', { name: 'Mobiles' ,  timeout: 60000 }).click();
  await page.getByRole('link', { name: 'Nothing Phone (3a Lite) (' ,  timeout: 60000 }).click();
  await page.getByRole('button', { name: 'Buy Now',  timeout: 60000  }).click();
  await page.getByRole('textbox', { name: 'Enter mobile number or email' });
  await page.getByRole('textbox', { name: 'Enter mobile number or email' }).fill('amrit@gmail.com');
  await page.getByRole('button', { name: 'Continue' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('sjdflajsdk');
  await page.getByRole('button', { name: 'Sign in' }).click();
  await page.getByText('Your password is incorrect').click();
});