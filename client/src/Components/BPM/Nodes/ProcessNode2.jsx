import '../style.css';
import { Handle } from 'react-flow-renderer';
import React from "react";
import { Height, Translate } from '@mui/icons-material';
import { constants } from "../../../Utils/constants";


function ProcessNode2(props) {
    let data = props.data;

    return (
     
        <div className="flow-label">
   
               <h3 style={{width:'98%', position:'absolute',top:'-8px',backgroundColor:'GrayText',color:'#fff'}} >My Process</h3>
              <p style={{position:'relative',top:'20px',overflowWrap:'break-word'}}>This is my process</p>
              <div style={{ width: '100%',height:'50px',textAlign:'center',position:'absolute',bottom:'10px' }}>
              {/* <p style={{color: data.textColor}} >Lead Time={data.lt} min<br />Process Time={data.pt} min<br />Activity Ratio={data.pt/data.lt *100}%</p> */}
            <label style={{width:'95%',position:'absolute',left:'0px',border:'groove',bottom:'20px'}}>PT=100min</label>
            <br/>
            <label style={{width:'95%',position:'absolute',left:'0px',border:'groove',bottom:'0px'}}>Ratio=20%</label>
            <label style={{width:'95%',position:'absolute',left:'0px',border:'groove',bottom:'40px'}}>LT=10min</label>
              </div>

    
            
        </div>
       
    );
}

export default ProcessNode2;