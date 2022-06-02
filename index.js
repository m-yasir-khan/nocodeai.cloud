const express = require('express')
const cors=require("cors")
const db = require("./server/Database_connection/db")
db.connect((e) => {
  if (e) {
    throw e
  }
  console.log('MY SQL DB CONNECTED !')
})
const app = express()
app.use(express.json())
app.use(cors())

app.use('/', require('./server/Routes/routes'))



app.listen('4000', () => {
  console.log("SERVER IS RUNNING ==>")
})


