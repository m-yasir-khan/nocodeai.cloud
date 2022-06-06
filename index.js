const express = require('express')
const cors = require("cors")
const db = require("./server/Database_connection/db")
const ldap = require('ldapjs');


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

function authenticateDN(username, password) {
  var client = ldap.createClient({
    url: 'ldap://localhost:10389'
  });
  client.bind(username, password, function (err) {
    if (err)
      console.log("error in new connection " + err);
    else
      console.log('successfully connected with ldap')
  });
}

authenticateDN('uid=admin,ou=system','secret');
