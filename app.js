const express = require('express');
const morgan = require('morgan');
const layout = require('./views/layout');
const models = require('./models/index.js');
const app = express();
const wikiRouter = require('./Router/wiki.js');
const userRouter = require('./Router/user.js');

app.use(express.urlencoded({ extended: false }));
app.get('/', (req, res) => {
 res.redirect('/wiki');
})
app.use('/wiki', wikiRouter);
app.use('/user', userRouter);

models.db.authenticate().
then(() => {
 console.log('connected to database');
})

const init = async () => {
  await models.db.sync({force: true})

  app.listen(3000, () => {
   console.log('App listening on port 3000');
  });
}


init();
