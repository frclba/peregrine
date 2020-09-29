// import puppeteer from "puppeteer";

// // https://pptr.dev/#?product=Puppeteer&version=v5.3.1&show=api-pageselector-1

// const username = "naval";

// (async () => {
//   const browser = await puppeteer.launch();
//   const page = await browser.newPage();
//   await page.goto(`https://twitter.com/${username}`);

//   const tweets = Array.from(page.$(`[data-testid*="tweet"]`));

//   tweets.map((tweet) => {
//     const t = tweet.children[1].children[1];
//     const text = t.children[0].firstChild.innerText;
//     const stats = t.children[2].children.slice(0, 3).map((stat, i) => {
//       const s = stat.childNodes[0].attributes[0].textContent.split(" ");
//       return {
//         count: s[0],
//         stat: s[1].toLowerCase(),
//       };
//     });

//     return {
//       text,
//       stats,
//     };
//   });

//   console.log(tweets);
// })();
