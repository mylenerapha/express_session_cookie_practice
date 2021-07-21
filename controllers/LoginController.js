const userModel = require("../models/user.model");
const bcrypt = require('bcrypt');

class LoginController {

  /**
   * * [GET] url: "/login" 
   */
  index(req, res) {
    res.render("login");
  }
  // * [POST] url: "/login"
  async postLogin(req, res) {
    const { email, password } = req.body;

    const user = await userModel.findOne({ email });
    
    if(!user) {
      return res.render("login", {
        error: "Không tồn tại tài khoản "
      });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if(!isMatch) {
      return res.render("login", {
        error: "Sai mật khẩu"
      })
    }
    req.session.isAuth = true;
    res.render("private");
  }
}

module.exports = new LoginController;