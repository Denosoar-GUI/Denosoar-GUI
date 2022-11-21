import { assertEquals } from "https://deno.land/std@0.165.0/testing/asserts.ts";
// delay is for async testing
// import { delay } from "https://deno.land/std@0.165.0/async/delay.ts";
// import  MemoryChart from '../islands/MemoryChart.tsx'


// testing url test and addition tests to make sure this works
Deno.test("url test", () => {
    const url = new URL("./foo.js", "https://deno.land/");
    assertEquals(url.href, "https://deno.land/foo.js");
  });

  // Deno.test("hello world #1", () => {
  //   const x = 1 + 2;
  //   assertEquals(x, 3);
  // });

  Deno.test('port test', () => {
    const input: any = document.getElementById('port')
    // assertEquals()
  })