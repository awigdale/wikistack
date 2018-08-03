const express = require('express');
const wikiRouter = express.Router();
const { Page } = require('../models/index');
const addPage = require('../views/addPage');

wikiRouter.get("/", async (req, res) => {
  const wikiPages = await Page.findAll();
  res.send('got to GET /wiki/');
})

wikiRouter.post('/', async (req, res) => {
  const newPage = new Page.create();
  res.send('got to POST')
})

wikiRouter.get('/add', async (req, res) => {
  const add = await addPage();
  res.send(add);
})

module.exports = wikiRouter;
