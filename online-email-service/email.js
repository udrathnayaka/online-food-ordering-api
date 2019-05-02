const express = require('express');
const mongoose =require('mongoose');
const emailrouter =express.Router();

emailrouter.post('/sendemail',function(req,res){
    res.send("Email is succesfully sent");
    console.log("Email is succesfully sent");

});

module.exports = emailrouter;