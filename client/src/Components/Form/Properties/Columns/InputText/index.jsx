import React, { useState, useEffect } from 'react';
import {
    singleDataChange
} from '../../../FunctionalData'
import { ChromePicker } from 'react-color';

export default function InputText(props) {


    const [name, setName] = useState(props?.data?.label);
    const [inputType, setInputType] = useState(props?.data?.activeInputType);

    const [txtClrToggle, setTxtClrToggle] = useState(false);
    const [txtClr, setTxtClr] = useState(props?.data?.color);
    const [borderClr, setBorderClr] = useState(props?.data?.borderColors);


    const [bgClrToggle, setBgClrToggle] = useState(false);
    const [bgBorderColor, setBgBorderColor] = useState(false);

    const [bgClr, setBgClr] = useState(props?.data?.bgColor);
    return (
        <div className='properties'>
            <span className='properties-header'>Properties</span>
            <div visibility={props?.visibility?.toString()} className='properties-components'>
                <span style={{ textAlign: "center", fontWeight: "bold" }}>{props?.data?.id}</span>
                <span>Name:</span>
                <input value={name} onChange={(e) => { setName(e.target.value); singleDataChange(e.target.value, props?.data?.id, "label", props?.elements, props?.setElements); }} type="text" />
                <span>Type:</span>
                <select value={inputType} onChange={(e) => { setInputType(e.target.value); singleDataChange(e.target.value, props?.data?.id, "activeInputType", props?.elements, props?.setElements); }}>
                    {props?.data?.inputTypes.map((it) => {
                        return <option key={it?.id} value={it?.type.toLowerCase()}>{it?.type}</option>
                    })}
                </select>
            </div>
            <div className='properties-components'>

              
                <div style={{ display: "flex", alignItems: "center",  marginBottom: "2px" }}>
                    <span>Border Color:</span>
                    <div onClick={() => setBgBorderColor(!bgBorderColor)} style={{ cursor: "pointer", height: "25px", width: "25px", border: "1px solid #a1a1a1", backgroundColor: borderClr }}></div>
                </div>

                {bgBorderColor &&
                    <ChromePicker
                        disableAlpha
                        color={borderClr}
                        onChange={(color) => { setBorderClr(color.hex); singleDataChange(color.hex, props?.data?.id, "borderColors", props?.elements, props?.setElements) }}
                    />}
            </div>
        </div>
    )
}