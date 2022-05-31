import '../style.css';
import { Handle } from 'react-flow-renderer';
import { Rnd } from "react-rnd";
import React from "react";
import { Height, Translate } from '@mui/icons-material';
import { constants } from "../../../Utils/constants";


const rndStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    border: "solid 1px #ddd",
    background: "#f0f0f0"
  };

function ProcessNode(props) {
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
 console.log(props.selected,"my props");
 let btn_visibility = `hidden`;
 if(props.selected)
btn_visibility = `visible`;
   const [size, setSize] = React.useState({ x: 210, y: 152 });    

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
     
        <div className="flow-label">
            <div className='process-node' style={{width:`${size.x}px`,height:`${size.y}px`}}>
            <Handle
        type="target"
        position="top"
        id="a"
        style={{ background: '#555' }}
        onConnect={(params) => console.log('handle onConnect', params)}
      />
            <Handle
        type="target"
        position="left"
        id="b"
        style={{ background: '#555' }}
        onConnect={(params) => console.log('handle onConnect', params)}
      />
            <Handle
        type="source"
        position="right"
        id="c"
        style={{ background: '#555' }}
        onConnect={(params) => console.log('handle onConnect', params)}
      />
            <Handle
        type="source"
        id="d"
        position="bottom"
        style={{ background: '#555' }}
        onConnect={(params) => console.log('handle onConnect', params)}
      />
               <h3 style={{width:'98%', position:'absolute',top:'-8px',backgroundColor:'GrayText',color:'#fff'}} >{data.name}</h3>
              <p style={{position:'relative',top:'20px',overflowWrap:'break-word'}}>{data.description}</p>
              <div style={{ width: '100%',height:'50px',textAlign:'center',position:'absolute',bottom:'10px' }}>
              {/* <p style={{color: data.textColor}} >Lead Time={data.lt} min<br />Process Time={data.pt} min<br />Activity Ratio={data.pt/data.lt *100}%</p> */}
            <label style={{width:'95%',position:'absolute',left:'0px',border:'groove',bottom:'20px'}}>PT={data.pt}min</label>
            <br/>
            <label style={{width:'95%',position:'absolute',left:'0px',border:'groove',bottom:'0px'}}>Ratio={data.pt/data.lt*100}%</label>
            <label style={{width:'95%',position:'absolute',left:'0px',border:'groove',bottom:'40px'}}>LT={data.lt}min</label>
              </div>
               <constants.GiResize id="draghandle" className="nodrag icon-style" type="button" 
               onMouseDown={handler} 
               style={{marginBottom:`1px`,marginRight:`1px`,position:`fixed`,bottom:`0`,right:`0`,visibility:btn_visibility}} />
         
            </div>
            
        </div>
       
    );
}

export default ProcessNode;