const express = require("express");
// let routes = express.Router();
const router = express.Router()



router.use('/users', require('./users'))
router.use('/form', require('./form'))



module.exports = router;