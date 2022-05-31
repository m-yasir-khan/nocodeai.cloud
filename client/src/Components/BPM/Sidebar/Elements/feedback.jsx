import React from 'react';
import { constants } from '../../../../Utils/constants';

export default function Feedback() {
    const onDragStart = (event, fieldType) => {
        event.dataTransfer.setData('field', fieldType);
        event.dataTransfer.effectAllowed = 'move';
    };
    return (
        <>
            <div className='field-palette' onDragStart={(event) => onDragStart(event, 'alert')} draggable>
                <constants.FiAlertCircle className='sidebar-icons' /><span>Alert</span>
            </div>
            <div className='field-palette' onDragStart={(event) => onDragStart(event, 'progress')} draggable>
                <constants.CgLoadbar className='sidebar-icons' /><span>Progress</span>
            </div>
        </>
    )
}
