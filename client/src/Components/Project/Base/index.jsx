import "../style.css";
import { useState } from 'react';
import Templates from "../Templates";

function Base(props) {
    const [template,setTemplate] = useState();
    return (
        <div style={{width:'100%'}}>
            <Templates templateID={props?.templateID} />
        </div>
    );
}

export default Base;