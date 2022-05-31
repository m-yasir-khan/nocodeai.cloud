import React from 'react';
import { constants } from '../../../../Utils/constants';

export default function DateTime() {
    const onDragStart = (event, fieldType) => {
        event.dataTransfer.setData('field', fieldType);
        event.dataTransfer.effectAllowed = 'move';
    };
    return (
        <>
            <div className='field-palette' onDragStart={(event) => onDragStart(event, 'startLabel')} draggable>
            <constants.BiCircle style={{color:'#027ef8'}} className='icon-style' /><span>Start Label</span>
            </div>
            <div className='field-palette' onDragStart={(event) => onDragStart(event, 'endLabel')} draggable>
            <constants.BiCircle style={{color:'#027ef8'}} className='icon-style' /><span>End Label</span>
            </div>
             <div className='field-palette' onDragStart={(event) => onDragStart(event, 'processBlock')} draggable>
            <constants.BiRectangle className='icon-style' style={{color:'#027ef8'}} /><span>Process</span>
            </div>
            <div className='field-palette' onDragStart={(event) => onDragStart(event, 'conditionNode')} draggable>
            <constants.BsDiamond className='icon-style' style={{color:'#027ef8'}}/><span>Condition</span>
            </div>
            <div className='field-palette' onDragStart={(event) => onDragStart(event, 'container')} draggable>
              <constants.BiRectangle className='icon-style' style={{color:'#027ef8'}}/><span>Container</span>
            </div>
            <div className='field-palette' onDragStart={(event) => onDragStart(event, 'mergeNode')} draggable>
               <constants.BsTriangle className='icon-style' style={{color:'#027ef8'}}/><span>Merge</span>
            </div>
            <div className='field-palette' onDragStart={(event) => onDragStart(event, 'loopLimitNode')} draggable>
              <constants.ImLoop className='icon-style' style={{color:'#027ef8'}}/><span>Loop Limit</span>
            </div>
            <div className='field-palette' onDragStart={(event) => onDragStart(event, 'preparationNode')} draggable>
               <constants.BsHexagon className='icon-style' style={{color:'#027ef8'}}/><span>Prparation</span>
            </div>
            <div className='field-palette' onDragStart={(event) => onDragStart(event, 'swimlaneNode')} draggable>
               <constants.BiRectangle className='icon-style' style={{color:'#027ef8'}}/><span>Swimlane</span>
            </div> 
        </>
    )
}
