import { test, expect } from '@playwright/test';

test.describe('Thesis Papers Tests', () => {
  
  test.beforeEach(async ({ page }) => {
    // Log in before running each test
    await page.goto('http://localhost:5173');
    await page.fill('input[name="studentId"]', '2004023'); 
    await page.fill('input[name="password"]', 'arpita');  
    await page.click('button:has-text("Sign in")');
    await expect(page).toHaveURL(/dashboard/);
  });

  // TC-TP-01: View All Thesis Papers Correctly
  test('should display all thesis papers correctly', async ({ page }) => {
    await page.click('nav >> text=Thesis Papers');
    await expect(page).toHaveURL(/thesis/);
  
    await page.waitForSelector('.theses.bg-white.p-6.rounded-lg.shadow-md', { state: 'visible', timeout: 10000 });
  
    const thesisCards = page.locator('.theses.bg-white.p-6.rounded-lg.shadow-md');
    const count = await thesisCards.count();
    expect(count).toBeGreaterThan(0);
  
    console.log('Total Thesis Papers Found:', count);
  
    for (const card of await thesisCards.all()) {
      await expect(card.locator('h3')).not.toBeEmpty();  // Ensure title exists
      await expect(card.locator('.thesis-author')).not.toBeEmpty();
      await expect(card.locator('.thesis-year')).not.toBeEmpty();
    }
  });
  

// TC-TP-02: Verify View Button Opens PDF in a New Tab
test('should open thesis paper in a new tab when View button is clicked', async ({ page, context }) => {
    await page.click('nav >> text=Thesis Papers');
    await expect(page).toHaveURL(/thesis/);

   
    await page.waitForSelector('.theses.bg-white.p-6.rounded-lg.shadow-md', { state: 'visible', timeout: 10000 });

  
    const firstThesis = page.locator('.theses.bg-white.p-6.rounded-lg.shadow-md').first();
    const viewButton = firstThesis.locator('.thesis-view a');

   
    await expect(viewButton).toHaveAttribute('href', /drive\.google\.com/);

   
    const [newPage] = await Promise.all([
      context.waitForEvent('page'), 
      viewButton.click()
    ]);

 
    await expect(newPage).toHaveURL(/drive\.google\.com/);
});

  
});
