import { constants } from "../../../../Utils/constants";

export default () => {
    const onDragStart = (event, nodeType) => {
        console.log(nodeType,"node type");
        event.dataTransfer.setData('field', nodeType);
        event.dataTransfer.effectAllowed = 'move';
      };

    return(
        <div className='field-palette' onDragStart={(event) => onDragStart(event, 'endLabel')} draggable>
        <constants.BiCircle style={{color:'red'}} className='icon-style' /><span>End Label</span>
        </div>
    );

}