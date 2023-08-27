const mongoose = require('mongoose');
require('dotenv').config()

mongoose.connect(process.env.dbURI)
.then(()=>{console.log('connected db');})
.catch(err=> console.log(err))
