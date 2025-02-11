const path = require('path');
const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const routes = require('./controllers');
const sequelize = require('./config/connection');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const app = express();
const PORT = process.env.PORT || 3001;

const sess = {
  secret: process.env.SESSION_SECRET || 'Kyle is hot', 
  cookie: {
  },
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize
  })
};


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());  
app.use(session(sess));

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'home.html'));
});


app.use(routes);

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => {
    console.log(`Now listening on port ${PORT}`);
  });
});
