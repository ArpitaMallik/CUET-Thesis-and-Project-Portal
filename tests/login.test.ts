import { test, expect } from '@playwright/test';

test.describe('CUET Thesis Portal Tests', () => {
  test('should load login page', async ({ page }) => {
    await page.goto('http://localhost:5173'); // Update with your app's local URL
    await expect(page.locator('h2')).toHaveText('CUET Thesis & Project Portal');
  });

  test('should show validation errors for empty fields', async ({ page }) => {
    await page.goto('http://localhost:5173');
    await page.click('button:has-text("Sign in")');
    await expect(page.locator('input[name="studentId"]')).toHaveAttribute('required', '');
    await expect(page.locator('input[name="password"]')).toHaveAttribute('required', '');
  });

  test('should navigate to dashboard on successful login', async ({ page }) => {
    await page.goto('http://localhost:5173');
    await page.fill('input[name="studentId"]', '2004023'); // Replace with valid credentials
    await page.fill('input[name="password"]', 'arpita'); // Replace with valid credentials
    await page.click('button:has-text("Sign in")');

    await page.waitForTimeout(3000); // Give time for navigation
    console.log('Current URL:', await page.url()); // Debugging

 
    await expect(page).toHaveURL(/dashboard/);
    await expect(page.url()).toContain('/dashboard');

    
    await expect(page.locator('h1')).toHaveText('Dashboard');
  });

  test('should navigate to and verify all pages after login', async ({ page }) => {
    // Log in first
    await page.goto('http://localhost:5173');
    await page.fill('input[name="studentId"]', '2004023'); // Replace with valid credentials
    await page.fill('input[name="password"]', 'arpita'); // Replace with valid credentials
    await page.click('button:has-text("Sign in")');

    await page.waitForTimeout(3000); // Give time for navigation
    console.log('Current URL:', await page.url()); // Debugging

   
    await expect(page).toHaveURL(/dashboard/);
    await expect(page.url()).toContain('/dashboard');

   
    await expect(page.locator('h1')).toHaveText('Dashboard');

    // List of pages to test after login
    const pagesToTest: { url: string; title: string }[] = [
      { url: '/dashboard', title: 'Dashboard' },
      { url: '/thesis', title: 'Thesis Papers' },
      { url: '/projects', title: 'Academic Projects' },
      { url: '/supervisors', title: 'Supervisor Information' },
      { url: '/profile', title: 'Profile' },
    ];

    for (const { url, title } of pagesToTest) {
      await page.goto(`http://localhost:5173${url}`);
      await expect(page.locator('h1')).toHaveText(title); // Verify page title or header
    }
  });
});
