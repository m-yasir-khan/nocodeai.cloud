import '../style.css';
import { Handle } from 'react-flow-renderer';
import React from "react";
import { Height, Translate } from '@mui/icons-material';
import { constants } from "../../../Utils/constants";


function ConnectorNode(props) {
    let data = props.data;

    return (


        <div className="centered">
            <p>Connector</p>
        </div>


    );
}

export default ConnectorNode;