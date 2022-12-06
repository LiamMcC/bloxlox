var express = require('express');

var router = express.Router();
var bodyParser = require("body-parser") // call body parser module and make use of it
router.use(bodyParser.urlencoded({extended:true}));
var db = require('../db');



// Define the home page route
router.get('/', function(req, res) {
    const today = new Date()
    const year = today.getFullYear();
    
    
       
       res.render('index', {
      
        year
        
    });

  

});






module.exports = router;