import { constants } from "../../../../Utils/constants";

export default () => {
    const onDragStart = (event, nodeType) => {
        console.log(nodeType,"node type");
        event.dataTransfer.setData('field', nodeType);
        event.dataTransfer.effectAllowed = 'move';
      };

    return(
        <div className='field-palette' onDragStart={(event) => onDragStart(event, 'outsideOrganization')} draggable>
        <constants.RiOrganizationChart className='icon-style' /><span>Outside Organization</span>
        </div>
    );

}