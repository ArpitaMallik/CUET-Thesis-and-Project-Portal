import { test, expect } from '@playwright/test';

test.describe('Supervisor Information Tests', () => {

  test.beforeEach(async ({ page }) => {
    // Log in before running each test
    await page.goto('http://localhost:5173');
    await page.fill('input[name="studentId"]', '2004023');
    await page.fill('input[name="password"]', 'arpita');
    await page.click('button:has-text("Sign in")');
    await expect(page).toHaveURL(/dashboard/);
  });

  // TC-SP-01: View All Supervisor Information Correctly
  test('should display all supervisor information correctly', async ({ page }) => {
    // Navigate to the Supervisor page
    await page.click('nav >> text=Supervisor');
    await expect(page).toHaveURL(/supervisor/);

    // Wait for supervisor information to be visible
    await page.waitForSelector('.supervisor-info', { state: 'visible', timeout: 10000 });

    // Find all supervisor name elements
    const supervisorNames = page.locator('.supervisor-name');

    // Ensure at least one supervisor is displayed
    const count = await supervisorNames.count();
    expect(count).toBeGreaterThan(0);

    console.log('Total Supervisor Names Found:', count);

    // Check that each supervisor name is not empty
    for (let i = 0; i < count; i++) {
      const name = await supervisorNames.nth(i).textContent();
      expect(name).not.toBeNull();
      expect(name?.trim()).not.toBe('');
    }

    // Optionally, check other supervisor details (email, department)
    for (let i = 0; i < count; i++) {
      const supervisorInfo = page.locator('.supervisor-info').nth(i);
      await expect(supervisorInfo.locator('.supervisor-email')).not.toBeEmpty();
      await expect(supervisorInfo.locator('.supervisor-department')).not.toBeEmpty();
    }

    console.log('Supervisor information is displayed correctly');
  });

});
