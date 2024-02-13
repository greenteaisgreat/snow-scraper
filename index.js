const puppeteer = require('puppeteer');

const url = 'https://www.joshwcomeau.com/';

const main = async ()  => {
    //create a virtual browser
    const browser = await puppeteer.launch();
    //launch browser and open a new page
    const page = await browser.newPage();
    //visit the specified URL
    await page.goto(url);

    //take a screenshot of the entire site
    // await page.screenshot({ path: 'example.png', fullPage: true });

    //convert the entire site into a .pdf file
    // await page.pdf({ path: 'example.pdf', format: 'A4' });

    //the entire page's HTML content gets retrieved
    // const html = await page.content();
    // console.log(html);
    
    //retrieves the page's title
    // const title = await page.evaluate(() => document.title);
    // console.log(title);

    //retrieve the entirety of the text content on the page
    // const text = await page.evaluate(() => document.body.innerText);
    // console.log(text);
    


    //close the browser after successful parsing
    await browser.close(); 
}

main();