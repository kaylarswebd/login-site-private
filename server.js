const path = require('path');
const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');


const db = require('./config/connection');

const SequelizeStore = require('connect-session-sequelize')(session.Store);

const app = express();
const PORT = process.env.PORT || 3001;

const sess = {
  secret: 'Kyle is hot',
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize
  })
};

app.use(session(sess));


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());


db.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});
