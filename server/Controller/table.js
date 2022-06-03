const db=require ("../Database_connection/db")



// ********* Create New Table*************


const add_table = async (req, res) => {

    // let sql = "CREATE TABLE hello(id_user int AUTO_INCREMENT,name_user VARCHAR(255),email_user VARCHAR(255), description_user VARCHAR(255), date_created VARCHAR(255),  date_modified VARCHAR(255), modified_by VARCHAR(255), date_deleted VARCHAR(255), deleted_by VARCHAR(255), active_flag VARCHAR(255),id_sub_department VARCHAR(255), id_role VARCHAR(255), id_type VARCHAR(255), id_orginization VARCHAR(255),id_department VARCHAR(255),password VARCHAR(255), PRIMARY KEY(id_user)) "
    db.query(sql, (error, result) => {
        if (error) {
            console.log(error, "error")
            res.status(500).json({
                success: false,
                message: 'Server Error',
                error: error,
            })
        }
        console.log(result)
        res.status(201).json({
            success: true,
            message: 'table craeted sucess',
            data: result
        })
    })
}

module.exports={
    add_table
}