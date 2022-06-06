import React, {useState} from 'react';
import {
    singleDataChange
} from '../../../FunctionalData'

export default function HTML(props) {

    const [code, setCode] = useState(props?.code);
    
    return (
        <div className='properties'>
            <span className='properties-header'>Properties</span>
            <div visibility={props?.visibility?.toString()} className='properties-components'>
                <h3 style={{ textAlign: "center" }}>HTML</h3>
                <span>Code:</span>
                <textarea style={{ width: "100%", outline: "none" }} value={code} onChange={(e) => {setCode(e.target.value); singleDataChange(e.target.value, props?.data?.id, "code", props?.elements, props?.setElements);}}></textarea>

            </div>
        </div>
    )
}