const express = require('express')
const mongoose = require('mongoose')
const url = 'mongodb://localhost/AlienDBex'

const app = express() // creates express app

mongoose.connect(url, {useNewUrlParser:true})
const con = mongoose.connection // connect with mongodb

con.on('open', ()=>{ // log connected when connected to mongodb
    console.log('connected...');
})

app.use(express.json())

const alienRouter = require('./routes/aliens') // import module alienRouter
app.use('/aliens',alienRouter)  // use module alienRouter when /aliens is called

app.listen(9000, ()=>{
    console.log('Server started');
})