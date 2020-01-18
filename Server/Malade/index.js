var express = require('express')
var cookieParser = require ('cookie-parser')
var bodyParser = require('body-parser')
var urlEncoded = bodyParser.urlencoded({extended: true})
require('dotenv').config()
require('./db')

var routes = require('./routes')
var app =express()

app.use(cookieParser())
app.use(bodyParser())
app.set ('view engine', 'ejs')

app.get('/get', (req,res)=>{
     res.render ('Get')
})

app.post ('/get', (req,res)=> {
     routes.Get(req,res);
})
app.get ('/ajouter', (req,res)=> {
    res.render ('AddPerson')
})

app.post ('/ajouter', urlEncoded,(req,res)=> {
    routes.Add (req,res)
})

app.get ('/delete', (req,res)=> {
    res.render ('DelePerson')
})

app.post ('/delete', (req, res)=>{
    routes.Delete(req,res)
})

app.get ('/modify', (req,res)=>{
    res.render('Modify')
})


app.post ('/modify', (req,res)=>{
    routes.Update(req,res)
})


var port = process.env.MONGO_URL || 3000

app.listen (port, ()=>{
    console.log("Server started at port : "+ port)
})
