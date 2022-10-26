const express = require('express')
const app = express()
const port = 5022

app.get('/', (req, res) => {
  res.send('Hello Express!\
  Dan here. Good to meet you.')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})