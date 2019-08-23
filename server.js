const express = require('express')
const connectDB = require('./config/db')
// const cors = require('cors')
//!NPM RUN SERVER



const app = express()
connectDB()
app.use(express.json({extended: false}))
// app.use(cors())

app.get('/', (req, res)=> {
  res.send(`API running...`)
})


app.use('/comments', require('./routes/comments.js'))




const PORT = process.env.PORT || 3001

app.listen(PORT, ()=> console.log(`Listening on port: ${PORT}`))