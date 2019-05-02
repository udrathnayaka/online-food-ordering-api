const express = require('express');
const mongoose =require('mongoose');
const routes = express.Router();
const pass ="loginkey";

router.post('/login',function(req,res){
    userService.getUser(req.body.username).then(function(user){
        if(user.userpassword == req.body.userpassword){
            var key={administrator : user.administrator};
            var t =pass;
            res.json({t:t});
        }

        else{
            res.send("password is incorrect");
        }
    })
});

module.exports =router;