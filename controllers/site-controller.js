//all of the handler functions and the places the user can go without authentication//

//calls data needed from the site
//const siteData = require('../data/site-data');
const express = require('express')
const passport = require('passport')
module.exports = {
  //Index Page
    index: (request, response) => {
      response.render('pages/index', {
           /*name: siteData.userName,
          copyrightYear: siteData.year,
          signedIn: siteData.signedIn*/
      });
      
    },

    //Login page
    login: (request, response) => {
      response.render('pages/login');
    
    },

    //Login Post
    login_post: (request, response) => {
      const user = new user({
        username: request.body.username,
        password: request.body.password,
        googleId: request.body.googleId
      });

    request.login(user, (err) => {
      if (err) {
        response.redirect('/login') 
        return err
      } else {
        passport.authenticate('local')(request, response, () => {
          response.redirect('/account');
        });
      }
    });
    },

    logout: (request, response) => {
      // new code as of 6/2022 - the correct logout function
      request.logout(function(err) {
        // destroy the session for the user
        if (err) { return next(err); }
        // redirect back to the homepage
        response.redirect('/');
      });
    },

    //Register
    register: (request, response) => {
      response.render('pages/register');
  },
    //Register Post
    register_post:(request, response) => {
      User.register({username: request.body.username}, {password: request.body.password}, (err, user) => {
          if (err) {
              console.log(err);
              response.redirect('/register');
          } else {
              passport.authenticate('local')(request, response, () => {
                  response.redirect('/login');
              });
          }
      });
  },
  
    //Create 
    create_task: (request, response) => {
      response.render('pages/create')
      const {title, author, task} = request.body
      const newTask = new Task ({
          title: title,
          author: author,
          task: task
      })
      newTask.save()
      //response.redirect('/')
  },
    //About
    about: (request, response) => {
      response.render('pages/about');
  
  },

google_get: passport.authenticate('google', {scope: ['openid', 'profile', 'email']}),

google_redirect_get: [
    passport.authenticate('google', {failureRedirect: '/login'}),
    function(request, response) {
        // Successful authentication, redirect home.
        response.redirect('/account');

    }
],
}


// Continue working on when I'm not falling asleep over and over

//Priority list





