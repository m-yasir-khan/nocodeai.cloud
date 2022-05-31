import React from "react";
import { Handle } from 'react-flow-renderer';
import { Rnd } from "react-rnd";
import { Height, Translate } from '@mui/icons-material';
import { constants } from "../../../Utils/constants";
import { MyClass } from "../ContainerDrop.mjs";
import '../style.css';


let Cdrop = false;
const rndStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    border: "solid 1px #ddd",
    background: "#f0f0f0"
  };

function ContainerNode(props) {
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
 //console.log(props.selected,"my props");
 let btn_visibility = `hidden`;
 if(props.selected)
btn_visibility = `visible`;
   const [size, setSize] = React.useState({ x: 400, y: 300 });    

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
  const onDrop = (event) => {
    event.preventDefault();
    Cdrop = true;
   
    let containerDrop = 'fromContainer';
    event.dataTransfer.setData('application/reactflow/container', containerDrop);
    console.log(`item dropped on containe`, MyClass.staticProperty );
    MyClass.staticProperty = "changed";
  }
    return (
     
        <div className="flow-label">
            <div className='process-node' style={{width:`${size?.x}px`,height:`${size.y}px`,opacity:'inherit'}}  onDrop={onDrop}>
         
            
            <div style={{background: data.backgroundColor,width: 'auto',marginTop:'-19px',padding:'0px' }}>
            <h3 style={{color: data.textColor}} >{data.name}</h3>
            </div>
               
              
            </div>
            
        </div>
       
    );
}

// module.export =  ContainerNode;
// module.export = Cdrop;

export {
    Cdrop,
    ContainerNode
}