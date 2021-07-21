const express = require("express");
const handlebars = require("express-handlebars");
const session = require("express-session");
const path = require("path");
const mongodbStore = require("connect-mongodb-session")(session);

const app = express();
require("dotenv").config();
const db = require("./config/db");
const routers = require("./routers/index.router");

db.connect(process.env.URI_DB);

const store = new mongodbStore({
  uri: process.env.URI_DB,
  collection: "Sessions"
})

app.use(session({
  secret: process.env.SECRET,
  resave: false,
  saveUninitialized: false,
  store: store,
  cookie: {
    maxAge: 86400000,
    path: "/"
  } 
}));

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.engine('hbs', handlebars({ extname: '.hbs' }));

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));

routers(app);

app.listen(process.env.PORT || 3000, () => {
  console.log("App listen on port " + (process.env.PORT || 3000));
})