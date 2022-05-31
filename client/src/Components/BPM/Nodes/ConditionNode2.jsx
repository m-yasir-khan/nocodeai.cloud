import '../style.css';
import { Handle } from 'react-flow-renderer';
import React from "react";
import { Height, Translate } from '@mui/icons-material';
import { constants } from "../../../Utils/constants";


function ConditionNode2(props) {
    let data = props.data;

    return (
     
       
        <div className='Condition-node' >
                <div className='inline_text'>                
               <label >satisfied?</label>
                </div>  
            </div>
  
       
    );
}

export default ConditionNode2;