import {test, expect} from "@playwright/test";

test("verify the page url", async ({page})=>{
    await page.goto("https://www.automationexercise.com/");

    let url: string = await page.url();
    console.log("The url of the page is: " + url);
    await expect(page).toHaveURL("https://www.automationexercise.com/");
})