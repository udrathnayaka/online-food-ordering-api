var controll =require('./controller.users');
var mongoose =require('mongoose');
var express =require('express');
var router =express.Router();

router.get('/',function(req,res){
    controll.search().then(function(data)
    {
        res.status(data.status).send({message:data.message});
    }).catch(function(err)
    {
        res.status(err.status).send({message: err.message});
    })
});

router.get('/:id',function(req,res){
    controll.searchUser(req.params.id).then(function(data)
    {
        res.status(data.status).send({data:data.data});
    }).catch(function(err)
    {
        res.status(err.status).send({message: err.message});
    })
});

router.post('/',function(req,res){
    controll.insert(req,body).then(function(data)
    {
        res.status(data.status).send({message:data.message});
    }).catch(function(err)
    {
        res.status(err.status).send({message: err.message});
    })
});

module.exports =router;