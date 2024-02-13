const fs = require('fs');
const puppeteer = require('puppeteer');

const url = 'http://www.traversymedia.com/';

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

    // retrieve the entirety of the text content on the page
    // const text = await page.evaluate(() => document.body.innerText);
    // console.log(text);
    
    //retrieves all links from a page; Array.from is used to convert
    //the original Node list into an array
    // const links = await page.evaluate(() => 
    //     Array.from(document.querySelectorAll('a'), e => e.href));
    // console.log(links);

    //retrieves the name of all the courses and places each one
    //in an object that populates an array; querySelectorAll is making
    //use of the descendant combinator in CSS to target the id/class/element
    // const courseInfo = await page.evaluate(() => 
    //     Array.from(document.querySelectorAll('#cscourses .card'), (e) => ({
    //         title: e.querySelector('.card-body h3').innerText,
    //         level: e.querySelector('.card-body .level').innerText,
    //         url: e.querySelector('.card-footer a').href
    //     })));
    // console.log(courseInfo);

    //does the exact same thing as 'courseInfo', but with puppeteer syntactic sugar
    const shortCourseInfo = await page.$$eval('#cscourses .card', 
        (elements) => elements.map(e => ({
        title: e.querySelector('.card-body h3').innerText,
        level: e.querySelector('.card-body .level').innerText,
        url: e.querySelector('.card-footer a').href
    })));
    console.log(shortCourseInfo);

    //saves the scraped data into a .json file; 3rd param for 
    //json.stringify nicely formats the output, based on length
    fs.writeFile('scrapeTest.json', JSON.stringify(shortCourseInfo, null, shortCourseInfo.length), (err) => {
        if (err) throw new Error('There was an error in saving the file');
        console.log('File successfully saved!');
    });

    //close the browser after parsing attempt
    await browser.close(); 
}

main();