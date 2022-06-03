const db = require("../Database_connection/db")


const add_form = async (req, res) => {

    let data = {
        form_name: "zeeshan",
        form_description: "Mern_Stack_Developer",
        
    }
    let sql = 'INSERT INTO forms SET ?'

    db.query(sql, data, (error, result) => {
        if (error) {
            console.log(error, "error")
            res.status(500).json({
                success: false,
                message: 'Error found',
                error: error,
            })
        }
        console.log(result)
        res.status(201).json({
            success: true,
            message: 'User Successfully Added in Database',
            data: result
        })
    })

}

// const get_all_users = (req, res) => {

//     let sql = `SELECT * FROM  users`

//     db.query(sql, (error, results) => {
//         if (error) {
//             console.log(error, "error")
//             res.status(500).json({
//                 success: false,
//                 message: 'Internal Server Error',
//                 error: error,
//             })
//         }
//         console.log(results)
//         res.status(200).json({
//             success: true,
//             message: 'Successfully found All Users',
//             data: results
//         })
//     })

// }

// const delete_user = (req, res) => {
//     const id = req.params.id
//     let sql = `DELETE FROM users  WHERE user_id=${id}`

//     db.query(sql, (error, results) => {
//         if (error) {
//             console.log(error, "error")
//             res.status(500).json({
//                 success: false,
//                 message: 'Error found',
//                 error: error,
//             })
//         }
//         console.log(results)
//         res.status(200).json({
//             success: true,
//             message: 'ONE DATA DELETED FROM TABLE USERS',
//             data: results
//         })

//     })

// }

// const get_user = (req, res) => {
//     const id = req.params.id
//     let sql = `SELECT * FROM  users  WHERE user_id=${id}`

//     db.query(sql, (error, results) => {
//         if (error) {
//             console.log(error, "error")
//             res.status(500).json({
//                 success: false,
//                 message: 'Error found',
//                 error: error,
//             })
//         }
//         console.log(results)
//         res.status(200).json({
//             success: true,
//             message: 'ONE DATA FACHED FROM TABLE USERS',
//             data: results
//         })


//     })

// }

// const update_user = (req, res) => {
//     const id = req.params.id
//     let new_title = "full_stack_developer";
//     let sql = `UPDATE  users SET user_title= '${new_title}' WHERE user_id=${id}`

//     db.query(sql, (error, results) => {
//         if (error) {
//             console.log(error, "error")
//             res.status(500).json({
//                 success: false,
//                 message: 'Error found',
//                 error: error,
//             })
//         }
//         console.log(results)
//         res.status(200).json({
//             success: true,
//             message: 'ONE DATA UPDATED FROM TABLE USERS',
//             data: results
//         })
//     })

// }


module.exports = {
    add_form
}