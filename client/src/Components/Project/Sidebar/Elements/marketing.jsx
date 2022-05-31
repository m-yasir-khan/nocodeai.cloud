import React from 'react';
import { constants } from '../../../../Utils/constants';

export default function Marketing() {
    const onDragStart = (event, fieldType) => {
        event.dataTransfer.setData('field', fieldType);
        event.dataTransfer.effectAllowed = 'move';
    };
    return (
        <>
            <div className='field-palette-project' onDragStart={(event) => onDragStart(event, 'container')} draggable>
                <label className='heading'>Marketing Research Schedule</label>
                <constants.FaRegWindowMaximize className='header-arrow-down' />
            </div>
            <div className='field-palette-project' onDragStart={(event) => onDragStart(event, 'container')} draggable>
                <label className='heading'>Market Campaign Plan</label>
                <constants.FaRegWindowMaximize className='header-arrow-down' />
            </div>
            <div className='field-palette-project' onDragStart={(event) => onDragStart(event, 'container')} draggable>
                <label className='heading'>Customer Service</label>
                <constants.FaRegWindowMaximize className='header-arrow-down' />
            </div>
        </>
    )
}