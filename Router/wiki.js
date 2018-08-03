const express = require('express');
const wikiRouter = express.Router();
const { Page } = require('../models/index');
const addPage = require('../views/addPage');
const slugify = require('slugify')


wikiRouter.get("/", async (req, res) => {
  const wikiPages = await Page.findAll();
  res.send('got to GET /wiki/');
})

wikiRouter.post('/', async (req, res) => {
  let title = req.body.title;
  let content = req.body.content;
  let slug = slugify(req.body.title);
  const newPage = await Page.create({
    title: title,
    content: content,
    slug: slug
  });
  res.send('got to POST');
  // console.log(newPage);
})

wikiRouter.get('/add', async (req, res) => {
  const add = await addPage();
  res.send(add);
})

wikiRouter.get('/:slug', async (req, res) => {
  const slugInput = req.params.slug;
  const slugInfo = await Page.findOne({where: {slug: slugInput}});
  res.json(slugInfo);
})

module.exports = wikiRouter;
