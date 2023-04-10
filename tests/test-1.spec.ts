import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://ncl.testing.links-agent.cenora.io/');
  await page.goto('https://ncl.testing.links-agent.cenora.io/login');
  await page.getByRole('textbox', { name: 'Email' }).click();
  await page.getByText('LINKS 1.0 - LOGINemailEmaillockPasswordForgot Password?Log In').click();
  await page.getByRole('textbox', { name: 'Email' }).click();
  await page.getByRole('textbox', { name: 'Email' }).fill('rabdy+ncl@cenora.com');
  await page.getByText('LINKS 1.0 - LOGINemailEmaillockPasswordForgot Password?Log In').click();
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('Pruebas01*');
  await page.getByRole('button', { name: 'Log In' }).click();
  await page.getByRole('button', { name: '+ NEW CRUISES LINK' }).click();
  await page.frameLocator('#extension-iframe').locator('div').filter({ hasText: 'north_eastEnter Sectioncalendar_todayView Dates' }).first().click();
  await page.frameLocator('#extension-iframe').locator('.card-preview').click();
  await page.frameLocator('#extension-iframe').getByRole('button').filter({ hasText: 'close' }).first().click();
  await page.frameLocator('#extension-iframe').getByRole('button', { name: 'Enter Section' }).click();
  await page1.goto('https://ncl.testing.agent.cenora.io/login');
  await page1.getByRole('img').locator('div').nth(2).click({
    clickCount: 4
  });
  await page1.getByRole('textbox', { name: 'Email' }).click({
    clickCount: 7
  });
  await page1.locator('div').filter({ hasText: 'LOGINemailEmaillockPasswordForgot Password?Log In Or choose another ID Provider:' }).nth(1).click();
  await page1.getByRole('textbox', { name: 'Email' }).click();
  await page1.getByRole('textbox', { name: 'Email' }).fill('rabdy+ncl@cenora.com');
  await page1.locator('div').filter({ hasText: 'LOGINemailEmaillockPasswordPassword is requiredForgot Password?Log In Or choose ' }).nth(1).click();
  await page1.getByRole('textbox', { name: 'Password' }).click();
  await page1.getByRole('textbox', { name: 'Password' }).fill('Pruebas01*');
  await page1.locator('div').filter({ hasText: 'Log In' }).click();
  await page1.locator('#notification-dialog').getByText('close').click();
  await page1.locator('div').filter({ hasText: 'list_alt' }).nth(1).click();
  await page1.locator('#button-plugin-drawer').getByText('link').first().click();
  const page2Promise = page1.waitForEvent('popup');
  await page1.getByRole('button', { name: 'Convert to Link' }).click();
  const page2 = await page2Promise;
  await page2.getByRole('button', { name: 'Save and CONTINUE' }).click();
  await page.frameLocator('#extension-iframe').getByRole('link', { name: 'Back To Cruises' }).click();
  await page.goto('https://ncl.testing.links-agent.cenora.io/wizard');
  await page2.goto('https://ncl.testing.links-agent.cenora.io/wizard');
});