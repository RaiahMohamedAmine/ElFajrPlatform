var express = require('express');
var cookieParser = require ('cookie-parser');
var bodyParser = require('body-parser');
var urlEncoded = bodyParser.urlencoded({extended: true});
var jwt = require('jsonwebtoken');
var cors = require('cors');
require('dotenv').config();
require('./db');

var routes = require('./routes')
var app =express()

app.use(cors());
app.use(cookieParser());
app.use(bodyParser());
app.set ('view engine', 'ejs');

app.get('/get', (req,res)=>{
     if (res.user ===null)  res.redirect('/login')
     else res.render ('Get')
});

app.post ('/get', urlEncoded, (req,res)=> {
     routes.Get(req,res);
})

app.get ('/ajouter', VerifyAuth,(req,res)=> {
        res.render ('AddPerson')
})

app.post ('/ajouter', urlEncoded,(req,res)=> {
    routes.Add (req,res)
})

app.get('/login',(req,res) => {
    res.render ('Login')
})

app.post ('/login', urlEncoded, (req,res)=> {
    var user = {
        prenom : req.body.prenom,
        nom : req.body.nom
    }
    console.log (process.env.ACCES_TOKEN)
    jwt.sign (user, process.env.ACCES_TOKEN , (err, token)=> {
        if (err) res.sendStatus (404)
        else{
            res.cookie ("jwt",token)
            console.log(res.cookie)
            res.render('AddPerson')
        }
    })
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

var port = process.env.MONGO_URL || 3000

app.listen (port, ()=>{
    console.log("Server started at port : "+ port)
})
