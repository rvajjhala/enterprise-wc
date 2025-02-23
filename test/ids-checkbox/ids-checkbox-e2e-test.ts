import { AxePuppeteer } from '@axe-core/puppeteer';
import countObjects from '../helpers/count-objects';

describe('Ids Checkbox e2e Tests', () => {
  const url = 'http://localhost:4444/ids-checkbox/example.html';

  beforeAll(async () => {
    await page.goto(url, { waitUntil: ['networkidle2', 'load'] });
  });

  it('should not have errors', async () => {
    await expect(page.title()).resolves.toMatch('IDS Checkbox Component');
  });

  it('should be able to createElement', async () => {
    let hasError = false;
    try {
      await page.evaluate(() => {
        document.createElement('ids-checkbox');
      });
    } catch (err) {
      hasError = true;
    }
    await expect(hasError).toEqual(false);
  });

  it('should pass Axe accessibility tests', async () => {
    await page.setBypassCSP(true);
    await page.goto(url, { waitUntil: ['networkidle2', 'load'] });
    const results = await new AxePuppeteer(page).analyze();
    expect(results.violations.length).toBe(0);
  });

  it.skip('should not have memory leaks', async () => {
    const numberOfObjects = await countObjects(page);
    await page.evaluate(() => {
      document.body.insertAdjacentHTML('beforeend', `<ids-checkbox label="Checked" checked="true" id="test"></ids-checkbox>`);
      document.querySelector('#test')?.remove();
    });
    expect(await countObjects(page)).toEqual(numberOfObjects);
  });
});
