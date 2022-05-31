const router = require('express').Router()
const { add_user, get_all_users, delete_user, get_user, update_user } = require('../Controller/users')






router.post('/add_user', add_user)
router.get('/get_all_users', get_all_users)
router.get("/get_user/:id", get_user)
router.get("/update_user/:id", update_user)
router.get("/delete_user/:id", delete_user)





module.exports = router