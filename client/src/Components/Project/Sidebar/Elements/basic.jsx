import React from 'react';
import { constants } from '../../../../Utils/constants';
import "../../style.css"

export default function Basic(props) {
    const onDragStart = (event, fieldType) => {
        event.dataTransfer.setData('field', fieldType);
        event.dataTransfer.effectAllowed = 'move';
    };
    return (
        <>
            <div className='field-palette-project' onDragStart={(event) => onDragStart(event, 'container')} draggable>
                <label className='heading' id="simpleProjectPlan" onClick={(event) => {
                    props?.onClick(event);
                }}>Simple Project Plan</label>
                <constants.FaRegWindowMaximize className='header-arrow-down' />
            </div>
            <div className='field-palette-project' onDragStart={(event) => onDragStart(event, 'container')} draggable>
                <label className='heading' id="homeMovePlan" onClick={(event) => {
                    props?.onClick(event);
                }}>Home Move Plan</label>
                <constants.FaRegWindowMaximize className='header-arrow-down' />
            </div>
            <div className='field-palette-project' onDragStart={(event) => onDragStart(event, 'container')} draggable>
                <label className='heading' id="weddingPlanner" onClick={(event) => {
                    props?.onClick(event);
                }}>Wedding Planner</label>
                <constants.FaRegWindowMaximize className='header-arrow-down' />
            </div>

        </>
    )
}