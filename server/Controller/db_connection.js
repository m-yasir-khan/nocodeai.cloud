const db = require("../Database_connection/db")
const bcrypt = require("bcryptjs");








// // ********* Create New Table*************


// const add_table = async (req, res) => {

//     // let sql = "CREATE TABLE users( _id int AUTO_INCREMENT,conn_string VARCHAR(255),pw VARCHAR(255),created_at VARCHAR(255),updated_at VARCHAR(255),is_deleted VARCHAR(255),PRIMARY KEY (_id))"
//     let sql = "CREATE TABLE users(id_user int AUTO_INCREMENT,name_user VARCHAR(255),email_user VARCHAR(255), description_user VARCHAR(255), date_created VARCHAR(255),  date_modified VARCHAR(255), modified_by VARCHAR(255), date_deleted VARCHAR(255), deleted_by VARCHAR(255), active_flag VARCHAR(255),id_sub_department VARCHAR(255), id_role VARCHAR(255), id_type VARCHAR(255), id_orginization VARCHAR(255),id_department VARCHAR(255),password VARCHAR(255), PRIMARY KEY(id_user)) "
//     db.query(sql, (error, result) => {
//         if (error) {
//             console.log(error, "error")
//             res.status(500).json({
//                 success: false,
//                 message: 'Server Error',
//                 error: error,
//             })
//         }
//         console.log(result)
//         res.status(201).json({
//             success: true,
//             message: 'table craeted sucess',
//             data: result
//         })
//     })
// }


// **********Add Connection Table**************
const add_connection = async (req, res) => {
    console.log(req.body, "body")
    let created_date = new Date();
    let updated_date = new Date();
    let password = req.body.pw;
    let conn_url = req.body.conn_string;
    let is_delete = "false";
    const salt = await bcrypt.genSalt(10);
    const Hashpasword = await bcrypt.hash(password, salt);
    let data = {
        conn_string: conn_url,
        pw: Hashpasword,
        created_at: created_date,
        updated_at: updated_date,
        is_deleted: is_delete,
    }
    let check_Conn = `SELECT * FROM dbConnection WHERE conn_string="${conn_url}"`;
    let sql = 'INSERT INTO dbConnection SET ?';
    db?.query(check_Conn, data, (error, result) => {
        (result && result.length ?
            res?.status(500).json({
                success: false,
                message: 'Connection String Already Exists...!',
                error: error,
            })
            : db?.query(sql, data, (error, result) => {
                if (error) {
                    console.log(error, "error")
                    res.status(500).json({
                        success: false,
                        message: 'Error found',
                        error: error,
                    })
                }
                res?.status(201).json({
                    success: true,
                    message: 'Connection Added Successfully...!',
                    data: result
                })
            }
            )
        )
    })
}
const auth_connection = async (req, res) => {
    let password = req.body.pw;
    let conn_url = req.body.conn_string;
    console.log("body", password, conn_url)
    let sql = `SELECT * FROM  dbconnection  WHERE conn_string="${conn_url}"`
    db.query(sql, async (error, results) => {
        const data = results[0]
        let checkpassword = data && data?.pw && await bcrypt.compare(password, data?.pw);
        if (error) {
            console.log(error, "error")
            res.status(500).json({
                success: false,
                message: 'server error',
                error: error,
            })
        }
        if (!data) {
            res.status(400).json({
                success: false,
                message: 'Connection not Found'
            })
        }
        else if (!checkpassword) {
            res.status(400).json({
                success: false,
                message: 'Incorrect Password'
            })
        }
        else {
            res.status(200).json({
                success: true,
                message: 'Connected Sucessfully...!',
                data: results
            })
        }
    })

}


module.exports = {
    add_connection,
    auth_connection
}



