import React from 'react';
import { constants } from '../../../../Utils/constants';

export default function Form() {
    const onDragStart = (event, fieldType) => {
        event.dataTransfer.setData('field', fieldType);
        event.dataTransfer.effectAllowed = 'move';
    };
    return (
        <>
            <div className='field-palette' onDragStart={(event) => onDragStart(event, 'container')} draggable>
                <constants.FaRegWindowMaximize className='sidebar-icons' /><span>Container</span>
            </div>
            <div className='field-palette' onDragStart={(event) => onDragStart(event, 'inputfield')} draggable>
                <constants.AiOutlineEdit className='sidebar-icons' /><span>Input Field</span>
            </div>
            <div className='field-palette' onDragStart={(event) => onDragStart(event, 'dropdown')} draggable>
                <constants.FaRegListAlt className='sidebar-icons' /><span>Dropdown</span>
            </div>
            <div className='field-palette' onDragStart={(event) => onDragStart(event, 'button')} draggable>
                <constants.FaRegSquare className='sidebar-icons' /><span>Button</span>
            </div>
            <div className='field-palette' onDragStart={(event) => onDragStart(event, 'togglebutton')} draggable>
                <constants.BsSquareHalf className='sidebar-icons' /><span>Toggle Button</span>
            </div>
            <div className='field-palette' onDragStart={(event) => onDragStart(event, 'label')} draggable>
                <constants.FaHeading className='sidebar-icons' /><span>Label</span>
            </div>
            <div className='field-palette' onDragStart={(event) => onDragStart(event, 'checkbox')} draggable>
                <constants.AiOutlineCheckCircle className='sidebar-icons' /><span>Checkbox</span>
            </div>
            <div className='field-palette' onDragStart={(event) => onDragStart(event, 'radiobutton')} draggable>
                <constants.BiRadioCircleMarked className='sidebar-icons' /><span>Radio Button</span>
            </div>
            <div className='field-palette' onDragStart={(event) => onDragStart(event, 'image')} draggable>
                <constants.BsCardImage className='sidebar-icons' /><span>Image</span>
            </div>
            <div className='field-palette' onDragStart={(event) => onDragStart(event, 'textarea')} draggable>
                <constants.BsTextareaT className='sidebar-icons' /><span>Text Area</span>
            </div>
            <div className='field-palette' onDragStart={(event) => onDragStart(event, 'html')} draggable>
                <constants.BsCodeSlash className='sidebar-icons' /><span>HTML</span>
            </div>
            <div className='field-palette' onDragStart={(event) => onDragStart(event, 'rtf')} draggable>
                <constants.FiEdit className='sidebar-icons' /><span>Rich Text Editor</span>
            </div>
            <div className='field-palette' onDragStart={(event) => onDragStart(event, 'switch')} draggable>
                <constants.MdToggleOn className='sidebar-icons' /><span>Switch</span>
            </div>
            <div className='field-palette' onDragStart={(event) => onDragStart(event, 'alert')} draggable>
                <constants.FiAlertCircle className='sidebar-icons' /><span>Alert</span>
            </div>
            <div className='field-palette' onDragStart={(event) => onDragStart(event, 'progress')} draggable>
                <constants.CgLoadbar className='sidebar-icons' /><span>Progress</span>
            </div>
        </>
    )
}