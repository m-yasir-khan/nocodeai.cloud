import React, { useState, forwardRef, useEffect } from 'react';
import axios from 'axios'
import PropTypes from 'prop-types';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import { constants } from '../../../../../Utils/constants';
import TextField from '@mui/material/TextField';
const Fade = forwardRef(function Fade(props, ref) {
    const { in: open, children, onEnter, onExited, ...other } = props;
    return (
        <div ref={ref} style={style} {...other}>
            {children}
        </div>
    );
});

Fade.propTypes = {
    children: PropTypes.element,
    in: PropTypes.bool.isRequired,
    onEnter: PropTypes.func,
    onExited: PropTypes.func,
};

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 500,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};


const AzureModal = () => {
    useEffect(() => {
        findDB()
    }, [])
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [conn_string, setConn_String] = useState("")
    const [pw, setPw] = useState("")
    const [db, setDB] = useState({})




    const auth_connection = (data) => {
        axios.post("http://localhost:4000/connection/auth_connection", data)
            .then((res) => {
                console.log(res?.data?.message, "response")
                console.log(db.data, "state")
                setTimeout(() => {
                    setPw("")
                    setConn_String("")
                    handleClose()
                }, 3000)
            }).catch((error) => {
                console.log(error, "Error")
                console.log(error?.response?.data?.message, "Error")
            })
    }
    const findDB = () => {
        axios.get("http://localhost:4000/users/get_DB")
            .then((res) => {
                console.log(res.data, "db response")
                setDB(res.data)
            }).catch((error) => {
                console.log(error, "Error")
            })
    }
    return (
        <>
            <div>
                <Button onClick={handleOpen} className='zoom'> <constants.SiMicrosoftazure className='sidebar-icons' /></Button>
                <Modal
                    aria-labelledby="spring-modal-title"
                    aria-describedby="spring-modal-description"
                    open={open}
                    onClose={handleClose}
                    closeAfterTransition
                    BackdropComponent={Backdrop}
                    BackdropProps={{
                        timeout: 500,
                    }}
                >
                    <Fade in={open}>
                        <Box sx={style}>
                            <TextField
                                type="search"
                                id="outlined"
                                value={conn_string}
                                label="DB Connection String"
                                defaultValue=""
                                style={{ width: '100%', marginBottom: '10px' }}
                                onChange={(ev) => { setConn_String(ev.target.value) }} />
                            <TextField
                                id="outlined-password-input"
                                label="Password"
                                type="password"
                                value={pw}
                                autoComplete="current-password"
                                style={{ width: '100%', marginBottom: '10px' }}
                                onChange={(ev) => { setPw(ev.target.value) }} />
                            <div>
                                <Button onClick={() => {
                                    let data = {
                                        conn_string: conn_string,
                                        pw: pw
                                    }
                                    auth_connection(data)
                                }} variant="outlined" size="small" style={{ marginRight: '10px' }}
                                >
                                    Connect
                                </Button>
                                <Button onClick={handleClose} variant="outlined" size="small">
                                    Cancel
                                </Button>
                            </div>
                        </Box>
                    </Fade>
                </Modal>
            </div>
        </>
    )
}


export default AzureModal