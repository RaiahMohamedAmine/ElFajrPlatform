var express = require('express');
var cookieParser = require ('cookie-parser');
var bodyParser = require('body-parser');
var urlEncoded = bodyParser.urlencoded({extended: true});
var fileUpload = require('express-fileupload') ;
var jwt = require('jsonwebtoken');
var cors = require('cors');
var auth = require('./auth');
require('dotenv').config();
require('./db');

var routes = require('./routes')
var app =express()

app.use(fileUpload ());
app.use(cors());
app.use(cookieParser());
app.use(bodyParser());
app.set ('view engine', 'ejs');

app.post ('/get', urlEncoded, (req,res)=> {
     routes.Get(req,res);
})

app.post ('/getById', (req,res)=>{
    routes.GetById(req,res);
});

app.post ('/add', urlEncoded,(req,res)=> {
    routes.Add (req,res)
})

app.post ('/login', urlEncoded, (req,res)=> {
    var user = {
        Email : req.body.Email,
        mdp : req.body.mdp
    }
     auth.createToken(user,res)
}) ;

app.post ('/delete', (req, res)=>{
    routes.Delete(req,res)
})


app.post ('/modify', (req,res)=>{
    routes.Update(req,res)
})

app.post('/VerifyAuth', (req,res)=> {
    auth.VerifyToken (req.body.cookies,res)
}
)

var port = 5200;

app.listen (port, ()=>{
    console.log("Server started at port : "+ port)
})