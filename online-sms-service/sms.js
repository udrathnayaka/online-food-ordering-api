const express = require('express');
const mongoose =require('mongoose');
const smsrouter =express.Router();

smsrouter.post('/sendsms',function(req,res){
    res.send("SMS has been sent to :"+ req.body.phone);
    console.log("Message Details :" +req.body.message);
    console.log("SMS has been sent to :"+ req.body.phone);
});

module.exports = smsrouter;