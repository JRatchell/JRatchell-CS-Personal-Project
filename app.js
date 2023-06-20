require('dotenv').config()
const methodOverride = require('method-override')
// this is where our entry point file is, middle ware, express and server
const express = require('express');
//const { request } = require('https');
const app = express();
const PORT = process.env.PORT || 3000;

// Morgan Functionality 
const morgan = require('morgan');
app.use(morgan('dev'));

// Adding Path module and EJS to app.js 
const path = require('path');
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine','ejs');


// Adding Functionality to app.js
app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use(session({
    secret: process.env.SECRET_KEY, // note that secrets are mandatory
    resave: false, 
    saveUninitialized: false
}));

// initialize passport
app.use(passport.initialize());

// passport to use session
app.use(passport.session());

const indexRoutes = require('./routes/index-routes');
app.use('/', indexRoutes);

require('./config/connection')
//Server
app.listen(PORT, () => {
    console.log(`Kit and Joshua's server is ready and all ears on port ${PORT}!`);
    console.log(`http://localhost:${PORT}`);
});