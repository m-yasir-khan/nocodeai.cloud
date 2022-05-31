const mysql = require("mysql")

// *******  CREATE CONNECTION    ***********
const db = mysql.createConnection({
    host: 'localhost',
    user: "root",
    password: "",
    database: "nocodeai"
})


module.exports = db;