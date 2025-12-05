import { chromium, test } from "@playwright/test";

test('Test to launch a browser',async ({page}) => {  // page fixture

//1. Navigate to the url http://leaftaps.com/opentaps/control/main

await page.goto(`http://leaftaps.com/opentaps/control/main`)

await page.locator(`[id="username"]`).fill(`Demosalesmanager`)//2. Enter the username as ‘Demosalesmanager’
await page.locator(`[id="password"]`).fill(`crmsfa`)//3. Enter the password as ‘crmsfa’
await page.locator(`[type="submit"]`).click()//4. Click the Login button
await page.locator(`[id="button"]`).click()//5. Click CRM/SFA

 
await page.locator("//a[text()='Leads']").click(); //6. Click Leads

await page.locator(`//a[text()='Find Leads']`).click() //7. Click Find Leads
await page.locator(`(//input[@name="firstName"])[3]`).fill(`vivekanand`) //8. Enter the first name
await page.locator('(//button[@class="x-btn-text"])[7]').click(); //9. Click Find Leads button
await page.locator("//a[text()='11628']").click() //10. Click the first resulting Lead ID

await page.locator("//a[text()='Edit']").click()  //11. Click Edit

await page.locator(`(//input[@name='companyName'])[2]`).fill(`kumar company`) //12. Edit Company name
await page.locator(`[id="updateLeadForm_departmentName"]`).fill(`testdepartment`)  //14. Edit Department
await page.locator(`[id="updateLeadForm_annualRevenue"]`).fill(`20000`) //13. Edit Annual Revenue
await page.locator(`[id="updateLeadForm_description"]`).fill(`updating the description`)  //15. Enter Description
await page.locator('(//input[@class="smallSubmit"])[1]').click() //16. Click Update
})