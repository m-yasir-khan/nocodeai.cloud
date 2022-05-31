import { constants } from "../../../../Utils/constants";

export default () => {
    const onDragStart = (event, nodeType) => {
        console.log(nodeType,"node type");
        event.dataTransfer.setData('field', nodeType);
        event.dataTransfer.effectAllowed = 'move';
      };

    return(
        <div className='field-palette' onDragStart={(event) => onDragStart(event, 'preparationNode')} draggable>
        <constants.BsHexagon className='icon-style' /><span>Prparation</span>
         </div>
    );

}