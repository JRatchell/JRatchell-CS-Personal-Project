//all of the handler functions and the places the user can go without authentication//

//calls data needed from the site
const siteData = require('../data/site-data');
const passport = require('passport')
module.exports = {
    index: (request, response) => {
      response.render('pages/index', {
          name: siteData.userName,
          copyrightYear: siteData.year,
          signedIn: siteData.signedIn 
      });
      
    },
}
// Continue working on when I'm not falling asleep over and over

//Priority list