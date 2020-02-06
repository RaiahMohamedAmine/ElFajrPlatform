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

app.get('/get', (req,res)=>{
     /*if (res.user ===null)  res.redirect('/login')
     else res.render ('Get')*/ 
     console.log('**')
     res.render ('Get')
});

app.post ('/get', urlEncoded, (req,res)=> {
     routes.Get(req,res);
})

app.get ('/ajouter', VerifyAuth,(req,res)=> {
        res.render ('AddPerson')
})

app.post ('/add', urlEncoded,(req,res)=> {
    routes.Add (req,res)
})

app.get('/login',(req,res) => {
    res.redirect ('/login')
})

app.post ('/login', urlEncoded, (req,res)=> {
    var user = {
        Email : req.body.Email,
        mdp : req.body.mdp
    }
     auth.createToken(user,res).then (token => {
        res.cookie ('jwt',res.token);
        console.log (res)
        res.json({
            type: 'Info', 
            message : 'Logged In'
        });
     });
    
})

app.post ('/logout', urlEncoded,(req,res)=> {
    res.clearCookie("jwt")
    res.redirect('/login')
})

app.get ('/delete', VerifyAuth, (req,res)=> {
    res.render ('DeletePerson')
})

app.post ('/delete', (req, res)=>{
    routes.Delete(req,res)
})

app.get ('/modify',VerifyAuth,(req,res)=>{
    res.render('Modify')
})


app.post ('/modify', (req,res)=>{
    routes.Update(req,res)
})

app.post('/auth', auth.VerifyToken)

function VerifyAuth (req,res,next) {
    var token = req.cookies["jwt"]
    if(token ===null) res.sendStatus (404)
    else {
        jwt.verify (token,process.env.ACCES_TOKEN, (err, user)=> {
            if(err) res.redirect ('/login')
            else{
                req.user = user
                console.log(req.user)
                next()
            }
        })
    }
}

var port = process.env.PORT || 5200

app.listen (port, ()=>{
    console.log("Server started at port : "+ port)
})
