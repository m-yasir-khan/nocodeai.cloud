const router = require('express').Router()
const { user_registration, get_all_users, delete_user,user_auth, get_user,user_forget_password, get_DB } = require('../Controller/users')






// ******{all_requests}******//
router.post('/registration', user_registration)
router.post('/login', user_auth)
router.post('/update_user/:id',user_forget_password)
router.get('/get_all_users', get_all_users)
router.get('/get_user/:id', get_user)
router.get('/delete_user/:id', delete_user)
router.get('/get_DB', get_DB)





module.exports = router