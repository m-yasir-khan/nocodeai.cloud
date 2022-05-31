import React, { useState, forwardRef } from 'react';
import { constants } from '../../../../Utils/constants';
import PropTypes from 'prop-types';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { SQLModal, DBModal, BigQueryModal } from './DBModals'
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
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};


const BasicQueriesMenu = () => {
    // const [open, setOpen] = useState(false);
    // const handleOpen = () => setOpen(true);
    // const handleClose = () => setOpen(false);
    const onDragStart = (event, fieldType) => {
        event.dataTransfer.setData('field', fieldType);
        event.dataTransfer.effectAllowed = 'move';
    };
    return (
        <>
            {/* <div className='field-palette' onDragStart={(event) => onDragStart(event, 'select')} draggable>
                <constants.FaRegWindowMaximize className='sidebar-icons' /><span>Select</span>
            </div>
            <div className='field-palette' onDragStart={(event) => onDragStart(event, 'update')} draggable>
                <constants.AiOutlineEdit className='sidebar-icons' /><span>Update</span>
            </div> */}
            <div className='field-palette'>
                <span> <DBModal /></span>
            </div>
            <div className='field-palette'>
                <span> <SQLModal /></span>
            </div>
            <div className='field-palette'>
                <span> <BigQueryModal /></span>
            </div>
        </>
    )
}


export default BasicQueriesMenu