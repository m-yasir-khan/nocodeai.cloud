import React from 'react';
import '../../App.css';
import { FaFont, FaRegSquare, FaRegListAlt, FaRegWindowMaximize, FaHeading } from 'react-icons/fa';
import { AiOutlineEdit, AiOutlineCheckCircle } from 'react-icons/ai'
import { BiRadioCircleMarked } from 'react-icons/bi';
import { constants } from '../../Utils/constants';

export default () => {
  const onDragStart = (event, nodeType) => {
    event.dataTransfer.setData('application/reactflow', nodeType);
    event.dataTransfer.effectAllowed = 'move';
  };

  return (
    <div className='palette'>
      <span className='palette-header'>All Components</span>
      <h3>Basic</h3>
      <aside className='container'>
        <div className='field-palette' onDragStart={(event) => onDragStart(event, 'inputfield')} draggable>
         <AiOutlineEdit className='icon-style' /><span>Input Field</span>
        </div>
        <div className='field-palette' onDragStart={(event) => onDragStart(event, 'dropdown')} draggable>
          <FaRegListAlt className='icon-style' /><span>Dropdown</span>
        </div>
        <div className='field-palette' onDragStart={(event) => onDragStart(event, 'button')} draggable>
          <FaRegSquare className='icon-style' /><span>Button</span>
        </div>
        <div className='field-palette' onDragStart={(event) => onDragStart(event, 'container')} draggable>
          <FaRegWindowMaximize className='icon-style' /><span>Container</span>
        </div>
        <div className='field-palette' onDragStart={(event) => onDragStart(event, 'heading')} draggable>
          <FaHeading className='icon-style' /><span>Label</span>
        </div>
        <div className='field-palette' onDragStart={(event) => onDragStart(event, 'checkbox')} draggable>
          <AiOutlineCheckCircle className='icon-style' /><span>Checkbox</span>
        </div>
        <div className='field-palette' onDragStart={(event) => onDragStart(event, 'radiobutton')} draggable>
          <BiRadioCircleMarked className='icon-style' /><span>Radio Button</span>
        </div>
      </aside>
      <h3>Neo4j</h3>
      <div className='field-palette' onDragStart={(event) => onDragStart(event, 'switch')} draggable>
        <constants.BsFileArrowDownFill className='icon-style' /><span>Data Extraction</span>
      </div>
      <h3>Database</h3>
      <div className='field-palette' onDragStart={(event) => onDragStart(event, 'switch')} draggable>
        <constants.FaDatabase className='icon-style' /><span>Database</span>
      </div>
    </div>
  );
};