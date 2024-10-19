const puppeteer = require('puppeteer')

describe('My Test', ()=> {
    it('should lunch browser', async function(){
        const browser = await puppeteer.launch({
            headless: false,
            slowMo : 10,
            devtools: false,
        })
        const page = await browser.newPage()
        await page.goto('http://localhost:3000')
        await page.click('.inline-flex',{clickCount:1})
        await page.waitForSelector('#identifier-field')
        await page.type('#identifier-field','admin')
        // await page.waitForSelector('.cl-formButtonPrimary')
        // await page.click('.cl-formButtonPrimary')
        await page.waitForSelector('#password-field')
        await page.click('#password-field')
        await page.type('#password-field','admin789#',{delay:110});
        await page.click('.cl-formButtonPrimary',)
    
        // await page.waitForSelector('mr-3 text-7xl front-semibold')
        
        // const dashboardText = await page.$eval('mr-3 text-7xl front-semibold', elem => el.textContent);
        // expect(dashboardText).toContain("Let's Analyze Your Resume");
        // await page.close(); // User quits
    

        // await page.close();
        // await browser.close()
    }, 70000)
})
