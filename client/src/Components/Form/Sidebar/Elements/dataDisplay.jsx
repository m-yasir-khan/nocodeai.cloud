import React from 'react';
import { constants } from '../../../../Utils/constants';

export default function DataDisplay() {
    const onDragStart = (event, fieldType) => {
        event.dataTransfer.setData('field', fieldType);
        event.dataTransfer.effectAllowed = 'move';
    };
    return (
        <>
            <div className='field-palette' onDragStart={(event) => onDragStart(event, 'image')} draggable>
                <constants.BsCardImage className='sidebar-icons' /><span>Image</span>
            </div>
            <div className='field-palette' onDragStart={(event) => onDragStart(event, 'avatar')} draggable>
                <constants.MdOutlineTagFaces className='sidebar-icons' /><span>Avatar</span>
            </div>
            <div className='field-palette' onDragStart={(event) => onDragStart(event, 'badge')} draggable>
                <constants.RiNotificationBadgeLine className='sidebar-icons' /><span>Badge</span>
            </div>
            <div className='field-palette' onDragStart={(event) => onDragStart(event, 'html')} draggable>
                <constants.BsCodeSlash className='sidebar-icons' /><span>HTML</span>
            </div>
            <div className='field-palette' onDragStart={(event) => onDragStart(event, 'imagelist')} draggable>
                <constants.BsImages className='sidebar-icons' /><span>Image List</span>
            </div>
            <div className='field-palette' onDragStart={(event) => onDragStart(event, 'spacer')} draggable>
                <constants.BsArrowsExpand className='sidebar-icons' /><span>Spacer</span>
            </div>
        </>
    )
}
