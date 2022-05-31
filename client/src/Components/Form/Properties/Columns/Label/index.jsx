import React, { useState } from 'react';
// import ColorPicker from "material-ui-color-picker";
import { ChromePicker } from 'react-color';
import {
    singleDataChange
} from '../../../FunctionalData'

export default function Label(props) {

    const [label, setLabel] = useState(props?.data?.label);
    const [size, setSize] = useState(props?.data?.size);
    const [textTransform, setTextTransform] = useState(props?.data?.textTransform);
    const [fontWeight, setFontWeight] = useState(props?.data?.fontWeight);
    const [align, setAlign] = useState(props?.data?.align);    
    
    const [txtClrToggle, setTxtClrToggle] = useState(false);
    const [txtClr, setTxtClr] = useState(props?.data?.color);

    const [bgClrToggle, setBgClrToggle] = useState(false);
    const [bgClr, setBgClr] = useState(props?.data?.bgColor);

    return (
        <div className='properties'>
            <span className='properties-header'>Properties</span>
            <div visibility={props?.visibility?.toString()} className='properties-components'>
                <span style={{ textAlign: "center", fontWeight: "bold" }}>{props?.data?.id}</span>
                <span>Label:</span>
                <input value={label} onChange={(e) => {setLabel(e.target.value); singleDataChange(e.target.value, props?.data?.id, "label", props?.elements, props?.setElements);}} type="text" />
                <span>Align:</span>
                <select onChange={(e) => {setAlign(e.target.value); singleDataChange(e.target.value, props?.data?.id, "align", props?.elements, props?.setElements);}}>
                    <option value="left">Left</option>
                    <option value="center">Center</option>
                    <option value="right">Right</option>
                </select>
                <span>Size:</span>
                <select onChange={(e) => {setSize(e.target.value); singleDataChange(e.target.value, props?.data?.id, "size", props?.elements, props?.setElements);}}>
                    <option value="10px">Very Small</option>
                    <option value="14px">Small</option>
                    <option value="20px">Medium</option>
                    <option value="30px">Large</option>
                    <option value="48px">Very Large</option>
                </select>
                <div style={{ display: "flex", alignItems: "center", marginTop: "2px", marginBottom: "2px" }}>
                    <span>Text Color:</span>
                    <div onClick={() => setTxtClrToggle(!txtClrToggle)} style={{ cursor: "pointer", height: "25px", width: "25px", border: "1px solid #a1a1a1", backgroundColor: txtClr }}></div>
                </div>
                {txtClrToggle &&
                    <ChromePicker
                        disableAlpha
                        color={txtClr}
                        onChange={(color) => { setTxtClr(color.hex); singleDataChange(color.hex, props?.data?.id, "color", props?.elements, props?.setElements) }}
                    />}

                <div style={{ display: "flex", alignItems: "center", marginTop: "2px", marginBottom: "2px" }}>
                    <span>Background Color:</span>
                    <div onClick={() => setBgClrToggle(!bgClrToggle)} style={{ cursor: "pointer", height: "25px", width: "25px", border: "1px solid #a1a1a1", backgroundColor: bgClr }}></div>
                </div>
                {bgClrToggle &&
                    <ChromePicker
                        disableAlpha
                        color={bgClr}
                        onChange={(color) => { setBgClr(color.hex); singleDataChange(color.hex, props?.data?.id, "bgColor", props?.elements, props?.setElements) }}
                    />}

                <span>Text Transform:</span>
                <select onChange={(e) => {setTextTransform(e.target.value); singleDataChange(e.target.value, props?.data?.id, "textTransform", props?.elements, props?.setElements);}}>
                    <option value="none">None</option>
                    <option value="uppercase">Uppercase</option>
                    <option value="lowercase">LowerCase</option>
                </select>
                <span>Font Weight:</span>
                <select onChange={(e) => {setFontWeight(e.target.value); singleDataChange(e.target.value, props?.data?.id, "fontWeight", props?.elements, props?.setElements);}}>
                    <option value="normal">Normal</option>
                    <option value="600">Semi-bold</option>
                    <option value="bold">Bold</option>
                </select>
            </div>
        </div>
    )
}