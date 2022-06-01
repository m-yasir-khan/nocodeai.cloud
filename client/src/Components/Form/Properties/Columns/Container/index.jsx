import React,{useState} from 'react';
import { singleDataChange } from '../../../FunctionalData';
import { ChromePicker } from 'react-color';

export default function Container(props) {

    const [name, setName] = useState(props?.data?.label);
    const [txtClrToggle, setTxtClrToggle] = useState(false);
    const [txtClr, setTxtClr] = useState(props?.data?.color);

    const [bgClrToggle, setBgClrToggle] = useState(false);
    const [bgClr, setBgClr] = useState(props?.data?.bgColor);
    return (
        <div className='properties'>
            <span className='properties-header'>Properties</span>
            <div visibility={props?.visibility?.toString()} className='properties-components'>
                <h3 style={{ textAlign: "center" }}>{props?.data?.id}</h3>
                <span>Name:</span>
                <input value={props?.inputFieldLabel} onChange={(e) => {setName(e.target.value); singleDataChange(e.target.value, props?.data?.id, "label", props?.elements, props?.setElements);}} type="text" />
                
            </div>
            <div className='properties-components'>
                
            <div style={{ display: "flex", alignItems: "center", marginTop: "2px", marginBottom: "2px" }}>
                    <span>Background Color:</span>
                    <div onClick={() => setBgClrToggle(!bgClrToggle)} style={{ cursor: "pointer", height: "25px", width: "25px", border: "1px solid #a1a1a1", backgroundColor: bgClr }}></div>
                </div>
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
                {bgClrToggle &&
                    <ChromePicker
                        disableAlpha
                        color={bgClr}
                        onChange={(color) => { setBgClr(color.hex); singleDataChange(color.hex, props?.data?.id, "bgColor", props?.elements, props?.setElements) }}
                    />}
            </div>

        </div>
    )
}