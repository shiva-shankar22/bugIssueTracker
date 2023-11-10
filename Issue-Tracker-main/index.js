
const express = require('express');

// here we are in  index.js file 
/*
 it is an initial point for our project 
 in this file i have intialised server and fired server
 at port number 3000
*/

const db = require('./config/mongoose');
const port = 3000;
const app = express();
const path = require('path');
const expressLayouts = require('express-ejs-layouts');

app.use(express.urlencoded());
app.use(express.static('assets'));
app.use(expressLayouts);

// extract style and scripts from sub pages into the layout
app.set('layout extractStyles', true);
app.set('layout extractScripts', true);
//the above couple of loc is for setting layout such as 
// footer and header

// set up the view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));

//this section is for rendering dnamic html file using ejs

// use express router
app.use('/', require('./routes'));
app.listen(port, function (err) {
  if (err) {
    console.log(`Error in running the server: ${err}`);
  }
  console.log(`Server is running on port: ${port}`);
});
//these are route calls

// and specified controllers are also defined in other files 