var express = require('express');
var mongoose =require('monogoose');
const Schema = mongoose.Schema;



const SchemaUser = new Schema(
    {
        username:{
            type : String,
            require:true
        },

        userpassword:{
            type : String,
            require: true
        }
    }
);

const SchemaFood = new Schema(
    {
       foodname:{
            type : String,
            require:true
        },

        foodprice:{
            type : String,
            require: true
        }
    }
);

mongoose.model('Foods', SchemaFood);
mongoose.model('Users', SchemaUser);
module.exports = mongoose;