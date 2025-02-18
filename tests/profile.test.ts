import { test, expect } from '@playwright/test';

test.describe('Profile Page Tests', () => {

  test.beforeEach(async ({ page }) => {
    // Log in before running each test
    await page.goto('http://localhost:5173');
    await page.fill('input[name="studentId"]', '2004023');
    await page.fill('input[name="password"]', 'arpita');
    await page.click('button:has-text("Sign in")');
    await expect(page).toHaveURL(/dashboard/);
  });

  // TC-PP-01: View the Profile Page
  test('should display the profile information correctly', async ({ page }) => {
    // Navigate to the Profile page
    await page.click('nav >> text=Profile');
    await expect(page).toHaveURL(/profile/);

   
    await page.waitForSelector('.profile-info', { state: 'visible', timeout: 10000 });

  
    const profileInfo = page.locator('.profile-info');
    const profileDetails = await profileInfo.allTextContents();
    expect(profileDetails.length).toBeGreaterThan(0);  

  
    await expect(profileInfo.locator('.profile-name')).not.toBeEmpty();
    await expect(profileInfo.locator('.profile-email')).not.toBeEmpty();
    await expect(profileInfo.locator('.profile-department')).not.toBeEmpty();
    await expect(profileInfo.locator('.profile-phone')).not.toBeEmpty();

    console.log('Profile information is displayed correctly');
  });

//   // TC-PP-02: Update the Profile Page
//   test('should update the profile information correctly', async ({ page }) => {
    
//     await page.click('nav >> text=Profile');
//     await expect(page).toHaveURL(/profile/);

    
//     await page.waitForSelector('.profile-info', { state: 'visible', timeout: 10000 });

   
//     const nameInput = page.locator('input[name="name"]');
//     await nameInput.fill('New Name'); 
//     await nameInput.press('Tab');  

   
//     await page.click('button:has-text("Save")');

//     await page.waitForSelector('.profile-info', { state: 'visible', timeout: 10000 });

    
//     const updatedName = await page.locator('.profile-name').textContent();
//     expect(updatedName).toContain('New Name');  // Check if the updated name is displayed

//     console.log('Profile information has been updated successfully');
//   });

});
