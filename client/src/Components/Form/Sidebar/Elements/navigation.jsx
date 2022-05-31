import React from 'react';
import { constants } from '../../../../Utils/constants';

export default function Navigation() {
    const onDragStart = (event, fieldType) => {
        event.dataTransfer.setData('field', fieldType);
        event.dataTransfer.effectAllowed = 'move';
    };
    return (
        <>
            <div className='field-palette' onDragStart={(event) => onDragStart(event, 'link')} draggable>
                <constants.MdOutlineLink className='sidebar-icons' /><span>Link</span>
            </div>
            <div className='field-palette' onDragStart={(event) => onDragStart(event, 'breadcrumbs')} draggable>
                <constants.CgArrowsExchange className='sidebar-icons' /><span>Breadcrumbs</span>
            </div>
            <div className='field-palette' onDragStart={(event) => onDragStart(event, 'tabs')} draggable>
                <constants.CgTab className='sidebar-icons' /><span>Tabs</span>
            </div>
        </>
    )
}
