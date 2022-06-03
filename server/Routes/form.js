const router = require('express').Router()
const { add_form } = require('../Controller/forms')




// ******{all_requests}******//


router.post('/add_form', add_form)








module.exports = router