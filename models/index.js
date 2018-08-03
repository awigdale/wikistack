const Sequelize = require('sequelize');
const db = new Sequelize('postgres://localhost/wikistack');


const User = db.define( 'user', {
  name: {
    type: Sequelize.STRING
  },
  email: {
    type: Sequelize.STRING
  }
})

const Page = db.define( 'page', {
  title: {
    type: Sequelize.STRING
  },
  slug: {
    type: Sequelize.STRING
  },
  content: {
    type: Sequelize.TEXT
  },
  status: {
    type: Sequelize.ENUM('open', 'closed')
  }
});

module.exports = { db, Page, User };