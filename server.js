const express = require('express')
const connectDB = require('./config/db')
const path = require('path')
// const cors = require('cors')
//!NPM RUN SERVER



const app = express()
connectDB()
app.use(express.json({extended: false}))
// app.use(cors())

// app.get('/', (req, res)=> {
//   res.send(`API running...`)
// })


app.use('/comments', require('./routes/comments.js'))

//SERVE STATIC ASSET
if(process.env.NODE_ENV === 'production') {
  //set static
  app.use(express.static('client/build'))
  //serve
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
  })
}




const PORT = process.env.PORT || 3001

app.listen(PORT, ()=> console.log(`Listening on port: ${PORT}`))