import { propsToClassKey } from '@mui/styles';
import React, { useEffect, useState } from 'react';
import { constants } from '../../../Utils/constants';
import { componentData } from './componentData'

export default (props) => {
  const [active, setActive] = useState(componentData);

  const onDragStart = (event, fieldType) => {
    event.dataTransfer.setData('field', fieldType);
    event.dataTransfer.effectAllowed = 'move';
  };

  let Icon = constants.MdKeyboardArrowUp;

  const handleClick = (event) => {
    event.preventDefault();
    console.log("clicked");
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
            Icon: constants.MdKeyboardArrowUp,
          }
        }
        if (set.open == true) {
          set = {
            ...set,
            Icon: constants.MdKeyboardArrowDown,
          }
        }
        return set
      })
      setActive(expCont)
    }
  }

  return (
    <div className='palette-project'>
      <span className='palette-header'>Project Templates</span>
      {active?.map((set) => {
        return (
          <div key={set?.id}>
            <div className="components-header" >
              <label className='heading'id={set?.id} onClick={handleClick}>{set?.name}</label>
              {<set.Icon className='header-arrow-down' id={set?.id} onClick={handleClick} />}
            </div>
            <div className={set?.open ? 'container' : "container-collapse"}>
              {<set.Component onClick={props?.onClick}/> }
            </div>
          </div>
        )
      })}
    </div>
  );
};