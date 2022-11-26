import { assertEquals, assertRejects } from "https://deno.land/std@0.165.0/testing/asserts.ts";
import puppeteer from "https://deno.land/x/puppeteer@16.2.0/mod.ts";

// delay is for async testing
 // import { delay } from "https://deno.land/std@0.165.0/async/delay.ts";
 // import  MemoryChart from '../islands/MemoryChart.tsx'


//create classes to mimic components with a constructor that takes page as a parameter
  //create this.subComponents 
//test port number input
// test connet button
//test disconnect button
//test sampling fq input
//test sampling fq button
// test bar Chart button


// testing url test and addition tests to make sure this works
Deno.test
  ("url test", async (t) => {
    const browser = await puppeteer.launch()
    const page = await browser.newPage()
    await t.step("homepage should work", async () => {
      const response = await page.goto('https://denosoar.deno.dev/', {
        waitUntil: "networkidle2",
      });
      assertEquals(response?.status(), 200);
    })
    await t.step("The about page should 200", async () => {
      const response = await page.goto('https://denosoar.deno.dev/about', {
        waitUntil: "networkidle2",
      });
      assertEquals(response?.status(), 200);
    });
    await t.step("The docs page should 200", async () => {
      const response = await page.goto('https://denosoar.deno.dev/docs', {
        waitUntil: "networkidle2",
      });
      assertEquals(response?.status(), 200);
    });
    await t.step("The upload chart page should 200", async () => {
      const response = await page.goto('https://denosoar.deno.dev/csv', {
        waitUntil: "networkidle2",
      });
      assertEquals(response?.status(), 200);
    });
    await browser.close();
  });

  
  