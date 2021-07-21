const userModel = require("../models/user.model");
const bcrypt = require('bcrypt');

class RegisterController {

  /**
   * * [GET] url: "/" 
   */
  index(req, res) {
    res.render("register");
  }

  async postRegister(req, res, next) {
    const { username, email, password } = req.body;

    // * find if user exist
    let user = await userModel.findOne({ email });
    if(user) {
      return res.render("register", {
        error: "Email đã tồn tại!"
      })
    }

    const hashPassword = await bcrypt.hash(password, 12);

    user = new userModel({
      username,
      email,
      password: hashPassword
    });

    await user.save();

    res.redirect("/login");
  }
}

module.exports = new RegisterController;