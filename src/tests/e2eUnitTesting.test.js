const pupeeteer = require("puppeteer")

// //E2E TEST
test("should click on Movie item, redirect to the single view and add to favorites. Go to userFavorites menu and remove it from favorites", async()=>{
    const browser= await pupeeteer.launch({
        headless: false,
        slowMo: 180,
    })
    const page = await browser.newPage();
    await page.setViewport({
        width:414,
        height:896,
        deviceScaleFactor:1,
    })
    await page.goto("http://localhost:3000/")
    await page.click("#root > div > div.MuiBox-root.css-0 > div:nth-child(3)")
    await page.click("#root > div > div.MuiBox-root.css-0 > div.JoyCard-root.JoyCard-variantPlain.JoyCard-colorNeutral.JoyCard-sizeMd> div.JoyCardContent-root > div.MuiBox-root.css-1mvcoed > div > button")
    await page.click("#root > div > header > div > div > div.MuiBox-root.css-2uchni")
    await page.click("#root > div > div.MuiBox-root > div.MuiBox-root.css-0 > div > div.MuiBox-root.css-0 > div.MuiGrid-root > div > div > div:nth-child(2) > div > div > button > svg > path")
    const postLocalStorageData = await page.evaluate(() => {
        let json = {};
        for (let i = 0; i < localStorage.length; i++) {
            const key = localStorage.key(i);
            json[key] = localStorage.getItem(key).split("{}");
        }
        return json;
    });
    expect(postLocalStorageData.data[0]).toBe('[]')
},15000)

test("should click on Carousel item, redirect to the single view and add to favorites", async()=>{
    const browser= await pupeeteer.launch({
        headless: false,
        slowMo:80,
    })
    const page = await browser.newPage();
    await page.setViewport({
        width:414,
        height:896,
        deviceScaleFactor:1,
    })
    await page.goto("http://localhost:3000/")
    await page.click("#root > div > div.MuiBox-root.css-0 > div > div")
    await page.click("#root > div > div.MuiBox-root.css-0 > div.JoyCard-root.JoyCard-variantPlain.JoyCard-colorNeutral.JoyCard-sizeMd > div.JoyCardContent-root > div.MuiBox-root > div > button")
    const postLocalStorageData = await page.evaluate(() => {
        let json = {};
        for (let i = 0; i < localStorage.length; i++) {
          const key = localStorage.key(i);
          json[key] = localStorage.getItem(key).split("{}");
        }
        return json;
      });  
      expect(postLocalStorageData.data.length).toBe(1)
},15000)

test("should click on TV Series button menu and redirect", async()=>{
    const browser= await pupeeteer.launch({
        headless: true,
    })
    const page = await browser.newPage();
    await page.setViewport({
        width:1920,
        height:890,
        deviceScaleFactor:1,
    })
    await page.goto("http://localhost:3000/")
    await page.click("#root > div > header > div > div > div.MuiBox-root > button:nth-child(2)")
},10000)

test("should click on Movies button menu, redirect and select the 2nd page", async()=>{
    const browser= await pupeeteer.launch({
        headless: true,
    })  
    const page = await browser.newPage();
    await page.setViewport({
        width:414,
        height:896,
        deviceScaleFactor:1,
    })
    await page.goto("http://localhost:3000/")
    await page.click("#root > div > header > div > div > div.MuiBox-root > button")
    await page.click("#menu-appbar > div.MuiPaper-root.MuiPaper-elevation.MuiPaper-rounded.MuiPaper-elevation1.MuiPaper-root.MuiMenu-paper.MuiPaper-elevation.MuiPaper-rounded.MuiPaper-elevation8.MuiPopover-paper > ul > li:nth-child(1)")
    await page.click("#root > div > header > div > div > div.MuiBox-root > button")
    await page.click("#root > div > div.MuiBox-root.css-0 > div.MuiBox-root > div.MuiBox-root.css-0 > div.MuiBox-root > div > nav > ul > li:nth-child(3) > button")
},10000)



test("should search a Movie and redirect to the search view with the results", async()=>{
    const browser= await pupeeteer.launch({
        headless: true,
    })
    const page = await browser.newPage();
    await page.setViewport({
        width:414,
        height:896,
        deviceScaleFactor:1,
    })
    await page.goto("http://localhost:3000/")
    await page.click("#root > div > header > div > div > div.MuiBox-root.css-k008qs > div > div > input")
    await page.type("#root > div > header > div > div > div.MuiBox-root.css-k008qs > div > div > input", "Lord of the Rings")
    await page.keyboard.press('Enter')
},10000)

// //UNIT TEST
const overviewLimit = (text)=>{
    let textArray = text.split("").slice(0,280).join("")
    return textArray + "..."
  }

test("Should return a string of 280 characters", ()=>{
    const text = overviewLimit("At 33, the age of adulthood among hobbits, Frodo Baggins receives a magic Ring of Invisibility from his uncle Bilbo. Frodo, a Christlike figure, learns that the ring has the power to control the entire world and, he discovers, to corrupt its owner. A fellowship of hobbits, elves, dwarfs, and men is formed to destroy the ring by casting it into the volcanic fires.");
    expect(text).toBe("At 33, the age of adulthood among hobbits, Frodo Baggins receives a magic Ring of Invisibility from his uncle Bilbo. Frodo, a Christlike figure, learns that the ring has the power to control the entire world and, he discovers, to corrupt its owner. A fellowship of hobbits, elves,...")
})














