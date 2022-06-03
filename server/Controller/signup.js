
// const bcrypt=require('bcryptjs')
// const db=require("../Database_connection/db")
// const user_registration= async (req, res) => {
//     console.log(req.body, "body")
//     let created_date = new Date();
//     let updated_date = new Date();
//     let password = req.body.pw;
//     let email = req.body.email;
//     const salt = await bcrypt.genSalt(10);
//     const Hashpasword = await bcrypt.hash(password, salt);
//     let data = {
//         email: email,
//         pw: Hashpasword,
//         created_at: created_date,
//         updated_at: updated_date,
//     }
//     let check_email = `SELECT * FROM signup WHERE email="${email}"`;
//     let sql = 'INSERT INTO signup SET ?';
//     db?.query(check_email, data, (error, result) => {
//         (result && result.length ?
//             res?.status(500).json({
//                 success: false,
//                 message: 'email Already Exists...!',
//                 error: error,
//             })
//             : db?.query(sql, data, (error, result) => {
//                 if (error) {
//                     console.log(error, "error")
//                     res.status(500).json({
//                         success: false,
//                         message: 'Error found',
//                         error: error,
//                     })
//                 }
//                 res?.status(201).json({
//                     success: true,
//                     message: 'Registration Success...!',
//                     data: result
//                 })
//             }
//             )
//         )
//     })
// }





// module.exports = {
//     user_registration
// }








 