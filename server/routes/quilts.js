const { request } = require('express')
//const path = require('path');
const express = require('express')
const Quilt = require('../models/quiltModel')
require('dotenv').config()


const {
  getQuilts,
  getOneQuilt,
  createQuilt,
  deleteQuilt,
  updateQuilt,
  cache
} = require('../controllers/quiltController')

const router = express.Router()


//get all quilts
router.get('/', getQuilts)

//get single quilt
router.get('/:id', cache, getOneQuilt)

// post a new quilt

router.post('/', createQuilt)

//delete a quilt

router.delete('/:id', deleteQuilt)

//update a quilt

router.patch('/:id', updateQuilt)




module.exports = router 