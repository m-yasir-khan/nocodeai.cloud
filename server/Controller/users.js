const db = require("../Database_connection/db")
const bcrypt = require('bcryptjs')

const user_registration = async (req, res) => {
    console.log(req.body, "body")
    const name_user = req.body.name_user;
    const email_user = req.body.email_user;
    const description_user = req.body.description_user;
    const password = req.body.password;
    const date_created = new Date();
    const date_modified = new Date();
    const date_deleted = new Date();
    const modified_by = "xyz";
    const deleted_by = "xyz";
    const active_flag = "true";
    const id_sub_department = "id_sub_department,id_sub_department";
    const id_role = "id_role dhbsfjbsdfk";
    const id_type = "id_type wjdndaskfjds";
    const id_orginization= " id _orginiation kdjbsj";
    const id_department ="id department dfgdg";

    const salt = await bcrypt.genSalt(10);
    const Hashpasword = await bcrypt.hash(password, salt);
    let data = {
        name_user: name_user,
        email_user: email_user,
        description_user: description_user,
        date_created: date_created,
        date_modified: date_modified,
        modified_by: modified_by,
        date_deleted: date_deleted,
        deleted_by: deleted_by,
        active_flag: active_flag,
        id_sub_department: id_sub_department,
        id_role: id_role,
        id_type: id_type,
        password: Hashpasword,
        id_orginization:id_orginization,
        id_department:id_department,
    }
    let check_email = `SELECT * FROM users WHERE email_user="${email_user}"`;
    let sql = 'INSERT INTO users SET ?';
    db?.query(check_email, data, (error, result) => {
        (result && result.length ?
            res?.status(500).json({
                success: false,
                message: 'email Already Exists...!',
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
                    message: 'Registration Success...!',
                    data: result
                })
            }
            )
        )
    })

}


const get_all_users = (req, res) => {

    let sql = `SELECT * FROM  users`

    db.query(sql, (error, results) => {
        if (error) {
            console.log(error, "error")
            res.status(500).json({
                success: false,
                message: 'Internal Server Error',
                error: error,
            })
        }
        console.log(results)
        res.status(200).json({
            success: true,
            message: 'Successfully found All Users',
            data: results
        })
    })

}

const delete_user = (req, res) => {
    const id = req.params.id
    let sql = `DELETE FROM users  WHERE id_user=${id}`

    db.query(sql, (error, results) => {
        if (error) {
            console.log(error, "error")
            res.status(500).json({
                success: false,
                message: 'Error found',
                error: error,
            })
        }

        res.status(200).json({
            success: true,
            message: 'ONE DATA DELETED FROM TABLE USERS',
            data: results
        })

    })

}

const get_user = (req, res) => {
    const id = req.params.id
    let sql = `SELECT * FROM  users  WHERE id_user=${id}`
    db.query(sql, (error, results) => {
        if (error) {
            console.log(error, "error")
            res.status(500).json({
                success: false,
                message: 'Error found',
                error: error,
            })
        }
        if (results?.length) {
            console.log(results)
            res.status(200).json({
                success: true,
                message: 'ONE DATA FACHED FROM TABLE USERS',
                data: results
            })
        }
        else {
            res.status(404).json({
                success: false,
                message: 'data not found',
            })
        }

    })

}

const user_forget_password = (req, res) => {
    let password = req.body.password;
    let email_user = req.body.email_user;
    let sql = `UPDATE  users SET password= '${password}' WHERE email_user=${email_user}`
    db.query(sql, (error, results) => {
        if (error) {
            console.log(error, "error")
            res.status(500).json({
                success: false,
                message: 'Error found',
                error: error,
            })
        }
        if (results?.length) {
            console.log(results)
            res.status(200).json({
                success: true,
                message: 'ONE DATA UPDATED FROM TABLE USERS',
                data: results
            })
        }
        else {
            res.status(404).json({
                success: false,
                message: 'email not found',
            })
        }
    })

}
// ******user_login******
const user_auth = async (req, res) => {
    let password = req.body.password;
    let email_user = req.body.email_user;
    console.log("body", password, email_user)
    let sql = `SELECT * FROM  users  WHERE email_user="${email_user}"`
    db.query(sql, async (error, results) => {
        const data = results[0]
        console.log(data)
        console.log(password)
        let checkpassword = data && data?.password && await bcrypt.compare(password, data?.password);
        console.log(checkpassword)
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
                message: 'email not Found '
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
                message: 'user login Sucessfully...!',
                data: results
            })
        }
    })
}
// ****get_database*****
const get_DB = (req, res) => {
    let sql = `SHOW DATABASES`

    db.query(sql, (error, results) => {
        if (error) {
            console.log(error, "error")
            res.status(500).json({
                success: false,
                message: 'Error found',
                error: error,
            })
        }
        console.log(results)
        res.status(200).json({
            success: true,
            message: 'DATABASES FACHED',
            data: results
        })
    })
}

module.exports = {
    user_auth,
    user_registration,
    get_all_users,
    delete_user,
    get_user,
    user_forget_password,
    get_DB
}


















