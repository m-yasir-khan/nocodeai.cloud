
// const bcrypt=require('bcryptjs')
// const db=require("../Database_connection/db")
// const user_auth= async (req, res) => {    
//         let password = req.body.pw;
//         let email = req.body.email;
//         console.log("body", password, email)
//         let sql = `SELECT * FROM  signup  WHERE email="${email}"`
//         db.query(sql, async (error, results) => {
//             const data = results[0]
//             let checkpassword = data && data?.pw && await bcrypt.compare(password, data?.pw);
//             if (error) {
//                 console.log(error, "error")
//                 res.status(500).json({
//                     success: false,
//                     message: 'server error',
//                     error: error,
//                 })
//             }
//             if (!data) {
//                 res.status(400).json({
//                     success: false,
//                     message: 'email not Found '
//                 })
//             }
//             else if (!checkpassword) {
//                 res.status(400).json({
//                     success: false,
//                     message: 'Incorrect Password'
//                 })
//             }
//             else {
//                 res.status(200).json({
//                     success: true,
//                     message: 'user login Sucessfully...!',
//                     data: results
//                 })
//             }
//         })
    
    
// }





// module.exports = {
//     user_auth
// }








 