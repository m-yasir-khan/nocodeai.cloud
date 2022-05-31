import { constants } from "../../../../Utils/constants";
export default () => {
    const onDragStart = (event, nodeType) => {
        console.log(nodeType,"node type");
        event.dataTransfer.setData('field', nodeType);
        event.dataTransfer.effectAllowed = 'move';
      };

    return(
        <div className='field-palette' onDragStart={(event) => onDragStart(event, 'delayNode')} draggable>
          <constants.MdLabelOutline className='icon-style' /><span>Delay</span>
        {/* <div className=".bg_decision" style={{width:'23px',height:'23px',position:'absolute',left:'17px'}}/> */}
        {/* <span style={{bottom:'0px'}}>Condition</span> */}
        </div>
    );

}