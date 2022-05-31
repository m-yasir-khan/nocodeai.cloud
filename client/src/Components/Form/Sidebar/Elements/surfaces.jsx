import React from 'react';
import { constants } from '../../../../Utils/constants';

export default function Surfaces() {
    const onDragStart = (event, fieldType) => {
        event.dataTransfer.setData('field', fieldType);
        event.dataTransfer.effectAllowed = 'move';
    };
    return (
        <>
            <div className='field-palette' onDragStart={(event) => onDragStart(event, 'accordion')} draggable>
                <constants.MdOutlineArrowDropDownCircle className='sidebar-icons' /><span>Accordion</span>
            </div>
            <div className='field-palette' onDragStart={(event) => onDragStart(event, 'container')} draggable>
                <constants.FaRegWindowMaximize className='sidebar-icons' /><span>Container</span>
            </div>
            <div className='field-palette' onDragStart={(event) => onDragStart(event, 'transferlist')} draggable>
                <constants.BsArrowLeftRight className='sidebar-icons' /><span>Transfer List</span>
            </div>
        </>
    )
}
