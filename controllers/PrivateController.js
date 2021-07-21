

class PrivateController {

  /**
   * * [GET] url: "/" 
   */
  index(req, res) {
    res.render("private");
  }
}

module.exports = new PrivateController;