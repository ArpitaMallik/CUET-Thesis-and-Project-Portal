import { test, expect } from '@playwright/test';

test.describe('Academic Projects Tests', () => {
  
  test.beforeEach(async ({ page }) => {
   
    await page.goto('http://localhost:5173');
    await page.fill('input[name="studentId"]', '2004023'); 
    await page.fill('input[name="password"]', 'arpita');  
    await page.click('button:has-text("Sign in")');
    await expect(page).toHaveURL(/dashboard/);
  });

  // TC-AP-01: View All Academic Projects Correctly
  test('should display all academic projects correctly', async ({ page }) => {
    await page.click('nav >> text=Academic Projects');
    await expect(page).toHaveURL(/projects/);

    
    await page.waitForSelector('.projects.bg-white.p-6.rounded-lg.shadow-md', { state: 'visible', timeout: 10000 });

    const projectCards = page.locator('.projects.bg-white.p-6.rounded-lg.shadow-md');
    const count = await projectCards.count();
    expect(count).toBeGreaterThan(0);

    console.log('Total Academic Projects Found:', count);

    for (const card of await projectCards.all()) {
      await expect(card.locator('h3')).not.toBeEmpty();
      await expect(card.locator('.students')).not.toBeEmpty(); 
    }
  });

  // TC-AP-02: GitHub Link Works (Replaces "Download" Button)
  test('should redirect to GitHub when clicking View Code link', async ({ page, context }) => {
    await page.click('nav >> text=Academic Projects');
    await expect(page).toHaveURL(/projects/);

    
    await page.waitForSelector('.projects.bg-white.p-6.rounded-lg.shadow-md', { state: 'visible', timeout: 10000 });

   
    const firstProject = page.locator('.projects.bg-white.p-6.rounded-lg.shadow-md').first();
    const githubLink = firstProject.locator('.github a');

    
    await expect(githubLink).toHaveAttribute('href', /github\.com/);

    const [newPage] = await Promise.all([
      context.waitForEvent('page'),  
      githubLink.click()
    ]);

    await expect(newPage).toHaveURL(/github\.com/);
  });

});
