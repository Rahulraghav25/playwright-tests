import { test, expect } from '@playwright/test';

test("verify the title of the page", async ({page})=>{
  await page.goto("https://www.automationexercise.com/");

  let title: string = await page.title();
  console.log("The title of the page is: " + title);

  await expect(page).toHaveTitle("Automation Exercise");
})