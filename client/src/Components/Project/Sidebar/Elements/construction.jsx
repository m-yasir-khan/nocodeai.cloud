import React from 'react';
import { constants } from '../../../../Utils/constants';
import "../../style.css"

export default function Construction(props) {
    const onDragStart = (event, fieldType) => {
        event.dataTransfer.setData('field', fieldType);
        event.dataTransfer.effectAllowed = 'move';
    };
    return (
        <>
            <div className='field-palette-project' onDragStart={(event) => onDragStart(event, 'container')} draggable>
                <label className='heading' id="commercialConstruction" onClick={(event) => {
                    props?.onClick(event);
                }}>
                    Commercial Construction</label>
                <constants.FaRegWindowMaximize className='header-arrow-down' />
            </div>
            <div className='field-palette-project' onDragStart={(event) => onDragStart(event, 'container')} draggable>
                <label className='heading' id="residentialConstruction" onClick={(event) => {
                    props?.onClick(event);
                }}>Residential Construction</label>
                <constants.FaRegWindowMaximize className='header-arrow-down' />
            </div>

        </>
    )
}