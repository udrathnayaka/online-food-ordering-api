const bodyParser = require('body-parser');
const express = require('express');
const cors =require('cors');
const routes =require('./api.routes');
const mongoose =require('mongoose');

var main = express();
main.use(cors());
main.use(bodyParser.json());
main.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect('mongodb://udrathnayaka1:udrathnayaka1@ds153980.mlab.com:53980/it16069282',function(err){
    if(err){
        console.log(err);
        process.exit(-1);
    }
    console.log('successfully connected to database');
});

main.use('/',routes);

main.listen(8000, 'localhost', function(err){
    if(err){
        console.log(err);
        process.exit(-1);
    }
    console.log(" Server listening to 8000");
});

