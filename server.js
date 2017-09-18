// Get dependencies
const express = require('express');
const path =  require('path');
const http = require('http');
const bodyParser = require('body-parser');

// Get API routes
const web = require('./back-end/routes/web');

const app = express();

// Parse POST or GET data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Crose Origen Responses
app.use(function(req, res, next){
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

// Point static path to dist production file
app.use(express.static(path.join(__dirname, './front-end')));
app.use(express.static(path.join(__dirname, './node_modules')));

// Set API/WEB routes 
app.use('/web', web);

// Catch all routes and return index start point
app.get('*', (req, res, next) =>{
    res.sendFile(path.join(__dirname + '/front-end/index.html'));
});

/*****************************************************
 * Get port form eviroment and add store in Express. *
 *****************************************************/
const port = process.env.PORT || '3000';
app.set('port', port);

/*
* Create HTTP server production
*/
const server = http.createServer(app);

/**
 *  Listen on provided port, on all network interface
 */
server.listen(port, () => console.log(`API running on localhost:${port}`));