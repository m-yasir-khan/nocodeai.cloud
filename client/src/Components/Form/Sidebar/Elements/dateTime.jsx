import React from 'react';
import { constants } from '../../../../Utils/constants';

export default function DateTime() {
    const onDragStart = (event, fieldType) => {
        event.dataTransfer.setData('field', fieldType);
        event.dataTransfer.effectAllowed = 'move';
    };
    return (
        <>
            <div className='field-palette' onDragStart={(event) => onDragStart(event, 'datepicker')} draggable>
                <constants.BsCalendarDate className='sidebar-icons' /><span>Date</span>
            </div>
            <div className='field-palette' onDragStart={(event) => onDragStart(event, 'timepicker')} draggable>
                <constants.BiTimeFive className='sidebar-icons' /><span>Time</span>
            </div>
        </>
    )
}
