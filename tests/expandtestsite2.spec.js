import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://practice.expandtesting.com/inputs');
  await page.getByRole('spinbutton', { name: 'Input: Number' }).click();
  await page.getByRole('spinbutton', { name: 'Input: Number' }).fill('1234');
  await page.getByRole('textbox', { name: 'Input: Text' }).click();
  await page.getByRole('textbox', { name: 'Input: Text' }).fill('amrit');
  await page.getByRole('textbox', { name: 'Input: Password' }).click();
  await page.getByRole('textbox', { name: 'Input: Password' }).fill('passord');
  await page.getByRole('textbox', { name: 'Input: Date' }).fill('2026-03-11');
  await page.getByRole('button', { name: 'Display Inputs' }).click();
  await page.getByText('1234').click();
  await page.getByText('amrit').click();
  await page.getByText('passord').click();
  await page.getByText('-03-11').click();
});