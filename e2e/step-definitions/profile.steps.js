const { defineFeature, loadFeature } = require('jest-cucumber');
const feature = loadFeature('./e2e/features/profile.feature');
const puppeteer = require('puppeteer');

let webId = "https://viadeen3b1pod.solid.community/profile/card#me";
let username = "ViadeEn3B1Pod";
let name = "ViadeEn3B1";
let password = "Arquisoft1920ViadeEn3B1";
let browser;
let page;
let navigationPromise;

beforeAll(async () => {
    browser = await puppeteer.launch();
    page = await browser.newPage();
    await page.goto('http://localhost:3000');
    navigationPromise = page.waitForNavigation();

    /*  
        -----------------
        ----- LOGIN -----
        -----------------
    */
    page.waitFor(3000);

    await page.goto('http://localhost:3000/#/home');

    await page.setViewport({ width: 1160, height: 1057 });

    await page.waitForSelector('.makeStyles-root-1 > .MuiPaper-root > .MuiToolbar-root > .MuiButtonBase-root:nth-child(3) > .MuiButton-label');
    await page.click('.makeStyles-root-1 > .MuiPaper-root > .MuiToolbar-root > .MuiButtonBase-root:nth-child(3) > .MuiButton-label');

    await page.waitForSelector('.MuiPaper-root > .MuiCardContent-root > .sc-Axmtr > form > .sc-AxhCb');
    await page.click('.MuiPaper-root > .MuiCardContent-root > .sc-Axmtr > form > .sc-AxhCb');

    await expect(page).toFill('.MuiPaper-root > .MuiCardContent-root > .sc-Axmtr > form > .sc-AxhCb', webId);

    await page.waitForSelector('.MuiPaper-root > .MuiCardContent-root > .sc-Axmtr > form > .sc-AxgMl');
    await page.click('.MuiPaper-root > .MuiCardContent-root > .sc-Axmtr > form > .sc-AxgMl');

    await navigationPromise;

    await page.waitForSelector('.panel-body #username');
    await page.click('.panel-body #username');

    await expect(page).toFill('.panel-body #username', username);

    await page.waitForSelector('.panel-body #password');
    await page.click('.panel-body #password');

    await expect(page).toFill('.panel-body #password', password);

    await page.waitForSelector('.col-md-6 #login');
    await page.click('.col-md-6 #login');

    await navigationPromise;

    await navigationPromise;

    // console.log("########## LOGGED IN ###########")
});

afterAll(async () => {
    await browser.close();
});

defineFeature(feature, (test) => {

    test('The user wants to see some information of his profile', ({ given, when, then }) => {

        given('A logged user', async () => {
            // done in beforeAll
        });

        when('The user clicks the profile button', async () => {
            await page.waitForSelector('.MuiButtonBase-root > .MuiButton-label > .MuiAvatar-root > .MuiSvgIcon-root > path');
            await page.click('.MuiButtonBase-root > .MuiButton-label > .MuiAvatar-root > .MuiSvgIcon-root > path');

            await page.waitForSelector('#customized-menu > .MuiPaper-root:nth-child(3) > .MuiList-root > .MuiTypography-root:nth-child(2) > .MuiButtonBase-root');
            await page.click('#customized-menu > .MuiPaper-root:nth-child(3) > .MuiList-root > .MuiTypography-root:nth-child(2) > .MuiButtonBase-root');
        });

        then('His name should be shown in the screen', async () => {
            page.waitFor(5000);
            await page.waitForFunction(`document.querySelector("body").innerText.includes("${name}")`);
            // await page.waitForFunction('document.querySelector("body").innerText.includes("Welcome to ViaDe.")');
        });
    });
});