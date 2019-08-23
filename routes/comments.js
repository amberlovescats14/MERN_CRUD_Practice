const express = require('express')
const router = express.Router()
const Comments = require('../models/Comments')

router.get('/', async (req, res)=> {
  try {
    let comments = await Comments.find()
    res.json(comments)
    
  } catch (error) {
    console.error(error.me)
  }
})


module.exports = router