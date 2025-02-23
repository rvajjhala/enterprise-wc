import percySnapshot from '@percy/puppeteer';

describe('Ids Time Picker Percy Tests', () => {
  const url = 'http://localhost:4444/ids-time-picker/open.html';

  it('should not have visual regressions in new light theme (percy)', async () => {
    await page.goto(url, { waitUntil: ['networkidle2', 'load'] });
    await page.evaluate(() => {
      document.querySelector('ids-theme-switcher')?.setAttribute('mode', 'light');
    });
    await page.waitForSelector('pierce/.popup-btn');
    await percySnapshot(page, 'ids-time-picker-new-light');
  });

  it('should not have visual regressions in new dark theme (percy)', async () => {
    await page.goto(url, { waitUntil: ['networkidle2', 'load'] });
    await page.evaluate(() => {
      document.querySelector('ids-theme-switcher')?.setAttribute('mode', 'dark');
    });
    await page.waitForSelector('pierce/.popup-btn');
    await percySnapshot(page, 'ids-time-picker-new-dark');
  });

  it('should not have visual regressions in new contrast theme (percy)', async () => {
    await page.goto(url, { waitUntil: ['networkidle2', 'load'] });
    await page.evaluate(() => {
      document.querySelector('ids-theme-switcher')?.setAttribute('mode', 'contrast');
    });
    await page.waitForSelector('pierce/.popup-btn');
    await percySnapshot(page, 'ids-time-picker-new-contrast');
  });
});
