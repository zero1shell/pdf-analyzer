const puppeteer = require('puppeteer');

describe('Web App Test', () => {
    let browser;
    let page;

    beforeAll(async () => {
        browser = await puppeteer.launch({
            headless: false, // Set to true to run headless
            slowMo: 50, // Slow down by 50ms
        });
        page = await browser.newPage();
        await page.goto('http://localhost:3000'); // Replace with your app URL
    });

    afterAll(async () => {
        await browser.close();
    });

    test('User logs in and does not upload a PDF resume. User quits.', async () => {
        await page.click('#login'); // Click the login button or link
        await page.type('#username', 'testuser');
        await page.type('#password', 'password123');
        await page.click('#loginSubmit');
        await page.waitForSelector('#dashboard'); // Assuming dashboard appears after login
        const dashboardText = await page.$eval('#dashboard', el => el.textContent);
        expect(dashboardText).toContain('Dashboard');
        await page.close(); // User quits
    });

    test('User logs in and uploads a PDF resume. User quits.', async () => {
        await page.click('#login'); // Click the login button or link
        await page.type('#username', 'testuser');
        await page.type('#password', 'password123');
        await page.click('#loginSubmit');
        await page.waitForSelector('#dashboard'); // Assuming dashboard appears after login
        const fileInput = await page.$('input[type=file]');
        await fileInput.uploadFile('path/to/your/file.pdf'); // Replace with your PDF file path
        await page.click('#uploadSubmit');
        await page.waitForSelector('#uploadSuccess'); // Assuming a success message appears
        const uploadMessage = await page.$eval('#uploadSuccess', el => el.textContent);
        expect(uploadMessage).toContain('Upload successful');
        await page.close(); // User quits
    });

    test('User logs in, uploads a PDF resume, and requests an AI-based analysis. User quits.', async () => {
        await page.click('#login'); // Click the login button or link
        await page.type('#username', 'testuser');
        await page.type('#password', 'password123');
        await page.click('#loginSubmit');
        await page.waitForSelector('#dashboard'); // Assuming dashboard appears after login
        const fileInput = await page.$('input[type=file]');
        await fileInput.uploadFile('path/to/your/file.pdf'); // Replace with your PDF file path
        await page.click('#uploadSubmit');
        await page.waitForSelector('#uploadSuccess'); // Assuming a success message appears
        const uploadMessage = await page.$eval('#uploadSuccess', el => el.textContent);
        expect(uploadMessage).toContain('Upload successful');
        await page.click('#requestAnalysis'); // Click the button to request AI-based analysis
        await page.waitForSelector('#analysisResult'); // Assuming analysis result appears
        const analysisResult = await page.$eval('#analysisResult', el => el.textContent);
        expect(analysisResult).toContain('Analysis complete');
        await page.close(); // User quits
    });

    test('User logs in, uploads a PDF resume, requests an AI-based analysis, and copies the AI-based analysis. User quits.', async () => {
        await page.click('#login'); // Click the login button or link
        await page.type('#username', 'testuser');
        await page.type('#password', 'password123');
        await page.click('#loginSubmit');
        await page.waitForSelector('#dashboard'); // Assuming dashboard appears after login
        const fileInput = await page.$('input[type=file]');
        await fileInput.uploadFile('path/to/your/file.pdf'); // Replace with your PDF file path
        await page.click('#uploadSubmit');
        await page.waitForSelector('#uploadSuccess'); // Assuming a success message appears
        const uploadMessage = await page.$eval('#uploadSuccess', el => el.textContent);
        expect(uploadMessage).toContain('Upload successful');
        await page.click('#requestAnalysis'); // Click the button to request AI-based analysis
        await page.waitForSelector('#analysisResult'); // Assuming analysis result appears
        const analysisResult = await page.$eval('#analysisResult', el => el.textContent);
        expect(analysisResult).toContain('Analysis complete');
        await page.click('#copyAnalysis'); // Click the button to copy the AI-based analysis
        await page.waitForSelector('#copySuccess'); // Assuming a success message appears
        const copyMessage = await page.$eval('#copySuccess', el => el.textContent);
        expect(copyMessage).toContain('Copy successful');
        await page.close(); // User quits
    });
});
