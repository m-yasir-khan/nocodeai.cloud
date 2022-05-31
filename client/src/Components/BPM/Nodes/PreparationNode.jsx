import '../style.css';
import { Handle } from 'react-flow-renderer';
import React from "react";
import { Height, Translate } from '@mui/icons-material';
import { constants } from "../../../Utils/constants";


function PreparationNode(props) {
    let data = props.data;

    return (


        // <div className='bg_burst' style={{
        //     width: '100%', height: '100%', backgroundColor: '#fff'
        //     , textAlign: 'center', padding: '0px 0px'
        // }}>
        //     <div class="centered">
        //     <span></span>
        //     </div>
        // </div>
        <div className="centered">
            <p>My Preparation</p>
        </div>


    );
}

export default PreparationNode;