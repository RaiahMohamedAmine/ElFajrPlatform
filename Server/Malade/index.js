var express = require('express');
var cookieParser = require ('cookie-parser');
var bodyParser = require('body-parser');
var fileUpload = require('express-fileupload') ;
var jwt = require('jsonwebtoken');
var cors = require('cors');
var auth = require('./auth');
require('dotenv').config();
require('./db');

var app =express()

app.use(fileUpload ());
app.use(cors());
app.use(cookieParser());
app.use(bodyParser.json({  
    extended: true
}));
app.use(bodyParser.urlencoded({
    extended: true
}));
app.set ('view engine', 'ejs');

require ('./routes/maladeRoutes') (app);
require('./routes/rdvRoutes') (app);
require('./routes/prestationsRoutes') (app);

app.post ('/login', (req,res)=> {
    var user = {
        Email : req.body.Email,
        mdp : req.body.mdp
    }
     auth.createToken(user,res)
}) ;

app.post('/VerifyAuth', (req,res)=> {
    auth.VerifyToken (req.body.cookies,res)
}
)

var port = 5200;

app.listen (port, ()=>{
    console.log("Server started at port : "+ port)
})