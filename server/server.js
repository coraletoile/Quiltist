const express = require('express');
const app = express();
const routes = require('./routes/quilts')
const path = require('path');
require('dotenv').config()
const axios = require('axios');
const qs = require('qs');
const mongoose =require('mongoose')


//middleware
app.use(express.json())

app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})


//routes
app.use('/api/quilts', routes)



  // redis





// connect to DB
mongoose.connect(process.env.MONG_URI)
.then(()=> {
  // listen for requests
app.listen(process.env.PORT, () => {
  console.log('connected to db & listening on port', process.env.PORT)
})

})
.catch((error) => {
  console.log(error)
})









