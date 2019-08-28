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

router.post('/', async (req, res)=> {
  try {
    const newComment = new Comments({
      name: req.body.name,
      text: req.body.text
    })
    const save = await newComment.save()
      res.json(save)
  } catch (error) {
    console.error(error.message)
    res.status(500).json({msg: `SERVER ERROR`})
  }
})

router.put('/:id', async (req, res) => {
  try {
    const singleComment = await Comments.findById(req.params.id)
    if(!singleComment){
      return res.status(404).json({msg: `NOT FOUND`})
    } else {
      singleComment.text = req.body.text
      await singleComment.save()
      return res.json(singleComment)
    }
    
  } catch (error) {
    console.error(error.message)
    res.send(500).json({msg: `SERVER ERROR`})
  }
})

router.delete('/:id', async (req, res) => {
  try {
    const comment = await Comments.findById(req.params.id)
    if(!comment) res.status(404).json({msg: `Comment Not Found`})

    await comment.remove()
    res.json({msg: `Post Removed`})
    
  } catch (error) {
    console.error(error.message)
    res.status(500).json({msg: `SERVER ERROR`})
  }
})


module.exports = router