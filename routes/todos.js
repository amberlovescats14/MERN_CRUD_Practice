const express = require('express')
const router = express.Router()

router.get('/', async (req, res)=> {
  await res.send(`Connected to Todos`)
})


module.exports = router