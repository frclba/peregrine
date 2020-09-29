const scrapeIt = require("scrape-it");
const { db } = require("../../firebase/db.js");

// https://pptr.dev/#?product=Puppeteer&version=v5.3.1&show=api-pageselector-1

module.exports.getQuotesFromPage = async (url) =>
  await scrapeIt(url, {
    quotes: {
      listItem: ".quote",
      data: {
        text: {
          selector: ".quoteText",
          convert: (x) => x.trim().split("\n")[0],
        },
        author: {
          selector: ".authorOrTitle:first-of-type",
          convert: (x) => x.trim().split("\n")[0],
        },
        source: {
          selector: ".authorOrTitle:last-of-type",
          convert: (x) => x.trim().split("\n")[0],
        },
      },
    },
  });

module.exports.getQuotesSeachTerms = async (terms = []) => {
  const searches = db.collection("searches");

  terms.map(async (term) => {
    const doc = searches.doc(term);
    const termData = (await (await doc.get()).data()) || {};

    if (termData.updated) {
      console.log(`term ${term} already searched`);
      return;
      // TODO: once per week per phrase
      // TODO: handle later overwriting of quotes
      // if (getDayDiff(new Date(), termData.updated) <= 7) {
      //   return;
      // }
    }

    console.log(`searching ${term}`);

    const baseUrl = "https://www.goodreads.com/quotes/search?commit=Search";

    const quotes = db.collection("quotes");

    let allPagesParsed = false;
    let page = 1;

    do {
      console.log(`searching page ${page} of ${term}`);
      const url = `${baseUrl}&page=${page}&q=${term.replace(" ", "+")}`;

      // check to see if we've scrolled too many pages.
      // eslint-disable-next-line no-await-in-loop
      await scrapeIt(url, {
        noResults: {
          selector: ".mediumText",
          // eslint-disable-next-line no-loop-func
          convert: (x) => {
            if (x.includes("no results")) {
              allPagesParsed = true;
            }
          },
        },
      });

      if (allPagesParsed) {
        // end do while early if not triggered
        return;
      }

      // eslint-disable-next-line no-await-in-loop
      const theseQuotes = await getQuotesFromPage(url);
      // TODO: get where check duplicates???
      const batch = db.batch();
      theseQuotes.data.quotes.map((quote) =>
        batch.set(quotes.doc(), { quote, updated: new Date() })
      );
      // eslint-disable-next-line no-await-in-loop
      await batch.commit();

      doc.set({
        ...termData,
        updated: new Date(),
      });

      page++;
    } while (!allPagesParsed);
  });
};
