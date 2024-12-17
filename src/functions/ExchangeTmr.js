import { app } from '@azure/functions'
import puppeteer from 'puppeteer'

async function scrapPage() {
  const browser = await puppeteer.launch({ headless: true })
  const page = await browser.newPage()
  const URL =
    'https://www.uptc.edu.co/sitio/portal/sitios/universidad/rectoria/relinter/convoc/conv_sal/index.html'
  await page.goto(URL)
  const mainId = '#acco_daaa7622_1'
  await page.waitForSelector(mainId)
  const callsList = await page.evaluate((mainId) => {
    return mainId
  }, mainId)
  console.log(callsList)
  await browser.close()
}

app.timer('ExchangeTmr', {
  schedule: '1 * * * * *',
  handler: async (myTimer, context) => {
    context.log('Timer function processed request. Context.log')
    await scrapPage()
  }
})
