

class SiteController {

  /**
   * * [GET] url: "/" 
   */
  index(req, res) {
    res.render("index");
  }
}

module.exports = new SiteController;