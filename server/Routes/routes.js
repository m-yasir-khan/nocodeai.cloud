const express = require("express");
const router = express.Router()



router.use('/users', require('./users'))
router.use('/connection', require('./db_connection'))
// router.use('/registration', require('./signup'))
// router.use('/authention', require('./login'))





module.exports = router;