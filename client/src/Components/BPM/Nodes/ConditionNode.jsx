import '../style.css';
import { Handle } from 'react-flow-renderer';
import React from "react";
import { constants } from "../../../Utils/constants";

function ConditionNode(props) {

    const [size, setSize] = React.useState({ x: 100, y: 100 });    
    let btn_visibility = `hidden`;
    if(props.selected)
   btn_visibility = `visible`;

    let data = props.data;

    let style = { 
        height: data.height,
        fontSize: data.size,
        width: data.width,
        backgroundColor: data.backgroundColor,
        color: data.textColor,
        paddingTop: data.paddingTop,
        paddingBottom: data.paddingDown,
        paddingLeft: data.paddingLeft,
        paddingRight: data.paddingRight
    }
    const handler = (mouseDownEvent) => {
        const startSize = size;
        const startPosition = { x: mouseDownEvent.pageX, y: mouseDownEvent.pageY };
        
        function onMouseMove(mouseMoveEvent) {
          setSize(currentSize => ({ 
            x: startSize.x - startPosition.x + mouseMoveEvent.pageX, 
            y: startSize.y - startPosition.y + mouseMoveEvent.pageY 
          }));
        }
        function onMouseUp() {
          document.body.removeEventListener("mousemove", onMouseMove);
          // uncomment the following line if not using `{ once: true }`
          // document.body.removeEventListener("mouseup", onMouseUp);
        }
        
        document.body.addEventListener("mousemove", onMouseMove);
        document.body.addEventListener("mouseup", onMouseUp, { once: true });
      };

    return (
        <div className="flow-label" style={{width:`${size.x}px`,height:`${size.y}px`}}>
        <div className='Condition-node' >
       <Handle 
        type="source"
        // position='top'
        id="a"
        style={{ background: '#555', position:'absolute',left:'0px'}}
        onConnect={(params) => console.log('handle onConnect', params)}
      />
         <Handle 
        type="target"
         position='bottom'
        id="b"
        style={{ background: '#555', position:'absolute',left:'100%'}}
        onConnect={(params) => console.log('handle onConnect', params)}
      />
       <Handle 
        type="source"
         position='top'
        id="c"
        style={{ background: '#555', position:'absolute',left:'100%'}}
        onConnect={(params) => console.log('handle onConnect', params)}
      />
         {/* <Handle
        type="source"
        position='right'
        id="b"
        style={{ background: '#555', right:-10,top:0}}
        onConnect={(params) => console.log('handle onConnect', params)}
      />
        <Handle
        type="target"
        position='bottom'
        id="c"
        style={{ background: '#555',left:0, bottom:0}}
        onConnect={(params) => console.log('handle onConnect', params)}
      /> */}
         
            {/* <div className='Condition-node'> */}
                <div className='inline_text'>
                
               <label >{data.name}</label>
                </div>
                {/* <constants.GiResize id="draghandle" className="nodrag icon-style" type="button" 
               onMouseDown={handler} 
               style={{marginBottom:`1px`,marginRight:`1px`,position:`fixed`,bottom:`0`,right:`0`,visibility:btn_visibility}} /> */}
            </div>
            </div> 
    
    );
}

export default ConditionNode;