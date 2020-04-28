const { defineFeature, loadFeature } = require('jest-cucumber');
const feature = loadFeature('./e2e/features/routes/addRoute.feature');
const feature2 = loadFeature('./e2e/features/routes/viewRoutes.feature');
const feature3 = loadFeature('./e2e/features/routes/deleteRoute.feature');
const puppeteer = require('puppeteer');

let webId = "https://viadeen3b1pod.solid.community/profile/card#me";
let username = "ViadeEn3B1Pod";
let password = "Arquisoft1920ViadeEn3B1";
let browser;
let page;
let navigationPromise;

function delay(time) {
    return new Promise(function (resolve) {
        setTimeout(resolve, time);
    });
}


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

    await navigationPromise

    await page.waitForSelector('.panel-body #username');
    await page.click('.panel-body #username');

    await expect(page).toFill('.panel-body #username', username);

    await page.waitForSelector('.panel-body #password');
    await page.click('.panel-body #password');

    await expect(page).toFill('.panel-body #password', password);

    await page.waitForSelector('.col-md-6 #login');
    await page.click('.col-md-6 #login');

    await navigationPromise

    await navigationPromise

    // console.log("########## LOGGED IN ###########")
});

defineFeature(feature, (test) => {

    test('The user wants to create a new route', ({ given, when, then }) => {


        given('The user is logged in and in the create new route form', async () => {

            await page.waitForSelector('.MuiPaper-root > .MuiToolbar-root > div:nth-child(4) > .MuiButtonBase-root > .MuiButton-label');
            await page.click('.MuiPaper-root > .MuiToolbar-root > div:nth-child(4) > .MuiButtonBase-root > .MuiButton-label');

            await page.waitForSelector('.MuiPaper-root:nth-child(3) > .MuiList-root > .MuiTypography-root:nth-child(2) > .MuiButtonBase-root > .MuiListItemText-root > .MuiTypography-root');
            await page.click('.MuiPaper-root:nth-child(3) > .MuiList-root > .MuiTypography-root:nth-child(2) > .MuiButtonBase-root > .MuiListItemText-root > .MuiTypography-root');

            // console.log('############### IN CREATE-ROUTE ###############');
        });

        when('The user fills the Create New route stepper form', async () => {

            await delay(2000);
            await page.waitForSelector('.MuiGrid-root #name');
            await page.click('.MuiGrid-root #name');
            await expect(page).toFill('.MuiGrid-root #name', "Route-Cucumber-Puppeteer");

            await page.waitForSelector('.MuiGrid-root #description');
            await page.click('.MuiGrid-root #description');
            await expect(page).toFill('.MuiGrid-root #description', "This is the description for the route Cucumber-Puppeteer");

            await page.waitForSelector('.MuiPaper-root > form > .MuiGrid-root > #btn-next > .MuiButton-label');
            await page.click('.MuiPaper-root > form > .MuiGrid-root > #btn-next > .MuiButton-label');

            // console.log("DATA FORM DONE");

            await delay(2000);
            await page.waitForSelector('.MuiGrid-root #test-map-leaflet');
            await page.click('.MuiGrid-root #test-map-leaflet');

            await page.waitForSelector('.MuiGrid-root #test-map-leaflet');
            await page.click('.MuiGrid-root #test-map-leaflet');

            await page.waitForSelector('.MuiPaper-root > form > .MuiGrid-root > #btn-next > .MuiButton-label');
            await page.click('.MuiPaper-root > form > .MuiGrid-root > #btn-next > .MuiButton-label');

            // console.log("MAP FORM DONE");

            await delay(2000);
            await page.waitForSelector('.MuiPaper-root > div > .MuiGrid-root > #btn-next > .MuiButton-label');
            await page.click('.MuiPaper-root > div > .MuiGrid-root > #btn-next > .MuiButton-label');

            // console.log("REVIEW FORM DONE");

        });

        then('The user can create and upload the new route', async () => {
            await page.waitForSelector('.MuiPaper-root > .MuiToolbar-root > div:nth-child(4) > .MuiButtonBase-root > .MuiButton-label');
            await page.click('.MuiPaper-root > .MuiToolbar-root > div:nth-child(4) > .MuiButtonBase-root > .MuiButton-label');

            await page.waitForSelector('.MuiList-root > .MuiTypography-root:nth-child(1) > .MuiButtonBase-root > .MuiListItemText-root > .MuiTypography-root');
            await page.click('.MuiList-root > .MuiTypography-root:nth-child(1) > .MuiButtonBase-root > .MuiListItemText-root > .MuiTypography-root');

            // console.log('############### IN DASHBOARD ###############');

            await delay(10000);
            await page.waitForFunction('document.querySelector("body").innerText.includes("Route-Cucumber-Puppeteer")');
        });
    });
});

