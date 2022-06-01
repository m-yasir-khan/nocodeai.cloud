import React, {useState, useEffect} from 'react';
import {
    singleDataChange
} from '../../../FunctionalData'

export default function InputText(props) {

    
    const [name, setName] = useState(props?.data?.label);
    const [inputType, setInputType] = useState(props?.data?.activeInputType);

    return (
        <div className='properties'>
            <span className='properties-header'>Properties</span>
            <div visibility={props?.visibility?.toString()} className='properties-components'>
                <span style={{ textAlign: "center", fontWeight: "bold" }}>{props?.data?.id}</span>
                <span>Name:</span>
                <input value={name} onChange={(e) => {setName(e.target.value); singleDataChange(e.target.value, props?.data?.id, "label", props?.elements, props?.setElements);}} type="text" />
                <span>Type:</span>
                <select value={inputType} onChange={(e) => {setInputType(e.target.value); singleDataChange(e.target.value, props?.data?.id, "activeInputType", props?.elements, props?.setElements);}}>
                    {props?.data?.inputTypes.map((it) => {
                        return <option key={it?.id} value={it?.type.toLowerCase()}>{it?.type}</option>
                    })}
                </select>
            </div>
        </div>
    )
}