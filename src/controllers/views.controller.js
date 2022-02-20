const template = require('../utils/renderEjs');
const { getPayloadCookies } = require('../utils/jwt');

class ViewsController {
  static login(req, res) {
    const errorMsg = req.flash('error');
    // Uncomment below, if you want to customize your own index page
    // res.indexPage = 'pages/your_page';
    template(res, {
      page: 'login',
      props: {
        title: 'Login',
        error: errorMsg[0] ?? null, // Error message
      },
    });
  }

  static home(req, res) {
    template(res, {
      page: 'home',
      user: getPayloadCookies(req),
      props: {
        title: 'Home',
      }
    })
  }
}

module.exports = ViewsController;
