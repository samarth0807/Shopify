const mongoose = require("mongoose");

var mongoDBURL='mongodb+srv://samarth:samarth@cluster0.raup3.mongodb.net/mern'

mongoose.connect(mongoDBURL , {useUnifiedopolgy:true ,useNewUrlParser:true  })

var dbconnect = mongoose.connection

dbconnect.on('error' , () =>{
  console.log('MongoDB failed');
})

dbconnect.on('connected' , () =>{
  console.log('MongoDB done');
})  

module.exports = mongoose