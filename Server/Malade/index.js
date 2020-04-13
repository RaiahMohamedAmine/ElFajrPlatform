var express = require('express');
var cookieParser = require ('cookie-parser');
var bodyParser = require('body-parser');
var fileUpload = require('express-fileupload') ;
var cors = require('cors');
var crypto = require ('crypto');
var fs = require('fs');
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

require ('./handlers/rdvHandlers/updatingDb') ();
require ('./routes/maladeRoutes') (app);
require('./routes/rdvRoutes') (app);
require('./routes/prestationsRoutes') (app);
require('./routes/archiveRoutes') (app);

app.post ('/login', (req,res)=> {
    const mdpHashed = crypto.pbkdf2Sync (req.body.mdp,process.env.SALT,10,100,'sha512').toString ();
    var pass = fs.readFileSync('pass').toString ();
    pass ===mdpHashed ? res.status(200).json ({
        type :"Info"
    }) : 
    res.status (400).json ({
        type: "Err"
    });
}) ;

app.post ('/changePass',(req,res)=>{
    const oldPassHashed = crypto.pbkdf2Sync (req.body.oldPass,process.env.SALT,10,100,'sha512').toString ();
    const pass = fs.readFileSync('pass', {encoding : 'utf8'}).toString();
    if (oldPassHashed!==pass) {
        res.status(400).json({
            type:"Err",
            message :" MDP Errone"
        });
        return;
    };
    const newPassHashed= crypto.pbkdf2Sync (req.body.newPass,process.env.SALT,10,100,'sha512').toString ();
    fs.writeFileSync ('pass',newPassHashed, { encoding :'utf8', flag:'w'});
    res.json ({
        type:"Info", 
        message :"Mot de passe change avec succes"
    });
});

app.listen (process.env.PORT ||5200, ()=>{
    console.log("Server started at port : "+ 5200)
})