const router = require('express').Router()
const {add_table}=require("../Controller/table")







// ******{all_requests}******//
router.post('/add_table', add_table)




module.exports = router