const siteRouter = require("./site.router");
const loginRouter = require("./login.router");
const registerRouter = require("./register.router");
const privateRouter = require("./private.router");

const isAuth = require("../middleware/isAuth");

module.exports = (app) => {
  app.use("/login", loginRouter);
  app.use("/register", registerRouter);
  app.use("/private", isAuth, privateRouter);
  app.use("/" , siteRouter);
}