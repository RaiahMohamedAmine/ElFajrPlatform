var mongoose = require('mongoose')
require('dotenv').config()


mongoose.connect ('mongodb://127.0.0.1:27017',{
    useUnifiedTopology : true,
    useCreateIndex: true,
    useNewUrlParser : true,
    dbName : process.env.dbName
}, (err)=> {
    if (err) console.log("err")
    else    console.log("Connected to DataBase !! "+ process.env.dbName)
})

//console.log (mongoose.Schema)
const db = mongoose.connection
db.once('open', url => 
  console.log('Database connected:', url)
)

db.on('error', err => {
  console.error('connection error:', err)
})