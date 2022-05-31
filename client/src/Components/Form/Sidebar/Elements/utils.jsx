import React from 'react';
import { constants } from '../../../../Utils/constants';

export default function Utils() {
    const onDragStart = (event, fieldType) => {
        event.dataTransfer.setData('field', fieldType);
        event.dataTransfer.effectAllowed = 'move';
    };
    return (
        <>
            <div className='field-palette' onDragStart={(event) => onDragStart(event, 'rtf')} draggable>
                <constants.FiEdit className='sidebar-icons' /><span>Rich Text Editor</span>
            </div>
            <div className='field-palette' onDragStart={(event) => onDragStart(event, 'modal')} draggable>
                <constants.BsBoxArrowUpRight className='sidebar-icons' /><span>Modal</span>
            </div>
            <div className='field-palette' onDragStart={(event) => onDragStart(event, 'swimlane')} draggable>
                <constants.FaGripLines className='sidebar-icons' /><span>Swimlane</span>
            </div>
        </>
    )
}