const express=require('express')
const bodyParser=require('body-parser')
const app=express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))

app.use('/', require('./routes/phone-router'))

// connecting to the server

app.listen(5000,()=>{
    console.log('server is running on port:5000')
})