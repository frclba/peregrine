var express = require("express");
var router = express.Router();

// middleware that is specific to this router
router.use((req, res, next) => {
  console.log("Time: ", Date.now());
  next();
});
// define the home page route
router.get("/goodreads/quotes", async (req, res) => {
  const { terms } = req.body;
  const quotes = await getQuotesSeachTerms(terms);
  res.send("");
});
// define the about route
router.get("/about", (req, res) => {
  res.send("");
});

module.exports = router;
