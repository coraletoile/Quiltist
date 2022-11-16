const express = require('express');
const app = express();
const routes = require('./routes/cities')
const path = require('path');
require('dotenv').config()
const axios = require('axios');
const qs = require('qs');


//middleware
app.use(express.json())

app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})


//routes
app.use('/api/cities', routes)










// listen for requests
app.listen(process.env.PORT, () => {
    console.log('listening on port 3000')
})
