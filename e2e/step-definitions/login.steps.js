const { defineFeature, loadFeature } = require('jest-cucumber');
const feature = loadFeature('./e2e/features/login.feature');
const puppeteer = require('puppeteer');

let webId;
let username;
let password;
let browser;
let page;
let navigationPromise;

beforeAll(async () => {
    browser = await puppeteer.launch();
    page = await browser.newPage();
    await page.goto('http://localhost:3000');
    navigationPromise = page.waitForNavigation();

    page.waitFor(3000);

    await page.goto('http://localhost:3000/#/home');

    await page.setViewport({ width: 1160, height: 1057 });
});

defineFeature(feature, (test) => {

    test('The user is not logged in the site', ({ given, when, then }) => {

        given('A not logged user', () => {

            webId = "https://viadeen3b1pod.solid.community/profile/card#me"
            username = "ViadeEn3B1Pod";
            password = "Arquisoft1920ViadeEn3B1";
        });

        when('The user clicks the login button and fills the form', async () => {

            await page.waitForSelector('.makeStyles-root-1 > .MuiPaper-root > .MuiToolbar-root > .MuiButtonBase-root:nth-child(3) > .MuiButton-label')
            await page.click('.makeStyles-root-1 > .MuiPaper-root > .MuiToolbar-root > .MuiButtonBase-root:nth-child(3) > .MuiButton-label')

            await page.waitForSelector('.MuiPaper-root > .MuiCardContent-root > .sc-Axmtr > form > .sc-AxhCb')
            await page.click('.MuiPaper-root > .MuiCardContent-root > .sc-Axmtr > form > .sc-AxhCb')

            await expect(page).toFill('.MuiPaper-root > .MuiCardContent-root > .sc-Axmtr > form > .sc-AxhCb', webId);

            await page.waitForSelector('.MuiPaper-root > .MuiCardContent-root > .sc-Axmtr > form > .sc-AxgMl')
            await page.click('.MuiPaper-root > .MuiCardContent-root > .sc-Axmtr > form > .sc-AxgMl')

            await navigationPromise

            await page.waitForSelector('.panel-body #username')
            await page.click('.panel-body #username')

            await expect(page).toFill('.panel-body #username', username);

            await page.waitForSelector('.panel-body #password')
            await page.click('.panel-body #password')

            await expect(page).toFill('.panel-body #password', password);

            await page.waitForSelector('.col-md-6 #login')
            await page.click('.col-md-6 #login')

            await navigationPromise

            await navigationPromise
        });

        then('A welcome message should be shown in the screen', async () => {
            await page.waitForFunction('document.querySelector("body").innerText.includes("Welcome to ViaDe.")');
        });
    });
});