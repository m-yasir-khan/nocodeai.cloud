import React, { useState, forwardRef } from 'react';
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


const MongoDBModal = () => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <>
            <div>
                <Button onClick={handleOpen} className='zoom'> <constants.SiMongodb className='sidebar-icons' /></Button>
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
                                label="DB Connection String"
                                defaultValue=""
                                style={{ width: '100%', marginBottom: '10px' }}

                            />
                            <TextField
                                id="outlined-password-input"
                                label="Password"
                                type="password"
                                autoComplete="current-password"
                                style={{ width: '100%', marginBottom: '10px' }}

                            />
                            <div>
                                <Button variant="outlined" size="small" style={{ marginRight: '10px' }}
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


export default MongoDBModal