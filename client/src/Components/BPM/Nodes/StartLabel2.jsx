import '../style.css';
import { Handle } from 'react-flow-renderer';
import React from "react";
import { Height, Translate } from '@mui/icons-material';
import { constants } from "../../../Utils/constants";


function StartNode2(props) {
    let data = props.data;

    return (
     

        <div className='Start-node'>
       
           <label className='centered'>START</label>
        </div>
        
      
    );
}

export default StartNode2;