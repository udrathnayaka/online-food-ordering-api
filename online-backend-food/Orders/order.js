var mongoose = require('mongoose');
var axios = require('axios');
var express =require('express');
var router =express.Router();

router.post('/mobilepay',function(req,res){
    axios.post('http://localhost:8000/dialog-pay/dialogpayment').then(function(response){
        console.log(response);
        res.json({
            message:response.data,
            success: true,
            status: response.status
        });
    }).catch(function(error){
        console.log(error);
        res.send(error);
    });
});


router.post('/bankpay',function(req,res){
    axios.post('http://localhost:8000/sampath-pay/sendsampath').then(function(response){
        console.log(response);
        res.json({
            message:response.data,
            success: true,
            status: response.status
        });
    }).catch(function(error){
        console.log(error);
        res.send(error);
    });
});