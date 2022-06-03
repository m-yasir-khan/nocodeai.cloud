const router = require('express').Router()
const { add_connection,add_table,auth_connection} = require('../Controller/db_connection')






router.post('/add_table', add_table)
router.post('/add_connection', add_connection)
router.post('/auth_connection', auth_connection)






module.exports = router