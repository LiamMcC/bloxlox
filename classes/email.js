'use strict';
require('dotenv').config();

const res = require('express/lib/response');
var db = require('../db');
var nodemailer = require('nodemailer');


var transporter = nodemailer.createTransport({

    host: process.env.EMAIL_HOST,
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
      user: process.env.EMAIL_USER, // your domain email address
      pass: process.env.EMAIL_PASS // your password
    },
    tls:{
      rejectUnauthorized: false
    }
  });


module.exports = class Email {
   
   static contactUs(email, comment, verifyBox) {

    var mailOptions = {
      from: email,
      to: 'me@liammccabe.ie',
      subject: 'Website Contact',
      text: comment + " the verify answer was " + verifyBox
    };
    
    
    transporter.sendMail(mailOptions, function(error, info){
      if (error) {
        console.log(error);
      } else {
        console.log('Email sent: ' + info.response);
      }
    });
    
 
   }  


  
}


