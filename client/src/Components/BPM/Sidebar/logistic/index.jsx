import { constants } from "../../../../Utils/constants";

export default () => {
    const onDragStart = (event, nodeType) => {
        console.log(nodeType,"node type");
        event.dataTransfer.setData('application/reactflow', nodeType);
        event.dataTransfer.effectAllowed = 'move';
      };

    return(
        <div className='field-palette' onDragStart={(event) => onDragStart(event, 'andNode')} draggable>
        <constants.GiTruck className='icon-style' /><span>Logistics</span>
         </div>
    );

}