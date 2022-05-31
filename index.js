const express = require('express')
// const routes = require("./Routes/routes")
const db = require("./server/Database_connection/db")
db.connect((e) => {
  if (e) {
    throw e
  }
  console.log('MY SQL DB CONNECTED !')
})
const app = express()

app.use('/', require('./server/Routes/routes'))



app.listen('4000', () => {
  console.log("SERVER IS RUNNING ==>")
})


