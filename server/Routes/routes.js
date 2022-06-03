const express = require("express");
const router = express.Router()



router.use('/users', require('./users'))
router.use('/form', require('./form'))
router.use('/connection', require('./db_connection'))
router.use('/table', require('./table'))






module.exports = router;