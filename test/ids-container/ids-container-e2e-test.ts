import { AxePuppeteer } from '@axe-core/puppeteer';

describe('Ids Container e2e Tests', () => {
  const url = 'http://localhost:4444/ids-container/example.html';

  beforeAll(async () => {
    await page.goto(url, { waitUntil: ['networkidle2', 'load'] });
  });

  it('should not have errors', async () => {
    await expect(page.title()).resolves.toMatch('IDS Container Component');
  });

  it('should not have hidden', async () => {
    const isHidden = await page.$eval('ids-container', (container: any) => container.getAttribute('hidden'));
    expect(isHidden).toBe(null);
  });

  it('should pass Axe accessibility tests', async () => {
    await page.setBypassCSP(true);
    await page.goto(url, { waitUntil: ['networkidle2', 'load'] });
    const results = await new AxePuppeteer(page).disableRules(['page-has-heading-one']).analyze();
    expect(results.violations.length).toBe(0);
  });
});
