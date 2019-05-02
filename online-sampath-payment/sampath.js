const express = require('express');
const mongoose =require('mongoose');
const sampathrouter =express.Router();

sampathrouter.post('/sendsampath',function(req,res){
    res.send("Payment is succesfully done");
    console.log("Payment is succesfully done");

});

module.exports = sampathrouter;