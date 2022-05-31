const express = require("express");
// let routes = express.Router();
const router = express.Router()



router.use('/users', require('./users'))




module.exports = router;