defineFeature(feature2, (test2) => {
    test2("The user wants to list his routes", ({ given, when, then }) => {

        given('The user is logged in and in the dashboard', async () => {
            // logged in thanks to beforeAll

            await delay(2000);
            await page.waitForSelector('.MuiPaper-root > .MuiToolbar-root > div:nth-child(4) > .MuiButtonBase-root > .MuiButton-label');
            await page.click('.MuiPaper-root > .MuiToolbar-root > div:nth-child(4) > .MuiButtonBase-root > .MuiButton-label');

            await page.waitForSelector('.MuiList-root > .MuiTypography-root:nth-child(1) > .MuiButtonBase-root > .MuiListItemText-root > .MuiTypography-root');
            await page.click('.MuiList-root > .MuiTypography-root:nth-child(1) > .MuiButtonBase-root > .MuiListItemText-root > .MuiTypography-root');

            // console.log('############### IN DASHBOARD ###############');
        });

        when('The user clicks on My Routes button', async () => {
            await delay(10000);

            await page.waitForSelector('.MuiGrid-root:nth-child(1) > .MuiPaper-root > .MuiCardContent-root > .MuiGrid-root > .MuiGrid-root > #Route-Cucumber-Puppeteer > .MuiButton-label');
            await page.click('.MuiGrid-root:nth-child(1) > .MuiPaper-root > .MuiCardContent-root > .MuiGrid-root > .MuiGrid-root > #Route-Cucumber-Puppeteer > .MuiButton-label');

            // console.log('############### CLICK DETAILS ###############');
        });

        then('The user can view his routes', async () => {
            await page.waitForFunction('document.querySelector("body").innerText.includes("Route-Cucumber-Puppeteer")');

            // console.log('############### ROUTE DETAILS ###############');
        });
    });
});

defineFeature(feature3, (test3) => {
    test3("The user wants to delete one of his routes", ({ given, when, then }) => {

        given('The user is logged in and in the route details view of a route', async () => {
            // logged in thanks to beforeAll

            // console.log('############### ROUTE DETAILS ###############');
        });

        when('The user aggrees to delete a route', async () => {

            await delay(5000);

            await page.waitForSelector('.MuiGrid-root:nth-child(1) > .MuiPaper-root > .MuiCardContent-root > .MuiGrid-root > .MuiGrid-root > #Route-Cucumber-Puppeteer > .MuiButton-label');
            await page.click('.MuiGrid-root:nth-child(1) > .MuiPaper-root > .MuiCardContent-root > .MuiGrid-root > .MuiGrid-root > #Route-Cucumber-Puppeteer > .MuiButton-label');

            await delay(5000);

            await page.waitForSelector('button[title="Delete route"]');
            await page.click('button[title="Delete route"]');

            await delay(5000);

            await page.waitForSelector('.MuiDialog-container > .MuiPaper-root > .MuiDialogActions-root > .MuiButtonBase-root:nth-child(2) > .MuiButton-label');
            await page.click('.MuiDialog-container > .MuiPaper-root > .MuiDialogActions-root > .MuiButtonBase-root:nth-child(2) > .MuiButton-label');

            // console.log('############### CLICK DETAILS ###############');
        });

        then('The user is redirected to the dashboard page', async () => {
            await delay(10000);

            await page.waitForFunction('document.querySelector("body").innerText.includes("have any routes yet.")');

            // console.log('############### DASHBOARD ###############');
        });
    });
});