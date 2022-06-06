const mysql = require("mysql")

// *******  CREATE CONNECTION    ***********
const db = mysql.createConnection({
    host: 'localhost',
    user: "root",
    password: "admin",
    database: "nocode_ai"
})


module.exports = db;