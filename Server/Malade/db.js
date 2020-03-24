var mongoose = require('mongoose')
require('dotenv').config()

mongoose.connect (process.env.MONGOURL,{
    useUnifiedTopology : true,
    useCreateIndex: true,
    useNewUrlParser : true,
    useFindAndModify : false,
    dbName : process.env.dbName
}, (err)=> {
    if (err) console.log("err")
    else    console.log("Connected to DataBase !! "+ process.env.dbName)
});
