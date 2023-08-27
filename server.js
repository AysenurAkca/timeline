const express = require('express');
const route = require('./config/routes')
require('./config/mongoose')
require('dotenv').config()
const app = express()
app.set('view engine', 'ejs')
app.use(express.urlencoded({extended: false}))

app.use(express.json())

app.use(route)

app.listen(3000,()=>{
    console.log('listening on port 3000');
})