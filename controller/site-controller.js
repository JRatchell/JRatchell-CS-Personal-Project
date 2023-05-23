//all of the handler functions and the places the user can go without authentication//
//const siteData = require('../data/site-data');
module.exports = {
    index: (request, response) => {
      response.render('pages/index', {
         /* name: siteData.userName,
          copyrightYear: siteData.year,
          signedIn: siteData.signedIn */
      });
    },
}