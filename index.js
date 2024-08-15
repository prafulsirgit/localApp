const express = require('express')
require('dotenv').config()
const app = express()
// const port = 4000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/index', (req, res) => {
  res.send('<h1>This is Index Page...</h1>')
})

app.listen(process.env.port, () => {
  console.log(`Example app listening on port ${process.env.port}`)
})