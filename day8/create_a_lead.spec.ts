import { chromium, test } from "@playwright/test";

test('Test to launch a browser',async ({page}) => {  // page fixture

//1. Navigate to the url http://leaftaps.com/opentaps/control/main

await page.goto(`http://leaftaps.com/opentaps/control/main`)

await page.locator(`[id="username"]`).fill(`Demosalesmanager`)//2. Enter the username as ‘Demosalesmanager’
await page.locator(`[id="password"]`).fill(`crmsfa`)//3. Enter the password as ‘crmsfa’
await page.locator(`[type="submit"]`).click()//4. Click the Login button
await page.locator(`[id="button"]`).click()//5. Click CRM/SFA

 
await page.locator("//a[text()='Leads']").click(); //6. Click Leads

await page.locator(`//a[text()='Create Lead']`).click() //7. Click Create Lead

await page.locator(`[id="createLeadForm_companyName"]`).fill(`vivek company`)// 8. Fill the Company Name
await page.locator(`[id="createLeadForm_firstName"]`).fill(`vivekanand`) //9. Fill the First Name
await page.locator(`[id="createLeadForm_lastName"]`).fill(`venugopal`) //10. Fill the Last Name
await page.locator(`[name="personalTitle"]`).fill(`Mr`) //11. Fill the Salutation
await page.locator(`[name="generalProfTitle"]`).fill(`Mr`) //12. Fill the Title
await page.locator(`[name="annualRevenue"]`).fill(`1000000`)// 13. Fill the Annual Revenue
await page.locator(`[name="departmentName"]`).fill(`testleaf`)// 14. Fill the Department
await page.locator(`[id="createLeadForm_primaryPhoneNumber"]`).fill(`9894332901`) //15. Fill the Phone number
await page.locator(`[name="submitButton"]`).click()// 16. Click Create Lead button

});




