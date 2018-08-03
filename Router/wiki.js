const express = require('express');
const wikiRouter = express.Router();
const { Page } = require('./models');

wikiRouter.get("/", async (req, res) => {
  const wikiPages = await client.query(

  );
})

module.exports = wikiRouter;
