const Quilt = require('../models/quiltModel')
const mongoose = require('mongoose')
const Redis = require('ioredis')

const redis = new Redis()



// make a connection to the local instance of redis
//const client = redis.createClient(6379);
 
redis.on("error", (error) => {
 console.error(error);
});

//get all quilts

const getQuilts = async (req, res) => {
  const quilts = await Quilt.find({}).sort({createdAt: -1})
  res.status(200).json(quilts)
}


//get a single quilt

const cache = (req, res, next) => {
  const { id } = req.params;
  redis.get(id, (error, result) => {
    if (error) throw error;
    if (result !== null) {
      return res.json(JSON.parse(result));
    } else {
      return next();
    }
  })
};


const getOneQuilt = async (req, res) => {
  const {id} = req.params

  if(!mongoose.Types.ObjectId.isValid(id)){
    return res.status(404).json({error:  "You haven't made that quilt yet"})
  }

  const quilt = await Quilt.findById(id)
  redis.set(id, JSON.stringify(quilt), 'ex', 15); 
  

  if(!quilt) {
    return res.status(404).json({error: 'no such quilt'})
  }

  res.status(200).json(quilt)
}


//create a new quilt
const createQuilt = async ( req, res) => {
    const {QuiltName, CompletionSeasonYear, Giftee, Pattern, Notes} = req.body

    //add doc to db
    try {
      const newQuilt = await Quilt.create({QuiltName, CompletionSeasonYear, Giftee, Pattern, Notes})
      res.status(200).json(newQuilt)
  
    } catch (error) {
      res.status(400).json({error: error.message})
    }
  }



//delete a quilt

const deleteQuilt = async (req, res) => {
  const { id } = req.params


  if(!mongoose.Types.ObjectId.isValid(id)){
    return res.status(404).json({error:  "You haven't made that quilt yet"})
  }

  const deletedQuilt = await Quilt.findOneAndDelete({_id: id})

  if(!deletedQuilt) {
    return res.status(404).json({error: 'no such quilt'})
  }

  res.status(200).json(deletedQuilt)
}


//update a quilt

const updateQuilt = async (req, res) => {
  const { id } = req.params


  if(!mongoose.Types.ObjectId.isValid(id)){
    return res.status(404).json({error:  "You haven't made that quilt yet"})
  }

  const updatedQuilt = await Quilt.findOneAndUpdate({_id: id}, {
    ...req.body
  })

  if(!updatedQuilt) {
    return res.status(404).json({error: 'no such quilt'})
  }

  res.status(200).json(updatedQuilt)
}






module.exports = {
    getQuilts,
    getOneQuilt,
    createQuilt,
    deleteQuilt,
    updateQuilt,
    cache
}