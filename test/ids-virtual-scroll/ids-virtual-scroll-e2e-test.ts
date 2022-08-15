import { AxePuppeteer } from '@axe-core/puppeteer';

describe('Ids Virtual Scroll e2e Tests', () => {
  const url = 'http://localhost:4444/ids-virtual-scroll/example.html';

  beforeAll(async () => {
    await page.goto(url, { waitUntil: ['networkidle2', 'load'] });
  });

  it('should not have errors', async () => {
    await expect(page.title()).resolves.toMatch('IDS Virtual Scroll Component');
  });

  it('should pass Axe accessibility tests', async () => {
    await page.setBypassCSP(true);
    await page.goto(url, { waitUntil: ['networkidle2', 'load'] });
    const results = await new AxePuppeteer(page).disableRules(['scrollable-region-focusable', 'landmark-one-main', 'page-has-heading-one']).analyze();
    expect(results.violations.length).toBe(0);
  });

  it('should render some rows', async () => {
    await page.goto(url, { waitUntil: ['networkidle2', 'load'] });
    await page.waitForSelector('.ids-data-grid-row');

    const count = (await page.$$('.ids-data-grid-row')).length;
    expect(count).toEqual(60);
  });
});
