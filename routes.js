var express = require('express');

var router = express.Router();
var bodyParser = require("body-parser") // call body parser module and make use of it
router.use(bodyParser.urlencoded({extended:true}));




var db = require('./db');


var crypto = require('crypto');

// *** These are the routes to call the functions in the controllers
router.use(require('./controller/staticpagesController'))






module.exports = router;