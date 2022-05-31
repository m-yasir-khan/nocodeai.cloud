import React from 'react';
import "./fields.css"

export default () => {
  const onDragStart = (event, nodeType) => {
    event.dataTransfer.setData('application/reactflow', nodeType);
    event.dataTransfer.effectAllowed = 'move';
  };

  return (
    <aside className='palette-components'>
      <div className='field-palette' onDragStart={(event) => onDragStart(event, 'form')} draggable>
        Form
      </div>
      <div className='field-palette' onDragStart={(event) => onDragStart(event, 'phone-number')} draggable>
        Phone Number
      </div>
      <div className='field-palette' onDragStart={(event) => onDragStart(event, 'field-drop')} draggable>
        Text
      </div>
    </aside>
  );
};