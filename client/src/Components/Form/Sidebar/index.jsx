import React, { useEffect, useState } from 'react';
import { constants } from '../../../Utils/constants';
import { componentData } from './componentData'

export default () => {
  const [active, setActive] = useState(componentData);

  const onDragStart = (event, fieldType) => {
    event.dataTransfer.setData('field', fieldType);
    event.dataTransfer.effectAllowed = 'move';
  };

  let Icon = constants.MdKeyboardArrowDown;

  const handleClick = (event) => {
    event.preventDefault();
    let id = event.target.id;
    if (id) {
      let expCont = active?.map((set) => {
        if (set.id == id) {
          set = {
            ...set,
            open: !set.open,
          }
        }
        if (set.open == false) {
          set = {
            ...set,
            Icon: constants.MdKeyboardArrowDown,
          }
        }
        if (set.open == true) {
          set = {
            ...set,
            Icon: constants.MdKeyboardArrowUp,
          }
        }
        return set
      })
      setActive(expCont)
    }
  }

  return (
    <div className='palette'>
      <span className='palette-header'>All Components</span>
      {active?.map((set) => {
        return (
          <div key={set?.id}>
            <div className="components-header">
              <label className='formheading' id={set?.id} onClick={handleClick}>{set?.name}</label>
              {<set.Icon className='header-arrow-down' id={set?.id} onClick={handleClick} />}
            </div>
            <div className={set?.open ? 'container' : "container-collapse"}>
              {<set.Component />}
            </div>
          </div>
        )
      })}
    </div>
  );
};