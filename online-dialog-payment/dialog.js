const express = require('express');
const mongoose =require('mongoose');
const dialogrouter =express.Router();

dialogrouter.post('/dialogpayment',function(req,res){
    res.send("Payment is succesfully done");
    console.log("Payment is succesfully done");

});

module.exports = dialogrouter;