const express = require('express');
const mongoose =require('mongoose');
const routes = express.Router();

const routersms = require('./online-sms-service/sms.js');
const routersampath = require('./online-sampath-payment/sampath.js');
const routermail=require('./online-email-service/email.js');
const routerdialog =require('./online-dialog-payment/dialog.js');


routes.use('/sms', routersms);
routes.use('/sampath-pay',routersampath);
routes.use('/mail',routermail);
routes.use('/dialog-pay', routerdialog);


module.exports = routes;