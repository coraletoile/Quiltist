const { request } = require('express')
const express = require('express')
require('dotenv').config()

const router = express.Router()

router.get('/', (req, res) => {
    res.json({mssg:"GET all cities "})
})


router.get('/:id', (req, res) => {
    res.json({mssg: 'GET single city'})
})

// post a new city

router.post('/', (req, res) => {
  res.json({mssg: 'POST a new city'})
})

//delete a city

router.delete('/:id', (req, res) => {
  res.json({mssg: 'delete a city'})
})

//update a city

router.patch('/:id', (req, res) => {
  res.json({mssg: 'update a city'})
})



module.exports = router 