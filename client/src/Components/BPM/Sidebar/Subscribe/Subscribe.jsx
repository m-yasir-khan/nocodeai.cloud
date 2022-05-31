import { constants } from "../../../../Utils/constants";

export default () => {
    const onDragStart = (event, nodeType) => {
        event.dataTransfer.setData('application/reactflow', nodeType);
        event.dataTransfer.effectAllowed = 'move';
      };

    return(
        <div className='field-palette' onDragStart={(event) => onDragStart(event, 'subscribeNode')} draggable>
        <constants.MdUnsubscribe className='icon-style' /><span>Subscribe</span>
        </div>
    );

}