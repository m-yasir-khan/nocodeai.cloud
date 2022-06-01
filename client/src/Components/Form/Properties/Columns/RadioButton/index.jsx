import React,{useState} from 'react';
import {constants} from '../../../../../Utils/constants';
import { singleDataChange } from '../../../FunctionalData';

export default function RadioButton(props) {
    const [name, setName] = useState(props?.data?.label);

    return (
        <div className='properties'>
            <span className='properties-header'>Properties</span>
            <div visibility={props?.visibility?.toString()} className='properties-components'>
                <h3 style={{ textAlign: "center" }}>{props?.data?.id}</h3>
                <span>Question:</span>
                <textarea style={{ width: "100%", outline: "none" }} value={props?.checkboxQuestion} onChange={props?.handleCheckboxQuestion}></textarea>
                <span>Options:</span>
                <div style={{ display: "flex", marginBottom: "6px" }}>
                    <input id="dropdownOption" type="text" style={{ marginBottom: "0px" }} onChange={(e) => {setName(e.target.value); singleDataChange(e.target.value, props?.data?.id, "label", props?.elements, props?.setElements);}}/>
                    <button style={{ marginLeft: "2px" }} onClick={() => { props?.addDropdownOpt(document.getElementById("dropdownOption").value, props?.id); document.getElementById("dropdownOption").value = ""; }}>Add</button>
                </div>
                {props?.options?.map((item) => {
                    return (
                        <div key={item?.id} style={{ display: "flex" }}>
                            <label value={item?.value}>{item?.value}</label>
                            <constants.CgRemove onClick={() => { props?.remDropdownOpt(props?.id, item?.id) }} style={{ color: "red", marginLeft: "6px", cursor: "pointer" }} />
                        </div>
                    )
                })}
            </div>
        </div>
    )
}