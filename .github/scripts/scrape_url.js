const puppeteer = require('puppeteer');

(async () => {
  try {
    const browser = await puppeteer.launch({
      headless: "new",
      args: ['--no-sandbox', '--disable-setuid-sandbox']
    });
    const page = await browser.newPage();

    await page.goto('https://antigravity.google/download/linux', {
      waitUntil: 'networkidle0',
      timeout: 60000
    });

    const selector = 'a[href*="antigravity/stable/"]';
    await page.waitForSelector(selector, { timeout: 10000 });

    const downloadUrl = await page.$eval(selector, el => el.href);

    if (downloadUrl) {
      console.log(downloadUrl);
    } else {
      console.error('Download URL not found.');
      process.exit(1);
    }

    await browser.close();
  } catch (error) {
    console.error('Error scraping URL:', error);
    process.exit(1);
  }
})();
