import React from 'react';
import { constants } from '../../../../Utils/constants';
// import "./style.css"

export default function Software(props) {
    const onDragStart = (event, fieldType) => {
        event.dataTransfer.setData('field', fieldType);
        event.dataTransfer.effectAllowed = 'move';
    };
    return (
        <>
            <div className='field-palette-project' onDragStart={(event) => onDragStart(event, 'container')} draggable>
                <label className='heading' id="software" onClick={(event) => {
                    props?.onClick(event);
                }}>Software Development</label>
                <constants.FaRegWindowMaximize className='header-arrow-down' />
            </div>

        </>
    )
}