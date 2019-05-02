var express =require('express');
var mongoose= require('../Database/SchemaDatabase');
var SchemaFood = mongoose.model('Foods');

var FController =function(){
    this.insert =function(data){
        return new promise(function(resolve,reject){
            var food =new SchemaFood({
                foodname:data.foodname,
                foodprice:data.foodprice
            });
            food.save().then(function(){
                resolve({status:200,message: " New food item is added"});
            }).catch(function(err){
                reject({status:500,message: err});
            })
        })
    }

    this.search = function (id) {
        return new promise(function (resolve, reject) {
            SchemaFood.find().exec().then(function (user) {
                resolve({status: 200, data: user});
            }).catch(function (err) {
                reject({status: 500, message: err});
            })
        })

    }

}

module.exports= new FController();