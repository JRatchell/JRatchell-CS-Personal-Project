// this is where our entry point file is, middle ware, express and server
const express = require('express');
//const { request } = require('https');
const app = express();
const PORT = 3000;

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

const indexRoutes = require('./routes/index-routes');
app.use('/', indexRoutes);


//Server
app.listen(PORT, () => {
    console.log(`Kit and Joshua's server is ready and all ears on port ${PORT}!`);
    console.log(`http://localhost:${PORT}`);
});