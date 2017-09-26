'use strict'
// Get dependencies
const path = require('path');
const views = path.join(__dirname, '../../', 'front-end/');

// Return Home controller
module.exports = {
    home: ( req, res, next ) => {
        res.sendFile(views + 'index.html');
    }
}