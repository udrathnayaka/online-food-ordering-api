var express =require('express');
var mongoose= require('../Database/SchemaDatabase');
var SchemaUser = mongoose.model('Users');

var UController =function(){
    this.insert =function(data){
        return new promise(function(resolve,reject){
            var user =new SchemaUser({
                username:data.username,
                userpassword:data.password
            });
            user.save().then(function(){
                resolve({status:200,message: " New user is added"});
            }).catch(function(err){
                reject({status:500,message: err});
            })
        })
    }

    this.searchUser =function(id) {
        return new promise(function (resolve, reject) {
            SchemaUser.find({_id: id}).exec().then(function (user) {
                resolve({status: 200, data: user});
            }).catch(function (err) {
                reject({status: 500, message: err});
            })
        })
    }
        this.search = function (id) {
            return new promise(function (resolve, reject) {
                SchemaUser.find().exec().then(function (user) {
                    resolve({status: 200, data: user});
                }).catch(function (err) {
                    reject({status: 500, message: err});
                })
            })

        }

    }

    module.exports=new UController();